---
title: claim_battlepass_reward
titleEn: claim_battlepass_reward
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecobattlepass
outline: deep
deprecated: true
---

# claim_battlepass_reward <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoBattlepass" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 当领取战斗通行证奖励时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `claim_battlepass_reward` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | 1 |
| 需要 | EcoBattlepass |

## 配置示例

```yaml
triggers:
  - claim_battlepass_reward
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
