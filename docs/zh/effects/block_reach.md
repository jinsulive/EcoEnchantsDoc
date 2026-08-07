---
title: block_reach
titleEn: block_reach
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# block_reach <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Adds reach for interacting with blocks

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `block_reach` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `reach` | The extra block reach |

## 配置示例

```yaml
- id: block_reach
  args:
    reach: 1 # The extra block reach
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
