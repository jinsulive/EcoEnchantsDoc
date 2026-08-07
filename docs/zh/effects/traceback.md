---
title: traceback
titleEn: traceback
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# traceback <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Go back to a previous position

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `traceback` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `seconds` | The seconds to go back (between 1 and 30) |

## 配置示例

```yaml
- id: traceback
  args:
    seconds: 10 # The seconds to go back (between 1 and 30)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
