---
title: set_victim_velocity
titleEn: set_victim_velocity
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# set_victim_velocity <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置受害者的速度。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_victim_velocity` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `x` | Expression(数学表达式) | ✅ | — | — | X 轴速度分量。支持表达式。示例：`0` |
| `y` | Expression(数学表达式) | ✅ | — | — | Y 轴速度分量。支持表达式。示例：`1.5` |
| `z` | Expression(数学表达式) | ✅ | — | — | Z 轴速度分量。支持表达式。示例：`0` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetVictimVelocity.kt`）。

- **源码描述**: 将受害者实体的速度设置为指定的 x、y、z 分量。
- **所属分类**: `movement`, `combat`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: set_victim_velocity
  args:
    x: 0.2
    y: 0.33
    z: -0.2
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
