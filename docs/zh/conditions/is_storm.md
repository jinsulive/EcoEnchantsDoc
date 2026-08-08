---
title: is_storm
titleEn: is_storm
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# is_storm <Badge type="info" text="libreforge" />

> Requires a player to be in a storm

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `is_storm` |
| 所属模块 | libreforge |
| 分类 | 世界与环境（World & Environment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsStorm.kt`）。

- **源码描述**: Passes when the world is experiencing a storm.
- **所属分类**: `world`

## 配置示例

```yaml
- id: is_storm
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
