---
title: give_job_xp
titleZh: give_job_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_job_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives experience points for a certain job

> **Requires:** EcoJobs

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_job_xp` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of xp to give |
| `job` | The job to give the xp for |

## Configuration Example

```yaml
- id: give_job_xp
  args:
    amount: 100 # The amount of xp to give
    job: miner # The job to give the xp for
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
