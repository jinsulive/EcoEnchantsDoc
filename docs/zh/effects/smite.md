---
title: smite
titleEn: smite
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# smite <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Strikes lightning on a victim

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `smite` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `damage` | Expression(数学表达式) | ✅ | — | — | The damage to deal \| Source: The amount of damage the lightning strike deals to the victim. Supports expressions. Example: `%level% * 2` |
| `silent` | Custom | — | — | — | If the lightning should be silent |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSmite.kt`）。

- **源码描述**: Strikes the victim with lightning, dealing a configurable amount of damage.
- **所属分类**: `combat`, `world`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: smite
  args:
    damage: 5 # The damage to deal
    silent: true # If the lightning should be silent
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
