---
title: create_boss_bar
titleEn: create_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# create_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Creates a boss bar and shows it to the player

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `create_boss_bar` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `id` | The ID of the boss bar |
| `name` | The name of the boss bar |
| `color` | The boss bar color (pink, blue, red, green, yellow, purple, white) |
| `style` | The boss bar style (progress, notched_6, notched_10, notched_12, notched_20) |
| `progress` | The percentage completion of the boss bar |

## 配置示例

```yaml
- id: create_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar
    name: "Example Boss Bar" # The name of the boss bar
    color: white # The boss bar color (pink, blue, red, green, yellow, purple, white)
    style: progress # The boss bar style (progress, notched_6, notched_10, notched_12, notched_20)
    progress: 100 # The percentage completion of the boss bar
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
