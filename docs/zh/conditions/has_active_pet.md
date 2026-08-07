---
title: has_active_pet
titleEn: has_active_pet
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_active_pet <Badge type="info" text="libreforge" />

> Requires a player to have a pet active

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_active_pet` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `pet` | The pet ID |

## 配置示例

```yaml
- id: has_active_pet
  args:
    pet: dragon # The pet ID
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
