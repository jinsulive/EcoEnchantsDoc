---
title: above_hunger_percent
titleEn: above_hunger_percent
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# above_hunger_percent <Badge type="info" text="libreforge" />

> Requires a player to be above a certain % of their max hunger

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `above_hunger_percent` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `percent` | The minimum percent |

## 配置示例

```yaml
- id: above_hunger_percent
  args:
    percent: 50 # The minimum percent
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
