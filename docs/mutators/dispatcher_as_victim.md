---
title: dispatcher_as_victim
titleZh: dispatcher_as_victim
category: mutators
subcategory: victim_player
tags:
  - libreforge
outline: deep
---

# dispatcher_as_victim <Badge type="info" text="libreforge" />

> Set the victim to be whoever dispatched (triggered) the effect.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `dispatcher_as_victim` |
| Module | libreforge |
| Category | Victim/Player |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorDispatcherAsVictim.kt`).

- **Source Description**: Sets the victim to the current dispatcher.
- **Categories**: `victim`, `meta`

## Configuration Example

```yaml
- id: dispatcher_as_victim
```

## Related Pages

- [All Mutators](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
