---
title: increase_step_height
titleEn: increase_step_height
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# increase_step_height <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Increases the amount of blocks you can walk over without jumping

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `increase_step_height` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `height` | The extra step height |

## 配置示例

```yaml
- id: increase_step_height
  args:
    height: 1 # The extra step height
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
