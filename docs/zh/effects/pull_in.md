---
title: pull_in
titleEn: pull_in
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# pull_in <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将受害者拉向玩家。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `pull_in` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `velocity` | Expression | ✅ | — | — | 应用于受害者的牵引力强度。支持数学表达式。 例: `1 + %level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPullIn.kt`）。

- **源码描述**: 以指定速度将受害者拉向玩家。
- **所属分类**: `movement`, `combat`
- **需要触发器数据**: `PLAYER`, `VICTIM`

## 配置示例

```yaml
- id: pull_in
  args:
    velocity: 0.2 # The speed at which to be pulled (magnitude of the velocity vector)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
