---
title: level_down_mcmmo
titleZh: level_down_mcmmo
category: triggers
subcategory: external
tags:
  - libreforge
  - mcmmo
outline: deep
---

# level_down_mcmmo <Badge type="info" text="libreforge" /> <Badge type="warning" text="McMMO" />
> **Requires:** mcMMO

> Fires when the player loses a level in a McMMO skill.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `level_down_mcmmo` |
| Module | libreforge |
| Category | External Integration |
| Value | The new level |
| Requires | McMMO |

## Configuration Example

```yaml
triggers:
  - level_down_mcmmo
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The new level |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
