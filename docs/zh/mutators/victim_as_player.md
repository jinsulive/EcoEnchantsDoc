---
title: victim_as_player
titleEn: victim_as_player
category: mutators
subcategory: victim_player
tags:
  - libreforge
outline: deep
---

# victim_as_player <Badge type="info" text="libreforge" />

> 将玩家设置为受害者——便于给予受害者物品等。仅当受害者是玩家时生效。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `victim_as_player` |
| 所属模块 | libreforge |
| 分类 | 目标/玩家（Victim/Player） |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| — | — | — | — | — | 该组件无参数。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorVictimAsPlayer.kt`）。

- **源码描述**: 将玩家设置为当前的受害者。
- **所属分类**: `player`, `victim`

## 配置示例

```yaml
- id: victim_as_player
```

## 关联页面

- [所有变异器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
