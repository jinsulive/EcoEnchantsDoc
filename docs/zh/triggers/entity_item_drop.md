---
title: entity_item_drop
titleEn: entity_item_drop
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# entity_item_drop <Badge type="info" text="libreforge" /> 

> Triggered when a killed entity drops loot

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `entity_item_drop` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The amount of items dropped |

## 配置示例

```yaml
triggers:
  - entity_item_drop
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The amount of items dropped |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
