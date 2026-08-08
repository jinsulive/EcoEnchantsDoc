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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `run-type` | String | — | — | `normal`, `cycle`, `random` | The chain executor type to use when running the chain. |
| `chain` | String | ✅ | — | — | The ID of the chain to execute. |
| `chain_args` | Any/Custom | — | — | — | A subsection of key-value pairs to expose as placeholders within the chain. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRunChain.kt`).

- **Source Description**: Runs a named chain of effects defined in `plugins/libreforge/chains.yml`.
- **Categories**: `meta`

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
