---
title: movement_efficiency_multiplier
titleEn: movement_efficiency_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# movement_efficiency_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies movement speed through difficult terrain

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `movement_efficiency_multiplier` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier for movement efficiency |

## 配置示例

```yaml
- id: movement_efficiency_multiplier
  args:
    multiplier: 1.5 # The multiplier for movement efficiency
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
