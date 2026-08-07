---
title: remove_boss_bar
titleEn: remove_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# remove_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Removes a boss bar

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_boss_bar` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `id` | The ID of the boss bar to remove |

## 配置示例

```yaml
- id: remove_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar to remove
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
