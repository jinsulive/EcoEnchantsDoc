---
title: left_click_npc
titleZh: left_click_npc
category: triggers
subcategory: external
tags:
  - libreforge
  - citizens-/-fancynpcs
outline: deep
---

# left_click_npc <Badge type="info" text="libreforge" /> <Badge type="warning" text="Citizens / FancyNpcs" />
> **Requires:** Citizens

> Fires when the player left-clicks a Citizens NPC.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `left_click_npc` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | Citizens / FancyNpcs |

## Configuration Example

```yaml
triggers:
  - left_click_npc
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
