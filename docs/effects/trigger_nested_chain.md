---
title: trigger_nested_chain
titleZh: trigger_nested_chain
category: effects
subcategory: meta
tags:
  - libreforge
outline: deep
---

# trigger_nested_chain <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Runs a nested effect chain inline as part of the current trigger dispatch. Used internally by the chain system.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `trigger_nested_chain` |
| Module | libreforge |
| Category | Meta |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| — | — | — | — | — | This component takes no parameters. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTriggerNestedChain.kt`).

- **Source Description**: Runs a nested effect chain inline as part of the current trigger dispatch. Used internally by the chain system.

- **Categories**: `meta`

## Configuration Example

```yaml
- id: trigger_nested_chain
  args:
    # This component takes no parameters
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
