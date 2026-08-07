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

> Triggered when trading with a player (player = initiator, victim = recipricant)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `player_trade` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | The total amount of items traded (alt-value: currency traded) |
| 需要 | AxTrade |

## 配置示例

```yaml
triggers:
  - player_trade
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The total amount of items traded (alt-value: currency traded) |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
