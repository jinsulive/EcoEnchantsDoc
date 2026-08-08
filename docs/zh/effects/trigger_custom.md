---
title: trigger_custom
titleEn: trigger_custom
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# trigger_custom <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Call a custom trigger

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `trigger_custom` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `trigger` | String | ✅ | — | — | The custom trigger ID: use in other effects like custom_id (i.e. custom_example here) \| Source: The ID of the custom trigger to dispatch. |
| `value` | Expression(数学表达式) | — | `0` | — | The value to pass to the trigger, e.g. for EcoPets levelling. \| Source: An optional value to pass to the dispatched trigger. Supports expressions. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTriggerCustom.kt`）。

- **源码描述**: Dispatches a named custom trigger, which can activate other effect chains listening for that trigger ID.
- **所属分类**: `meta`

## 配置示例

```yaml
- id: trigger_custom
  args:
    trigger: example # The custom trigger ID: use in other effects like custom_id (i.e. custom_example here)
    value: 1.5 # The value to pass to the trigger, e.g. for EcoPets levelling.
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
