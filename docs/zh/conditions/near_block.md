---
title: near_block
titleEn: near_block
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# near_block <Badge type="info" text="libreforge" /> <Badge type="info" text="条件" />

> 当在实体周围立方体半径内找到指定类型的方块时通过。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `near_block` |
| 所属模块 | libreforge |
| 分类 | World |
| 组件类型 | 条件 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `block` | Block | ✅ | — | — | 要搜索的方块类型。 |
| `radius` | Integer | ✅ | — | — | 实体周围搜索的立方体半径。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionNearBlock.kt`）。

- **源码描述**: 当在实体周围立方体半径内找到指定类型的方块时通过。

- **所属分类**: `world`

## 配置示例

```yaml
- id: near_block
  args:
    block: <value>
    radius: <value>
```

## 关联页面

- [所有条件](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
