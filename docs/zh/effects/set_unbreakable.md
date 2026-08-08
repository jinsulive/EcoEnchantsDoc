---
title: set_unbreakable
titleEn: set_unbreakable
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_unbreakable <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 在物品上设置不可破坏标签。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_unbreakable` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `value` | Boolean | — | `true` | — | True = 应用不可破坏，False = 移除不可破坏。 |
| `slot` | String | — | `holder` | — | 应用不可破坏的栏位（默认为 "holder"）。 |
| `persist_on_disable` | Boolean | — | `true` | — | 卸下装备或效果停用时是否保留不可破坏标签。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetUnbreakable.kt`）。

- **源码描述**: 效果激活期间，使指定栏位中的物品不可破坏。
- **所属分类**: `inventory`

## 配置示例

```yaml
- id: set_unbreakable
  args:
    value: true # True = apply unbreakable, False = remove unbreakable
    slot: holder # The slot to apply unbreakable (defaults to "holder")
    persist_on_disable: true # If the unbreakable tag should persist when unequipped or effect deactivated
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
