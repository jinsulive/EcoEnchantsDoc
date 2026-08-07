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

> Triggered on injuring an entity with a thrown trident

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `trident_attack` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The damage dealt |
| 需要 | Paper |

## 配置示例

```yaml
triggers:
  - trident_attack
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The damage dealt |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
