---
title: plant_custom_crop
titleEn: plant_custom_crop
category: triggers
subcategory: external
tags:
  - libreforge
  - customcrops
outline: deep
---

# plant_custom_crop <Badge type="info" text="libreforge" /> <Badge type="warning" text="CustomCrops" />

> Triggered when planting a custom crop

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `plant_custom_crop` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 1 |
| 需要 | CustomCrops |

## 配置示例

```yaml
triggers:
  - plant_custom_crop
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
