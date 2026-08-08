---
title: increase_step_height
titleEn: increase_step_height
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# increase_step_height <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Increases the amount of blocks you can walk over without jumping

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `increase_step_height` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `height` | Expression(数学表达式) | ✅ | — | — | The extra step height \| Source: The number of extra blocks the player can step up automatically. Supports expressions. Example: `0.5 + %level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectIncreaseStepHeight.kt`）。

- **源码描述**: Increases the player's step height, allowing them to walk up taller blocks without jumping.
- **所属分类**: `movement`, `player`, `attribute`

## 配置示例

```yaml
- id: increase_step_height
  args:
    height: 1 # The extra step height
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
