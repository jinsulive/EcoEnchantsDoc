---
title: mcmmo_ability_on_cooldown
titleEn: mcmmo_ability_on_cooldown
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# mcmmo_ability_on_cooldown <Badge type="info" text="libreforge" />

> 需要某个 McMMO 技能处于冷却中。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `mcmmo_ability_on_cooldown` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `abilities` | 技能 ID。 |

## 配置示例

```yaml
- id: mcmmo_ability_on_cooldown
  args:
    abilities: 
      - serrated_strikes # The ID of the ability
      - super_breaker
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
