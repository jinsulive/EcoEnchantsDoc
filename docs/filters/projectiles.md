---
title: projectiles
titleZh: projectiles
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# projectiles <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the projectile type matches one of the given entity types.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `projectiles` |
| Module | libreforge |
| Category | Combat |
| Value Type | `entity[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  projectiles: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_projectiles`):

```yaml
filters:
  not_projectiles: <value>
```

> 💡 See the [Enum Quick Reference](../reference/enums#entitytype) for the full `EntityType` value list.

> **Value**: Projectile type list → `EntityType` enum (projectile subclasses).

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterProjectiles.kt`).

- **Source Description**: Matches when the projectile type matches one of the given entity types.

- **Categories**: `combat`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
