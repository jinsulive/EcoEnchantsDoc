---
title: use_watering_can
titleEn: use_watering_can
category: triggers
subcategory: external
tags:
  - libreforge
  - customcrops
outline: deep
---

# use_watering_can <Badge type="info" text="libreforge" /> <Badge type="warning" text="CustomCrops" />
> **需要依赖：** CustomCrops

> 当使用洒水壶时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `use_watering_can` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 1 |
| 需要 | CustomCrops |

## 配置示例

```yaml
triggers:
  - use_watering_can
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
