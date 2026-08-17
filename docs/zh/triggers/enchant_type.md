---
title: enchant_&lt;type&gt;
titleEn: enchant_&lt;type&gt;
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoenchants
outline: deep
deprecated: true
---

# enchant_&lt;type&gt; <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoEnchants" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 使用特定类型的附魔附魔物品时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `enchant_<type>` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoEnchants） |
| 值 | XP 花费 |
| 需要 | EcoEnchants |

## 说明

当物品被某个**类型**（来自 `types.yml`）的附魔附魔时触发。将 `<type>` 替换为附魔类型 ID，例如：

- `enchant_normal` — 使用普通附魔附魔时
- `enchant_special` — 使用特殊附魔附魔时
- `enchant_curse` — 使用诅咒附魔附魔时

## 配置示例

```yaml
triggers:
  - enchant_normal
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | XP 花费 |

## 关联页面

- [所有触发器](./)
- [指南：EcoEnchants 专属](../guide/ecoenchants-specific)
- [所有效果](../effects/)
