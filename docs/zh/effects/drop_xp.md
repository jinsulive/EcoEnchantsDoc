---
title: drop_xp
titleEn: drop_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# drop_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 在触发位置掉落经验球。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `drop_xp` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `xp` | Expression | ✅ | — | — | The amount of experience to drop. Supports expressions. 例: `10 + %level% * 5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDropXp.kt`）。

- **源码描述**: 在触发位置掉落经验球。
- **所属分类**: `economy`
- **需要触发器数据**: `LOCATION`

## 配置示例

```yaml
- id: drop_xp
  args:
    xp: 100 # The amount of xp to drop
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
