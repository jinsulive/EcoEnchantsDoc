---
title: give_absorption
titleEn: give_absorption
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_absorption <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 为玩家添加伤害吸收点数。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_absorption` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | 要添加的伤害吸收心数。支持数学表达式。 例: `%level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveAbsorption.kt`）。

- **源码描述**: 为玩家增加伤害吸收爱心，必要时扩展最大吸收上限。
- **所属分类**: `player`, `attribute`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: give_absorption
  args:
    amount: 4 # The number of absorption points to add
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
