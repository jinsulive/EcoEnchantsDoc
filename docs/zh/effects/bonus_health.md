---
title: bonus_health
titleEn: bonus_health
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# bonus_health <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Gives extra health

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `bonus_health` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `health` | The amount of health to give, one heart is 2 HP |

## 配置示例

```yaml
- id: bonus_health
  args:
    health: 4 # The amount of health to give, one heart is 2 HP
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
