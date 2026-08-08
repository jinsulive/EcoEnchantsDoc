---
title: traceback
titleEn: traceback
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# traceback <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 回到之前的位置。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `traceback` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `seconds` | Expression(数学表达式) | ✅ | — | — | 回退的秒数（1 到 30 之间）。支持表达式。示例：`1 + %level% / 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTraceback.kt`）。

- **源码描述**: 将玩家传送回指定秒数之前的位置。
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: traceback
  args:
    seconds: 10 # The seconds to go back (between 1 and 30)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
