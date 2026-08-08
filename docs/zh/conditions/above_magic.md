---
title: above_magic
titleEn: above_magic
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# above_magic <Badge type="info" text="libreforge" />

> 需要玩家拥有一定数量的魔力。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `above_magic` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | 魔力类型。 |
| `amount` | 最小魔力数量。 |

## 配置示例

```yaml
- id: above_magic
  args:
    type: mana # The type of magic
    amount: 100 # The minimum amount of magic
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
