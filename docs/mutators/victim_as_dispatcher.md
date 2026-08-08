---
title: victim_as_dispatcher
titleZh: victim_as_dispatcher
category: mutators
subcategory: victim_player
tags:
  - libreforge
outline: deep
---

# victim_as_dispatcher <Badge type="info" text="libreforge" />

> Set the player / entity / etc that triggered the effect to be the victim.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `victim_as_dispatcher` |
| Module | libreforge |
| Category | Victim/Player |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorVictimAsDispatcher.kt`).

- **Source Description**: Sets the dispatcher to the current victim.
- **Categories**: `victim`, `meta`

## Configuration Example

```yaml
- id: victim_as_dispatcher
```

## Related Pages

- [All Mutators](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
