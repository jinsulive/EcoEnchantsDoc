---
title: jobs_xp_multiplier
titleEn: jobs_xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# jobs_xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化职业获得的经验值。

> **需要依赖：** Jobs Reborn

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `jobs_xp_multiplier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | 经验值（XP）倍率。支持数学表达式。 |
| `jobs` | String_list | — | — | — | 要应用倍率的职业名称列表。若省略，则应用于所有职业。 |

## 配置示例

```yaml
- id: jobs_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    jobs: # The list of jobs to multiply xp for. If removed, it will multiply all jobs.
      - miner
      - fisherman
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
