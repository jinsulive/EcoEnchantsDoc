---
title: level_up_job
titleZh: level_up_job
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecojobs
outline: deep
---

# level_up_job <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoJobs" />

> Triggered when levelling up a job

## Overview

| Property | Value |
|----------|-------|
| Type ID | `level_up_job` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The new level |
| Requires | EcoJobs |

## Configuration Example

```yaml
triggers:
  - level_up_job
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The new level |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
