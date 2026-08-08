---
title: magic_regen_multiplier
titleEn: magic_regen_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# magic_regen_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化魔力恢复。

> **需要依赖：** EcoSkills

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `magic_regen_multiplier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | 魔力恢复倍率。 |
| `types` | 要倍率化经验值的魔力类型列表。移除后将对所有类型生效。 |

## 配置示例

```yaml
- id: magic_regen_multiplier
  args:
    multiplier: 1.5 # The regen multiplier
    types: # The list of magic types to multiply xp for. If removed, it will multiply all types.
      - mana
      - flux
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
