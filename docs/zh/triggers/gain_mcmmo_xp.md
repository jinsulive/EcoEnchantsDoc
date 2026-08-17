---
title: gain_mcmmo_xp
titleEn: gain_mcmmo_xp
category: triggers
subcategory: external
tags:
  - libreforge
  - mcmmo
outline: deep
---

# gain_mcmmo_xp <Badge type="info" text="libreforge" /> <Badge type="warning" text="McMMO" />
> **需要依赖：** mcMMO

> 当获得 McMMO 经验值时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `gain_mcmmo_xp` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 获得的经验值 |
| 需要 | McMMO |

## 配置示例

```yaml
triggers:
  - gain_mcmmo_xp
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 获得的经验值 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
