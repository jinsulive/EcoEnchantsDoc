---
title: enchant_&lt;type&gt;
titleZh: enchant_&lt;type&gt;
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoenchants
outline: deep
---

# enchant_&lt;type&gt; <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoEnchants" />

> Triggered when enchanting an item with a certain type of enchantment.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `enchant_<type>` |
| Module | libreforge |
| Category | EcoPlugin (EcoEnchants) |
| Value | The xp cost |
| Requires | EcoEnchants |

## Description

This trigger fires when an item is enchanted with an enchantment of a certain **type** (from `types.yml`). Replace `<type>` with the enchantment type ID, for example:

- `enchant_normal` — when enchanting with a normal enchantment
- `enchant_special` — when enchanting with a special enchantment
- `enchant_curse` — when enchanting with a curse enchantment

## Configuration Example

```yaml
triggers:
  - enchant_normal
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The xp cost |

## Related Pages

- [All Triggers](./)
- [Guide: EcoEnchants Specific](../guide/ecoenchants-specific)
- [All Effects](../effects/)
