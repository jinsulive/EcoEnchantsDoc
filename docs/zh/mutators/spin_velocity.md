---
title: spin_velocity
titleEn: spin_velocity
category: mutators
subcategory: rotation
tags:
  - libreforge
outline: deep
---

# spin_velocity <Badge type="info" text="libreforge" />

> Rotate a velocity around the y axis

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `spin_velocity` |
| 所属模块 | libreforge |
| 分类 | 旋转（Rotation） |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `angle` | The angle to spin around, in degrees |

## 配置示例

```yaml
- id: spin_velocity
  args:
    angle: 15 # The angle to spin around, in degrees
```

## 关联页面

- [所有变异器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
