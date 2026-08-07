---
title: create_hologram
titleZh: create_hologram
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# create_hologram <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Creates a hologram temporarily (Requires a hologram plugin to be installed)

> **Requires:** 无（需安装 hologram 插件）

## Overview

| Property | Value |
|----------|-------|
| Type ID | `create_hologram` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `text` | The text in the hologram |
| `duration` | The duration (in ticks) |

## Configuration Example

```yaml
- id: create_hologram
  args:
      text: # The text in the hologram
          - "&FThis is a hologram!"
          - "&cThis is a second line."
      duration: 40 # The duration (in ticks)
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
