---
title: level_up_xp
titleEn: level_up_xp
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# level_up_xp <Badge type="info" text="libreforge" /> 

> Triggered when levelling up XP

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `level_up_xp` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The new level |

## 配置示例

```yaml
triggers:
  - level_up_xp
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The new level |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
