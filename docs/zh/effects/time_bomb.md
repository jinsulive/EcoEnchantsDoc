---
title: time_bomb
titleEn: time_bomb
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# time_bomb <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Plants a timed explosion on an entity that detonates after a fuse duration

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `time_bomb` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `fuse` | The delay in ticks before the explosion |
| `power` | The explosion power |
| `break_blocks` | (Optional) Whether the explosion breaks blocks, defaults to false |
| `glow` | (Optional) Whether the entity glows while the fuse is active, defaults to true |

## 配置示例

```yaml
- id: time_bomb
  args:
    fuse: 60 # The delay in ticks before the explosion
    power: 3.0 # The explosion power
    break_blocks: false # (Optional) Whether the explosion breaks blocks, defaults to false
    glow: true # (Optional) Whether the entity glows while the fuse is active, defaults to true
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
