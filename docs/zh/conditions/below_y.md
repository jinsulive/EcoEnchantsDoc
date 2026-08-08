---
title: below_y
titleEn: below_y
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# below_y <Badge type="info" text="libreforge" />

> Requires a player to be below a certain y level

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `below_y` |
| 所属模块 | libreforge |
| 分类 | 位置与移动（Position & Movement） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `y` | Expression(数学表达式) | ✅ | — | — | The Y coordinate threshold; the entity must be below this value. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionBelowY.kt`）。

- **源码描述**: Passes when the entity's Y coordinate is below the specified value.
- **所属分类**: `world`

## 配置示例

```yaml
- id: below_y
  args:
    y: 64
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
