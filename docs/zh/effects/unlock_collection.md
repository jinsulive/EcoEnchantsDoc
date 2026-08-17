---
title: unlock_collection
titleEn: unlock_collection
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
deprecated: true
---

# unlock_collection <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 为玩家解锁收藏。

> **需要依赖：** EcoCollections

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `unlock_collection` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `collection` | 收藏 ID。 |

## 配置示例

```yaml
- id: unlock_collection
  args:
    collection: diamond # The collection ID
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
