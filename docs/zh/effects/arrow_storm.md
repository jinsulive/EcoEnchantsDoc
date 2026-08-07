---
title: arrow_storm
titleEn: arrow_storm
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# arrow_storm <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Rains arrows down onto a location

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `arrow_storm` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The number of arrows to spawn |
| `height` | The height above the target location to spawn arrows |
| `spread` | The horizontal spread radius of the arrow spawn positions |
| `damage` | The damage each arrow deals |

## 配置示例

```yaml
- id: arrow_storm
  args:
    amount: 10 # The number of arrows to spawn
    height: 10 # The height above the target location to spawn arrows
    spread: 3 # The horizontal spread radius of the arrow spawn positions
    damage: 2.0 # (Optional) The damage each arrow deals
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
