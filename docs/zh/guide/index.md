---
title: 总览
titleEn: Overview
category: guide
outline: deep
---

# 📖 总览

> 本文档涵盖 **libreforge** 效果框架及其与 **EcoEnchants**（eco 生态驱动的附魔插件）的集成。

## 什么是 libreforge？

**libreforge** 是所有 Auxilor "eco" 系列插件背后的效果引擎。它提供统一、数据驱动的效果系统：服主无需编写代码，只需通过 YAML 配置文件组合 **Effects（效果）**、**Triggers（触发器）**、**Conditions（条件）**、**Filters（过滤器）** 和 **Mutators（变异器）**，即可创建几乎任何游戏机制——伤害、治疗、粒子、经济、成长系统等。

该系统包含 **200+ 效果、100+ 触发器、100+ 条件**，全部无需编写一行 Java 代码即可配置。

## 什么是 EcoEnchants？

**EcoEnchants** 是构建在 eco 与 libreforge 之上的自定义附魔插件。它允许你创建完全自定义的附魔——每个附魔都是一个独立的配置文件，使用 libreforge 效果系统定义其游戏行为。附魔等级可通过 `%level%` 占位符引用，实现效果参数的动态缩放。

## 文档结构

| 章节                              | 说明                                 |
| --------------------------------- | ------------------------------------ |
| [指南](./effect-basics)           | Effect 系统基础、YAML 结构、通用参数 |
| [Effects 效果](../effects/)       | 所有可用效果的完整参数参考           |
| [Triggers 触发器](../triggers/)   | 激活触发型效果的全部触发器           |
| [Conditions 条件](../conditions/) | 限制效果激活的全部条件               |
| [Mutators 变异器](../mutators/)   | 转换效果数据的全部变异器             |
| [示例](../examples/)              | 即用配置方案                         |

## 生态架构总览

```
eco（基础核心库）
 ├── 数学表达式与占位符
 ├── 价格系统
 ├── 点数系统
 └── 共享配置工具
        │
        ▼
libreforge（效果框架）
 ├── Effects（动作）
 ├── Triggers（事件）
 ├── Conditions（要求）
 ├── Filters（触发器收窄）
 └── Mutators（数据转换）
        │
        ▼
EcoEnchants（附魔插件）
 └── 自定义附魔 = 使用效果系统的 YAML 配置
```

::: tip 💡 提示
本文档基于官方 Auxilor Wiki（[plugins.auxilor.io](https://plugins.auxilor.io/)）。当来源信息存在歧义或不完整时，会使用 📝 编者注 标注说明。
:::
