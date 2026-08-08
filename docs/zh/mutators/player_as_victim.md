---
title: player_as_victim
titleEn: player_as_victim
category: mutators
subcategory: victim_player
tags:
  - libreforge
outline: deep
---

# player_as_victim <Badge type="info" text="libreforge" />

> Marks the player as the victim, useful to have negative effects

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `player_as_victim` |
| 所属模块 | libreforge |
| 分类 | 目标/玩家（Victim/Player） |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorPlayerAsVictim.kt`）。

- **源码描述**: Sets the victim to be the triggering player.
- **所属分类**: `player`, `victim`

## 配置示例

```yaml
- id: player_as_victim
```

## 关联页面

- [所有变异器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
