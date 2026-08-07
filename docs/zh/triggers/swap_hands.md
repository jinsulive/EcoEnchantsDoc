---
title: swap_hands
titleEn: swap_hands
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# swap_hands <Badge type="info" text="libreforge" /> 

> Triggered when swapping items in hands (F by default)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `swap_hands` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 配置示例

```yaml
triggers:
  - swap_hands
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
