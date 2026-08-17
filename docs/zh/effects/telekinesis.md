---
title: telekinesis
titleEn: telekinesis
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# telekinesis <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 将所有掉落物传送到玩家背包。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `telekinesis` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `on_tamed_mob_kills` | Boolean | — | `false` | — | 若为 true，则被驯服的生物击杀实体时也应用心灵传动（telekinesis）。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTelekinesis.kt`）。

- **源码描述**: 自动将方块、实体和钓鱼产生的所有掉落物与经验值直接送入玩家背包。
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: telekinesis
  args:
    on_tamed_mob_kills: false # If telekinesis will also work for tamed mob kills
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
