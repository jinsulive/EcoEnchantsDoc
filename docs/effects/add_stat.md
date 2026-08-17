---
title: add_stat
titleZh: add_stat
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_stat <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Permanently adds a flat bonus to an AuraSkills stat while the holder is active.

> **Requires:** AuraSkills

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_stat` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `stat` | String | ✅ | — | — | The AuraSkills stat ID to add to, e.g. strength. |
| `amount` | Expression | ✅ | — | — | The amount to add to the stat. Supports expressions. |

## Configuration Example

```yaml
- id: add_stat
  args:
    stat: strength # The name of the stat
    amount: 10 # The amount to add (or subtract, allows negative values)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
