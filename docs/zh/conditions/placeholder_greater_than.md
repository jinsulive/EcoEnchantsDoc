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

> Requires a placeholder to be greater than or equal to a certain value

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

| 参数名 | 说明 |
|--------|------|
| `placeholder` | The placeholder, including % |
| `value` | The value it must be >= to |

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
