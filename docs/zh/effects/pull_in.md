---
title: pull_in
titleEn: pull_in
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# pull_in <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Pull the victim towards the player

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `pull_in` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `velocity` | The speed at which to be pulled (magnitude of the velocity vector) |

## 配置示例

```yaml
- id: pull_in
  args:
    velocity: 0.2 # The speed at which to be pulled (magnitude of the velocity vector)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
