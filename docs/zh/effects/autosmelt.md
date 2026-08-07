---
title: autosmelt
titleEn: autosmelt
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# autosmelt <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Autosmelts drops (requires a drop trigger)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `autosmelt` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `drop_xp` | If the furnace xp should be dropped |

## 配置示例

```yaml
- id: autosmelt
  args:
    drop_xp: true # If the furnace xp should be dropped
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
