---
title: trigger_custom
titleZh: trigger_custom
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# trigger_custom <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Call a custom trigger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `trigger_custom` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `trigger` | String | ✅ | — | — | The custom trigger ID: use in other effects like custom_id (i.e. custom_example here) \| Source: The ID of the custom trigger to dispatch. |
| `value` | Expression(数学表达式) | — | `0` | — | The value to pass to the trigger, e.g. for EcoPets levelling. \| Source: An optional value to pass to the dispatched trigger. Supports expressions. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTriggerCustom.kt`).

- **Source Description**: Dispatches a named custom trigger, which can activate other effect chains listening for that trigger ID.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: trigger_custom
  args:
    trigger: example # The custom trigger ID: use in other effects like custom_id (i.e. custom_example here)
    value: 1.5 # The value to pass to the trigger, e.g. for EcoPets levelling.
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
