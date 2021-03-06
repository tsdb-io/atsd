---
sidebarDepth: 0
---

# Getting Started: SQL

## Contents

1. [Introduction](./getting-started.md)
1. [Inserting Data](./getting-started-insert.md)
1. [Portals](./getting-started-portal.md)
1. [Exporting Data](./getting-started-export.md)
1. SQL
1. [Alerting](./getting-started-alert.md)

## SQL Console

ATSD supports [SQL](../sql/README.md) syntax for flexible querying and analysis of time series data. One of the options available for executing ad hoc SQL queries is the built-in [SQL Console](../sql/sql-console.md).

Open **SQL > SQL Console** from the main menu:

![](./resources/getting-started-5_1.png)

Retrieve the five most recent values for the `temperature` series.

```sql
SELECT entity, metric, datetime, value
  FROM "temperature"
WHERE entity = 'br-1905'
  AND datetime >= '2019-03-01T00:00:00Z'
ORDER BY datetime DESC
  LIMIT 5
```

![](./resources/sql-console-1.png)

Export query results into CSV, Excel, and JSON by clicking **Export**.

Modify the query to include [metadata](../sql/README.md#columns) fields, tags, and to [format](../sql/README.md#date_format) the date:

```sql
SELECT entity.label AS "asset", entity.tags.model AS "model",
  metric, metric.units AS "units",
  date_format(time, 'yyyy-MM-dd HH:mm:ss', 'US/Pacific') AS "date", value
  FROM "temperature"
WHERE entity = 'br-1905'
  AND datetime >= '2019-03-01T00:00:00Z'
ORDER BY datetime DESC
  LIMIT 5
```

```txt
| asset    | model   | metric       | units    | date                 | value |
|----------|---------|--------------|----------|----------------------|-------|
| BR-1905  | 4520-1  | temperature  | Celsius  | 2019-03-04 02:48:53  | 25.0  |
| BR-1905  | 4520-1  | temperature  | Celsius  | 2019-03-04 02:48:47  | 32.0  |
| BR-1905  | 4520-1  | temperature  | Celsius  | 2019-03-04 02:48:15  | 20.0  |
| BR-1905  | 4520-1  | temperature  | Celsius  | 2019-03-04 02:48:08  | 31.0  |
| BR-1905  | 4520-1  | temperature  | Celsius  | 2019-03-04 02:48:02  | 31.0  |
```

[Regularize](../sql/README.md#regularization) a series with a step-like interpolation function:

```sql
SELECT entity.label AS "asset", entity.tags.model AS "model",
  metric, metric.units AS "units",
  date_format(time, 'yyyy-MM-dd HH:mm:ss', 'US/Pacific') AS "date", value
  FROM "temperature"
WHERE entity = 'br-1905'
  AND datetime >= '2019-03-01T00:00:00Z'
WITH INTERPOLATE(15 SECOND, PREVIOUS)
ORDER BY datetime DESC
  LIMIT 5
```

```txt
| asset    | model   | metric       | units    | date                 | value |
|----------|---------|--------------|----------|----------------------|-------|
| BR-1905  | 4520-1  | temperature  | Celsius  | 2019-03-04 02:49:00  | 25.0  |
| BR-1905  | 4520-1  | temperature  | Celsius  | 2019-03-04 02:48:45  | 20.0  |
| BR-1905  | 4520-1  | temperature  | Celsius  | 2019-03-04 02:48:30  | 20.0  |
| BR-1905  | 4520-1  | temperature  | Celsius  | 2019-03-04 02:48:15  | 20.0  |
| BR-1905  | 4520-1  | temperature  | Celsius  | 2019-03-04 02:48:00  | 30.0  |
```

Review the [SQL syntax](../sql/README.md) and experiment by executing custom queries based on the provided [examples](../sql/examples/README.md).

Continue to [Part 6: Alerting](getting-started-alert.md).