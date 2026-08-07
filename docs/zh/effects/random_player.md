---
title: random_player
titleEn: random_player
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# random_player <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Runs effects for a random player on the server

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `random_player` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `effects` | The effects to run for the player |

## 配置示例

```yaml
- id: random_player
  args:
    effects: # The effects to run for the player
      - id: kick
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
