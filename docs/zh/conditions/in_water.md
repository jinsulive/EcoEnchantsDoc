---
title: in_water
titleEn: in_water
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# in_water <Badge type="info" text="libreforge" />

> Requires a player to be in water

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `in_water` |
| 所属模块 | libreforge |
| 分类 | 世界与环境（World & Environment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInWater.kt`）。

- **源码描述**: Passes when the entity is in contact with water.
- **所属分类**: `player`, `world`

## 配置示例

```yaml
- id: in_water
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
