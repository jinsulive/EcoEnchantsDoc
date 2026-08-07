---
title: reflect
titleEn: reflect
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# reflect <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Reflects a portion of incoming damage back to the attacker

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `reflect` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The fraction of incoming damage to reflect |

## 配置示例

```yaml
- id: reflect
  args:
    multiplier: 0.5 # The fraction of incoming damage to reflect
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
