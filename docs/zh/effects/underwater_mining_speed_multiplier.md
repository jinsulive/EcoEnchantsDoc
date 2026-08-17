---
title: underwater_mining_speed_multiplier
titleEn: underwater_mining_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# underwater_mining_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化水下挖掘速度。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `underwater_mining_speed_multiplier` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | 要应用于水下挖掘速度的倍率。支持数学表达式。 例: `1 + %level% * 0.02` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectUnderwaterMiningSpeedMultiplier.kt`）。

- **源码描述**: 玩家浸没在水中时，倍率化其挖掘速度。
- **所属分类**: `world`, `player`, `attribute`

## 配置示例

```yaml
- id: underwater_mining_speed_multiplier
  args:
    multiplier: 2 # The multiplier for underwater mining speed
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
