---
title: give_mcmmo_xp
titleEn: give_mcmmo_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_mcmmo_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Gives experience points for a certain skill

> **需要依赖：** McMMO

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_mcmmo_xp` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of xp to give |
| `skill` | The skill to give the xp for |

## 配置示例

```yaml
- id: give_mcmmo_xp
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
