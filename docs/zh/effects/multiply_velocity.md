---
title: multiply_velocity
titleEn: multiply_velocity
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# multiply_velocity <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 倍率化玩家的速度。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_velocity` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | The factor to multiply all velocity components by (e.g. 2 = double speed). Supports expressions. 例: `1 + %level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMultiplyVelocity.kt`）。

- **源码描述**: 以指定系数倍率化玩家当前的速度向量。
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: multiply_velocity
  args:
    multiplier: 1.3 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
