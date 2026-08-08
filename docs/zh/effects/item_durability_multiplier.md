---
title: item_durability_multiplier
titleEn: item_durability_multiplier
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# item_durability_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 倍率化物品耐久（仅当持有器是物品时生效，如 EcoEnchants、EcoItems 等）。物品耐久实际上无法改变，因此这类似于耐久附魔，物品会以更快/更慢的速度损耗耐久。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `item_durability_multiplier` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | 耐久倍率（例如 2 表示物品耐用两倍）。支持表达式。示例：`1 + %level% * 0.05` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectItemDurabilityMultiplier.kt`）。

- **源码描述**: 倍率化手持物品的耐久损耗，从而使其更耐用或更不耐用。
- **所属分类**: `inventory`
- **需要触发器数据**: `EVENT`

## 配置示例

```yaml
- id: item_durability_multiplier
  args:
    multiplier: 1.5 # The multiplier for the durability
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
