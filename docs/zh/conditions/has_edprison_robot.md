---
title: has_edprison_robot
titleEn: has_edprison_robot
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_edprison_robot <Badge type="info" text="libreforge" />
> **需要依赖：** EdPrison

> 需要玩家拥有指定的 EdPrison 机器人。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_edprison_robot` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `robot` | String | ✅ | — | — | 玩家必须拥有的 EDPrisonCore 机器人类型。 |

## 配置示例

```yaml
- id: has_edprison_robot
  args:
    robot: COAL_ROBOT # The currency type
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
