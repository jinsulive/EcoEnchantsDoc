---
title: enable
titleEn: enable
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# enable <Badge type="info" text="libreforge" /> 

> Triggered when an item / enchant / etc enables

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `enable` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEnable.kt`）。

- **源码描述**: Fires when a holder is activated for the dispatcher, such as when an item is equipped.
- **所属分类**: `meta`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `EVENT`

## 配置示例

```yaml
triggers:
  - enable
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
