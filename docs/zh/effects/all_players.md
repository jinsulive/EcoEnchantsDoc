---
title: all_players
titleEn: all_players
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# all_players <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 对服务器上的所有玩家运行效果。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `all_players` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effects` | Effect List | ✅ | — | — | 对每个在线玩家运行的效果。 |
| `run-type` | String | — | — | `normal`, `cycle`, `random` | 要使用的链执行器。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAllPlayers.kt`）。

- **源码描述**: 对每个在线玩家运行一组效果。
- **所属分类**: `meta`

## 配置示例

```yaml
- id: all_players
  args:
    effects: # The effects to run for each player
      - id: damage_victim
        args:
          damage: 2
          true-damage: true
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
