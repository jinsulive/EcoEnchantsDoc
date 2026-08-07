---
title: location_to_cursor
titleEn: location_to_cursor
category: mutators
subcategory: location
tags:
  - libreforge
outline: deep
---

# location_to_cursor <Badge type="info" text="libreforge" />

> Move the location to where you or the victim are looking

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `location_to_cursor` |
| 所属模块 | libreforge |
| 分类 | 位置（Location） |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `target` | The target location (either block or entity) |
| `start` | Where to raytrace from (either player or victim) |

## 配置示例

```yaml
- id: location_to_cursor
  args:
    target: block # The target location (either block or entity)
    start: player # Where to raytrace from (either player or victim)
```

## 关联页面

- [所有变异器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
