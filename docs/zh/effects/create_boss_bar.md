---
title: create_boss_bar
titleEn: create_boss_bar
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# create_boss_bar <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Creates a boss bar and shows it to the player

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `create_boss_bar` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `id` | String | ✅ | — | — | The ID of the boss bar \| Source: A unique identifier used to reference this boss bar with update_boss_bar or remove_boss_bar. |
| `name` | String | ✅ | — | — | The name of the boss bar \| Source: The display text shown on the boss bar. Supports placeholders. Example: `&6%player%'s Charge` |
| `color` | String | ✅ | — | `BLUE`, `GREEN`, `PINK`, `PURPLE`, `RED`, `WHITE`, `YELLOW` | The boss bar color (pink, blue, red, green, yellow, purple, white) \| Source: The boss bar color. |
| `style` | String | ✅ | — | `PROGRESS`, `NOTCHED_6`, `NOTCHED_10`, `NOTCHED_12`, `NOTCHED_20` | The boss bar style (progress, notched_6, notched_10, notched_12, notched_20) \| Source: The boss bar overlay style. |
| `progress` | Expression(数学表达式) | ✅ | — | — | The percentage completion of the boss bar \| Source: The fill percentage of the boss bar, from 0 to 100. Supports expressions. Example: `50 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCreateBossBar.kt`）。

- **源码描述**: Creates and displays a boss bar for the player.
- **所属分类**: `visual`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: create_boss_bar
  args:
    id: my_boss_bar # The ID of the boss bar
    name: "Example Boss Bar" # The name of the boss bar
    color: white # The boss bar color (pink, blue, red, green, yellow, purple, white)
    style: progress # The boss bar style (progress, notched_6, notched_10, notched_12, notched_20)
    progress: 100 # The percentage completion of the boss bar
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
