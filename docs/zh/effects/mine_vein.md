---
title: mine_vein
titleEn: mine_vein
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mine_vein <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 挖掘一片相连的矿脉方块。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `mine_vein` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `limit` | Expression | ✅ | — | — | 一次矿脉挖掘中可破坏的最大连通方块数量。支持数学表达式。 例: `10 + %level%` |
| `blocks` | Block List | — | `[]` | — | 视为矿脉一部分的方块类型列表。默认为与所挖掘方块相同的类型。 |
| `prevent_trigger` | Boolean | — | `false` | — | 是否防止矿脉方块重新触发该效果。 |
| `disable_on_sneak` | Boolean | — | `false` | — | 玩家潜行时是否禁用矿脉挖掘。 |
| `filters` | 子节 | — | — | — | **子节参数（嵌套配置）** —— 详见下方子节字段。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMineVein.kt`）。

- **源码描述**: 挖掘同一方块类型的所有相连矿脉，最多可达可配置的上限。
- **所属分类**: `world`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: mine_vein
  args:
    limit: 10 # The maximum amount of blocks to mine
    blocks: [] # (Optional) The blocks allowed to mine - if this is not specified, only blocks of the same type as the first block will be mined.
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
    filters: # (Optional) Filters for the blocks
      player_placed: false
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
