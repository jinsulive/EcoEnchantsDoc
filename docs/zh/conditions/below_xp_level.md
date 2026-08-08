---
title: below_xp_level
titleEn: below_xp_level
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# below_xp_level <Badge type="info" text="libreforge" />

> Requires a player to be below a certain XP level

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `below_xp_level` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `level` | Expression(数学表达式) | ✅ | — | — | The maximum XP level \| Source: The XP level threshold; the player must be below this value. Example: `10 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionBelowXPLevel.kt`）。

- **源码描述**: Passes when the player's XP level is below the specified level.
- **所属分类**: `economy`

## 配置示例

```yaml
- id: below_xp_level
  args:
    level: 50 # The maximum XP level
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
