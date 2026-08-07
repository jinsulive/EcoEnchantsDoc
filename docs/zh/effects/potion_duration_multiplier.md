---
title: potion_duration_multiplier
titleEn: potion_duration_multiplier
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# potion_duration_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies the duration of brewed potions

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `potion_duration_multiplier` |
| 所属模块 | libreforge |
| 分类 | 药水（Potion） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier |

## 配置示例

```yaml
- id: potion_duration_multiplier
  args:
    multiplier: 1.2 # The multiplier
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
