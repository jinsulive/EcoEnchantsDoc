---
title: in_biome
titleEn: in_biome
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# in_biome <Badge type="info" text="libreforge" />

> Requires a player to be in a specific biome

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `in_biome` |
| 所属模块 | libreforge |
| 分类 | 世界与环境（World & Environment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `biomes` | String List | ✅ | — | — | A list of biomes \| Source: The list of biome names to check against. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInBiome.kt`）。

- **源码描述**: Passes when the player is located in one of the specified biomes.
- **所属分类**: `world`

## 配置示例

```yaml
- id: in_biome
  args:
    biomes: # A list of biomes
      - river
      - savanna
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
