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

> Prevents the execution of certain commands

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `block_commands` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `messages` | The messages to send if a player tries to run the commands |
| `commands` | The list of commands to block |

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
