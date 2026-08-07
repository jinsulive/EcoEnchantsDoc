---
title: villager_trade_multiplier
titleEn: villager_trade_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# villager_trade_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies the cost of villager trades

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `villager_trade_multiplier` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The multiplier for villager trade costs |

## 配置示例

```yaml
- id: villager_trade_multiplier
  args:
    multiplier: 0.5 # The multiplier for villager trade costs
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
