---
title: strike_lightning
titleEn: strike_lightning
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# strike_lightning <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Strikes lightning at a point

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `strike_lightning` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of lightning strikes |

## 配置示例

```yaml
- id: strike_lightning
  args:
    amount: 5 # The amount of lightning strikes
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
