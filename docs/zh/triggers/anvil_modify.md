---
title: anvil_modify
titleEn: anvil_modify
category: triggers
subcategory: internal
tags:
  - libreforge
  - purpur
outline: deep
---

# anvil_modify <Badge type="info" text="libreforge" /> <Badge type="warning" text="Purpur" />

> Triggered when a player takes a modified item from an anvil

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `anvil_modify` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | The experience cost |
| 需要 | Purpur |

## 配置示例

```yaml
triggers:
  - anvil_modify
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | The experience cost |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
