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

> Requires a certain expression to be true

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `is_expression_true` |
| 所属模块 | libreforge |
| 分类 | 占位符与数学（Placeholder & Math） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

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
