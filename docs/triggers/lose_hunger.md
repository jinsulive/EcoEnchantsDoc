---
title: lose_hunger
titleZh: lose_hunger
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# lose_hunger <Badge type="info" text="libreforge" /> 

> Fires when the player's food level decreases.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `lose_hunger` |
| Module | libreforge |
| Category | Internal |
| Value | The hunger lost |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerLoseHunger.kt`).

- **Source Description**: Fires when the player's food level decreases.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `VALUE`
- **Value**: The amount of food level lost.

## Configuration Example

```yaml
triggers:
  - lose_hunger
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The hunger lost |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
