---
title: soul_rip
titleEn: soul_rip
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# soul_rip <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Damages nearby entities and heals the player for the damage dealt

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `soul_rip` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `radius` | The radius in blocks to affect entities |
| `damage` | The damage dealt to each nearby entity |
| `heal_multiplier` | (Optional) Multiplier applied to total healing, defaults to 1.0 |

## 配置示例

```yaml
- id: soul_rip
  args:
    radius: 5 # The radius in blocks to affect entities
    damage: 4.0 # The damage dealt to each nearby entity
    heal_multiplier: 1.0 # (Optional) Multiplier applied to total healing, defaults to 1.0
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
