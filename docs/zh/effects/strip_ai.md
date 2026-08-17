---
title: strip_ai
titleEn: strip_ai
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# strip_ai <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 临时移除生物的 AI。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `strip_ai` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `duration` | Expression | ✅ | — | — | 禁用实体 AI 的时长（以刻为单位）。支持数学表达式。 例: `20 * %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectStripAI.kt`）。

- **源码描述**: 临时移除受害者实体的 AI，使其停止行动。
- **所属分类**: `entity`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: strip_ai
  args:
    duration: 60 # The amount of ticks to strip AI for
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
