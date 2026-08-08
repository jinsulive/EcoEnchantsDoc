---
title: scyther_auto_sell
titleEn: scyther_auto_sell
category: triggers
subcategory: external
tags:
  - libreforge
  - scyther
outline: deep
---

# scyther_auto_sell <Badge type="info" text="libreforge" /> <Badge type="warning" text="Scyther" />

> 当使用镰刀锄自动出售作物时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `scyther_auto_sell` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 1 |
| 需要 | Scyther |

## 配置示例

```yaml
triggers:
  - scyther_auto_sell
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
