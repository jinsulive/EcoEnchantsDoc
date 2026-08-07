---
title: bleed
titleEn: bleed
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# bleed <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Makes your victim bleed, damaging them repeatedly

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `bleed` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `damage` | The damage to deal on each bleed tick |
| `interval` | The delay between bleed ticks |
| `amount` | The amount of bleed ticks |

## 配置示例

```yaml
- id: bleed
  args:
    damage: 5 # The damage to deal on each bleed tick
    interval: 15 # The delay between bleed ticks
    amount: 10 # The amount of bleed ticks
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
