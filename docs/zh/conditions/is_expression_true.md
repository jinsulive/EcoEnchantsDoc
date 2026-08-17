---
title: is_expression_true
titleEn: is_expression_true
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# is_expression_true <Badge type="info" text="libreforge" />

> 需要某个表达式为真。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `is_expression_true` |
| 所属模块 | libreforge |
| 分类 | 占位符与数学（Placeholder & Math） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `expression` | Expression | ✅ | — | — | A mathematical expression or placeholder that must evaluate to 1 for the condition to pass. 例: `%player_level% >= 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsExpressionTrue.kt`）。

- **源码描述**: 当给定的数学表达式计算结果为 1 时通过。
- **所属分类**: `meta`

## 配置示例

```yaml
- id: is_expression_true
  args:
    expression: "%level% > 3"
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
