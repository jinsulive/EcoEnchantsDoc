---
title: placeholder_equals
titleZh: placeholder_equals
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# placeholder_equals <Badge type="info" text="libreforge" />

> Requires a placeholder to equal a certain value

## Overview

| Property | Value |
|----------|-------|
| Type ID | `placeholder_equals` |
| Module | libreforge |
| Category | Placeholder & Math |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `placeholder` | The placeholder, including % |
| `value` | The value it must equal |

## Configuration Example

```yaml
- id: placeholder_equals
  args:
    placeholder: '%ecocrates_ancient_opens%' # The placeholder, including %
    value: 5 # The value it must equal
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
