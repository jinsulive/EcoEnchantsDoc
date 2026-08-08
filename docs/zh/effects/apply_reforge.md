---
title: apply_reforge
titleEn: apply_reforge
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# apply_reforge <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 为物品应用一个重铸属性。

> **需要依赖：** Reforges

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `apply_reforge` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `reforge` | 重铸 ID。 |

## 配置示例

```yaml
- id: apply_reforge
  args:
    reforge: strong # The reforge ID
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
