---
title: update_boss_bar
titleEn: update_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# update_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Updates a boss bar

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `update_boss_bar` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `id` | String | ✅ | — | — | The ID of the boss bar to update \| Source: The ID of the boss bar to update. Example: `boss_%player_name%` |
| `name` | String | — | `` | — | (Optional) The new name of the boss bar \| Source: The new display name of the boss bar. Supports placeholders. Example: `%player_name%'s Boss` |
| `color` | String | — | `` | — | (Optional) The new boss bar color (pink, blue, red, green, yellow, purple, white) \| Source: The new color of the boss bar (e.g. BLUE, RED). Example: `RED` |
| `style` | String | — | `` | — | (Optional) The new boss bar style (progress, notched_6, notched_10, notched_12, notched_20) \| Source: The new overlay style of the boss bar (e.g. PROGRESS, NOTCHED_10). Example: `NOTCHED_10` |
| `progress` | Expression(数学表达式) | — | `` | — | (Optional) The new percentage completion of the boss bar \| Source: The new progress value (0–100). Supports expressions. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectUpdateBossBar.kt`）。

- **源码描述**: Updates the properties of an existing boss bar created by create_boss_bar.
- **所属分类**: `visual`

## 配置示例

```yaml
- id: update_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar to update
    name: "Updated Boss Bar" # (Optional) The new name of the boss bar
    color: pink # (Optional) The new boss bar color (pink, blue, red, green, yellow, purple, white)
    style: notched_6 # (Optional) The new boss bar style (progress, notched_6, notched_10, notched_12, notched_20)
    progress: "%libreforge_boss_bar_my_boss_bar_progress% + 10" # (Optional) The new percentage completion of the boss bar
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
