---
title: explosion_knockback_resistance_multiplier
titleEn: explosion_knockback_resistance_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# explosion_knockback_resistance_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies explosion resistance

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `explosion_knockback_resistance_multiplier` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier for explosion knockback resistance |

## 配置示例

```yaml
- id: explosion_knockback_resistance_multiplier
  args:
    multiplier: 2 # The multiplier for explosion knockback resistance
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
