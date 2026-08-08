---
title: cancel_event
titleZh: cancel_event
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# cancel_event <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Cancel the event that fired the trigger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `cancel_event` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCancelEvent.kt`).

- **Source Description**: Cancels the triggering event.
- **Categories**: `meta`
- **Requires Trigger Data**: `EVENT`

## Configuration Example

```yaml
- id: cancel_event
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
