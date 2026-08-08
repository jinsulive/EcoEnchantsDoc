---
title: placeholder_equals
titleEn: placeholder_equals
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# placeholder_equals <Badge type="info" text="libreforge" />

> 需要占位符等于某个值。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `placeholder_equals` |
| 所属模块 | libreforge |
| 分类 | 占位符与数学（Placeholder & Math） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `placeholder` | String | ✅ | — | — | 占位符（含 % 符号）。示例：`%player_gamemode%` |
| `value` | String | ✅ | — | — | 它必须等于的值。 |
| `ignore_case` | Boolean | — | `false` | — | 相等性检查是否忽略大小写。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionPlaceholderEquals.kt`）。

- **源码描述**: 当解析后的占位符值等于指定字符串时通过。
- **所属分类**: `meta`

## 配置示例

```yaml
- id: placeholder_equals
  args:
    placeholder: '%ecocrates_ancient_opens%' # The placeholder, including %
    value: 5 # The value it must equal
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
