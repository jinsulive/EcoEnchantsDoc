---
title: quest_xp_multiplier
titleEn: quest_xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# quest_xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies quest xp gain

> **需要依赖：** EcoQuests

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `quest_xp_multiplier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The experience multiplier |
| `quests` | The list of quests to multiply xp for. If removed, it will multiply all quests. |

## 配置示例

```yaml
- id: quest_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    quests: # The list of quests to multiply xp for. If removed, it will multiply all quests.
      - daily_1
      - weekly_1
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
