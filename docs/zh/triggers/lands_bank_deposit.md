---
title: lands_bank_deposit
titleEn: lands_bank_deposit
category: triggers
subcategory: external
tags:
  - libreforge
  - lands
outline: deep
---

# lands_bank_deposit <Badge type="info" text="libreforge" /> <Badge type="warning" text="Lands" />

> 当向领地银行存入金钱时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `lands_bank_deposit` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 存入的金额（替代值：新余额） |
| 需要 | Lands |

## 配置示例

```yaml
triggers:
  - lands_bank_deposit
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 存入的金额（替代值：新余额） |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
