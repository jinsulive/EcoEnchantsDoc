---
title: set_custom_model_data
titleEn: set_custom_model_data
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_custom_model_data <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置物品的自定义模型数据。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_custom_model_data` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `model` | Expression | ✅ | — | — | 要应用于物品的自定义模型数据整数。支持数学表达式。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetCustomModelData.kt`）。

- **源码描述**: 设置触发物品的自定义模型数据值。
- **所属分类**: `inventory`
- **需要触发器数据**: `ITEM`

## 配置示例

```yaml
- id: set_custom_model_data
  args:
    model: 16 # The custom model data ID
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
