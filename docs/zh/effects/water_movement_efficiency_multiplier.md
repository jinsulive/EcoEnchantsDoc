---
title: water_movement_efficiency_multiplier
titleEn: water_movement_efficiency_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# water_movement_efficiency_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies water movement efficiency

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `water_movement_efficiency_multiplier` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier for water movement efficiency |

## 配置示例

```yaml
- id: water_movement_efficiency_multiplier
  args:
    multiplier: 2 # The multiplier for water movement efficiency
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
