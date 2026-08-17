---
title: armor_toughness
titleEn: armor_toughness
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# armor_toughness <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 给予盔甲韧性。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `armor_toughness` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `points` | Expression | ✅ | — | — | The number of armor toughness points to add (or subtract if negative). Supports expressions. 例: `%level% * 0.25` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectArmorToughness.kt`）。

- **源码描述**: 持有器激活期间，永久增加或减少玩家的盔甲韧性属性。
- **所属分类**: `combat`, `player`, `attribute`

## 配置示例

```yaml
- id: armor_toughness
  args:
    points: 8 # The amount of armor toughness points to give
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
