---
title: multiply_edprison_economy
titleEn: multiply_edprison_economy
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# multiply_edprison_economy <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies incoming EdPrison economy.

> **需要依赖：** EdPrison

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_edprison_economy` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The xp multiplier |
| `economies` | The economy types to multiply |

## 配置示例

```yaml
- id: edprison_economy_multiplier
  args:
    multiplier: 1.5 # The xp multiplier
    economies: # The economy types to multiply
      - blocks
      - tokens
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
