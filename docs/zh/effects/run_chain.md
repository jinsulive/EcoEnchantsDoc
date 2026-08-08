---
title: run_chain
titleEn: run_chain
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# run_chain <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 执行效果链。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `run_chain` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `run-type` | String | — | — | `normal`, `cycle`, `random` | 可选，设置链的执行方式，参见"配置效果"页面。 |
| `chain` | String | ✅ | — | — | 要执行的链 ID。 |
| `chain_args` | Any/Custom | — | — | — | 在链内以占位符形式暴露的键值对子配置。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRunChain.kt`）。

- **源码描述**: 运行在 `plugins/libreforge/chains.yml` 中定义的指定效果链。
- **所属分类**: `meta`

## 配置示例

```yaml
- id: run_chain
  args:
    run-type: normal # Optional, sets how the chain is ran, see the 'configuring an effect' page
    chain: blind_and_pop # The ID of the chain to run
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
