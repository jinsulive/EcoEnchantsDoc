---
title: lands_bank_withdraw
titleEn: lands_bank_withdraw
category: triggers
subcategory: external
tags:
  - libreforge
  - lands
outline: deep
---

# lands_bank_withdraw <Badge type="info" text="libreforge" /> <Badge type="warning" text="Lands" />

> Triggered when withdrawing from the Lands bank

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `lands_bank_withdraw` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | The value withdrawn (alt-value: new balance) |
| 需要 | Lands |

## 配置示例

```yaml
triggers:
  - lands_bank_withdraw
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The value withdrawn (alt-value: new balance) |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
