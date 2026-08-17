---
title: level_up_job
titleEn: level_up_job
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecojobs
outline: deep
deprecated: true
---

# level_up_job <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoJobs" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 当职业升级时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `level_up_job` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | 新等级 |
| 需要 | EcoJobs |

## 配置示例

```yaml
triggers:
  - level_up_job
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
