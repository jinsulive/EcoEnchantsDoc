---
title: keep_level
titleEn: keep_level
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# keep_level <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 使玩家死亡后保留经验等级。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `keep_level` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| — | — | — | — | — | 该组件无参数。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKeepLevel.kt`）。

- **源码描述**: 防止玩家死亡时丢失经验等级。
- **所属分类**: `economy`, `player`

## 配置示例

```yaml
- id: keep_level
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
