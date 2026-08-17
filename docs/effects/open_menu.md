---
title: open_menu
titleZh: open_menu
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
deprecated: true
---

# open_menu <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Opens an EcoMenus menu.

> **Requires:** EcoMenus

## Overview

| Property | Value |
|----------|-------|
| Type ID | `open_menu` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `menu` | The menu to open, configured in /menus/ folder |

## Configuration Example

```yaml
- id: open_menu
  args:
    menu: menu_id # The menu to open, configured in /menus/ folder
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
