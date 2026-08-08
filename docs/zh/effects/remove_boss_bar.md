---
title: remove_boss_bar
titleEn: remove_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# remove_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Removes a boss bar

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `remove_boss_bar` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `id` | String | ✅ | — | — | The ID of the boss bar to remove \| Source: The unique ID of the boss bar to remove. Supports placeholders. Example: `boss_%player_name%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveBossBar.kt`）。

- **源码描述**: Removes a currently displayed boss bar by its ID.
- **所属分类**: `visual`

## 配置示例

```yaml
- id: remove_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar to remove
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
