---
title: add_stat
titleEn: add_stat
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_stat <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 为特定属性添加数值。

> **需要依赖：** AuraSkills

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_stat` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `stat` | String | ✅ | — | — | The AuraSkills stat ID to add to, e.g. strength. |
| `amount` | Expression | ✅ | — | — | The amount to add to the stat. Supports expressions. |

## 配置示例

```yaml
- id: add_stat
  args:
    stat: strength # The name of the stat
    amount: 10 # The amount to add (or subtract, allows negative values)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
