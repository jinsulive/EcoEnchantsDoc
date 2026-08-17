---
title: collect_envoy
titleZh: collect_envoy
category: triggers
subcategory: external
tags:
  - libreforge
  - axenvoy
outline: deep
---

# collect_envoy <Badge type="info" text="libreforge" /> <Badge type="warning" text="AxEnvoy" />
> **Requires:** AxEnvoy

> Fires when the player collects an AxEnvoy crate.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `collect_envoy` |
| Module | libreforge |
| Category | External Integration |
| Value | 1 |
| Requires | AxEnvoy |

## Configuration Example

```yaml
triggers:
  - collect_envoy
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
