---
title: pet_activate
titleEn: pet_activate
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecopets
outline: deep
deprecated: true
---

# pet_activate <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoPets" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 当激活宠物时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `pet_activate` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | 1 |
| 需要 | EcoPets |

## 配置示例

```yaml
triggers:
  - pet_activate
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
