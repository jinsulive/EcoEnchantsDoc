---
title: jobs_money_multiplier
titleZh: jobs_money_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# jobs_money_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies money gain from jobs

> **Requires:** Jobs Reborn

## Overview

| Property | Value |
|----------|-------|
| Type ID | `jobs_money_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The money multiplier |
| `jobs` | The list of jobs to multiply money for. If removed, it will multiply all jobs. |

## Configuration Example

```yaml
- id: jobs_money_multiplier
  args:
    multiplier: 1.5 # The money multiplier
    jobs: # The list of jobs to multiply money for. If removed, it will multiply all jobs.
      - miner
      - fisherman
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
