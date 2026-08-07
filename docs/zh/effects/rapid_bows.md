---
title: rapid_bows
titleEn: rapid_bows
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# rapid_bows <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Allows bows to be shot at full speed without pulling back as far

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `rapid_bows` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `percent_faster` | The percentage less tension to require |

## 配置示例

```yaml
- id: rapid_bows
  args:
    percent_faster: 15 # The percentage less tension to require
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
