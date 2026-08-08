---
title: mine_radius
titleEn: mine_radius
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mine_radius <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 挖掘方块周围的方形范围。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `mine_radius` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `radius` | Expression(数学表达式) | ✅ | — | — | 中心方块周围的破坏半径：1 = 3x3x3，2 = 5x5x5，以此类推。支持表达式。示例：`2 + %level% / 20` |
| `blacklisted_blocks` | Block List | — | `[]` | — | 永远不会被此效果破坏的方块列表。 |
| `check_hardness` | Boolean | — | `true` | — | 是否仅破坏硬度不大于所挖掘方块的方块。 |
| `disable_on_sneak` | Boolean | — | `false` | — | 潜行时是否禁用此效果。 |
| `whitelist` | Block List | — | `[]` | — | 允许被挖掘的方块列表（不需要可移除）。省略时所有方块都可被破坏。 |
| `prevent_trigger` | Boolean | — | `false` | — | 可选，是否不从此效果触发 mine_block 触发器。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMineRadius.kt`）。

- **源码描述**: 挖掘触发方块周围立方体半径内的所有方块。
- **所属分类**: `world`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: mine_radius
  args:
    radius: 1 # The radius around the center block: 1 = 3x3x3, 2 = 5x5x5, etc
    blacklisted_blocks: # The blocks to not mine
      - obsidian
    check_hardness: true # If only blocks with the same (or lower) hardness than the mined block can be broken
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    whitelist: [] # The only blocks allowed to mine - Remove if you don't want this
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
