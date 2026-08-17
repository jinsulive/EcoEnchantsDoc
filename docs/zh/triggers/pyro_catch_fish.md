---
title: pyro_catch_fish
titleEn: pyro_catch_fish
category: triggers
subcategory: external
tags:
  - libreforge
  - pyrofishingpro
outline: deep
---

# pyro_catch_fish <Badge type="info" text="libreforge" /> <Badge type="warning" text="PyroFishingPro" />
> **需要依赖：** PyroFishingPro

> 当钓到鱼时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `pyro_catch_fish` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 鱼的编号 |
| 需要 | PyroFishingPro |

## 配置示例

```yaml
triggers:
  - pyro_catch_fish
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 鱼的编号 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
