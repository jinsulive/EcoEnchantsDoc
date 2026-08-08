---
title: place_block
titleEn: place_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# place_block <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 在指定位置放置方块，可选在一段时间后恢复。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `place_block` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `block` | Block | ✅ | — | — | 要放置的方块（eco 方块 ID）。 |
| `duration` | Expression(数学表达式) | — | — | — | （可选）恢复原方块前的游戏刻数。省略则永久放置。支持表达式。示例：`20 * %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPlaceBlock.kt`）。

- **源码描述**: 在触发位置放置方块，可选在一段时间后恢复。
- **所属分类**: `world`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: place_block
  args:
    block: stone # The block to place (eco block ID)
    duration: 60 # (Optional) Ticks before the original block is restored
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
