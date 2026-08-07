---
title: placeholder_greater_than
titleZh: placeholder_greater_than
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# placeholder_greater_than <Badge type="info" text="libreforge" />

> Requires a placeholder to be greater than or equal to a certain value

## Overview

| Property | Value |
|----------|-------|
| Type ID | `placeholder_greater_than` |
| Module | libreforge |
| Category | Placeholder & Math |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `placeholder` | The placeholder, including % |
| `value` | The value it must be >= to |

## Configuration Example

```yaml
- id: placeholder_greater_than
  args:
    placeholder: '%ecocrates_ancient_opens%' # The placeholder, including %
    value: 5 # The value it must be >= to
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
