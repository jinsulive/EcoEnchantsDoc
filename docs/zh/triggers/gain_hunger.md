---
title: gain_hunger
titleEn: gain_hunger
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# gain_hunger <Badge type="info" text="libreforge" /> 

> Triggered when gaining hunger points

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `gain_hunger` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The hunger gained |

## 配置示例

```yaml
triggers:
  - gain_hunger
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The hunger gained |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
