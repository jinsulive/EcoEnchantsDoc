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

> Mines a square radius around a block

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
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius around the center block: 1 = 3x3x3, 2 = 5x5x5, etc \| Source: The radius of blocks to break around the triggered block. Supports expressions. Example: `2 + %level% / 20` |
| `blacklisted_blocks` | Block List | — | `[]` | — | The blocks to not mine \| Source: A list of blocks that should never be broken by this effect. |
| `check_hardness` | Boolean | — | `true` | — | If only blocks with the same (or lower) hardness than the mined block can be broken \| Source: Whether blocks harder than the triggered block should be skipped. |
| `disable_on_sneak` | Boolean | — | `false` | — | If the effect shouldn't activate while sneaking \| Source: Whether the effect should be disabled while the player is sneaking. |
| `whitelist` | Block List | — | `[]` | — | The only blocks allowed to mine - Remove if you don't want this \| Source: A list of blocks that are allowed to be broken. If omitted, all blocks are eligible. |
| `prevent_trigger` | Boolean | — | `false` | — | Optional, if the mine_block trigger should not be called from this \| Source: Whether breaking these blocks should prevent triggering further effects. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMineRadius.kt`）。

- **源码描述**: Mines all blocks in a cube radius around the triggered block.
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
