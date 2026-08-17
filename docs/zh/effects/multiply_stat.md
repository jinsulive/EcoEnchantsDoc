---
title: multiply_stat
titleEn: multiply_stat
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
deprecated: true
---

# multiply_stat <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 将特定属性乘以指定值。

> **需要依赖：** EcoSkills

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_stat` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `stat` | 属性名称。 |
| `multiplier` | 属性要乘以的数值。 |

## 配置示例

```yaml
- id: multiply_stat
  args:
    stat: speed # The name of the stat
    multiplier: 0.75 # The amount to multiply the stat by
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
