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

> Execute an effect chain

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `run_chain` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `run-type` | Optional, sets how the chain is ran, see the 'configuring an effect' page |
| `chain` | The ID of the chain to run |

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
