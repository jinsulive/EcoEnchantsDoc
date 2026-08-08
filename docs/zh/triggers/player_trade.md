---
title: player_trade
titleEn: player_trade
category: triggers
subcategory: external
tags:
  - libreforge
  - axtrade
outline: deep
---

# player_trade <Badge type="info" text="libreforge" /> <Badge type="warning" text="AxTrade" />

> 当与玩家交易时触发（玩家 = 发起者，受害者 = 接受者）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `player_trade` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 交易的总物品数量（替代值：交易的货币量） |
| 需要 | AxTrade |

## 配置示例

```yaml
triggers:
  - player_trade
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 交易的总物品数量（替代值：交易的货币量） |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
