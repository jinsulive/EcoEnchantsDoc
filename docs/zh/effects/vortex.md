---
title: vortex
titleEn: vortex
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# vortex <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 在一段时间内将附近的实体拉向指定位置，然后对其造成伤害。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `vortex` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `radius` | Expression | ✅ | — | — | The radius within which entities will be pulled toward the vortex. Supports expressions. 例: `5 + %level% * 0.5` |
| `duration` | Expression | ✅ | — | — | How many ticks to pull entities before dealing damage. Supports expressions. 例: `20 * %level%` |
| `damage` | Expression | ✅ | — | — | The damage dealt to all affected entities at the end of the vortex. Supports expressions. 例: `%level% * 2` |
| `pull_strength` | Expression | — | `0.3` | — | How strongly entities are pulled per tick. Supports expressions. 例: `0.1 + %level% * 0.02` |
| `whitelist` | Entity List | — | — | — | A list of entity types to exclusively target. If omitted, all entities are targeted. |
| `blacklist` | Entity List | — | — | — | A list of entity types to exclude from the vortex. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectVortex.kt`）。

- **源码描述**: 在一段时间内将附近的实体拉向触发位置，然后对所有受影响的实体造成伤害。
- **所属分类**: `movement`, `combat`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: vortex
  args:
    radius: 6 # The radius in blocks to pull entities from
    duration: 40 # The duration in ticks to pull entities
    damage: 5.0 # The damage dealt to all affected entities at the end
    pull_strength: 0.3 # (Optional) The strength of the pull each tick, defaults to 0.3
    whitelist: # (Optional) A list of entity types to pull, if not specified all entities will be pulled
      - zombie
      - skeleton
    blacklist: # (Optional) A list of entity types to ignore, if not specified no entities will be ignored
      - ender_dragon
      - wither
      - warden
      - elder_guardian
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
