---
title: dispatcher_as_victim
titleEn: dispatcher_as_victim
category: mutators
subcategory: victim_player
tags:
  - libreforge
outline: deep
---

# dispatcher_as_victim <Badge type="info" text="libreforge" />

> Set the victim to be whoever dispatched (triggered) the effect.

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `dispatcher_as_victim` |
| 所属模块 | libreforge |
| 分类 | 目标/玩家（Victim/Player） |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorDispatcherAsVictim.kt`）。

- **源码描述**: Sets the victim to the current dispatcher.
- **所属分类**: `victim`, `meta`

## 配置示例

```yaml
- id: dispatcher_as_victim
```

## 关联页面

- [所有变异器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
