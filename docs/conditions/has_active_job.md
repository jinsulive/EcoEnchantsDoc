---
title: has_active_job
titleZh: has_active_job
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# has_active_job <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a player to have a job active

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_active_job` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `job` | The job ID |

## Configuration Example

```yaml
- id: has_active_job
  args:
    job: builder # The job ID
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
