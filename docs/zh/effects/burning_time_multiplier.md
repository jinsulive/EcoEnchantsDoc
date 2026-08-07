---
title: burning_time_multiplier
titleEn: burning_time_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# burning_time_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies how long an entity is on fire after being ignited

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `burning_time_multiplier` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier for burning time |

## 配置示例

```yaml
- id: burning_time_multiplier
  args:
    multiplier: 2 # The multiplier for burning time
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
