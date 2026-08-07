---
title: stun
titleEn: stun
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# stun <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Prevents an entity from moving by zeroing its velocity each tick for a duration

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `stun` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `ticks` | The duration in ticks to stun the entity |

## 配置示例

```yaml
- id: stun
  args:
    ticks: 60 # The duration in ticks to stun the entity
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
