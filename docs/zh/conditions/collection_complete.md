---
title: collection_complete
titleEn: collection_complete
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# collection_complete <Badge type="info" text="libreforge" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 需要玩家完全完成（满级）某个收藏。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `collection_complete` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `collection` | 收藏 ID。 |

## 配置示例

```yaml
- id: collection_complete
  args:
    collection: diamond # The collection ID
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
