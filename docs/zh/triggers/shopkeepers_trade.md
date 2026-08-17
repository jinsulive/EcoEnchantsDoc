---
title: shopkeepers_trade
titleEn: shopkeepers_trade
category: triggers
subcategory: shopkeepers
tags:
  - libreforge
outline: deep
---

# shopkeepers_trade <Badge type="info" text="libreforge" /> <Badge type="info" text="触发器" />

> 当玩家与 Shopkeepers 商店店主完成交易时触发。

> **需要依赖：** Shopkeepers

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `shopkeepers_trade` |
| 所属模块 | libreforge |
| 分类 | Economy |
| 组件类型 | 触发器 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/shopkeepers/impl/TriggerShopkeepersTrade.kt`）。

- **源码描述**: 当玩家与 Shopkeepers 商店店主完成交易时触发。

- **所属分类**: `economy`

- **需要触发器数据**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`

## 配置示例

```yaml
triggers:
  - shopkeepers_trade
```

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
