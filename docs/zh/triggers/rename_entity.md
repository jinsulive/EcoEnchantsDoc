---
title: rename_entity
titleEn: rename_entity
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# rename_entity <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />

> Triggered when a player renames an entity using a name tag

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `rename_entity` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |
| 需要 | Paper |

## 配置示例

```yaml
triggers:
  - rename_entity
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
