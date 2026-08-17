---
title: in_trusted_claim
titleZh: in_trusted_claim
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# in_trusted_claim <Badge type="info" text="libreforge" />
> **Requires:** Lands

> Passes when the player is standing inside a Lands area where they are trusted.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_trusted_claim` |
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
- id: in_trusted_claim
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
