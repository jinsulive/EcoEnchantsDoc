---
title: add_damage
titleEn: add_damage
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# add_damage <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 为触发攻击添加额外伤害。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_damage` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `damage` | Expression | ✅ | — | — | The amount of extra damage to add. Supports expressions. 例: `%victim_max_health% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddDamage.kt`）。

- **源码描述**: 为触发的攻击额外增加伤害。
- **所属分类**: `combat`
- **需要触发器数据**: `EVENT`

## 配置示例

```yaml
- id: add_damage
  args:
    damage: 2 # The damage to add (or subtract)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
