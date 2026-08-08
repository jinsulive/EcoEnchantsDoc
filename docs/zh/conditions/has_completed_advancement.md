---
title: has_completed_advancement
titleEn: has_completed_advancement
category: conditions
subcategory: permissions
tags:
  - libreforge
outline: deep
---

# has_completed_advancement <Badge type="info" text="libreforge" />

> 需要玩家已完成某个进度。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_completed_advancement` |
| 所属模块 | libreforge |
| 分类 | 权限与称号（Permissions & Ranks） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `advancement` | String | ✅ | — | — | 进度 ID（进度的命名空间键）。示例：`minecraft:story/mine_stone` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasCompletedAdvancement.kt`）。

- **源码描述**: 当玩家已完成指定进度时通过。
- **所属分类**: `player`

## 配置示例

```yaml
- id: has_completed_advancement
  args:
    advancement: "minecraft:story/mine_stone" # The advancement ID
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
