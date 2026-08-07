---
title: teleport_to
titleEn: teleport_to
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# teleport_to <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Teleport a player to a specific location

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `teleport_to` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `world` | The world name |
| `x` | The x-coordinate |
| `y` | The y-coordinate |
| `z` | The z-coordinate |

## 配置示例

```yaml
- id: teleport_to
  args:
    world: world_nether # The world name
    x: 100 # The x-coordinate
    y: 50 # The y-coordinate
    z: -581.2 # The z-coordinate
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
