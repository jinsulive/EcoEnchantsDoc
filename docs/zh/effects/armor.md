---
title: armor
titleEn: armor
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# armor <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Gives armor points

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `armor` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `points` | The amount of points of armor to give |

## 配置示例

```yaml
- id: armor
  args:
    points: 4 # The amount of points of armor to give
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
