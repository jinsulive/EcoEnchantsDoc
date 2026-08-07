---
title: update_boss_bar
titleEn: update_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# update_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Updates a boss bar

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `update_boss_bar` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `id` | The ID of the boss bar to update |
| `name` | (Optional) The new name of the boss bar |
| `color` | (Optional) The new boss bar color (pink, blue, red, green, yellow, purple, white) |
| `style` | (Optional) The new boss bar style (progress, notched_6, notched_10, notched_12, notched_20) |
| `progress` | (Optional) The new percentage completion of the boss bar |

## 配置示例

```yaml
- id: update_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar to update
    name: "Updated Boss Bar" # (Optional) The new name of the boss bar
    color: pink # (Optional) The new boss bar color (pink, blue, red, green, yellow, purple, white)
    style: notched_6 # (Optional) The new boss bar style (progress, notched_6, notched_10, notched_12, notched_20)
    progress: "%libreforge_boss_bar_my_boss_bar_progress% + 10" # (Optional) The new percentage completion of the boss bar
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
