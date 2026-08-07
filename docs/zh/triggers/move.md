---
title: move
titleEn: move
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# move <Badge type="info" text="libreforge" /> 

> Triggered on all movement: looking around, walking

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `move` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The distance moved |

## 配置示例

```yaml
triggers:
  - move
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The distance moved |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
