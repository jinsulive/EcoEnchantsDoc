---
title: envoy_type
titleEn: envoy_type
category: filters
subcategory: axenvoy
tags:
  - libreforge
outline: deep
---

# envoy_type <Badge type="info" text="libreforge" /> <Badge type="info" text="过滤器" />

> 当收集的空投箱类型与给定的名称之一匹配时匹配。

> **需要依赖：** AxEnvoy

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `envoy_type` |
| 所属模块 | libreforge |
| 分类 | Player |
| 取值类型 | `STRING_LIST` |

## 用法

过滤器以 YAML Map 形式配置在 `filters` 键下。过滤器 ID 为键，值为该过滤器对应的取值：

```yaml
filters:
  envoy_type: <value>
```

## 取反语法

在过滤器 ID 前加 `not_` 前缀即可取反（`not_envoy_type`）：

```yaml
filters:
  not_envoy_type: <value>
```

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/axplugins/axenvoy/impl/FilterEnvoyType.kt`）。

- **源码描述**: 当收集的空投箱类型与给定的名称之一匹配时匹配。

- **所属分类**: `player`

## 关联页面

- [所有过滤器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
