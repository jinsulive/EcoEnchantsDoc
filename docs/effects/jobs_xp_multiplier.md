---
title: jobs_xp_multiplier
titleZh: jobs_xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# jobs_xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies xp gain from jobs

> **Requires:** Jobs Reborn

## Overview

| Property | Value |
|----------|-------|
| Type ID | `jobs_xp_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The experience multiplier |
| `jobs` | The list of jobs to multiply xp for. If removed, it will multiply all jobs. |

## Configuration Example

```yaml
- id: jobs_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    jobs: # The list of jobs to multiply xp for. If removed, it will multiply all jobs.
      - miner
      - fisherman
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
