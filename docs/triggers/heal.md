---
title: heal
titleZh: heal
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# heal <Badge type="info" text="libreforge" /> 

> Triggered when regaining health

## Overview

| Property | Value |
|----------|-------|
| Type ID | `heal` |
| Module | libreforge |
| Category | Internal |
| Value | The health regained |

## Configuration Example

```yaml
triggers:
  - heal
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The health regained |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
