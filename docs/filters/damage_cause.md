---
title: damage_cause
titleZh: damage_cause
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# damage_cause <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the damage cause matches one of the given causes.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_cause` |
| Module | libreforge |
| Category | Combat |
| Value Type | `string[]` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  damage_cause: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_damage_cause`):

```yaml
filters:
  not_damage_cause: <value>
```

::: warning ⚠️ Target Missing Behavior

This filter passes automatically when the trigger has no damage cause data (e.g. when the triggering event is not a damage event). Use it only on damage-related triggers to avoid false passes.

:::

> 💡 See the [Enum Quick Reference](../reference/enums/damage_cause) for the full `DamageCause` value list.

> **Value**: Damage cause list → `DamageCause` enum, e.g. `[magic, fire]`.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterDamageCause.kt`).

- **Source Description**: Matches when the damage cause matches one of the given causes.

- **Categories**: `combat`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
