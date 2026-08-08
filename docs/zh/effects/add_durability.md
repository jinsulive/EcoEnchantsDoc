---
title: add_durability
titleEn: add_durability
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# add_durability <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 增加物品的最大耐久度。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_durability` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `durability` | Expression(数学表达式) | ✅ | — | — | 要添加（或扣除）的耐久值。支持表达式。示例：`50 + %level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddDurability.kt`）。

- **源码描述**: 提升触发物品的最大耐久度。
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: add_durability
  args:
    durability: 100 # The durability to add (or subtract)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
