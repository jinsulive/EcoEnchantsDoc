---
title: drop_pickup_item
titleZh: drop_pickup_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_pickup_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Drops a custom item at the trigger location that executes a set of effects when a player picks it up.

> **Requires:** Paper

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drop_pickup_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `item` | Item | ✅ | — | — | The item to drop at the trigger location. |
| `effects` | Any | ✅ | — | — | The effects to run when a player picks up the dropped item. |
| `glow-color` | String | — | — | — | The ChatColor name to make the dropped item glow with (e.g. RED, GOLD). |
| `run-type` | String | — | — | — | The chain executor type to use for the pickup effects. |

## Configuration Example

```yaml
- id: drop_pickup_item
  args:
      item: diamond # The item texture, cannot actually be picked up
      glow-color: aqua # (Optional) The glow color, check here: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html
      run-type: normal # (Optional) The run type, see 'configuring an effect'
      effects:
          - id: send_message
            args:
                message: "&a+ &b20 Crystals ❖"
          - id: give_price
            args:
                type: crystals
                value: 20
                display: ""
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
