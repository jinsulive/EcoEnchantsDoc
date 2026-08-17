---
title: in_own_claim
titleZh: in_own_claim
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# in_own_claim <Badge type="info" text="libreforge" />
> **Requires:** HuskClaims

> Passes when the player is standing inside a HuskClaims claim that they own.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_own_claim` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| — | — | — | — | — | This component takes no parameters. |

## Configuration Example

```yaml
- id: in_own_claim
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
