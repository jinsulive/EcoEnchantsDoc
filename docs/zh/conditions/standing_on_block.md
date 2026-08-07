---
title: standing_on_block
titleEn: standing_on_block
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# standing_on_block <Badge type="info" text="libreforge" />

> Requires a player to be standing on a block

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `standing_on_block` |
| 所属模块 | libreforge |
| 分类 | 世界与环境（World & Environment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `block` | The block type |

## 配置示例

```yaml
- id: standing_on_block
  args:
    block: diamond_ore # The block type
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
