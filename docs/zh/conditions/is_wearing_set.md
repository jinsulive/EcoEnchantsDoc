---
title: is_wearing_set
titleEn: is_wearing_set
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_wearing_set <Badge type="info" text="libreforge" />

> Requires a player to be wearing a certain EcoArmor set

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `is_wearing_set` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `set` | The EcoArmor set ID |
| `advanced` | (Optional) Require the set to be advanced (or not advanced) |

## 配置示例

```yaml
- id: is_wearing_set
  args:
    set: reaper # The EcoArmor set ID
    advanced: true # (Optional) Require the set to be advanced (or not advanced)
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
