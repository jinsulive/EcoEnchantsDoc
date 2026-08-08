---
title: victim_to_owner
titleZh: victim_to_owner
category: mutators
subcategory: victim_player
tags:
  - libreforge
outline: deep
---

# victim_to_owner <Badge type="info" text="libreforge" />

> If the victim is a tamed animal, set the victim to be the owner of the animal

## Overview

| Property | Value |
|----------|-------|
| Type ID | `victim_to_owner` |
| Module | libreforge |
| Category | Victim/Player |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorVictimToOwner.kt`).

- **Source Description**: Sets the victim to the tamed entity's owner.
- **Categories**: `victim`

## Configuration Example

```yaml
- id: victim_to_owner
```

## Related Pages

- [All Mutators](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
