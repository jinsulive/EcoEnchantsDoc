---
title: broadcast
titleZh: broadcast
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# broadcast <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Send a message to everyone online

## Overview

| Property | Value |
|----------|-------|
| Type ID | `broadcast` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `message` | The message to send |

## Configuration Example

```yaml
- id: broadcast
  args:
    message: "%player%&f has just won &a$1000&f!" # The message to send
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
