---
title: register_vote
titleZh: register_vote
category: triggers
subcategory: external
tags:
  - libreforge
  - votifier
outline: deep
---

# register_vote <Badge type="info" text="libreforge" /> <Badge type="warning" text="Votifier" />

> Triggered when a player votes for the server

## Overview

| Property | Value |
|----------|-------|
| Type ID | `register_vote` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | Votifier |

## Configuration Example

```yaml
triggers:
  - register_vote
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
