---
title: safe_fall_distance
titleEn: safe_fall_distance
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# safe_fall_distance <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Increases/decreases the distance you can fall without taking damage

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `safe_fall_distance` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `distance` | The extra distance |

## 配置示例

```yaml
- id: safe_fall_distance
  args:
    distance: 10.5 # The extra distance
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
