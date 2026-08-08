---
title: safe_fall_distance
titleEn: safe_fall_distance
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# safe_fall_distance <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Increases/decreases the distance you can fall without taking damage

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `safe_fall_distance` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `distance` | Expression(数学表达式) | ✅ | — | — | The extra distance \| Source: The number of extra blocks the player can fall safely. Supports expressions. Example: `%level% * 0.5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSafeFallDistance.kt`）。

- **源码描述**: Increases the player's safe fall distance, reducing fall damage taken.
- **所属分类**: `movement`, `player`, `attribute`

## 配置示例

```yaml
- id: safe_fall_distance
  args:
    distance: 10.5 # The extra distance
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
