---
title: player_as_victim
titleZh: player_as_victim
category: mutators
subcategory: victim_player
tags:
  - libreforge
outline: deep
---

# player_as_victim <Badge type="info" text="libreforge" />

> Marks the player as the victim, useful to have negative effects

## Overview

| Property | Value |
|----------|-------|
| Type ID | `player_as_victim` |
| Module | libreforge |
| Category | Victim/Player |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorPlayerAsVictim.kt`).

- **Source Description**: Sets the victim to be the triggering player.
- **Categories**: `player`, `victim`

## Configuration Example

```yaml
- id: player_as_victim
```

## Related Pages

- [All Mutators](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
