---
title: unclaim
titleEn: unclaim
category: triggers
subcategory: external
tags:
  - libreforge
  - husktowns-/-huskclaims-/-lands
outline: deep
---

# unclaim <Badge type="info" text="libreforge" /> <Badge type="warning" text="HuskTowns / HuskClaims / Lands" />

> Triggered when unclaiming an area

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `unclaim` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 1 |
| 需要 | HuskTowns / HuskClaims / Lands |

## 配置示例

```yaml
triggers:
  - unclaim
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
