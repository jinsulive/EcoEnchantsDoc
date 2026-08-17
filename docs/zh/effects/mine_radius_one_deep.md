---
title: mine_radius_one_deep
titleEn: mine_radius_one_deep
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mine_radius_one_deep <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 挖掘方块周围的方形范围，但仅深入一层。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `mine_radius_one_deep` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `radius` | Expression | ✅ | — | — | 平坦层中要破坏的方块半径。支持数学表达式。 例: `3 + %level% / 20` |
| `prevent_trigger` | Boolean | — | `false` | — | 破坏这些方块是否应阻止触发后续效果。 |
| `disable_on_sneak` | Boolean | — | `false` | — | 玩家潜行时该效果是否应被禁用。 |
| `no_corners` | Boolean | — | `false` | — | 是否排除半径边缘的角落方块。 |
| `whitelist` | Block List | — | `[]` | — | 允许被破坏的方块列表。若省略，所有方块均可。 |
| `blacklisted_blocks` | Block List | — | `[]` | — | 该效果永远不会破坏的方块列表。 |
| `check_hardness` | Boolean | — | `true` | — | 是否跳过比触发方块更硬的方块。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMineRadiusOneDeep.kt`）。

- **源码描述**: 挖掘触发方块周围半径内的方块，仅朝玩家面向的方向深入一层。
- **所属分类**: `world`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: mine_radius_one_deep
  args:
    radius: 1 # The radius around the center block: 1 = 3x3x1, 2 = 5x5x1, etc
    blacklisted_blocks: # The blocks to not mine
      - obsidian
    check_hardness: true # If only blocks with the same (or lower) hardness than the mined block can be broken
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    whitelist: [] # The only blocks allowed to mine - Remove if you don't want this
    no_corners: false # If the corners shouldn't be broken (plus-sign shape) - Defaults to false
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
