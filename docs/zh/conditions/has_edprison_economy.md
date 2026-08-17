---
title: has_edprison_economy
titleEn: has_edprison_economy
category: conditions
subcategory: edprison
tags:
  - libreforge
outline: deep
---

# has_edprison_economy <Badge type="info" text="libreforge" /> <Badge type="info" text="条件" />

> 当玩家拥有至少指定数量的指定 EDPrisonCore 货币时通过。

> **需要依赖：** EdPrison

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_edprison_economy` |
| 所属模块 | libreforge |
| 分类 | Economy, Player |
| 组件类型 | 条件 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | 要检查的 EDPrisonCore 经济/货币类型。 |
| `amount` | Expression | ✅ | — | — | 玩家必须拥有的最低货币数量。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/edprisoncore/impl/ConditionHasEdPrisonCurrency.kt`）。

- **源码描述**: 当玩家拥有至少指定数量的指定 EDPrisonCore 货币时通过。

- **所属分类**: `economy, player`

## 配置示例

```yaml
- id: has_edprison_economy
  args:
    type: <value>
    amount: <value>
```

## 关联页面

- [所有条件](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
