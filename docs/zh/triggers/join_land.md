---
title: join_land
titleEn: join_land
category: triggers
subcategory: external
tags:
  - libreforge
  - lands
outline: deep
---

# join_land <Badge type="info" text="libreforge" /> <Badge type="warning" text="Lands" />

> 当加入领地时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `join_land` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 1 |
| 需要 | Lands |

## 配置示例

```yaml
triggers:
  - join_land
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
