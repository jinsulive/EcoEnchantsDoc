---
title: block_commands
titleEn: block_commands
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# block_commands <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 阻止某些命令的执行。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `block_commands` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `commands` | String List | ✅ | — | — | The list of command names to block (without the leading slash). |
| `messages` | String List | — | — | — | Messages to send to the player when a blocked command is attempted. 例: `&cYou can't use that command right now!, &7Complete your quest first.` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBlockCommands.kt`）。

- **源码描述**: 持有器激活期间，阻止玩家使用特定命令。
- **所属分类**: `player`, `chat`

## 配置示例

```yaml
- id: block_commands
  args:
    messages: # (Optional) the messages to send if a player tries to run the commands
      - "&cYou can't do this!"
    commands: # The list of commands to block
      - rtp
      - spawn
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
