---
title: bonemeal_crop
titleEn: bonemeal_crop
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# bonemeal_crop <Badge type="info" text="libreforge" /> 

> 当对作物使用骨粉时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `bonemeal_crop` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerBoneMealCrop.kt`）。

- **源码描述**: 当玩家使用骨粉催熟作物时触发。
- **所属分类**: `world`, `interaction`
- **需要触发器数据**: `PLAYER`, `BLOCK`, `EVENT`, `LOCATION`

## 配置示例

```yaml
triggers:
  - bonemeal_crop
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
