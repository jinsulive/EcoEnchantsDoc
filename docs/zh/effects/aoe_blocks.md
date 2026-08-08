---
title: aoe_blocks
titleEn: aoe_blocks
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# aoe_blocks <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Runs effects for all blocks within an area of effect (the list of shapes is found in the aoe page)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `aoe_blocks` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `effects` | Effect List | ✅ | — | — | The effects to run for each block \| Source: The effects to run on each block within the AOE. |
| `shape` | String | ✅ | — | `circle`, `cone`, `offset_circle`, `scan_in_front`, `beam` | The shape of the AOE area \| Source: The AOE shape to use. |
| `radius` | Custom | — | — | — | The radius of the cone |
| `distance` | Custom | — | — | — | The length of the beam |
| `pierce_blocks` | Custom | — | — | — | If the beam should pass through blocks |
| `pierce_entities` | Custom | — | — | — | If the beam should pass through entities |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAOEBlocks.kt`）。

- **源码描述**: Runs a set of effects on all non-air blocks within an AOE shape.
- **所属分类**: `meta`
- **继承子配置**: 是（此效果继承子配置，详见对应子配置页）

## 配置示例

```yaml
- id: aoe_blocks
  args:
    effects: # The effects to run for each block
      - id: break_block
    shape: beam # The shape of the AOE area (see above)
    radius: 3 # The radius of the cone (see above)
    distance: 15 # The length of the beam (see above)
    pierce_blocks: true # If the beam should pass through blocks (see above)
    pierce_entities: true # If the beam should pass through entities (see above)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
