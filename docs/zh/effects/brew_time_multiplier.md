---
title: brew_time_multiplier
titleEn: brew_time_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# brew_time_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies the time taken to brew potions

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `brew_time_multiplier` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier |

## 配置示例

```yaml
- id: brew_time_multiplier
  args:
    multiplier: 0.8 # The multiplier
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
