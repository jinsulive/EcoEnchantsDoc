---
title: multiply_drops
titleEn: multiply_drops
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# multiply_drops <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Multiplies drops

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_drops` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `on_items` | Item List | — | `[]` | — | （可选）要倍率化的掉落物列表。默认作用于所有掉落物。 |
| `fortune` | Expression(数学表达式) | ✅ | — | — | 模拟的时运等级（选项 1）。 |
| `multiplier` | Expression(数学表达式) | ✅ | — | — | 掉落倍率（选项 2）。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMultiplyDrops.kt`）。

- **源码描述**: 以固定倍率或模拟时运等级的方式倍率化事件的物品掉落。
- **所属分类**: `inventory`
- **需要触发器数据**: `EVENT`

## 配置示例

```yaml
- id: multiply_drops
  args:
    on_items: # (Optional) The drops to multiply
      - diamond
      - emerald
    fortune: 3 # The level of fortune to mimic (Option 1)
    multiplier: 2 # The drop multiplier (Option 2)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
