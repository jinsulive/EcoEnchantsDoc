---
title: kill
titleZh: kill
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# kill <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Instantly kills the victim entity.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `kill` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| — | — | — | — | — | This component takes no parameters. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKill.kt`).

- **Source Description**: Instantly kills the victim entity.
- **Categories**: `combat`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: kill
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
