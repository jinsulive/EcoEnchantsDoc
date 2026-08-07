---
title: replace_near
titleZh: replace_near
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# replace_near <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Replaces nearby blocks with other blocks

## Overview

| Property | Value |
|----------|-------|
| Type ID | `replace_near` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `radius` | The horizontal radius to replace |
| `radius_y` | The vertical radius to replace |
| `replace_to` | The block to replace to |
| `duration` | (Optional) The duration to replace for before returning back to the original state |
| `whitelist` | (Optional) A list of blocks to replace |
| `blacklist` | (Optional) A list of blocks to not replace |
| `exposed_only` | (Optional) If only blocks with air above them should be replaced |
| `source_only` | (Optional) If only source blocks should be replaced (for liquids) |
| `disable_on_sneak` | If the effect should not activate while sneaking |

## Configuration Example

```yaml
- id: replace_near
  args:
    radius: 5 # The horizontal radius to replace
    radius_y: 5 # The vertical radius to replace
    replace_to: obsidian # The block to replace to
    duration: 40 # (Optional) The duration to replace for before returning back to the original state
    whitelist: # (Optional) A list of blocks to replace
      - lava
    exposed_only: true # (Optional) If only blocks with air above them should be replaced
    source_only: true # (Optional) If only source blocks should be replaced (for liquids)
    disable_on_sneak: true # If the effect should not activate while sneaking
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
