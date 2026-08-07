---
title: break_block
titleEn: break_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# break_block <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Breaks a block instantly

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `break_block` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `prevent_trigger` | If the mine_block trigger should not be called from this |

## 配置示例

```yaml
- id: break_block
  args:
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
