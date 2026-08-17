---
title: at_war_with_victim
titleEn: at_war_with_victim
category: filters
subcategory: lands
tags:
  - libreforge
outline: deep
---

# at_war_with_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当玩家与受害者在 Lands 中处于（或未处于）交战状态时匹配。

> **需要依赖：** Lands

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `at_war_with_victim` |
| 所属模块 | libreforge |
| 分类 | Combat, Player |
| 取值类型 | `BOOLEAN` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  at_war_with_victim: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_at_war_with_victim`）：

```yaml
filters:
  not_at_war_with_victim: <value>
```

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/lands/impl/FilterAtWarWithVictim.kt`）。

- **源码描述**: 当玩家与受害者在 Lands 中处于（或未处于）交战状态时匹配。

- **所属分类**: `combat, player`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
