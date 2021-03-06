# Export - Import by Year

## Overview

Build a report illustrating the differences between exports and imports each year.

## Data Source

* Tables: `bi.ex_net1.m` and `bi.im_net1.m`

## Steps

* Drag-and-drop both tables to Canvas area
* Select `Inner Join`, specify `Time` and `Entity` as equal fields.

![](../images/join_inner.png)

* Click **Sheet 1**
* Click **OK** to acknowledge the warning about limitations
* Drag-and-drop `Datetime` onto the column field
* Rename both `Value` into **Export Value** and **Import Value**: right-click **Value** and choose **Rename**
* Copy `[Export Value]-[Import Value]`, double-click the rows field, paste the text, click **Enter**
> In case of error remove `]` and select value from tooltip
* Right-click **calculation > Dimension**
* Select `Line` in the drop-down list on the Marks Card
* Optionally add [drop lines](comparison_of_two_metrics_at_one_bar_graph.md#drop-lines)

## Results

![](../images/export_import.png)
