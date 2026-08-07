---
title: trident_attack
titleZh: trident_attack
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# trident_attack <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />

> Triggered on injuring an entity with a thrown trident

## Overview

| Property | Value |
|----------|-------|
| Type ID | `trident_attack` |
| Module | libreforge |
| Category | Internal |
| Value | The damage dealt |
| Requires | Paper |

## Configuration Example

```yaml
triggers:
  - trident_attack
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The damage dealt |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
