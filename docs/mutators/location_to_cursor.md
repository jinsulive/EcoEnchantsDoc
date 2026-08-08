---
title: location_to_cursor
titleZh: location_to_cursor
category: mutators
subcategory: location
tags:
  - libreforge
outline: deep
---

# location_to_cursor <Badge type="info" text="libreforge" />

> Move the location to where you or the victim are looking

## Overview

| Property | Value |
|----------|-------|
| Type ID | `location_to_cursor` |
| Module | libreforge |
| Category | Location |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `target` | String | ✅ | — | `block`, `entity` | The target location (either block or entity) \| Source: The entity or block to target with the raytrace. |
| `start` | String | ✅ | — | `player`, `victim` | Where to raytrace from (either player or victim) \| Source: The entity to raytrace from. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorLocationToCursor.kt`).

- **Source Description**: Sets the location to the position of the entity or block at the player's or victim's cursor.
- **Categories**: `location`

## Configuration Example

```yaml
- id: location_to_cursor
  args:
    target: block # The target location (either block or entity)
    start: player # Where to raytrace from (either player or victim)
```

## Related Pages

- [All Mutators](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
