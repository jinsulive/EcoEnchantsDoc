---
title: place_block
titleEn: place_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# place_block <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Places a block at a location, optionally reverting it after a duration

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `place_block` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `block` | The block to place (eco block ID) |
| `duration` | (Optional) Ticks before the original block is restored |

## 配置示例

```yaml
- id: place_block
  args:
    block: stone # The block to place (eco block ID)
    duration: 60 # (Optional) Ticks before the original block is restored
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
