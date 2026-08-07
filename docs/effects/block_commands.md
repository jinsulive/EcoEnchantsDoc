---
title: block_commands
titleZh: block_commands
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# block_commands <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Prevents the execution of certain commands

## Overview

| Property | Value |
|----------|-------|
| Type ID | `block_commands` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `messages` | The messages to send if a player tries to run the commands |
| `commands` | The list of commands to block |

## Configuration Example

```yaml
- id: block_commands
  args:
    messages: # (Optional) the messages to send if a player tries to run the commands
      - "&cYou can't do this!"
    commands: # The list of commands to block
      - rtp
      - spawn
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
