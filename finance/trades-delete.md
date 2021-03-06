# Delete Trades

The endpoint deletes trades for the instrument.

The deleted trades are not physically removed from the database until a corresponding [administrative action](#physical_deletion) is performed against the `atsd_trade` table.

## Request

| **Method** | **Path** |
|:---|:---|
| `POST` | `/api/v1/trades/delete` |

### Payload

| **Field Name** | **Description** |
|:---|:---|
| `symbol` | **[Required]** Symbol. |
| `class` | **[Required]** Class. |
| `exchange` | **[Required]** Exchange. |
| `startDate` | **[Required]** Start date in [ISO format](../shared/date-format.md#supported-formats).  |
| `endDate` | **[Required]** End date in [ISO format](../shared/date-format.md#supported-formats). `endDate` is inclusive. |
| `multipleInstruments` | Omit the `symbol` parameter and add `multipleInstruments` set to `true` to delete trades for **all** instruments within the class. |

```json
{
  "symbol": "<symbol>",
  "class": "<class-name>",
  "exchange": "<exchange>",
  "startDate": "<start date in ISO format>",
  "endDate": "<end date in ISO format>"
}
```

To delete trades for **all** instruments within the class.

```json
{
  "class": "<class-name>",
  "multipleInstruments": "true",
  "exchange": "<exchange>",
  "startDate": "<start date in ISO format>",
  "endDate":   "<end date in ISO format>"
}
```

## Logging

Deleted trades are logged in `deleted_trades.log` file using the format:

```txt
<delete timestamp>;<hour timestamp>;<Instrument specification>
trade_command
trade_command
...
```

```txt
2021-01-17T12:23:53.312Z;2020-12-12T11:00:00Z;Instrument(id=32, symbol=TSLA, class=IEXG, exchange=IEX)
3406495814,1607773266798,435,IEXG,TSLA,IEX,S,1,199,293,N
3406495817,1607773286767,32,IEXG,TSLA,IEX,B,1,202.8,282,N
```

## Example

### Request

#### curl

```bash
curl --insecure --request POST 'https://atsd_hostname:8443/api/v1/trades/delete' \
--header 'Authorization: Bearer <token>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "class":    "IEXG",
  "symbol":   "TSLA",
  "exchange": "IEX",
  "startDate": "2020-12-12T00:00:00.000+03:00",
  "endDate":   "2020-12-12T59:59:59.999+03:00"
}'
```

## Physical_deletion

Disable tombstone protection.

```bash
echo "alter 'atsd_trade', NAME => 'd', KEEP_DELETED_CELLS => false" | /opt/atsd/hbase/bin/hbase shell
```

Initiate major compaction.

```bash
echo "major_compact 'atsd_trade'" | /opt/atsd/hbase/bin/hbase shell
```

Wait until major compaction is completed. Watch for `Completed major compaction` message.

```bash
tail -n 100 -F /opt/atsd/hbase/logs/* | grep atsd_trade
```

Re-enable tombstone protection.

```bash
echo "alter 'atsd_trade', NAME => 'd', KEEP_DELETED_CELLS => true" | /opt/atsd/hbase/bin/hbase shell
```

<!-- markdownlint-disable MD101 -->
Verify that protection is enabled: `KEEP_DELETED_CELLS => 'TRUE'`
<!-- markdownlint-enable MD101 -->

```bash
echo "describe 'atsd_trade'" | /opt/atsd/hbase/bin/hbase shell
```