---
title: set_block
titleEn: set_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# set_block <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Set a block

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_block` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `block` | Block | ✅ | — | — | The block type to place at the trigger location. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetBlock.kt`）。

- **源码描述**: 将触发位置的方块设置为指定的方块类型。
- **所属分类**: `world`
- **需要触发器数据**: `BLOCK`

## 配置示例

```yaml
- id: set_block
  args:
    block: diamond_ore # The block to set to
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
