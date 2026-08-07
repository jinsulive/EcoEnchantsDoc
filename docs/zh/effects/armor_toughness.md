---
title: armor_toughness
titleEn: armor_toughness
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# armor_toughness <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Gives armor toughness

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `armor_toughness` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `points` | The amount of armor toughness points to give |

## 配置示例

```yaml
- id: armor_toughness
  args:
    points: 8 # The amount of armor toughness points to give
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
