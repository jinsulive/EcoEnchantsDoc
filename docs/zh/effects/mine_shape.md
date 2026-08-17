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
| `shape` | String List | ✅ | — | — | 由字符串组成的网格列表，其中 'T' 为触发方块，'X' 标记要破坏的方块。 例: `XXX, XTX, XXX` |
| `depth` | Expression | — | `1` | — | 在触发方块后方挖掘的深度层数。支持数学表达式。 |
| `whitelist` | Block List | — | `[]` | — | 允许被破坏的方块列表。默认为所有方块。 |
| `blacklisted_blocks` | Block List | — | `[]` | — | 该效果永远不会破坏的方块列表。 |
| `prevent_trigger` | Boolean | — | `false` | — | 是否防止被破坏的方块重新触发该效果。 |
| `disable_on_sneak` | Boolean | — | `false` | — | 玩家潜行时是否禁用形状挖掘。 |
| `check_hardness` | Boolean | — | `true` | — | 是否跳过比触发方块更硬的方块。默认为 true。 |

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
