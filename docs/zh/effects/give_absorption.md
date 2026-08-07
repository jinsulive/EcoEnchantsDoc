---
title: give_absorption
titleEn: give_absorption
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_absorption <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Adds absorption points to the player

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_absorption` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The number of absorption points to add |

## 配置示例

```yaml
- id: give_absorption
  args:
    amount: 4 # The number of absorption points to add
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
