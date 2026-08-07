---
title: level_up_item
titleEn: level_up_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# level_up_item <Badge type="info" text="libreforge" /> 

> Triggered when levelling up an item

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `level_up_item` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The new item level |

## 配置示例

```yaml
triggers:
  - level_up_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The new item level |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
