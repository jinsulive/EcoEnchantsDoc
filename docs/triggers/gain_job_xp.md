---
title: gain_job_xp
titleZh: gain_job_xp
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecojobs
outline: deep
---

# gain_job_xp <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoJobs" />

> Triggered when gaining job experience points

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gain_job_xp` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The experience gained |
| Requires | EcoJobs |

## Configuration Example

```yaml
triggers:
  - gain_job_xp
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The experience gained |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
