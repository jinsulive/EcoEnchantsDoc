---
title: set_nearby_blocks
titleEn: set_nearby_blocks
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# set_nearby_blocks <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将触发位置周围立方体半径内的所有方块设置为指定方块类型。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_nearby_blocks` |
| 所属模块 | libreforge |
| 分类 | World |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `block` | Block | ✅ | — | — | The block type to fill the area with. |
| `radius` | Expression | ✅ | — | — | The radius of the cube around the trigger location. 例: `3 + %level% * 0.3` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetNearbyBlocks.kt`）。

- **源码描述**: 将触发位置周围立方体半径内的所有方块设置为指定方块类型。

- **所属分类**: `world`

## 配置示例

```yaml
- id: set_nearby_blocks
  args:
    block: <value>
    radius: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
