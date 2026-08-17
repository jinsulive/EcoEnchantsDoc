---
title: collection_tier_at_least
titleZh: collection_tier_at_least
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# collection_tier_at_least <Badge type="info" text="libreforge" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Requires the player to have reached at least a certain tier in a collection (EcoCollections)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `collection_tier_at_least` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Configuration Example

```yaml
- id: collection_tier_at_least
  args: {}
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
