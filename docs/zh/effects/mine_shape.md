---
title: mine_shape
titleEn: mine_shape
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# mine_shape <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 相对于玩家开采的方块，按自定义 2D 网格形状破坏方块。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `mine_shape` |
| 所属模块 | libreforge |
| 分类 | World |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `shape` | String List | ✅ | — | — | A list of strings forming a grid where 'T' is the trigger block and 'X' marks blocks to break. 例: `XXX, XTX, XXX` |
| `depth` | Expression | — | `1` | — | How many layers deep to mine behind the trigger block. Supports expressions. |
| `whitelist` | Block List | — | `[]` | — | A list of blocks that are allowed to be broken. Defaults to all blocks. |
| `blacklisted_blocks` | Block List | — | `[]` | — | A list of blocks that will never be broken by this effect. |
| `prevent_trigger` | Boolean | — | `false` | — | Whether to prevent the broken blocks from re-triggering this effect. |
| `disable_on_sneak` | Boolean | — | `false` | — | Whether to disable the shape mining when the player is sneaking. |
| `check_hardness` | Boolean | — | `true` | — | Whether to skip blocks harder than the trigger block. Defaults to true. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMineShape.kt`）。

- **源码描述**: 相对于玩家开采的方块，按自定义 2D 网格形状破坏方块。

- **所属分类**: `world`

## 配置示例

```yaml
- id: mine_shape
  args:
    shape: <value>
    depth: <value>
    whitelist: <value>
    blacklisted_blocks: <value>
    prevent_trigger: <value>
    disable_on_sneak: <value>
    check_hardness: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
