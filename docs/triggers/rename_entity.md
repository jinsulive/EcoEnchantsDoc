---
title: rename_entity
titleZh: rename_entity
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# rename_entity <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />
> **Requires:** Paper

> Fires when the player renames an entity with a name tag.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `rename_entity` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |
| Requires | Paper |

## Configuration Example

```yaml
triggers:
  - rename_entity
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
