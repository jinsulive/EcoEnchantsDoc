---
title: set_block
titleEn: set_block
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# set_block <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Set a block

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_block` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `block` | The block to set to |

## 配置示例

```yaml
- id: set_block
  args:
    block: diamond_ore # The block to set to
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
