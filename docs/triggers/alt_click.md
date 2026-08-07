---
title: alt_click
titleZh: alt_click
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# alt_click <Badge type="info" text="libreforge" /> 

> Triggered when using Right Click on most items, Left Click on those that have a default right click functionality

## Overview

| Property | Value |
|----------|-------|
| Type ID | `alt_click` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## Configuration Example

```yaml
triggers:
  - alt_click
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
