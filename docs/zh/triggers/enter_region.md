---
title: enter_region
titleEn: enter_region
category: triggers
subcategory: external
tags:
  - libreforge
  - worldguard
outline: deep
---

# enter_region <Badge type="info" text="libreforge" /> <Badge type="warning" text="WorldGuard" />

> 当进入区域时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `enter_region` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 1 |
| 需要 | WorldGuard |

## 配置示例

```yaml
triggers:
  - enter_region
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
