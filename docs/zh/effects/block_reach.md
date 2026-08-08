---
title: block_reach
titleEn: block_reach
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# block_reach <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Adds reach for interacting with blocks

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `block_reach` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `reach` | Expression(数学表达式) | ✅ | — | — | The extra block reach \| Source: The number of blocks to add to the interaction range. Supports expressions. Example: `%level% * 0.5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBlockReach.kt`）。

- **源码描述**: Increases the player's block interaction range while the holder is active.
- **所属分类**: `player`, `attribute`

## 配置示例

```yaml
- id: block_reach
  args:
    reach: 1 # The extra block reach
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
