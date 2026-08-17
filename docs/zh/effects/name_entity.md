---
title: name_entity
titleEn: name_entity
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# name_entity <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置实体的显示名称。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `name_entity` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `name` | String | ✅ | — | — | 要在实体上方显示的显示名称。支持占位符。 例: `%player_name%'s Wolf` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectNameEntity.kt`）。

- **源码描述**: 设置受害者实体的自定义名称并使其始终可见。
- **所属分类**: `entity`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: name_entity
  args:
    name: "&cTagged!" # The name to set
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
