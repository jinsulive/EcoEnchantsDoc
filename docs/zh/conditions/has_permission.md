---
title: has_permission
titleEn: has_permission
category: conditions
subcategory: permissions
tags:
  - libreforge
outline: deep
---

# has_permission <Badge type="info" text="libreforge" />

> Requires a player to have a certain permission

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_permission` |
| 所属模块 | libreforge |
| 分类 | 权限与称号（Permissions & Ranks） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `permission` | The required permission |

## 配置示例

```yaml
- id: has_permission
  args:
    permission: "ecomc.rank.mvp" # The required permission
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
