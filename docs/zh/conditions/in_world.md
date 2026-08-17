---
title: in_world
titleEn: in_world
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# in_world <Badge type="info" text="libreforge" />

> 需要玩家位于某个世界中。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `in_world` |
| 所属模块 | libreforge |
| 分类 | 世界与环境（World & Environment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `world` | String | ✅ | — | — | The name of the world to check against. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInWorld.kt`）。

- **源码描述**: 当触发者位于指定世界时通过。
- **所属分类**: `world`

## 配置示例

```yaml
- id: in_world
  args:
    world: the_end # The world name
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
