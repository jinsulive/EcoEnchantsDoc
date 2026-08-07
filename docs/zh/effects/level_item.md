---
title: level_item
titleEn: level_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# level_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Gain item XP for a certain level

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `level_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `id` | The level ID |
| `xp` | The amount of xp to gain |

## 配置示例

```yaml
- id: level_item
  args:
    id: mining_progress # The level ID
    xp: "%v% * 2" # The amount of xp to gain
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
