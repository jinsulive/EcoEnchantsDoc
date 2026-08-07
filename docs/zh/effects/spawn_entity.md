---
title: spawn_entity
titleEn: spawn_entity
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# spawn_entity <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Spawns an entity

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `spawn_entity` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `entity` | The mob to spawn, takes a lookup string |

## 配置示例

```yaml
- id: spawn_entity
  args:
    entity: cave_spider speed:100 # The mob to spawn, takes a lookup string
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
