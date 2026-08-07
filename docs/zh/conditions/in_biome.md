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

| 参数名 | 说明 |
|--------|------|
| `biomes` | A list of biomes |

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
