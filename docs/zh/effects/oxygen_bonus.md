---
title: oxygen_bonus
titleEn: oxygen_bonus
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# oxygen_bonus <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Adds oxygen bonus

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `oxygen_bonus` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of oxygen bonus to add |

## 配置示例

```yaml
- id: oxygen_bonus
  args:
    amount: 1.5 # The amount of oxygen bonus to add
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
