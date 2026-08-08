---
title: at_least_of
titleEn: at_least_of
category: conditions
subcategory: logic
tags:
  - libreforge
outline: deep
---

# at_least_of <Badge type="info" text="libreforge" />

> Requires at least a certain mount of a certain list of conditions to be met

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `at_least_of` |
| 所属模块 | libreforge |
| 分类 | 高级逻辑（Advanced Logic） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `conditions` | Any/Custom | ✅ | — | — | The list of conditions \| Source: List of conditions to evaluate. |
| `amount` | Integer | ✅ | — | — | The amount of conditions \| Source: The minimum number of conditions that must pass. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAtLeastOf.kt`）。

- **源码描述**: Passes when at least the specified number of the listed conditions are met.
- **所属分类**: `meta`

## 配置示例

```yaml
- id: at_least_of
  args:
    conditions: # The list of conditions
      - id: is_sprinting
      - id: is_gliding
    amount: 1 # The amount of conditions
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
