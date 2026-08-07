---
title: gain_battlepass_xp
titleEn: gain_battlepass_xp
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecobattlepass
outline: deep
---

# gain_battlepass_xp <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoBattlepass" />

> Triggered when gaining battlepass XP

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `gain_battlepass_xp` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | The experience gained |
| 需要 | EcoBattlepass |

## 配置示例

```yaml
triggers:
  - gain_battlepass_xp
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The experience gained |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
