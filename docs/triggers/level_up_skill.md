---
title: level_up_skill
titleZh: level_up_skill
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoskills
outline: deep
---

# level_up_skill <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoSkills" />

> Triggered when levelling up a skill

## Overview

| Property | Value |
|----------|-------|
| Type ID | `level_up_skill` |
| Module | libreforge |
| Category | EcoPlugin |
| Value | The new level |
| Requires | EcoSkills |

## Configuration Example

```yaml
triggers:
  - level_up_skill
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
