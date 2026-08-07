---
title: 术语表
titleEn: Glossary
category: guide
outline: deep
---

# 📚 术语表

> 本文档使用的英中双语术语对照表。所有页面的术语保持统一。

## 核心术语

| English | 中文 | Notes |
|---------|------|-------|
| Effect | 效果 | 被执行的动作，如造成伤害、生成粒子 |
| Trigger | 触发器 | 导致效果运行的事件/动作 |
| Condition | 条件 | 效果激活前必须满足的要求 |
| Mutator | 变异器 | 在效果运行前修改传给效果的数据 |
| Filter | 过滤器 | 通过限制目标来收窄触发器激活时机 |
| Chain | 效果链 | 在同一个触发器下一起执行的一组效果 |
| Cooldown | 冷却时间 | 两次效果激活之间的时间 |
| Chance | 触发概率 | 效果激活的百分比概率 |
| Target | 目标 | 效果作用的实体 |
| Entity | 实体 | 游戏世界中的生物、玩家或物体 |
| Victim | 受害者/目标 | 受动作影响的实体 |
| Dispatcher | 派发者 | 触发效果的实体 |
| Holder | 持有者 | 持有效果的配置（附魔、护符、重铸等） |
| Placeholder | 占位符 | 类似 `%level%` 的令牌，解析为某个值 |
| Multiplier | 倍率/乘数 | 用于乘以另一个值的数值 |
| Amplifier | 增幅器 | 药水效果的增幅等级 |
| Duration | 持续时间 | 效果的持续时长 |
| Stacking | 叠加 | 多个同类效果组合 |
| Configuration | 配置 | 定义行为的 YAML 设置 |
| YAML | YAML | 人类可读的数据序列化格式（不翻译） |
| Permanent Effect | 永久型效果 | 满足条件时始终生效的效果 |
| Triggered Effect | 触发型效果 | 需要触发器激活的效果 |

## 参数与选项术语

| English | 中文 | Notes |
|---------|------|-------|
| args | 参数 | 效果/条件/变异器的参数 |
| chance | 触发概率 | 百分比激活概率 |
| cost | 花费 | 激活所需金钱（Vault） |
| every | 每隔 | 每 x 次激活一次 |
| require | 要求 | 要求表达式为真 |
| cooldown | 冷却 | 以秒计的冷却时间 |
| cooldown_group | 冷却组 | 共享冷却组 |
| mana_cost | 法力消耗 | 法力/魔法消耗（AuraSkills/EcoSkills） |
| delay | 延迟 | 执行前等待的刻数 |
| repeat | 重复 | 重复激活 |
| price | 价格 | 激活所需价格 |
| run-order | 运行顺序 | 执行顺序：start/early/normal/late/end |
| load-weight | 加载权重 | 配置加载顺序权重 |
| inverse | 反向 | 取反条件 |
| not-met-lines | 未满足提示行 | 条件未满足时显示的物品说明行 |
| not-met-effects | 未满足效果 | 条件未满足时运行的效果 |

## EcoEnchants 术语

| English | 中文 | Notes |
|---------|------|-------|
| Enchantment | 附魔 | 自定义附魔 |
| max-level | 最高等级 | 附魔的最高等级 |
| `%level%` | 等级占位符 | 返回附魔等级 |
| Rarity | 稀有度 | 控制附魔的获取方式 |
| Target | 目标物品 | 附魔可应用的物品 |
| Conflict | 冲突 | 不能共存的附魔 |
| Spell Enchantment | 法术附魔 | 按 alt 点击激活、带冷却的能力 |
| Special Enchantment | 特殊附魔 | 强力，默认每件物品限一个 |
| Curse Enchantment | 诅咒附魔 | 使物品变弱 |
| Artifact Enchantment | 工艺品附魔 | 纯装饰 |
| cost-exponent | 成本指数 | 铁砧成本缩放指数 |

## eco 核心库术语

| English | 中文 | Notes |
|---------|------|-------|
| Points | 点数 | 按玩家/服务器/物品追踪的数值 |
| Global Points | 全局点数 | 服务器级点数 |
| Item Points | 物品点数 | 绑定到特定物品的点数 |
| Item Levels | 物品等级 | 基于 XP 的物品成长 |
| Price System | 价格系统 | 统一处理多种经济的方案 |
| Math Expressions | 数学表达式 | `1 + 0.2 * %level%` 风格的表达式 |
| Custom Arguments | 自定义参数 | 可复用的效果参数逻辑 |
| Custom Placeholders | 自定义占位符 | 在 placeholders.yml 中自定义的占位符 |
| Effect Chain | 效果链 | 一起运行的效果组 |

## 关联页面

- [指南：Effect 基础](./guide/effect-basics)
- [指南：EcoEnchants 专属](./guide/ecoenchants-specific)
- [所有效果](./effects/)
