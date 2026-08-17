---
title: jobs_money_multiplier
titleEn: jobs_money_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# jobs_money_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化职业获得的金钱。

> **需要依赖：** Jobs Reborn

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `jobs_money_multiplier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | 要应用的倍率。支持数学表达式。 |

## 配置示例

```yaml
- id: jobs_money_multiplier
  args:
    multiplier: 1.5 # The money multiplier
    jobs: # The list of jobs to multiply money for. If removed, it will multiply all jobs.
      - miner
      - fisherman
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
