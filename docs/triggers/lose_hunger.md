---
title: lose_hunger
titleZh: lose_hunger
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# lose_hunger <Badge type="info" text="libreforge" /> 

> Triggered when losing hunger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `lose_hunger` |
| Module | libreforge |
| Category | Internal |
| Value | The hunger lost |

## Configuration Example

```yaml
triggers:
  - lose_hunger
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The hunger lost |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
