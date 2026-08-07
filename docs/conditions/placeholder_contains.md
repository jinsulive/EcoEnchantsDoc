---
title: placeholder_contains
titleZh: placeholder_contains
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# placeholder_contains <Badge type="info" text="libreforge" />

> Requires a placeholder to contain a certain value

## Overview

| Property | Value |
|----------|-------|
| Type ID | `placeholder_contains` |
| Module | libreforge |
| Category | Placeholder & Math |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `placeholder` | The placeholder, including % |
| `value` | The value the placeholder should contain |
| `ignore_case` | If the case should be ignored (optional) |

## Configuration Example

```yaml
- id: placeholder_contains
  args:
    placeholder: '%ecocrates_ancient_opens%' # The placeholder, including %
    value: "test" # The value the placeholder should contain
    ignore_case: true # If the case should be ignored (optional)
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
