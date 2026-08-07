---
title: chain_lightning
titleEn: chain_lightning
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# chain_lightning <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Strikes chain lightning that jumps between nearby entities

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `chain_lightning` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `jumps` | The number of times the lightning jumps |
| `range` | The range in blocks to look for the next target |
| `damage` | The damage dealt to each entity hit |

## 配置示例

```yaml
- id: chain_lightning
  args:
    jumps: 3 # The number of times the lightning jumps
    range: 6 # The range in blocks to look for the next target
    damage: 3.0 # The damage dealt to each entity hit
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
