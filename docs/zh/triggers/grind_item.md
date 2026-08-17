---
title: grind_item
titleEn: grind_item
category: triggers
subcategory: internal
tags:
  - libreforge
  - purpur
outline: deep
---

# grind_item <Badge type="info" text="libreforge" /> <Badge type="warning" text="Purpur" />
> **需要依赖：** Purpur

> 当玩家在砂轮上打磨物品时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `grind_item` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 获得的经验值 |
| 需要 | Purpur |

## 配置示例

```yaml
triggers:
  - grind_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 获得的经验值 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
