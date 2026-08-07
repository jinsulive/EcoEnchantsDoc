---
title: buy_item
titleZh: buy_item
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoshop
outline: deep
---

# buy_item <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoShop" />

> Triggered when buying an item in a shop

## Overview

| Property | Value |
|----------|-------|
| Type ID | `buy_item` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The price |
| Requires | EcoShop |

## Configuration Example

```yaml
triggers:
  - buy_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The price |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
