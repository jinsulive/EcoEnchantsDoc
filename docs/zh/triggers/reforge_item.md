---
title: reforge_item
titleEn: reforge_item
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - reforges
outline: deep
---

# reforge_item <Badge type="info" text="libreforge" /> <Badge type="warning" text="Reforges" />

> Triggered when reforging an item

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `reforge_item` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | The reforge cost |
| 需要 | Reforges |

## 配置示例

```yaml
triggers:
  - reforge_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The reforge cost |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
