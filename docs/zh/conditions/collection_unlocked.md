---
title: collection_unlocked
titleEn: collection_unlocked
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# collection_unlocked <Badge type="info" text="libreforge" />

> 需要玩家解锁某个收藏（EcoCollections）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `collection_unlocked` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 配置示例

```yaml
- id: collection_unlocked
  args: {}
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
