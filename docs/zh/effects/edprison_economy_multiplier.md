---
title: edprison_economy_multiplier
titleEn: edprison_economy_multiplier
category: effects
subcategory: edprison
tags:
  - libreforge
outline: deep
---

# edprison_economy_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 在持有器激活期间，按倍率提升 EdPrison 经济收益（全部或指定经济类型）。

> **需要依赖：** EdPrison

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `edprison_economy_multiplier` |
| 所属模块 | libreforge |
| 分类 | Economy |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | The economy earnings multiplier. Supports expressions. |
| `economies` | String_list | — | — | — | List of EdPrison economy types to apply the multiplier to. If omitted, applies to all economies. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/edprisoncore/impl/EffectEdPrisonEconomyMultiplier.kt`）。

- **源码描述**: 在持有器激活期间，按倍率提升 EdPrison 经济收益（全部或指定经济类型）。

- **所属分类**: `economy`

## 配置示例

```yaml
- id: edprison_economy_multiplier
  args:
    multiplier: <value>
    economies: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
