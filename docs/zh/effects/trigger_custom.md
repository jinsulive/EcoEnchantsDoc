---
title: trigger_custom
titleEn: trigger_custom
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# trigger_custom <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Call a custom trigger

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `trigger_custom` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `trigger` | The custom trigger ID: use in other effects like custom_id (i.e. custom_example here) |
| `value` | The value to pass to the trigger, e.g. for EcoPets levelling. |

## 配置示例

```yaml
- id: trigger_custom
  args:
    trigger: example # The custom trigger ID: use in other effects like custom_id (i.e. custom_example here)
    value: 1.5 # The value to pass to the trigger, e.g. for EcoPets levelling.
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
