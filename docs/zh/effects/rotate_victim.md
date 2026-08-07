---
title: rotate_victim
titleEn: rotate_victim
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# rotate_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Spin the victim around

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `rotate_victim` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `angle` | The angle to rotate / spin (in degrees) |

## 配置示例

```yaml
- id: rotate_victim
  args:
    angle: 180 # The angle to rotate / spin (in degrees)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
