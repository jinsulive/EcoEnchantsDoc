---
title: shuffle_hotbar
titleEn: shuffle_hotbar
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# shuffle_hotbar <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 打乱受害者的快捷栏。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shuffle_hotbar` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| — | — | — | — | — | 该组件无参数。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectShuffleHotbar.kt`）。

- **源码描述**: 随机打乱受害者快捷栏中的物品。
- **所属分类**: `inventory`, `player`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: shuffle_hotbar
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
