---
title: give_health
titleEn: give_health
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_health <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 给予玩家生命值。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_health` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression(数学表达式) | ✅ | — | — | 要给予/扣除的生命值（允许负数）。支持表达式。示例：`%level% * 2` |
| `trigger_heal` | Boolean | — | `false` | — | 是否触发治疗事件（"heal" 触发器）。为 true 时触发 EntityRegainHealthEvent 并尊重其取消（例如用于经验修补）。默认为 false。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveHealth.kt`）。

- **源码描述**: 按指定数量治疗玩家，上限为其最大生命值。
- **所属分类**: `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: give_health
  args:
    amount: 2 # The amount of health to give/take (allows negative values)
    trigger_heal: true # (Optional) Whether to trigger the heal event ("heal" trigger)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
