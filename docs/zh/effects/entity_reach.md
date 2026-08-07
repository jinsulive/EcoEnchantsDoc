---
title: entity_reach
titleEn: entity_reach
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# entity_reach <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Adds reach for interacting with entities

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `entity_reach` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `reach` | The extra entity reach |

## 配置示例

```yaml
- id: entity_reach
  args:
    reach: 1 # The extra entity reach
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
