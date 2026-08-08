---
title: movement_efficiency_multiplier
titleEn: movement_efficiency_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# movement_efficiency_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies movement speed through difficult terrain

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `movement_efficiency_multiplier` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for movement efficiency \| Source: The movement efficiency multiplier to apply (e.g. 2 = double efficiency). Supports expressions. Example: `1 + %level% * 0.05` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMovementEfficiencyMultiplier.kt`）。

- **源码描述**: Multiplies the player's movement efficiency, reducing the speed penalty from blocks like soul sand.
- **所属分类**: `movement`, `player`, `attribute`

## 配置示例

```yaml
- id: movement_efficiency_multiplier
  args:
    multiplier: 1.5 # The multiplier for movement efficiency
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
