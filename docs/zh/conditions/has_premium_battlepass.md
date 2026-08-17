---
title: has_premium_battlepass
titleEn: has_premium_battlepass
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# has_premium_battlepass <Badge type="info" text="libreforge" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 需要玩家拥有高级战斗通行证。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_premium_battlepass` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `battlepass` | 战斗通行证 ID。 |

## 配置示例

```yaml
- id: has_premium_battlepass
  args:
    battlepass: example # The battlepass ID
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
