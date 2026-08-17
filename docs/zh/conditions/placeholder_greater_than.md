---
title: placeholder_greater_than
titleEn: placeholder_greater_than
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# placeholder_greater_than <Badge type="info" text="libreforge" />

> 需要占位符大于或等于某个值。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `placeholder_greater_than` |
| 所属模块 | libreforge |
| 分类 | 占位符与数学（Placeholder & Math） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `placeholder` | String | ✅ | — | — | 要解析并作为数字计算的占位符字符串。 例: `%player_level%` |
| `value` | Expression | ✅ | — | — | 占位符必须达到或超过的最低数值阈值。 例: `5 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionPlaceholderGreaterThan.kt`）。

- **源码描述**: 当解析后的占位符值在数值上大于或等于指定值时通过。
- **所属分类**: `meta`

## 配置示例

```yaml
- id: placeholder_greater_than
  args:
    placeholder: '%ecocrates_ancient_opens%' # The placeholder, including %
    value: 5 # The value it must be >= to
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
