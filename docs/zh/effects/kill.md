---
title: kill
titleEn: kill
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# kill <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 杀死受害者。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `kill` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKill.kt`）。

- **源码描述**: 立即杀死受害者实体。
- **所属分类**: `combat`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: kill
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
