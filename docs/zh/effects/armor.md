---
title: armor
titleEn: armor
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# armor <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 给予盔甲点数。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `armor` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `points` | Expression | ✅ | — | — | 要添加的护甲点数（负数则扣除）。支持数学表达式。 例: `%level% * 0.5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectArmor.kt`）。

- **源码描述**: 持有器激活期间，永久增加或减少玩家的盔甲属性。
- **所属分类**: `combat`, `player`, `attribute`

## 配置示例

```yaml
- id: armor
  args:
    points: 4 # The amount of points of armor to give
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
