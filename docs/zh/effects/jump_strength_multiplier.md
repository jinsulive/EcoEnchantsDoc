---
title: jump_strength_multiplier
titleEn: jump_strength_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# jump_strength_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies jump strength

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `jump_strength_multiplier` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier for jump strength |

## 配置示例

```yaml
- id: jump_strength_multiplier
  args:
    multiplier: 2.1 # The multiplier for jump strength
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
