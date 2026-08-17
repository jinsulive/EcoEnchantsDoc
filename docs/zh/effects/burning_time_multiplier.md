---
title: burning_time_multiplier
titleEn: burning_time_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# burning_time_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化实体被点燃后的燃烧时长。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `burning_time_multiplier` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | 燃烧时间倍率。低于 1 的值会缩短燃烧时长。支持数学表达式。 例: `1 - %level% * 0.05` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBurningTimeMultiplier.kt`）。

- **源码描述**: 持有器激活期间，倍率化玩家着火时的燃烧时长。
- **所属分类**: `combat`, `player`, `attribute`

## 配置示例

```yaml
- id: burning_time_multiplier
  args:
    multiplier: 2 # The multiplier for burning time
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
