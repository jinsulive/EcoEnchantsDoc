---
title: bite
titleEn: bite
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# bite <Badge type="info" text="libreforge" /> 

> 当鱼咬住你的鱼钩时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `bite` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBite.kt`）。

- **源码描述**: 当有鱼咬住玩家的鱼钩时触发。
- **所属分类**: `fishing`
- **需要触发器数据**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`

## 配置示例

```yaml
triggers:
  - bite
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
