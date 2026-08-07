---
title: victim_speed_multiplier
titleEn: victim_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# victim_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Temporarily multiplies victim movement speed

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `victim_speed_multiplier` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier for movement speed |
| `duration` | The duration (in ticks) |

## 配置示例

```yaml
- id: victim_speed_multiplier
  args:
    multiplier: 1.5 # The multiplier for movement speed
    duration: 50 # The duration (in ticks)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
