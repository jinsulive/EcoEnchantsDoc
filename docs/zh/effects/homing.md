---
title: homing
titleEn: homing
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# homing <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Makes projectiles hone in onto entities (homing arrows / tridents)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `homing` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `distance` | Expression(数学表达式) | ✅ | — | — | The distance to hone in from \| Source: The maximum range at which the arrow will lock on to a target. Supports expressions. Example: `10 + %level%` |
| `targets` | Entity List | — | `[]` | — | The whitelist of entities to target \| Source: A list of entity types the arrow will home in on. Leave empty to target all entities. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectHoming.kt`）。

- **源码描述**: Makes fired arrows home in on the nearest valid target within range.
- **所属分类**: `combat`
- **需要触发器数据**: `PROJECTILE`

## 配置示例

```yaml
- id: homing
  args:
      distance: 10 # The distance to hone in from
      targets: # (Optional) The whitelist of entities to target
        - zombie
        - skeleton
    ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
