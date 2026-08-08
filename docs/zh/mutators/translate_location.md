---
title: translate_location
titleEn: translate_location
category: mutators
subcategory: location
tags:
  - libreforge
outline: deep
---

# translate_location <Badge type="info" text="libreforge" />

> Translate the location by specified x, y, and z values

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `translate_location` |
| 所属模块 | libreforge |
| 分类 | 位置（Location） |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `add_x` | Expression(数学表达式) | ✅ | — | — | The amount to add to x \| Source: The amount to add to the X coordinate. Example: `0.5` |
| `add_y` | Expression(数学表达式) | ✅ | — | — | The amount to add to y \| Source: The amount to add to the Y coordinate. Example: `1.0` |
| `add-z` | Expression(数学表达式) | ✅ | — | — | The amount to add to z \| Source: The amount to add to the Z coordinate. Example: `-0.5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorTranslateLocation.kt`）。

- **源码描述**: Offsets the location by the given amounts along each axis.
- **所属分类**: `location`

## 配置示例

```yaml
- id: translate_location
  args:
    add_x: -0.1 # The amount to add to x
    add_y: 2.0 # The amount to add to y
    add-z: 0 # The amount to add to z
```

## 关联页面

- [所有变异器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
