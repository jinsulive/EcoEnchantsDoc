---
title: piercing
titleEn: piercing
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# piercing <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Makes projectiles pass through other entities (collaterals), like the Piercing enchantment.

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `piercing` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `level` | The piercing level, i.e. the amount of entities that the projectile should go through |

## 配置示例

```yaml
- id: piercing
  args:
      level: 3 # The piercing level, i.e. the amount of entities that the projectile should go through
    ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
