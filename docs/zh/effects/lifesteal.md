---
title: lifesteal
titleEn: lifesteal
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# lifesteal <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Heals the player for a portion of the trigger's value (e.g. damage dealt)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `lifesteal` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The fraction of the trigger value to heal \| Source: The fraction of damage dealt that is converted into healing. Supports expressions. Example: `0.1 + %level% * 0.01` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectLifesteal.kt`）。

- **源码描述**: Heals the player for a portion of the damage dealt to the victim.
- **所属分类**: `combat`, `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: lifesteal
  args:
    multiplier: 0.5 # The fraction of the trigger value to heal
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
