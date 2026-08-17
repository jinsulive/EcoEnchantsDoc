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

> 创建 Boss 血条并展示给玩家。

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
| `id` | String | ✅ | — | — | 用于通过 update_boss_bar 或 remove_boss_bar 引用该 Boss 血条的唯一标识符。 |
| `name` | String | ✅ | — | — | Boss 血条上显示的文本。支持占位符。 例: `&6%player%'s Charge` |
| `color` | String | ✅ | — | `BLUE`, `GREEN`, `PINK`, `PURPLE`, `RED`, `WHITE`, `YELLOW` | Boss 血条颜色。 |
| `style` | String | ✅ | — | `PROGRESS`, `NOTCHED_6`, `NOTCHED_10`, `NOTCHED_12`, `NOTCHED_20` | Boss 血条覆盖样式。 |
| `progress` | Expression | ✅ | — | — | Boss 血条的填充百分比，0 到 100。支持数学表达式。 例: `50 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCreateBossBar.kt`）。

- **源码描述**: 为玩家创建并显示一个 Boss 血条。
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
