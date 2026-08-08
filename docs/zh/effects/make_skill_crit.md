---
title: make_skill_crit
titleEn: make_skill_crit
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# make_skill_crit <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 造成一次暴击。

> **需要依赖：** EcoSkills

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `make_skill_crit` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | 将攻击伤害以暴击形式倍率化。 |

## 配置示例

```yaml
- id: make_skill_crit
  args:
    multiplier: 1.5 # Multiplies attack damage as a crit
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
