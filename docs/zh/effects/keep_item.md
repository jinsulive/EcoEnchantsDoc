---
title: keep_item
titleEn: keep_item
category: effects
subcategory: player
tags:
  - libreforge
outline: deep
---

# keep_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 玩家死亡时保留其背包中的某个物品，而不是掉落。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `keep_item` |
| 所属模块 | libreforge |
| 分类 | Player, Inventory |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `slot` | String | — | — | — | 要保留的物品所在背包槽位，例如 mainhand 或 slot_0。若省略，则保留提供该效果的物品。 例: `mainhand` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKeepItem.kt`）。

- **源码描述**: 玩家死亡时保留其背包中的某个物品，而不是掉落。

- **所属分类**: `player, inventory`

## 配置示例

```yaml
- id: keep_item
  args:
    slot: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
