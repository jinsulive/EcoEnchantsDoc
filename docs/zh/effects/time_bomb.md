---
title: time_bomb
titleEn: time_bomb
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# time_bomb <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Plants a timed explosion on an entity that detonates after a fuse duration

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `time_bomb` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `fuse` | Expression(数学表达式) | ✅ | — | — | The delay in ticks before the explosion \| Source: How many ticks before the explosion occurs. Supports expressions. Example: `20 * %level%` |
| `power` | Expression(数学表达式) | ✅ | — | — | The explosion power \| Source: The power of the explosion. Vanilla TNT is 4. Supports expressions. |
| `break_blocks` | Boolean | — | `false` | — | (Optional) Whether the explosion breaks blocks, defaults to false \| Source: Whether the explosion breaks blocks. |
| `glow` | Boolean | — | `true` | — | (Optional) Whether the entity glows while the fuse is active, defaults to true \| Source: Whether the victim glows while waiting for the explosion. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTimeBomb.kt`）。

- **源码描述**: Marks the victim to explode after a fuse delay, with an optional glow effect while the timer counts down.
- **所属分类**: `combat`, `world`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: time_bomb
  args:
    fuse: 60 # The delay in ticks before the explosion
    power: 3.0 # The explosion power
    break_blocks: false # (Optional) Whether the explosion breaks blocks, defaults to false
    glow: true # (Optional) Whether the entity glows while the fuse is active, defaults to true
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
