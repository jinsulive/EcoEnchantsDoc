---
title: mining_efficiency
titleEn: mining_efficiency
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mining_efficiency <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 增加挖掘效率（使用正确工具时的挖掘速度）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `mining_efficiency` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | 要添加的固定挖掘效率数值。支持数学表达式。 例: `%level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMiningEfficiency.kt`）。

- **源码描述**: 持有器激活期间，增加玩家的挖掘效率属性。
- **所属分类**: `world`, `player`, `attribute`

## 配置示例

```yaml
- id: mining_efficiency
  args:
    amount: 5 # The extra mining efficiency
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
