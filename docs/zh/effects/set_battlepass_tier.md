---
title: set_battlepass_tier
titleEn: set_battlepass_tier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_battlepass_tier <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Set the player's battlepass tier

> **需要依赖：** EcoBattlepass

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_battlepass_tier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `tier` | The tier to set |
| `battlepass` | The battlepass ID |

## 配置示例

```yaml
- id: set_battlepass_tier
  args:
    tier: 10 # The tier to set
    battlepass: example # The battlepass ID
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
