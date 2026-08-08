---
title: give_edprison_pouch
titleEn: give_edprison_pouch
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# give_edprison_pouch <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 给予玩家一个 EdPrison 袋囊。

> **需要依赖：** EdPrison

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_edprison_pouch` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | 袋囊类型 ID。 |
| `unlocked` | 袋囊是否已解锁。 |

## 配置示例

```yaml
- id: give_edprison_pouch
  args:
    type: blocks # the ID of the pouch type
    unlocked: true # Whether the pouch is unlocked
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
