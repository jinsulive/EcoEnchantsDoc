---
title: has_edprison_economy
titleZh: has_edprison_economy
category: conditions
subcategory: edprison
tags:
  - libreforge
outline: deep
---

# has_edprison_economy <Badge type="info" text="libreforge" /> <Badge type="info" text="Condition" />

> Passes when the player has at least the specified amount of a given EDPrisonCore currency.

> **Requires:** EdPrison

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_edprison_economy` |
| Module | libreforge |
| Category | Economy, Player |
| Effect Type | Condition |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The EDPrisonCore economy/currency type to check. |
| `amount` | Expression | ✅ | — | — | The minimum amount of the currency the player must have. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/edprisoncore/impl/ConditionHasEdPrisonCurrency.kt`).

- **Source Description**: Passes when the player has at least the specified amount of a given EDPrisonCore currency.

- **Categories**: `economy, player`

## Configuration Example

```yaml
- id: has_edprison_economy
  args:
    type: <value>
    amount: <value>
```

## Related Pages

- [All Conditions](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
