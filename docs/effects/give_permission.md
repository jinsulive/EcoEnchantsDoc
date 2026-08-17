---
title: give_permission
titleZh: give_permission
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
deprecated: true
---

# give_permission <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />
> ⚠️ **Deprecated** — This component has been removed from libreforge and is no longer functional. It is kept for reference only.

> Gives a permission while active

> **Requires:** Vault

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_permission` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `permission` | The permission to give |

## Configuration Example

```yaml
- id: give_permission
  args:
    permission: ecocrates.reroll.mythic # The permission to give
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
