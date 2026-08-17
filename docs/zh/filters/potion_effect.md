---
title: potion_effect
titleEn: potion_effect
category: filters
subcategory: core
tags:
  - libreforge
outline: deep
---

# potion_effect <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当正在应用的药水效果与给定的效果类型之一匹配时匹配。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `potion_effect` |
| 所属模块 | libreforge |
| 分类 | Player, Entity |
| 取值类型 | `potion_effect[]` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  potion_effect: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_potion_effect`）：

```yaml
filters:
  not_potion_effect: <value>
```

> 💡 完整 `PotionEffectType` 取值列表见[枚举值速查表](../reference/enums/potion_effect_type)。

> **取值说明**：药水效果列表 → `PotionEffectType` key（见附录）

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/filters/impl/FilterPotionEffect.kt`）。

- **源码描述**: 当正在应用的药水效果与给定的效果类型之一匹配时匹配。

- **所属分类**: `player, entity`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
