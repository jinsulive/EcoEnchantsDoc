---
title: name_entity
titleEn: name_entity
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# name_entity <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Set the display name of an entity

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `name_entity` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `name` | The name to set |

## 配置示例

```yaml
- id: name_entity
  args:
    name: "&cTagged!" # The name to set
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
