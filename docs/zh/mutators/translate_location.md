---
title: translate_location
titleEn: translate_location
category: mutators
subcategory: location
tags:
  - libreforge
outline: deep
---

# translate_location <Badge type="info" text="libreforge" />

> Translate the location by specified x, y, and z values

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `translate_location` |
| 所属模块 | libreforge |
| 分类 | 位置（Location） |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `add_x` | The amount to add to x |
| `add_y` | The amount to add to y |
| `add-z` | The amount to add to z |

## 配置示例

```yaml
- id: translate_location
  args:
    add_x: -0.1 # The amount to add to x
    add_y: 2.0 # The amount to add to y
    add-z: 0 # The amount to add to z
```

## 关联页面

- [所有变异器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
