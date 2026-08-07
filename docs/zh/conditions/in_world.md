---
title: in_world
titleEn: in_world
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# in_world <Badge type="info" text="libreforge" />

> Requires a player to be in a certain world

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `in_world` |
| 所属模块 | libreforge |
| 分类 | 世界与环境（World & Environment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `world` | The world name |

## 配置示例

```yaml
- id: in_world
  args:
    world: the_end # The world name
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
