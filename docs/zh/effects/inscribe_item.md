---
title: inscribe_item
titleEn: inscribe_item
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# inscribe_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 用卷轴为物品刻铭文。

> **需要依赖：** EcoScrolls

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `inscribe_item` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `scroll` | 卷轴 ID。 |

## 配置示例

```yaml
- id: inscribe_item
  args:
    scroll: hot_potato_book # The scroll ID
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
