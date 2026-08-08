---
title: dispatcher_as_player
titleZh: dispatcher_as_player
category: mutators
subcategory: victim_player
tags:
  - libreforge
outline: deep
---

# dispatcher_as_player <Badge type="info" text="libreforge" />

> Set the player to be whoever dispatched (triggered) the effect.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `dispatcher_as_player` |
| Module | libreforge |
| Category | Victim/Player |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorDispatcherAsPlayer.kt`).

- **Source Description**: Sets the player to the current dispatcher.
- **Categories**: `player`, `meta`

## Configuration Example

```yaml
- id: dispatcher_as_player
```

## Related Pages

- [All Mutators](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
