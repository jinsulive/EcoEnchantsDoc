---
title: cancel_drops
titleZh: cancel_drops
category: effects
subcategory: inventory
tags:
  - libreforge
outline: deep
---

# cancel_drops <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Cancels item drops from the triggering event. If on_drops is specified, only those items are removed.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `cancel_drops` |
| Module | libreforge |
| Category | Inventory, World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `on_drops` | Item List | — | — | — | If specified, only drops matching these item types are cancelled. If omitted, all drops are cancelled. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCancelDrops.kt`).

- **Source Description**: Cancels item drops from the triggering event. If on_drops is specified, only those items are removed.

- **Categories**: `inventory, world`

## Configuration Example

```yaml
- id: cancel_drops
  args:
    on_drops: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
