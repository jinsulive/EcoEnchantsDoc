---
title: silk_touch
titleEn: silk_touch
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# silk_touch <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将破坏方块产生的掉落替换为方块本身，如同使用精准采集挖掘。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `silk_touch` |
| 所属模块 | libreforge |
| 分类 | World, Inventory |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| — | — | — | — | — | 该组件无参数。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSilkTouch.kt`）。

- **源码描述**: 将破坏方块产生的掉落替换为方块本身，如同使用精准采集挖掘。

- **所属分类**: `world, inventory`

## 配置示例

```yaml
- id: silk_touch
  args:
    # This component takes no parameters
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
