---
title: any_of
titleEn: any_of
category: conditions
subcategory: logic
tags:
  - libreforge
outline: deep
---

# any_of <Badge type="info" text="libreforge" />

> Requires any of a certain list of conditions to be matched

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `any_of` |
| 所属模块 | libreforge |
| 分类 | 高级逻辑（Advanced Logic） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `conditions` | The list of conditions |

## 配置示例

```yaml
- id: any_of
  args:
    conditions: # The list of conditions
      - id: is_sprinting
      - id: is_gliding
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
