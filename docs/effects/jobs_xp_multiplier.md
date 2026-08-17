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

> Multiplies XP earned from Jobs for one or all jobs while the holder is active.

> **Requires:** Jobs Reborn

## Overview

| Property | Value |
|----------|-------|
| Type ID | `jobs_xp_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The XP multiplier. Supports expressions. |
| `jobs` | String_list | — | — | — | List of job names to apply the multiplier to. If omitted, applies to all jobs. |

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
