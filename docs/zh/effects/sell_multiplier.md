---
title: sell_multiplier
titleEn: sell_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# sell_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies money gained from selling items

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `sell_multiplier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The sell multiplier |

## 配置示例

```yaml
- id: sell_multiplier
  args:
    multiplier: 1.05 # The sell multiplier
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
