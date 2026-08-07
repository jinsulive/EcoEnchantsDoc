---
title: give_permission
titleEn: give_permission
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# give_permission <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Gives a permission while active

> **需要依赖：** Vault

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_permission` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `permission` | The permission to give |

## 配置示例

```yaml
- id: give_permission
  args:
    permission: ecocrates.reroll.mythic # The permission to give
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
