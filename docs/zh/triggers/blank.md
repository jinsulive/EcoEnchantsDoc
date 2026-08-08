---
title: blank
titleEn: blank
category: triggers
subcategory: utility
tags:
  - libreforge
outline: deep
---

# blank <Badge type="info" text="libreforge" /> 

> 在持有者激活期间持续触发——适用于需要始终生效的效果。

> 📝 *编者注：源码未提供描述，以上为编者补充。*

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `blank` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 值 | `1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBlank.kt`）。

- **需要触发器数据**: `PLAYER`, `VICTIM`, `BLOCK`, `EVENT`, `LOCATION`, `PROJECTILE`, `VELOCITY`, `ITEM`, `TEXT`, `VALUE`, `ALT_VALUE`

## 配置示例

```yaml
triggers:
  - blank
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | `1` |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
