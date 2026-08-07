---
title: blink
titleEn: blink
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# blink <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Teleports the player forward in the direction they are looking, stopping at solid blocks

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `blink` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `distance` | The maximum number of blocks to teleport forward |

## 配置示例

```yaml
- id: blink
  args:
    distance: 10 # The maximum number of blocks to teleport forward
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
