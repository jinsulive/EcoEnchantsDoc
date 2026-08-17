---
title: drill
titleEn: drill
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# drill <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 挖掘初始方块后方的方块。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `drill` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | 沿直线破坏的方块数量。支持数学表达式。 例: `3 + %level%` |
| `check_hardness` | Boolean | ✅ | — | — | 若为 true，仅硬度 ≤ 触发方块的方块会被破坏。 |
| `disable_on_sneak` | Boolean | — | `false` | — | 若为 true，玩家潜行时钻头效果将被禁用。 |
| `prevent_trigger` | Boolean | — | `false` | — | 若为 true，破坏额外方块将不再触发后续 libreforge 触发器。 |
| `whitelist` | Block List | — | — | — | 钻头仅会破坏这些方块类型。 |
| `blacklisted_blocks` | Block List | — | — | — | 钻头永远不会破坏这些方块类型。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDrill.kt`）。

- **源码描述**: 沿玩家视线方向，破坏前方一条线上的方块。
- **所属分类**: `world`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: drill
  args:
    amount: 4 # The amount of blocks to mine
    blacklisted_blocks: # The blocks to not mine
      - obsidian
    check_hardness: true # If only blocks with the same (or lower) hardness than the mined block can be broken
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    whitelist: [] # The only blocks allowed to mine - Remove if you don't want this
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
