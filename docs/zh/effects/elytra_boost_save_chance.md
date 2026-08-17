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
> **需要依赖：** Paper

> 使用鞘翅飞行加速时不消耗烟花。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `elytra_boost_save_chance` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `chance` | Expression | ✅ | — | — | The percentage chance (0–100) for this effect to activate. Supports expressions. |

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
