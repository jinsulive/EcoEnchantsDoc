---
title: tame_animal
titleEn: tame_animal
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# tame_animal <Badge type="info" text="libreforge" /> 

> 当驯服动物时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `tame_animal` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerTameAnimal.kt`）。

- **源码描述**: 当玩家驯服动物时触发。
- **所属分类**: `interaction`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`, `ITEM`

## 配置示例

```yaml
triggers:
  - tame_animal
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
