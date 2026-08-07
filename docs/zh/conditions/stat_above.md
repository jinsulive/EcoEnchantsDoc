---
title: stat_above
titleEn: stat_above
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# stat_above <Badge type="info" text="libreforge" />

> Requires a player to have at least a certain stat level

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `stat_above` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 配置示例

```yaml
- id: stat_above
  args:
      stat: wisdom # The stat ID
      level: 30 # The minimum level
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
