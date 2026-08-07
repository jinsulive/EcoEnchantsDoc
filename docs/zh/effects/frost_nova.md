---
title: frost_nova
titleEn: frost_nova
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# frost_nova <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Freezes and slows nearby entities in a radius

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `frost_nova` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `radius` | The radius in blocks |
| `freeze_ticks` | The number of ticks to freeze entities |
| `slow_duration` | The duration in ticks to apply slowness |
| `slow_amplifier` | The amplifier of the slowness effect |

## 配置示例

```yaml
- id: frost_nova
  args:
    radius: 5 # The radius in blocks
    freeze_ticks: 60 # The number of ticks to freeze entities
    slow_duration: 100 # (Optional) The duration in ticks to apply slowness
    slow_amplifier: 1 # (Optional) The amplifier of the slowness effect
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
