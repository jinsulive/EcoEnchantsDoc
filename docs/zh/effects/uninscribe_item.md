---
title: uninscribe_item
titleEn: uninscribe_item
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
deprecated: true
---

# uninscribe_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 移除或降低物品上刻铭的卷轴等级。

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
| `scroll` | 要移除的卷轴 ID。 |
| `type` | （可选）使用 "remove" 完全移除卷轴，"decrease" 将等级降低 1（等级为 0 时移除）。默认为 "remove"。 |

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
