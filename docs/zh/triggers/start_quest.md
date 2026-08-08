---
title: start_quest
titleEn: start_quest
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoquests
outline: deep
---

# start_quest <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoQuests" />

> 当开始任务时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `start_quest` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | 1 |
| 需要 | EcoQuests |

## 配置示例

```yaml
triggers:
  - start_quest
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
