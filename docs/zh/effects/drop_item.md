---
title: drop_item
titleEn: drop_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 在指定位置掉落物品。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `drop_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `item` | Item | ✅ | — | — | 要掉落的物品。接受 eco 物品查找字符串。 |
| `add_to_drops` | Boolean | — | `false` | — | 若为 true 且触发器具有掉落事件，则将物品添加到该事件的掉落列表，而非直接生成。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDropItem.kt`）。

- **源码描述**: 在触发位置掉落一个物品。
- **所属分类**: `inventory`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: drop_item
  args:
    item: "diamond_sword first_strike:6" # The item to give
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
