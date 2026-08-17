---
title: skill_xp_multiplier
titleEn: skill_xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# skill_xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化技能经验值获取。

> **需要依赖：** AuraSkills

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `skill_xp_multiplier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | 经验值（XP）倍率。支持数学表达式。 |
| `skills` | String_list | — | — | — | 要应用倍率的 AuraSkills 技能 ID 列表。若省略，则应用于所有技能。 |

## 配置示例

```yaml
- id: skill_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    skills: # The list of skills to multiply xp for. If removed, it will multiply all skills.
      - mining
      - combat
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
