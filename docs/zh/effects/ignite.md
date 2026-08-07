---
title: ignite
titleEn: ignite
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# ignite <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Lights the victim on fire

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `ignite` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `damage_per_tick` | The amount of damage to deal per fire tick |
| `ticks` | The amount of time the victim should be on fire for |

## 配置示例

```yaml
- id: ignite
  args:
    damage_per_tick: 8 # The amount of damage to deal per fire tick
    ticks: 100 # The amount of time the victim should be on fire for
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
