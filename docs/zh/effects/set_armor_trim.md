---
title: set_armor_trim
titleEn: set_armor_trim
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_armor_trim <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置物品的盔甲纹饰。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_armor_trim` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `pattern` | String | ✅ | — | — | The trim pattern to apply, e.g. 'sentry' or 'dune'. 例: `sentry` |
| `material` | String | ✅ | — | — | The trim material to apply, e.g. 'gold' or 'diamond'. 例: `diamond` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetArmorTrim.kt`）。

- **源码描述**: 以指定纹样和材料，为触发物品应用盔甲纹饰。
- **所属分类**: `inventory`
- **需要触发器数据**: `ITEM`

## 配置示例

```yaml
- id: set_armor_trim
  args:
    pattern: rib # The pattern
    material: amethyst # The material
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
