---
title: compost_item
titleZh: compost_item
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# compost_item <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />

> Triggered when a player uses a composter

## Overview

| Property | Value |
|----------|-------|
| Type ID | `compost_item` |
| Module | libreforge |
| Category | Internal |
| Value | 1 (alt-value: 1 if the composter level increases) |
| Requires | Paper |

## Configuration Example

```yaml
triggers:
  - compost_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 (alt-value: 1 if the composter level increases) |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
