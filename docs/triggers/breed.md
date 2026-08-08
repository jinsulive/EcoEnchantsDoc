---
title: breed
titleZh: breed
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# breed <Badge type="info" text="libreforge" /> 

> Triggered when breeding entities together

## Overview

| Property | Value |
|----------|-------|
| Type ID | `breed` |
| Module | libreforge |
| Category | Internal |
| Value | The experience received |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBreed.kt`).

- **Source Description**: Fires when two entities are bred.
- **Categories**: `entity`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The experience dropped from breeding.

## Configuration Example

```yaml
triggers:
  - breed
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The experience received |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
