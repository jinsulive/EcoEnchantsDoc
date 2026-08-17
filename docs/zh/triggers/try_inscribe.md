---
title: try_inscribe
titleEn: try_inscribe
category: triggers
subcategory: ecoplugin
tags:
  - libreforge
  - ecoscrolls
outline: deep
deprecated: true
---

# try_inscribe <Badge type="info" text="libreforge" /> <Badge type="warning" text="EcoScrolls" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 当尝试刻铭卷轴时触发。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `try_inscribe` |
| 所属模块 | libreforge |
| 分类 | Eco 插件（EcoPlugin） |
| 值 | 1 |
| 需要 | EcoScrolls |

## 配置示例

```yaml
triggers:
  - try_inscribe
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
