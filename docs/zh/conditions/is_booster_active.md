---
title: is_booster_active
titleEn: is_booster_active
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_booster_active <Badge type="info" text="libreforge" />

> Requires a certain booster to be active on the server

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `is_booster_active` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `booster` | The Booster ID |

## 配置示例

```yaml
- id: is_booster_active
  args:
    booster: 1_5skill_multiplier # The Booster ID
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
