---
title: win_raid
titleEn: win_raid
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# win_raid <Badge type="info" text="libreforge" /> 

> Triggered when a player wins a raid

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `win_raid` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The level of bad omen |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerWinRaid.kt`）。

- **源码描述**: Fires when the player wins a raid.
- **所属分类**: `combat`, `world`
- **需要触发器数据**: `PLAYER`, `LOCATION`, `VALUE`
- **值**: The bad omen level of the raid, plus one.

## 配置示例

```yaml
triggers:
  - win_raid
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The level of bad omen |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
