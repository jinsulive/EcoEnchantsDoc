---
title: spawn_falling_block
titleEn: spawn_falling_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# spawn_falling_block <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 在触发位置上方生成一个下落方块实体。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `spawn_falling_block` |
| 所属模块 | libreforge |
| 分类 | World, Visual |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `block` | Block | ✅ | — | — | 要作为下落方块生成的方块材质。 |
| `height` | Expression | — | `0` | — | 在触发位置上方多少格处生成下落方块。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSpawnFallingBlock.kt`）。

- **源码描述**: 在触发位置上方生成一个下落方块实体。

- **所属分类**: `world, visual`

## 配置示例

```yaml
- id: spawn_falling_block
  args:
    block: <value>
    height: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
