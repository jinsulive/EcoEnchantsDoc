---
title: telekinesis
titleEn: telekinesis
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# telekinesis <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Teleports all drops to the player's inventory

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `telekinesis` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `on_tamed_mob_kills` | If telekinesis will also work for tamed mob kills |

## 配置示例

```yaml
- id: telekinesis
  args:
    on_tamed_mob_kills: false # If telekinesis will also work for tamed mob kills
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
