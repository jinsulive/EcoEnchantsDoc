---
title: villager_trade
titleEn: villager_trade
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# villager_trade <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />

> 当与村民交易时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `villager_trade` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 村民获得的经验值 |
| 需要 | Paper |

## 配置示例

```yaml
triggers:
  - villager_trade
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 村民获得的经验值 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
