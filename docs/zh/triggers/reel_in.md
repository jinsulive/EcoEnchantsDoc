---
title: reel_in
titleEn: reel_in
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# reel_in <Badge type="info" text="libreforge" /> 

> Triggered when reeling in a fishing rod

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `reel_in` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerReelIn.kt`）。

- **源码描述**: Fires when the player reels in their fishing rod without a catch.
- **所属分类**: `fishing`
- **需要触发器数据**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`

## 配置示例

```yaml
triggers:
  - reel_in
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
