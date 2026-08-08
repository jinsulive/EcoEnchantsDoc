---
title: give_skill_xp
titleEn: give_skill_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_skill_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 为特定技能获得经验值。

> **需要依赖：** EcoSkills

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_skill_xp` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | 要给予的经验值数量。 |
| `skill` | 要给予经验值的技能。 |

## 配置示例

```yaml
- id: give_skill_xp
  args:
    amount: 100 # The amount of xp to give
    skill: exploration # The skill to give the xp for
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
