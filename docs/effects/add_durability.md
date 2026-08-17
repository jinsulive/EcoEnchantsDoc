---
title: add_durability
titleZh: add_durability
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# add_durability <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Increases the maximum durability of the triggering item.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_durability` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `durability` | Expression | ✅ | — | — | The amount of maximum durability to add. Supports expressions. Example: `50 + %level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddDurability.kt`).

- **Source Description**: Increases the maximum durability of the triggering item.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: add_durability
  args:
    durability: 100 # The durability to add (or subtract)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
