---
title: drop_xp
titleEn: drop_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# drop_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Drops experience orbs at the trigger location

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `drop_xp` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `xp` | The amount of xp to drop |

## 配置示例

```yaml
- id: drop_xp
  args:
    xp: 100 # The amount of xp to drop
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
