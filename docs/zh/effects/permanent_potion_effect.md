---
title: permanent_potion_effect
titleEn: permanent_potion_effect
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# permanent_potion_effect <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Gives a permanent potion effect

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `permanent_potion_effect` |
| 所属模块 | libreforge |
| 分类 | 药水（Potion） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `effect` | The effect to give |
| `level` | The effect level to give |
| `particles` | (Optional) If the effect should show particles |
| `icon` | (Optional) If the effect should show the icon in the top corner |

## 配置示例

```yaml
- id: permanent_potion_effect
  args:
    effect: blindness # The effect to give
    level: 2 # The effect level to give
    particles: true # (Optional) If the effect should show particles
    icon: false # (Optional) If the effect should show the icon in the top corner
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
