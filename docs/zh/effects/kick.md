---
title: kick
titleEn: kick
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# kick <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将玩家踢出服务器。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `kick` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `message` | String | ✅ | — | — | 显示给玩家的踢出界面消息。 例: `&cYou have been kicked, %player%.` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKick.kt`）。

- **源码描述**: 以指定消息将玩家踢出服务器。
- **所属分类**: `player`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: kick
  args:
    message: "&cYou have been kicked!" # The message to send
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
