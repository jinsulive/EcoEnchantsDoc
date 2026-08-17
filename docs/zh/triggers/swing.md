---
title: swing
titleEn: swing
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# swing <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />
> **需要依赖：** Paper

> 当挥动物品、手或武器时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `swing` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |
| 需要 | Paper |

## 配置示例

```yaml
triggers:
  - swing
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
