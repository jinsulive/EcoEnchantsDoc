---
title: enter_claim
titleEn: enter_claim
category: triggers
subcategory: external
tags:
  - libreforge
  - husktowns-/-huskclaims
outline: deep
---

# enter_claim <Badge type="info" text="libreforge" /> <Badge type="warning" text="HuskTowns / HuskClaims" />

> Triggered when entering a claimed area

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `enter_claim` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 1 |
| 需要 | HuskTowns / HuskClaims |

## 配置示例

```yaml
triggers:
  - enter_claim
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
