---
title: above_xp_level
titleEn: above_xp_level
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# above_xp_level <Badge type="info" text="libreforge" />

> 需要玩家的经验等级高于某一等级。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `above_xp_level` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `level` | Expression | ✅ | — | — | 所需的最低经验等级。 例: `10 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAboveXPLevel.kt`）。

- **源码描述**: 当玩家的经验等级达到或高于指定等级时通过。
- **所属分类**: `economy`

## 配置示例

```yaml
- id: above_xp_level
  args:
    level: 100 # The minimum XP level
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
