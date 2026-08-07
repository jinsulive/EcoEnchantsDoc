---
title: swarm
titleEn: swarm
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# swarm <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Makes nearby monsters in a certain radius attack the victim

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `swarm` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `radius` | The radius to swarm from |
| `entities` | (Optional) The list of entities to anger |

## 配置示例

```yaml
- id: swarm
  args:
    radius: 20 # The radius to swarm from
    entities: # (Optional) The list of entities to anger
      - zombie 
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
