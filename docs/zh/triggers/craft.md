---
title: craft
titleEn: craft
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# craft <Badge type="info" text="libreforge" /> 

> Triggered when crafting an item

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `craft` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The amount of items crafted |

## 配置示例

```yaml
triggers:
  - craft
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The amount of items crafted |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
