---
title: location_to_cursor
titleEn: location_to_cursor
category: mutators
subcategory: location
tags:
  - libreforge
outline: deep
---

# location_to_cursor <Badge type="info" text="libreforge" />

> Move the location to where you or the victim are looking

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `location_to_cursor` |
| 所属模块 | libreforge |
| 分类 | 位置（Location） |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `target` | String | ✅ | — | `block`, `entity` | The target location (either block or entity) \| Source: The entity or block to target with the raytrace. |
| `start` | String | ✅ | — | `player`, `victim` | Where to raytrace from (either player or victim) \| Source: The entity to raytrace from. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorLocationToCursor.kt`）。

- **源码描述**: Sets the location to the position of the entity or block at the player's or victim's cursor.
- **所属分类**: `location`

## 配置示例

```yaml
- id: location_to_cursor
  args:
    target: block # The target location (either block or entity)
    start: player # Where to raytrace from (either player or victim)
```

## 关联页面

- [所有变异器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
