---
title: homing
titleEn: homing
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# homing <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Makes projectiles hone in onto entities (homing arrows / tridents)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `homing` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `distance` | The distance to hone in from |
| `targets` | The whitelist of entities to target |

## 配置示例

```yaml
- id: homing
  args:
      distance: 10 # The distance to hone in from
      targets: # (Optional) The whitelist of entities to target
        - zombie
        - skeleton
    ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
