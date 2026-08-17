---
title: stat_above
titleEn: stat_above
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# stat_above <Badge type="info" text="libreforge" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 需要玩家的属性等级至少达到一定等级。

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
