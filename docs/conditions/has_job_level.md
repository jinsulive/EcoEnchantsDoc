---
title: has_job_level
titleZh: has_job_level
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# has_job_level <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a player to have a certain job level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_job_level` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `job` | The job ID |
| `level` | The minimum level |

## Configuration Example

```yaml
- id: has_job_level
  args:
    job: miner # The job ID
    level: 30 # The minimum level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
