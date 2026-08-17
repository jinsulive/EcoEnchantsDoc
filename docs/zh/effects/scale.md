---
title: scale
titleEn: scale
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# scale <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies scale

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `scale` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | 要应用于实体尺寸的缩放倍率。支持数学表达式。 例: `1 + %level% * 0.05` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectScale.kt`）。

- **源码描述**: 以指定倍率缩放实体的体型。
- **所属分类**: `entity`, `attribute`

## 配置示例

```yaml
- id: scale
  args:
    multiplier: 1.5 # The multiplier for scale
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
