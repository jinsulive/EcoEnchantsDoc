---
title: run_command
titleZh: run_command
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# run_command <Badge type="info" text="libreforge" /> 

> Triggered when running a command

## Overview

| Property | Value |
|----------|-------|
| Type ID | `run_command` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - run_command
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
