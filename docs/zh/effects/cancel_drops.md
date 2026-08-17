---
title: cancel_drops
titleEn: cancel_drops
category: effects
subcategory: inventory
tags:
  - libreforge
outline: deep
---

# cancel_drops <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 取消触发事件的物品掉落。若指定 on_drops，则仅移除这些物品。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `cancel_drops` |
| 所属模块 | libreforge |
| 分类 | Inventory, World |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `on_drops` | Item List | — | — | — | If specified, only drops matching these item types are cancelled. If omitted, all drops are cancelled. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCancelDrops.kt`）。

- **源码描述**: 取消触发事件的物品掉落。若指定 on_drops，则仅移除这些物品。

- **所属分类**: `inventory, world`

## 配置示例

```yaml
- id: cancel_drops
  args:
    on_drops: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
