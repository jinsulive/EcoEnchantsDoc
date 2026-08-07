---
title: send_message
titleZh: send_message
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# send_message <Badge type="info" text="libreforge" /> 

> Triggered when sending a message

## Overview

| Property | Value |
|----------|-------|
| Type ID | `send_message` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - send_message
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
