---
title: collect_envoy
titleEn: collect_envoy
category: triggers
subcategory: external
tags:
  - libreforge
  - axenvoy
outline: deep
---

# collect_envoy <Badge type="info" text="libreforge" /> <Badge type="warning" text="AxEnvoy" />

> Triggered when collecting an envoy crate

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `collect_envoy` |
| 所属模块 | libreforge |
| 分类 | 外部集成（External Integration） |
| 值 | 1 |
| 需要 | AxEnvoy |

## 配置示例

```yaml
triggers:
  - collect_envoy
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
