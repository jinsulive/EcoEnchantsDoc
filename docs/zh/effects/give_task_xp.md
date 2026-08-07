---
title: give_task_xp
titleEn: give_task_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_task_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Gives experience points for a task in a quest, excluding multipliers.

> **需要依赖：** EcoQuests

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_task_xp` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `quest` | The quest ID |
| `task` | The task ID |
| `xp` | The amount of xp to give |

## 配置示例

```yaml
- id: give_task_xp
  args:
    quest: magic_miner # The quest ID
    task: mine_gold # The task ID
    xp: 100 # The amount of xp to give
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
