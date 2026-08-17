---
title: bonus_health
titleEn: bonus_health
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# bonus_health <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 给予额外生命值。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `bonus_health` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `health` | Expression | ✅ | — | — | 要添加的额外最大生命值。支持数学表达式。 例: `%level% * 2` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBonusHealth.kt`）。

- **源码描述**: 持有器激活期间，永久增加玩家的最大生命值。
- **所属分类**: `player`, `attribute`

## 配置示例

```yaml
- id: bonus_health
  args:
    health: 4 # The amount of health to give, one heart is 2 HP
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
