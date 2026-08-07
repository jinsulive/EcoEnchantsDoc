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

| 参数名 | 说明 |
|--------|------|
| `placeholder` | The placeholder, including % |
| `value` | The value the placeholder should contain |
| `ignore_case` | If the case should be ignored (optional) |

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
