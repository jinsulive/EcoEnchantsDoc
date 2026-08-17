---
title: run_command
titleZh: run_command
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# run_command <Badge type="info" text="libreforge" /> 

> Fires when the player runs a command.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `run_command` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerRunCommand.kt`).

- **Source Description**: Fires when the player runs a command.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`, `TEXT`

## Configuration Example

```yaml
triggers:
  - run_command
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
