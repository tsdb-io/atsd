# Grouping

## Overview

Incoming commands are assigned to in-memory [windows](window.md) based on a grouping key which consists of the following field values:

* Data Type: `series`, `message`, or `property`
* Metric Name
* Entity Name
* Command Tags

The database assigns commands with equal grouping keys to the same window.

**Data Type** and **Metric Name** are mandatory parts of the key whereas **Entity Name** and **Command Tags**  are optional and can be configured for each rule separately.

## Tag Grouping

For `series` commands, default grouping is set by the entity and **all** tags. Modify the list of grouping tags on the **Overview** tab.

![](./images/group-by-defined-tags.png)

For `message` and `property` commands, default grouping by tags is disabled to avoid creating excessive windows in application memory.

## Entity Grouping

Disable entity grouping to apply an aggregate function to data coming from multiple entities which matches defined filters, for example, to calculate an average for all matching entities.

## Examples

Incoming data is represented by the three `series` commands shown below. These examples illustrate the effect of group settings on window formations.

| Data Type | Metric | Entity | Tags |
|---|---|---|:---|
| `series` | `m1` | `e1` | `t1=v1`, `t2=v2` |
| `series` | `m1` | `e1` | `t1=v1`, `t2=v3` |
| `series` | `m1` | `e3` | `t1=v4`, `t2=v3` |

```ls
series e:e1 t:t1=v1 t:t2=v2 m:m1=80
series e:e1 t:t1=v1 t:t2=v3 m:m1=10
series e:e3 t:t1=v4 t:t2=v3 m:m1=50
```

### Group By Entity and All Tags

* Group by `series` type, `m1` metric.
* Group by entity.
* Group by all tags (`t1`, `t2`).

![](./images/group-by-all-form.png)

| Data Type | Metric | Entity | Tags | Grouping Key |
|---|---|---|:---|:---|
| `series` | `m1` | `e1` | `t1=v1`, `t2=v2` | `series-m1-e1-t1=v1-t2=v2` |
| `series` | `m1` | `e1` | `t1=v1`, `t2=v3` | `series-m1-e1-t1=v1-t2=v3` |
| `series` | `m1` | `e3` | `t1=v4`, `t2=v3` | `series-m1-e3-t1=v4-t2=v3` |

![](./images/group-by-all.png)

### Group By Entity

* Group by `series` type, `m1` metric.
* Group by entity.
* Do not group by any tags.

![](./images/group-by-no-tags-form.png)

| Data Type | Metric | Entity | Tags | Grouping Key |
|---|---|---|:---|:---|
| `series` | `m1` | `e1` | `t1=v1`, `t2=v2` | `series-m1-e1` |
| `series` | `m1` | `e1` | `t1=v1`, `t2=v3` | `series-m1-e1` |
| `series` | `m1` | `e3` | `t1=v4`, `t2=v3` | `series-m1-e3` |

![](./images/group-by-no-tags.png)

### Group By Entity and Tag `t1`

* Group by `series` type, `m1` metric.
* Group by entity.
* Group by one of the tags (`t1`).

![](./images/group-by-entity-tag-t1-form.png)

| Data Type | Metric | Entity | Tags | Grouping Key |
|---|---|---|:---|:---|
| `series` | `m1` | `e1` | `t1=v1`, `t2=v2` | `series-m1-e1-t1=v1` |
| `series` | `m1` | `e1` | `t1=v1`, `t2=v3` | `series-m1-e1-t1=v1` |
| `series` | `m1` | `e3` | `t1=v4`, `t2=v3` | `series-m1-e3-t1=v4` |

![](./images/group-by-entity-tag-t1.png)

### Group By Tag `t1`

* Group by `series` type, `m1` metric.
* Do not group by entity.
* Group by one of the tags (`t1`).

![](./images/group-by-tag-t1-form.png)

| Data Type | Metric | Entity | Tags | Grouping Key |
|---|---|---|:---|:---|
| `series` | `m1` | `e1` | `t1=v1`, `t2=v2` | `series-m1-t1=v1` |
| `series` | `m1` | `e1` | `t1=v1`, `t2=v3` | `series-m1-t1=v1` |
| `series` | `m1` | `e3` | `t1=v4`, `t2=v3` | `series-m1-t1=v4` |

![](./images/group-by-tag-t1.png)

### Group By Tag `t2`

* Group by `series` type, `m1` metric.
* Do not group by entity.
* Group by one of the tags (`t2`).

![](./images/group-by-tag-t2-form.png)

| Data Type | Metric | Entity | Tags | Grouping Key |
|---|---|---|:---|:---|
| `series` | `m1` | `e1` | `t1=v1`, `t2=v2` | `series-m1-t2=v2` |
| `series` | `m1` | `e1` | `t1=v1`, `t2=v3` | `series-m1-t2=v3` |
| `series` | `m1` | `e3` | `t1=v4`, `t2=v3` | `series-m1-t2=v3` |

![](./images/group-by-tag-t2.png)
