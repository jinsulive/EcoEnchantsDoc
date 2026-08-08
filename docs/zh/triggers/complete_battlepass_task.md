---
title: complete_battlepass_task
titleEn: complete_battlepass_task
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecobattlepass
outline: deep
---

# complete_battlepass_task <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoBattlepass" />

> 当完成战斗通行证任务时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `complete_battlepass_task` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | 1 |
| 需要 | EcoBattlepass |

## 配置示例

```yaml
triggers:
  - complete_battlepass_task
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
