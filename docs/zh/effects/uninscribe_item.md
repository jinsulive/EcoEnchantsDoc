---
title: uninscribe_item
titleEn: uninscribe_item
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# uninscribe_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Removes or decreases the level of a scroll inscribed on an item

> **需要依赖：** EcoScrolls

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `uninscribe_item` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `scroll` | The scroll ID to remove |
| `type` | (Optional) Use "remove" to remove the scroll entirely, "decrease" reduces level by 1 (removes at level 0). Defaults to "remove" |

## 配置示例

```yaml
- id: uninscribe_item
  args:
    scroll: example_scroll # The scroll ID to remove
    type: remove # (Optional) Use "remove" to remove the scroll entirely, "decrease" reduces level by 1 (removes at level 0). Defaults to "remove"
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
