---
title: left_click_npc
titleEn: left_click_npc
category: triggers
subcategory: external
tags:
  - libreforge
  - citizens-/-fancynpcs
outline: deep
---

# left_click_npc <Badge type="info" text="libreforge" /> <Badge type="warning" text="Citizens / FancyNpcs" />
> **需要依赖：** Citizens

> 当左键点击 NPC 时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `left_click_npc` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 1 |
| 需要 | Citizens / FancyNpcs |

## 配置示例

```yaml
triggers:
  - left_click_npc
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
