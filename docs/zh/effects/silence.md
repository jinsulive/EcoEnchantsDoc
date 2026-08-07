---
title: silence
titleEn: silence
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# silence <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Silences an entity so it cannot make sounds for a duration

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `silence` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `ticks` | The duration in ticks to silence the entity |

## 配置示例

```yaml
- id: silence
  args:
    ticks: 100 # The duration in ticks to silence the entity
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
