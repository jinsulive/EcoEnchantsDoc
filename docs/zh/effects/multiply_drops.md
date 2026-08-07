---
title: multiply_drops
titleEn: multiply_drops
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# multiply_drops <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Multiplies drops

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_drops` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `on_items` | (Optional) The drops to multiply |
| `fortune` | The level of fortune to mimic (Option 1) |
| `multiplier` | The drop multiplier (Option 2) |

## 配置示例

```yaml
- id: multiply_drops
  args:
    on_items: # (Optional) The drops to multiply
      - diamond
      - emerald
    fortune: 3 # The level of fortune to mimic (Option 1)
    multiplier: 2 # The drop multiplier (Option 2)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
