---
title: deploy_elytra
titleZh: deploy_elytra
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# deploy_elytra <Badge type="info" text="libreforge" /> 

> Triggered when the player starts elytra gliding

## Overview

| Property | Value |
|----------|-------|
| Type ID | `deploy_elytra` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerDeployElytra.kt`).

- **Source Description**: Fires when an entity toggles elytra gliding.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`

## Configuration Example

```yaml
triggers:
  - deploy_elytra
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
