---
title: mine_radius
titleEn: mine_radius
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mine_radius <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Mines a square radius around a block

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `mine_radius` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `radius` | The radius around the center block: 1 = 3x3x3, 2 = 5x5x5, etc |
| `blacklisted_blocks` | The blocks to not mine |
| `check_hardness` | If only blocks with the same (or lower) hardness than the mined block can be broken |
| `disable_on_sneak` | If the effect shouldn't activate while sneaking |
| `whitelist` | The only blocks allowed to mine - Remove if you don't want this |
| `prevent_trigger` | Optional, if the mine_block trigger should not be called from this |

## 配置示例

```yaml
- id: mine_radius
  args:
    radius: 1 # The radius around the center block: 1 = 3x3x3, 2 = 5x5x5, etc
    blacklisted_blocks: # The blocks to not mine
      - obsidian
    check_hardness: true # If only blocks with the same (or lower) hardness than the mined block can be broken
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    whitelist: [] # The only blocks allowed to mine - Remove if you don't want this
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
