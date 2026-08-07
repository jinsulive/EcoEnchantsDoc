---
title: entity_reach
titleZh: entity_reach
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# entity_reach <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Adds reach for interacting with entities

## Overview

| Property | Value |
|----------|-------|
| Type ID | `entity_reach` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `reach` | The extra entity reach |

## Configuration Example

```yaml
- id: entity_reach
  args:
    reach: 1 # The extra entity reach
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
