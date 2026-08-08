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

> 当玩家赢得袭击时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `win_raid` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 不祥之兆等级 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerWinRaid.kt`）。

- **源码描述**: 当玩家赢得袭击时触发。
- **所属分类**: `combat`, `world`
- **需要触发器数据**: `PLAYER`, `LOCATION`, `VALUE`
- **值**: 袭击的不祥之兆等级加一。

## 配置示例

```yaml
triggers:
  - win_raid
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 不祥之兆等级 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
