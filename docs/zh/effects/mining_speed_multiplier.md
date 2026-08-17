---
title: mining_speed_multiplier
titleEn: mining_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mining_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化挖掘速度。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `mining_speed_multiplier` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | The mining speed multiplier to apply (e.g. 2 = double speed). Supports expressions. 例: `1 + %level% * 0.02` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMiningSpeedMultiplier.kt`）。

- **源码描述**: 持有器激活期间，倍率化玩家的整体挖掘速度。
- **所属分类**: `world`, `player`, `attribute`

## 配置示例

```yaml
- id: mining_speed_multiplier
  args:
    multiplier: 1.1 # The multiplier for mining speed
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
