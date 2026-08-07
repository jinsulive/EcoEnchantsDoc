---
title: pet_xp_multiplier
titleEn: pet_xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# pet_xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies pet xp gain

> **需要依赖：** EcoPets

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `pet_xp_multiplier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The experience multiplier |
| `pets` | The list of pets to multiply xp for. If removed, it will multiply all pets. |

## 配置示例

```yaml
- id: pet_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    pets: # The list of pets to multiply xp for. If removed, it will multiply all pets.
      - tiger
      - golem
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
