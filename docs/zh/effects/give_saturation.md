---
title: give_saturation
titleEn: give_saturation
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_saturation <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 给予玩家饱和值。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_saturation` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | 要添加的饱和度数值。支持数学表达式。 例: `%level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveSaturation.kt`）。

- **源码描述**: 为玩家恢复指定数量的饱和值，上限为 20。
- **所属分类**: `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: give_saturation
  args:
    amount: 1.0 # The amount of saturation to give/take (allows negative values)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
