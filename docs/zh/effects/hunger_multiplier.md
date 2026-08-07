---
title: hunger_multiplier
titleEn: hunger_multiplier
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# hunger_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies hunger loss

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `hunger_multiplier` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier for hunger loss, smaller means slower loss |

## 配置示例

```yaml
- id: hunger_multiplier
  args:
    multiplier: 0.5 # The multiplier for hunger loss, smaller means slower loss
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
