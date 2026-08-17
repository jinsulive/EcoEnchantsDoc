---
title: entity_reach
titleEn: entity_reach
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# entity_reach <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 增加与实体交互的距离。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `entity_reach` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `reach` | Expression | ✅ | — | — | 要添加到实体交互范围的方块数量。支持数学表达式。 例: `%level% * 0.5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectEntityReach.kt`）。

- **源码描述**: 持有器激活期间，增加玩家与实体的交互距离。
- **所属分类**: `player`, `attribute`

## 配置示例

```yaml
- id: entity_reach
  args:
    reach: 1 # The extra entity reach
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
