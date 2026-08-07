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

> Sets the unbreakable tag on an item

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_unbreakable` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `value` | True = apply unbreakable, False = remove unbreakable |
| `slot` | The slot to apply unbreakable (defaults to "holder") |
| `persist_on_disable` | If the unbreakable tag should persist when unequipped or effect deactivated |

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
