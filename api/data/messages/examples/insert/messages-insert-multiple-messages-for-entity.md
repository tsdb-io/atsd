# Multiple Message for Entity Insert

## Description

One insert request can combine messages for different entities, types, sources, tags, messages, and times. In the example below, both messages are persisted despite all fields being equal because entity names are different.

## Request

### URI

```elm
POST /api/v1/messages/insert
```

### Payload

```json
[{
    "entity": "nurswgvml006",
    "type": "application",
    "message": "ssh: error: connect_to port 8881: failed.",
    "severity": "MAJOR",
    "source": "atsd"
},{
    "entity": "nurswgvml007",
    "type": "application",
    "message": "ssh: error: connect_to port 8881: failed.",
    "severity": "MAJOR",
    "source": "atsd"
}]
```