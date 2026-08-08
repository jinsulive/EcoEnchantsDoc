---
title: add_stat_temporarily
titleEn: add_stat_temporarily
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_stat_temporarily <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 为特定属性添加数值。

> **需要依赖：** EcoSkills

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_stat_temporarily` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `stat` | 属性名称。 |
| `amount` | 要添加（或扣除）的数量（允许负数）。 |
| `duration` | 持续时间（以游戏刻为单位）。 |

## 配置示例

```yaml
- id: add_stat_temporarily
  args:
    stat: strength # The name of the stat
    amount: 10 # The amount to add (or subtract, allows negative values)
    duration: 20 # The duration (in ticks)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
