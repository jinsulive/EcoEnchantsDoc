---
title: leave_land
titleEn: leave_land
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# leave_land <Badge type="info" text="libreforge" /> 
> **需要依赖：** Lands

> 当离开城镇时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `leave_land` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 配置示例

```yaml
triggers:
  - leave_land
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
