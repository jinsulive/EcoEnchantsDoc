---
title: trident_attack
titleEn: trident_attack
category: triggers
subcategory: internal
tags:
  - libreforge
  - paper
outline: deep
---

# trident_attack <Badge type="info" text="libreforge" /> <Badge type="warning" text="Paper" />

> 当投掷的三叉戟伤害实体时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `trident_attack` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 造成的伤害 |
| 需要 | Paper |

## 配置示例

```yaml
triggers:
  - trident_attack
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 造成的伤害 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
