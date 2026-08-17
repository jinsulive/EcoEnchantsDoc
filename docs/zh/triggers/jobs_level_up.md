---
title: jobs_level_up
titleEn: jobs_level_up
category: triggers
subcategory: external
tags:
  - libreforge
  - jobs-reborn
outline: deep
---

# jobs_level_up <Badge type="info" text="libreforge" /> <Badge type="warning" text="Jobs Reborn" />
> **需要依赖：** Jobs

> 当职业升级时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `jobs_level_up` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 新等级 |
| 需要 | Jobs Reborn |

## 配置示例

```yaml
triggers:
  - jobs_level_up
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 新等级 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
