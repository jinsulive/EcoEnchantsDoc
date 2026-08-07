---
title: dont_consume_lapis_chance
titleEn: dont_consume_lapis_chance
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# dont_consume_lapis_chance <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Prevents consuming lapis when enchanting items

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `dont_consume_lapis_chance` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `chance` | The chance to not consume lapis |

## 配置示例

```yaml
- id: dont_consume_lapis_chance
  args:
    chance: 20 # The chance to not consume lapis
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
