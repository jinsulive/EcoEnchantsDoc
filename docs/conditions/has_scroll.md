---
title: has_scroll
titleZh: has_scroll
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# has_scroll <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires a player to have a certain scroll active

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_scroll` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `scroll` | The scroll |

## Configuration Example

```yaml
- id: has_scroll
  args:
    scroll: lava_scroll # The scroll
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
