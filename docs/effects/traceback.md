---
title: traceback
titleZh: traceback
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# traceback <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Go back to a previous position

## Overview

| Property | Value |
|----------|-------|
| Type ID | `traceback` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `seconds` | The seconds to go back (between 1 and 30) |

## Configuration Example

```yaml
- id: traceback
  args:
    seconds: 10 # The seconds to go back (between 1 and 30)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
