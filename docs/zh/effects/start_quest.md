---
title: start_quest
titleEn: start_quest
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
deprecated: true
---

# start_quest <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 为玩家开始一个任务。

> **需要依赖：** EcoQuests

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `start_quest` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `quest` | 任务 ID。 |

## 配置示例

```yaml
- id: start_quest
  args:
    quest: meet_the_village # The quest ID
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
