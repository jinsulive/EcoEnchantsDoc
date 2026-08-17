---
title: shuffle_hotbar
titleZh: shuffle_hotbar
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# shuffle_hotbar <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Randomly shuffles the items in the victim's hotbar.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shuffle_hotbar` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| — | — | — | — | — | This component takes no parameters. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectShuffleHotbar.kt`).

- **Source Description**: Randomly shuffles the items in the victim's hotbar.
- **Categories**: `inventory`, `player`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: shuffle_hotbar
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
