---
title: placeholder_contains
titleEn: placeholder_contains
category: conditions
subcategory: placeholder
tags:
  - libreforge
outline: deep
---

# placeholder_contains <Badge type="info" text="libreforge" />

> Requires a placeholder to contain a certain value

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `placeholder_contains` |
| 所属模块 | libreforge |
| 分类 | 占位符与数学（Placeholder & Math） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `placeholder` | String | ✅ | — | — | The placeholder, including % \| Source: The placeholder string to resolve and check. Example: `%player_name%` |
| `value` | String | — | `` | — | The value the placeholder should contain \| Source: The substring to search for within the resolved placeholder. |
| `ignore_case` | Boolean | — | `false` | — | If the case should be ignored (optional) \| Source: Whether the substring match should be case-insensitive. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionPlaceholderContains.kt`）。

- **源码描述**: Passes when the resolved placeholder value contains the specified string.
- **所属分类**: `meta`

## 配置示例

```yaml
- id: placeholder_contains
  args:
    placeholder: '%ecocrates_ancient_opens%' # The placeholder, including %
    value: "test" # The value the placeholder should contain
    ignore_case: true # If the case should be ignored (optional)
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
