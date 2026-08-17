---
title: take_mythic_damage
titleEn: take_mythic_damage
category: triggers
subcategory: external
tags:
  - libreforge
  - mythicmobs
outline: deep
---

# take_mythic_damage <Badge type="info" text="libreforge" /> <Badge type="warning" text="MythicMobs" />
> **需要依赖：** MythicMobs

> 当受到 MythicMobs 伤害时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `take_mythic_damage` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 受到的伤害 |
| 需要 | MythicMobs |

## 配置示例

```yaml
triggers:
  - take_mythic_damage
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 受到的伤害 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
