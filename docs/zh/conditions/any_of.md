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

> 需要满足指定条件列表中的任意一个。

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

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `conditions` | Any/Custom | ✅ | — | — | 条件列表——满足任意一个即通过。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAnyOf.kt`）。

- **源码描述**: 当至少满足列表中一个条件时通过。
- **所属分类**: `meta`

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
