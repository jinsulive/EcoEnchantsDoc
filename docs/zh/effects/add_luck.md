---
title: add_luck
titleEn: add_luck
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# add_luck <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Adds luck

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_luck` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | 要添加的幸运值。支持数学表达式。 例: `%level% * 0.5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddLuck.kt`）。

- **源码描述**: 持有器激活期间，永久增加玩家的幸运属性。
- **所属分类**: `player`, `attribute`

## 配置示例

```yaml
- id: add_luck
  args:
    amount: 1.5 # The amount of luck to add
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
