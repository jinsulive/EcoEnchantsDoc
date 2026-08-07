---
title: level_up_mcmmo
titleZh: level_up_mcmmo
category: triggers
subcategory: external
tags:
  - libreforge
  - mcmmo
outline: deep
---

# level_up_mcmmo <Badge type="info" text="libreforge" /> <Badge type="warning" text="McMMO" />

> Triggered when levelling up McMMO skill

## Overview

| Property | Value |
|----------|-------|
| Type ID | `level_up_mcmmo` |
| Module | libreforge |
| Category | External Integration |
| Value | The new level |
| Requires | McMMO |

## Configuration Example

```yaml
triggers:
  - level_up_mcmmo
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
