---
title: deploy_elytra
titleEn: deploy_elytra
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# deploy_elytra <Badge type="info" text="libreforge" /> 

> 当玩家开始鞘翅滑翔时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `deploy_elytra` |
| 所属模块 | libreforge |
| 分类 | 内置（Internal） |
| 值 | 1 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerDeployElytra.kt`）。

- **源码描述**: 当实体开始或停止鞘翅滑翔时触发。
- **所属分类**: `movement`
- **需要触发器数据**: `PLAYER`, `VICTIM`, `EVENT`, `LOCATION`

## 配置示例

```yaml
triggers:
  - deploy_elytra
```

## 占位符

| 占位符 | 值 |
|--------|-----|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | 触发器传递的替代值（如有） |

## 关联页面

- [所有触发器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
