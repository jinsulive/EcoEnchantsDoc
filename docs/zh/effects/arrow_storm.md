---
title: arrow_storm
titleEn: arrow_storm
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# arrow_storm <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 向指定位置降下箭雨。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `arrow_storm` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression(数学表达式) | ✅ | — | — | 生成箭的数量。支持表达式。示例：`10 + %level%` |
| `height` | Expression(数学表达式) | ✅ | — | — | 目标位置上方的箭生成高度。支持表达式。 |
| `spread` | Expression(数学表达式) | ✅ | — | — | 箭生成位置的水平散布半径。支持表达式。示例：`3 + %level% * 0.3` |
| `damage` | Expression(数学表达式) | — | — | — | 每支箭造成的伤害。省略时使用箭的默认伤害。支持表达式。示例：`%level% * 2` |
| `respect_flame` | Boolean | — | `true` | — | 箭是否继承手持弓上的火焰附加附魔。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectArrowStorm.kt`）。

- **源码描述**: 在触发位置上方降下箭雨。
- **所属分类**: `combat`
- **需要触发器数据**: `LOCATION`
- **继承子配置**: 是（此效果继承子配置，详见对应子配置页）

## 配置示例

```yaml
- id: arrow_storm
  args:
    amount: 10 # The number of arrows to spawn
    height: 10 # The height above the target location to spawn arrows
    spread: 3 # The horizontal spread radius of the arrow spawn positions
    damage: 2.0 # (Optional) The damage each arrow deals
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
