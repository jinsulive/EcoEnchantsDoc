---
title: has_mcmmo_skill_level
titleEn: has_mcmmo_skill_level
category: conditions
subcategory: mcmmo
tags:
  - libreforge
outline: deep
---

# has_mcmmo_skill_level <Badge type="info" text="libreforge" /> <Badge type="info" text="条件" />

> 当玩家的 mcMMO 技能等级达到或超过指定等级时通过。

> **需要依赖：** mcMMO

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_mcmmo_skill_level` |
| 所属模块 | libreforge |
| 分类 | Player, Economy |
| 组件类型 | 条件 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `skill` | String | ✅ | — | — | mcMMO 主技能名称（例如 MINING、WOODCUTTING）。 |
| `level` | Integer | ✅ | — | — | 所需的最低技能等级。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/mcmmo/impl/ConditionHasMcMMOLevel.kt`）。

- **源码描述**: 当玩家的 mcMMO 技能等级达到或超过指定等级时通过。

- **所属分类**: `player, economy`

## 配置示例

```yaml
- id: has_mcmmo_skill_level
  args:
    skill: <value>
    level: <value>
```

## 关联页面

- [所有条件](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
