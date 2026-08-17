---
title: random_player
titleEn: random_player
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# random_player <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 对服务器上的随机玩家运行效果。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `random_player` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effects` | Effect List | ✅ | — | — | 要在随机选中的玩家上运行的效果列表。 |
| `run-type` | String | — | — | — |  |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRandomPlayer.kt`）。

- **源码描述**: 随机选择一名在线玩家并对其运行指定效果。
- **所属分类**: `meta`

## 配置示例

```yaml
- id: random_player
  args:
    effects: # The effects to run for the player
      - id: kick
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
