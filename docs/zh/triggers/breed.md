---
title: breed
titleEn: breed
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# breed <Badge type="info" text="libreforge" /> 

> 当实体进行繁殖时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `breed` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 获得的经验值 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBreed.kt`）。

- **源码描述**: 当两个实体进行繁殖时触发。
- **所属分类**: `entity`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `LOCATION`, `ITEM`, `VALUE`
- **值**: 繁殖获得的经验值。

## 配置示例

```yaml
triggers:
  - breed
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 获得的经验值 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
