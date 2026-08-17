---
title: leave_job
titleZh: leave_job
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecojobs
outline: deep
deprecated: true
---

# leave_job <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoJobs" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Triggered when leaving a job

## Overview

| Property | Value |
|----------|-------|
| Type ID | `leave_job` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The job level |
| Requires | EcoJobs |

## Configuration Example

```yaml
triggers:
  - leave_job
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The job level |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
