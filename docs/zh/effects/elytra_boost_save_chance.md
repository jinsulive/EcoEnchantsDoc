---
title: elytra_boost_save_chance
titleEn: elytra_boost_save_chance
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# elytra_boost_save_chance <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 使用鞘翅飞行加速时不消耗烟花。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `elytra_boost_save_chance` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `chance` | 不消耗烟花的概率。 |

## 配置示例

```yaml
- id: elytra_boost_save_chance
  args:
    chance: 20 # The chance to not consume a firework
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
