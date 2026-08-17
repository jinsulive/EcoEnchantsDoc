---
title: has_skill_level
titleEn: has_skill_level
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_skill_level <Badge type="info" text="libreforge" />
> **需要依赖：** AuraSkills

> 需要玩家拥有一定的技能等级。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_skill_level` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `skill` | String | ✅ | — | — | The AuraSkills skill to check (e.g. FARMING, MINING). |
| `level` | Expression | ✅ | — | — | The minimum skill level the player must have. |

## 配置示例

```yaml
- id: has_skill_level
  args:
    skill: combat # The skill ID
    level: 30 # The minimum level
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
