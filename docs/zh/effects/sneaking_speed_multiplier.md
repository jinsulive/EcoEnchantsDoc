---
title: sneaking_speed_multiplier
titleEn: sneaking_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# sneaking_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies sneaking speed

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `sneaking_speed_multiplier` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier for sneaking speed |

## 配置示例

```yaml
- id: sneaking_speed_multiplier
  args:
    multiplier: 2 # The multiplier for sneaking speed
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
