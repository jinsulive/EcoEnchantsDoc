---
title: in_slot
titleEn: in_slot
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# in_slot <Badge type="info" text="libreforge" />

> 需要物品（例如 EcoItem、附魔物品、重铸物品）位于某个栏位。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `in_slot` |
| 所属模块 | libreforge |
| 分类 | 物品与装备（Items & Equipment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `slot` | String List | ✅ | — | — | 要检查的栏位——例如 mainhand、offhand、armor 或数字快捷栏索引。示例：`mainhand, 9` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInSlot.kt`）。

- **源码描述**: 当激活的物品持有器位于指定装备栏位之一时通过。
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: in_slot
  args:
    slot: mainhand # The slot
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
