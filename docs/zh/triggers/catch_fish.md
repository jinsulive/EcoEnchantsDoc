---
title: catch_fish
titleEn: catch_fish
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# catch_fish <Badge type="info" text="libreforge" /> 

> Triggered when catching a fish

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `catch_fish` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The experience dropped |

## 配置示例

```yaml
triggers:
  - catch_fish
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The experience dropped |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
