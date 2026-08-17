---
title: antigravity_projectile
titleEn: antigravity_projectile
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# antigravity_projectile <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 弹射物不受重力影响，可以沿直线飞行直到击中目标。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `antigravity_projectile` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| — | — | — | — | — | 该组件无参数。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAntigravityProjectile.kt`）。

- **源码描述**: 使玩家发射的所有弹射物沿直线飞行，不受重力影响。
- **所属分类**: `combat`

## 配置示例

```yaml
- id: antigravity_projectile
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
