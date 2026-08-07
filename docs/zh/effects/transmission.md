---
title: transmission
titleEn: transmission
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# transmission <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Teleport a player forward in the direction they're facing (Like AotE)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `transmission` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `distance` | The distance to teleport |

## 配置示例

```yaml
- id: transmission
  args:
    distance: 5 # The distance to teleport
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
