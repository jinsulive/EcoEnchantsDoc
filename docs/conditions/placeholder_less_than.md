---
title: placeholder_less_than
titleZh: placeholder_less_than
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# placeholder_less_than <Badge type="info" text="libreforge" />

> Requires a placeholder to be less than a certain value

## Overview

| Property | Value |
|----------|-------|
| Type ID | `placeholder_less_than` |
| Module | libreforge |
| Category | Placeholder & Math |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `placeholder` | The placeholder, including % |
| `value` | The value it must be less than |

## Configuration Example

```yaml
- id: placeholder_less_than
  args:
    placeholder: '%ecocrates_ancient_opens%' # The placeholder, including %
    value: 5 # The value it must be less than
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
