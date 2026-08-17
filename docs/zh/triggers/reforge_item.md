---
title: reforge_item
titleEn: reforge_item
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - reforges
outline: deep
deprecated: true
---

# reforge_item <Badge type="info" text="libreforge" /> <Badge type="warning" text="Reforges" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 当重铸物品时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `reforge_item` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | 重铸花费 |
| 需要 | Reforges |

## 配置示例

```yaml
triggers:
  - reforge_item
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 重铸花费 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
