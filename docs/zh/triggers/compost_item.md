---
title: compost_item
titleEn: compost_item
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# compost_item <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />

> 当玩家使用堆肥桶时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `compost_item` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1（替代值：堆肥桶等级提升时为 1） |
| 需要 | Paper |

## 配置示例

```yaml
triggers:
  - compost_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 1（替代值：堆肥桶等级提升时为 1） |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
