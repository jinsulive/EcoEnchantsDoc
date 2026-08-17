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
| `multiplier` | Expression | ✅ | — | — | The XP multiplier. Supports expressions. |
| `jobs` | String_list | — | — | — | List of job names to apply the multiplier to. If omitted, applies to all jobs. |

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
