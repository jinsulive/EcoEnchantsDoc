---
title: gain_hunger
titleZh: gain_hunger
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# gain_hunger <Badge type="info" text="libreforge" /> 

> Triggered when gaining hunger points

## Overview

| Property | Value |
|----------|-------|
| Type ID | `gain_hunger` |
| Module | libreforge |
| Category | Internal |
| Value | The hunger gained |

## Configuration Example

```yaml
triggers:
  - gain_hunger
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The hunger gained |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
