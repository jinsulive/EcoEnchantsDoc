---
title: give_job_xp
titleEn: give_job_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_job_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Gives experience points for a certain job

> **需要依赖：** EcoJobs

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_job_xp` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of xp to give |
| `job` | The job to give the xp for |

## 配置示例

```yaml
- id: give_job_xp
  args:
    amount: 100 # The amount of xp to give
    job: miner # The job to give the xp for
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
