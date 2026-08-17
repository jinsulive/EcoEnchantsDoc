---
title: cast_mythic_skill
titleEn: cast_mythic_skill
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# cast_mythic_skill <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 对目标施放 MythicMobs 技能。

> **需要依赖：** MythicMobs

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `cast_mythic_skill` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `skill` | String | ✅ | — | — | 要施放的 MythicMobs 技能名称。 |
| `victim_to_player` | Boolean | — | `false` | — | 是否以施法玩家而非受害者为目标。默认为 false。 |

## 配置示例

```yaml
- id: cast_mythic_skill
  args:
    skill: "skill ID" # The ID of the skill to cast
    victim_to_player: true # For passive skill, set it to true.
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
