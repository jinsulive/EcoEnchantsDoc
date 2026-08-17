---
title: has_mcmmo_skill_level
titleZh: has_mcmmo_skill_level
category: conditions
subcategory: mcmmo
tags:
  - libreforge
outline: deep
---

# has_mcmmo_skill_level <Badge type="info" text="libreforge" /> <Badge type="info" text="Condition" />

> Passes when the player's mcMMO skill level meets or exceeds the specified level.

> **Requires:** mcMMO

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_mcmmo_skill_level` |
| Module | libreforge |
| Category | Player, Economy |
| Effect Type | Condition |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `skill` | String | ✅ | — | — | The mcMMO primary skill name (e.g. MINING, WOODCUTTING). |
| `level` | Integer | ✅ | — | — | The minimum skill level required. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/mcmmo/impl/ConditionHasMcMMOLevel.kt`).

- **Source Description**: Passes when the player's mcMMO skill level meets or exceeds the specified level.

- **Categories**: `player, economy`

## Configuration Example

```yaml
- id: has_mcmmo_skill_level
  args:
    skill: <value>
    level: <value>
```

## Related Pages

- [All Conditions](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
