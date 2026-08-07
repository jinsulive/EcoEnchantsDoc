---
title: send_title
titleZh: send_title
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# send_title <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Send a title/subtitle to the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `send_title` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `title` | The title |
| `subtitle` | The subtitle |

## Configuration Example

```yaml
- id: send_title
  args:
    title: "&aCongratulations %player%!" # The title
    subtitle: "&3You won $1000" # The subtitle
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
