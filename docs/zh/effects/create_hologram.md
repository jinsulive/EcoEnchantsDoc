---
title: create_hologram
titleEn: create_hologram
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# create_hologram <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Creates a hologram temporarily (Requires a hologram plugin to be installed)

> **需要依赖：** 无（需安装 hologram 插件）

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `create_hologram` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `text` | The text in the hologram |
| `duration` | The duration (in ticks) |

## 配置示例

```yaml
- id: create_hologram
  args:
      text: # The text in the hologram
          - "&FThis is a hologram!"
          - "&cThis is a second line."
      duration: 40 # The duration (in ticks)
    ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
