---
title: add_luck
titleEn: add_luck
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# add_luck <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Adds luck

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_luck` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of luck to add |

## 配置示例

```yaml
- id: add_luck
  args:
    amount: 1.5 # The amount of luck to add
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
