---
title: spawn_entity
titleEn: spawn_entity
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# spawn_entity <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Spawns an entity

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `spawn_entity` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `entity` | Entity | ✅ | — | — | The mob to spawn, takes a lookup string \| Source: The entity type to spawn at the trigger location. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSpawnEntity.kt`）。

- **源码描述**: Spawns an entity at the trigger location.
- **所属分类**: `entity`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: spawn_entity
  args:
    entity: cave_spider speed:100 # The mob to spawn, takes a lookup string
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
