---
title: item_magnet
titleEn: item_magnet
category: effects
subcategory: inventory
tags:
  - libreforge
outline: deep
---

# item_magnet <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 在激活期间将附近的掉落物拉向持有者，可限制为特定物品类型。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `item_magnet` |
| 所属模块 | libreforge |
| 分类 | Inventory, Movement & Location |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `radius` | Expression | ✅ | — | — | The radius within which dropped items will be pulled, in blocks. Supports expressions. 例: `5 + %level% * 0.5` |
| `items` | Item List | — | `[]` | — | A whitelist of item types to attract. If empty, all items are attracted. |
| `exclude_items` | Item List | — | `[]` | — | A blacklist of item types to never attract, checked after the whitelist. |
| `pull_strength` | Expression | — | `0.3` | — | How strongly items are pulled per tick. Supports expressions. 例: `0.1 + %level% * 0.02` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectItemMagnet.kt`）。

- **源码描述**: 在激活期间将附近的掉落物拉向持有者，可限制为特定物品类型。

- **所属分类**: `inventory, movement`

## 配置示例

```yaml
- id: item_magnet
  args:
    radius: <value>
    items: <value>
    exclude_items: <value>
    pull_strength: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
