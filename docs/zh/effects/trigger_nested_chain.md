---
title: trigger_nested_chain
titleEn: trigger_nested_chain
category: effects
subcategory: meta
tags:
  - libreforge
outline: deep
---

# trigger_nested_chain <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 作为当前触发器调度的一部分内联运行嵌套效果链。由链系统内部使用。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `trigger_nested_chain` |
| 所属模块 | libreforge |
| 分类 | Meta |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| — | — | — | — | — | 该组件无参数。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTriggerNestedChain.kt`）。

- **源码描述**: 作为当前触发器调度的一部分内联运行嵌套效果链。由链系统内部使用。

- **所属分类**: `meta`

## 配置示例

```yaml
- id: trigger_nested_chain
  args:
    # This component takes no parameters
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
