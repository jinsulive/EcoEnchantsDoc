---
title: name_entity
titleZh: name_entity
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# name_entity <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Set the display name of an entity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `name_entity` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `name` | String | ✅ | — | — | The name to set \| Source: The custom name to display above the entity. Supports placeholders. Example: `%player_name%'s Wolf` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectNameEntity.kt`).

- **Source Description**: Sets the custom name of the victim entity and makes it always visible.
- **Categories**: `entity`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: name_entity
  args:
    name: "&cTagged!" # The name to set
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
