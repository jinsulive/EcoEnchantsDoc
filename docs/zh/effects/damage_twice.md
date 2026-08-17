---
title: damage_twice
titleEn: damage_twice
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_twice <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 对受害者造成一次额外攻击。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `damage_twice` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| — | — | — | — | — | 该组件无参数。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDamageTwice.kt`）。

- **源码描述**: 使受害者第二次承受触发攻击的伤害。
- **所属分类**: `combat`
- **需要触发器数据**: `VICTIM`, `EVENT`

## 配置示例

```yaml
- id: damage_twice
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
