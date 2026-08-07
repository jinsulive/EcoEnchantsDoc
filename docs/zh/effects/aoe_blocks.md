---
title: aoe_blocks
titleEn: aoe_blocks
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# aoe_blocks <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Runs effects for all blocks within an area of effect (the list of shapes is found in the aoe page)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `aoe_blocks` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `effects` | The effects to run for each block |
| `shape` | The shape of the AOE area |
| `radius` | The radius of the cone |
| `distance` | The length of the beam |
| `pierce_blocks` | If the beam should pass through blocks |
| `pierce_entities` | If the beam should pass through entities |

## 配置示例

```yaml
- id: aoe_blocks
  args:
    effects: # The effects to run for each block
      - id: break_block
    shape: beam # The shape of the AOE area (see above)
    radius: 3 # The radius of the cone (see above)
    distance: 15 # The length of the beam (see above)
    pierce_blocks: true # If the beam should pass through blocks (see above)
    pierce_entities: true # If the beam should pass through entities (see above)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
