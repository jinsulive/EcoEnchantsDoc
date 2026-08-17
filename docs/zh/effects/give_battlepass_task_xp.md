---
title: give_battlepass_task_xp
titleEn: give_battlepass_task_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
deprecated: true
---

# give_battlepass_task_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 为任务中的任务目标获得经验值（不含倍率）。

> **需要依赖：** EcoBattlepass

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_battlepass_task_xp` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | 要给予的经验值数量。 |
| `task` | 任务目标 ID。 |
| `quest` | 任务 ID。 |
| `battlepass` | 战斗通行证 ID。 |

## 配置示例

```yaml
- id: give_battlepass_task_xp
  args:
    amount: 100 # The amount of xp to give
    task: chickens # The task ID
    quest: daily_quest_1 # The quest ID
    battlepass: example # The battlepass ID
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
