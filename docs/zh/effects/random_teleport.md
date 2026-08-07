---
title: random_teleport
titleEn: random_teleport
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# random_teleport <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Teleports the player to a random location within a radius

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `random_teleport` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `radius` | The maximum distance in blocks from the player |
| `min_radius` | (Optional) The minimum distance in blocks from the player |

## 配置示例

```yaml
- id: random_teleport
  args:
    radius: 50 # The maximum distance in blocks from the player
    min_radius: 10 # (Optional) The minimum distance in blocks from the player
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
