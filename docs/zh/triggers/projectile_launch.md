---
title: projectile_launch
titleEn: projectile_launch
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# projectile_launch <Badge type="info" text="libreforge" /> 

> Triggered when launching a projectile (arrow, trident, splash potion, egg, snowball)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `projectile_launch` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 配置示例

```yaml
triggers:
  - projectile_launch
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
