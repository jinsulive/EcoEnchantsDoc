---
title: shoot_bow
titleEn: shoot_bow
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# shoot_bow <Badge type="info" text="libreforge" /> 

> Triggered when shooting a bow

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shoot_bow` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The force the bow was shot at between 0 and 1 |

## 配置示例

```yaml
triggers:
  - shoot_bow
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The force the bow was shot at between 0 and 1 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
