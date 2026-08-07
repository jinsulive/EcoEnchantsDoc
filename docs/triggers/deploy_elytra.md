---
title: deploy_elytra
titleZh: deploy_elytra
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# deploy_elytra <Badge type="info" text="libreforge" /> 

> Triggered when the player starts elytra gliding

## Overview

| Property | Value |
|----------|-------|
| Type ID | `deploy_elytra` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - deploy_elytra
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
