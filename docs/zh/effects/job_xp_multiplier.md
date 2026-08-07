---
title: job_xp_multiplier
titleEn: job_xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# job_xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies job xp gain

> **需要依赖：** EcoJobs

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `job_xp_multiplier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The experience multiplier |
| `jobs` | The list of jobs to multiply xp for. If removed, it will multiply all jobs. |

## 配置示例

```yaml
- id: job_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    jobs: # The list of jobs to multiply xp for. If removed, it will multiply all jobs.
      - miner
      - builder
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
