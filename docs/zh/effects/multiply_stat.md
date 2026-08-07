---
title: multiply_stat
titleEn: multiply_stat
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# multiply_stat <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies a stat by a specific value

> **需要依赖：** EcoSkills

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_stat` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `stat` | The name of the stat |
| `multiplier` | The amount to multiply the stat by |

## 配置示例

```yaml
- id: multiply_stat
  args:
    stat: speed # The name of the stat
    multiplier: 0.75 # The amount to multiply the stat by
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
