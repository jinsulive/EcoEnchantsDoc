---
title: multiply_all_stats
titleEn: multiply_all_stats
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# multiply_all_stats <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 将所有属性乘以指定值。

> **需要依赖：** EcoSkills

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_all_stats` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | 属性要乘以的数值。 |

## 配置示例

```yaml
- id: multiply_all_stats
  args:
    multiplier: 0.75 # The amount to multiply the stats by
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
