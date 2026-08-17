---
title: damage_cause
titleEn: damage_cause
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# damage_cause <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当伤害原因与给定的原因之一匹配时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `damage_cause` |
| 所属模块 | libreforge |
| 分类 | Combat |
| 取值类型 | `string[]` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  damage_cause: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_damage_cause`）：

```yaml
filters:
  not_damage_cause: <value>
```

::: warning ⚠️ 目标缺失行为

当触发器没有伤害原因数据时，该过滤器会自动通过（例如触发事件不是伤害事件时）。请仅在伤害类触发器上使用该过滤器，避免误放行。

:::

> 💡 完整 `DamageCause` 取值列表见[枚举值速查表](../reference/enums/damage_cause)。

> **取值说明**：伤害原因列表 → `DamageCause` 枚举（见附录），如 `[magic, fire]`

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterDamageCause.kt`）。

- **源码描述**: 当伤害原因与给定的原因之一匹配时匹配。

- **所属分类**: `combat`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
