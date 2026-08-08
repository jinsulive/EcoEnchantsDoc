---
title: spin_location
titleEn: spin_location
category: mutators
subcategory: rotation
tags:
  - libreforge
outline: deep
---

# spin_location <Badge type="info" text="libreforge" />

> Spin a location a certain angle with a radius away from its current position - for example spinning the location 90 degrees at a distance of 1 block

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `spin_location` |
| 所属模块 | libreforge |
| 分类 | 旋转（Rotation） |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `angle` | Expression(数学表达式) | ✅ | — | — | The angle to spin around, in degrees \| Source: The angle in degrees to rotate around the Y axis. Example: `%level% * 10` |
| `distance` | Expression(数学表达式) | ✅ | — | — | The distance from the current location, in the direction the location is facing \| Source: The distance from the current location to offset in the rotated direction. Example: `1 + %level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorSpinLocation.kt`）。

- **源码描述**: Offsets the location by a distance in a direction rotated from the current facing direction.
- **所属分类**: `location`

## 配置示例

```yaml
- id: spin_location
  args:
    angle: 15 # The angle to spin around, in degrees
    distance: 1 # The distance from the current location, in the direction the location is facing
```

## 关联页面

- [所有变异器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
