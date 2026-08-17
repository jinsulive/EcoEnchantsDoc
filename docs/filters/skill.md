---
title: skill
titleZh: skill
category: filters
subcategory: mcmmo
tags:
  - libreforge
outline: deep
---

# skill <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the McMMO skill involved in the event matches one of the given skill names.

> **Requires:** mcMMO

## Overview

| Property | Value |
|----------|-------|
| Type ID | `skill` |
| Module | libreforge |
| Category | Player |
| Value Type | `STRING_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  skill: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_skill`):

```yaml
filters:
  not_skill: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/mcmmo/impl/FilterMcMMOSkill.kt`).

- **Source Description**: Matches when the McMMO skill involved in the event matches one of the given skill names.

- **Categories**: `player`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
