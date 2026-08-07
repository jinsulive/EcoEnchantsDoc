---
title: mining_efficiency
titleEn: mining_efficiency
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mining_efficiency <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Adds mining efficiency (mining speed when using the correct tool)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `mining_efficiency` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The extra mining efficiency |

## 配置示例

```yaml
- id: mining_efficiency
  args:
    amount: 5 # The extra mining efficiency
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
