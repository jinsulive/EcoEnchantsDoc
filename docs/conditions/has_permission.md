---
title: has_permission
titleZh: has_permission
category: conditions
subcategory: permissions
tags:
  - libreforge
outline: deep
---

# has_permission <Badge type="info" text="libreforge" />

> Requires a player to have a certain permission

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_permission` |
| Module | libreforge |
| Category | Permissions & Ranks |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `permission` | String | ✅ | — | — | The permission node to check. Example: `myplugin.vip.access` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasPermission.kt`).

- **Source Description**: Passes when the player has the specified permission node.
- **Categories**: `permission`

## Configuration Example

```yaml
- id: has_permission
  args:
    permission: "ecomc.rank.mvp" # The required permission
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
