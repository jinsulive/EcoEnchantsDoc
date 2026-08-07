---
title: knockback_multiplier
titleEn: knockback_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# knockback_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies attack knockback

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `knockback_multiplier` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier for attack knockback |

## 配置示例

```yaml
- id: knockback_multiplier
  args:
    multiplier: 2 # The multiplier for attack knockback
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
