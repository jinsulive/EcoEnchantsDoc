---
title: run_chain
titleZh: run_chain
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# run_chain <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Execute an effect chain

## Overview

| Property | Value |
|----------|-------|
| Type ID | `run_chain` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `run-type` | Optional, sets how the chain is ran, see the 'configuring an effect' page |
| `chain` | The ID of the chain to run |

## Configuration Example

```yaml
- id: run_chain
  args:
    run-type: normal # Optional, sets how the chain is ran, see the 'configuring an effect' page
    chain: blind_and_pop # The ID of the chain to run
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
