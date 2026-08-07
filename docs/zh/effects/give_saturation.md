---
title: give_saturation
titleEn: give_saturation
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_saturation <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Gives the player saturation

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_saturation` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of saturation to give/take (allows negative values) |

## 配置示例

```yaml
- id: give_saturation
  args:
    amount: 1.0 # The amount of saturation to give/take (allows negative values)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
