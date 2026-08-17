---
title: is_season
titleEn: is_season
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_season <Badge type="info" text="libreforge" />
> **需要依赖：** CustomCrops

> 需要处于某个季节。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `is_season` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `season` / `seasons`（任一） | String_list | ✅ | — | — | 要检查的季节名称（例如 SPRING、SUMMER、AUTUMN、WINTER）。 |

## 配置示例

```yaml
- id: is_season
  args:
    season: summer # Use for a single season
    seasons: # Use for multiple seasons
      - summer
      - spring
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
