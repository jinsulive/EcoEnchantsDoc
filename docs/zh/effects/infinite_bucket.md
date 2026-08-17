---
title: infinite_bucket
titleEn: infinite_bucket
category: effects
subcategory: player
tags:
  - libreforge
outline: deep
---

# infinite_bucket <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 防止指定的桶类型被倒空，并自动重新填满。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `infinite_bucket` |
| 所属模块 | libreforge |
| 分类 | Player, World |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` / `types`（任一） | String List | ✅ | — | — | The bucket type(s) to make infinite. Use 'any' to apply to all bucket types. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectInfiniteBucket.kt`）。

- **源码描述**: 防止指定的桶类型被倒空，并自动重新填满。

- **所属分类**: `player, world`

## 配置示例

```yaml
- id: infinite_bucket
  args:
    type: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
