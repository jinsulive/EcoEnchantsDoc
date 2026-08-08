---
title: gain_task_xp
titleEn: gain_task_xp
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoquests
outline: deep
---

# gain_task_xp <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoQuests" />

> 当获得任务经验值时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `gain_task_xp` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | 获得的经验值 |
| 需要 | EcoQuests |

## 配置示例

```yaml
triggers:
  - gain_task_xp
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 获得的经验值 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
