---
title: multiply_velocity
titleEn: multiply_velocity
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# multiply_velocity <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Multiplies a players velocity

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_velocity` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier |

## 配置示例

```yaml
- id: multiply_velocity
  args:
    multiplier: 1.3 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
