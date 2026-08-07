---
title: battlepass_xp_multiplier
titleEn: battlepass_xp_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# battlepass_xp_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies incoming battlepass xp gain

> **需要依赖：** EcoBattlepass

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `battlepass_xp_multiplier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `multiplier` | The xp multiplier |
| `battlepasses` | The list of battlepasses to apply to |

## 配置示例

```yaml
- id: battlepassxp_multiplier
  args:
    multiplier: 2.05 # The xp multiplier
    battlepasses:
      - battlepass
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
