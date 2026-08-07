---
title: xp_multiplier
titleEn: xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies incoming xp gain

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `xp_multiplier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The xp multiplier |

## 配置示例

```yaml
- id: xp_multiplier
  args:
    multiplier: 2.05 # The xp multiplier
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
