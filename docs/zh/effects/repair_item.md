---
title: repair_item
titleEn: repair_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# repair_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 修复物品。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `repair_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `damage` | Expression | ✅ | — | — | The amount of durability to restore. Supports expressions. 例: `50 + %level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRepairItem.kt`）。

- **源码描述**: 修复触发物品的指定耐久值。
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: repair_item
  args:
    damage: 2 # The durability to repair
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
