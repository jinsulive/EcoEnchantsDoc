---
title: has_mana
titleEn: has_mana
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_mana <Badge type="info" text="libreforge" />
> **需要依赖：** AuraSkills

> 需要玩家拥有一定数量的魔力。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_mana` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | The minimum amount of mana the player must have. |

## 配置示例

```yaml
- id: has_mana
  args:
    amount: 200 # The amount of mana
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
