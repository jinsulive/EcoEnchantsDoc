---
title: kick
titleZh: kick
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# kick <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Kicks the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `kick` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `message` | The message to send |

## Configuration Example

```yaml
- id: kick
  args:
    message: "&cYou have been kicked!" # The message to send
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
