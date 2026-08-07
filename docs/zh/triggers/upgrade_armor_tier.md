---
title: upgrade_armor_tier
titleEn: upgrade_armor_tier
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoarmor
outline: deep
---

# upgrade_armor_tier <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoArmor" />

> Triggered when a player upgrades an armor tier

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `upgrade_armor_tier` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | The tier ID |
| 需要 | EcoArmor |

## 配置示例

```yaml
triggers:
  - upgrade_armor_tier
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The tier ID |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
