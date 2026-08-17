---
title: leave_claim
titleZh: leave_claim
category: triggers
subcategory: huskclaims
tags:
  - libreforge
outline: deep
---

# leave_claim <Badge type="info" text="libreforge" /> <Badge type="info" text="Trigger" />

> Fires when the player exits a HuskClaims claim.

> **Requires:** HuskClaims

## Overview

| Property | Value |
|----------|-------|
| Type ID | `leave_claim` |
| Module | libreforge |
| Category | Movement & Location |
| Effect Type | Trigger |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/huskintegration/huskclaims/impl/TriggerLeaveClaim.kt`).

- **Source Description**: Fires when the player exits a HuskClaims claim.

- **Categories**: `movement`

- **Requires Trigger Data**: `PLAYER`, `EVENT`

## Configuration Example

```yaml
triggers:
  - leave_claim
```

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
