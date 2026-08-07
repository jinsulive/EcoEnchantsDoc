---
title: Glossary
titleZh: 术语表
category: guide
outline: deep
---

# 📚 Glossary

> A bilingual glossary of terms used throughout this documentation. Terminology is kept consistent across all pages.

## Core Terms

| English | 中文 | Notes |
|---------|------|-------|
| Effect | 效果 | The action that gets executed, e.g. dealing damage, spawning particles |
| Trigger | 触发器 | The event/action that causes the effect to run |
| Condition | 条件 | A requirement that must be met for the effect to activate |
| Mutator | 变异器 | Modifies the data passed to an effect before it runs |
| Filter | 过滤器 | Narrows down when a trigger activates by restricting targets |
| Chain | 效果链 | A group of effects executed together under one trigger |
| Cooldown | 冷却时间 | The time between effect activations |
| Chance | 触发概率 | The percentage chance of an effect activating |
| Target | 目标 | The entity the effect applies to |
| Entity | 实体 | A creature, player, or object in the game world |
| Victim | 受害者/目标 | The entity affected by an action |
| Dispatcher | 派发者 | The entity that triggers the effect |
| Holder | 持有者 | The config holding effects (enchant, talisman, reforge, etc.) |
| Placeholder | 占位符 | A token like `%level%` that resolves to a value |
| Multiplier | 倍率/乘数 | A value that multiplies another value |
| Amplifier | 增幅器 | A potion effect amplifier level |
| Duration | 持续时间 | How long an effect lasts |
| Stacking | 叠加 | Multiple effects of the same type combining |
| Configuration | 配置 | YAML settings that define behavior |
| YAML | YAML | A human-readable data serialization format (not translated) |
| Permanent Effect | 永久型效果 | An effect always active while conditions are met |
| Triggered Effect | 触发型效果 | An effect requiring a trigger to activate |

## Argument & Option Terms

| English | 中文 | Notes |
|---------|------|-------|
| args | 参数 | The arguments of an effect/condition/mutator |
| chance | 触发概率 | Activation chance as a percentage |
| cost | 花费 | Money cost to activate (Vault) |
| every | 每隔 | Activate every x times |
| require | 要求 | Require an expression to be true |
| cooldown | 冷却 | Cooldown in seconds |
| cooldown_group | 冷却组 | Shared cooldown group |
| mana_cost | 法力消耗 | Mana/magic cost (AuraSkills/EcoSkills) |
| delay | 延迟 | Delay in ticks before execution |
| repeat | 重复 | Repeated activation |
| price | 价格 | Price required to activate |
| run-order | 运行顺序 | Execution order: start/early/normal/late/end |
| load-weight | 加载权重 | Config load order weight |
| inverse | 反向 | Negates a condition |
| not-met-lines | 未满足提示行 | Lore lines when a condition is not met |
| not-met-effects | 未满足效果 | Effects run when a condition is not met |

## EcoEnchants Terms

| English | 中文 | Notes |
|---------|------|-------|
| Enchantment | 附魔 | A custom enchantment |
| max-level | 最高等级 | The maximum enchantment level |
| `%level%` | 等级占位符 | Returns the enchantment level |
| Rarity | 稀有度 | Controls how enchantments are obtained |
| Target | 目标物品 | Items an enchantment can apply to |
| Conflict | 冲突 | Enchantments that cannot coexist |
| Spell Enchantment | 法术附魔 | Alt-click activated ability with cooldown |
| Special Enchantment | 特殊附魔 | Powerful, limited to one per item |
| Curse Enchantment | 诅咒附魔 | Makes the item worse |
| Artifact Enchantment | 工艺品附魔 | Purely cosmetic |
| cost-exponent | 成本指数 | Anvil cost scaling exponent |

## eco Core Library Terms

| English | 中文 | Notes |
|---------|------|-------|
| Points | 点数 | Numeric per-player/server/item tracking |
| Global Points | 全局点数 | Server-wide points |
| Item Points | 物品点数 | Points tied to a specific item |
| Item Levels | 物品等级 | XP-based item progression |
| Price System | 价格系统 | Unified way to handle multiple economies |
| Math Expressions | 数学表达式 | `1 + 0.2 * %level%` style expressions |
| Custom Arguments | 自定义参数 | Reusable effect argument logic |
| Custom Placeholders | 自定义占位符 | User-defined placeholders in placeholders.yml |
| Effect Chain | 效果链 | Groups of effects run together |

## Related Pages

- [Guide: Effect Basics](./guide/effect-basics)
- [Guide: EcoEnchants Specific](./guide/ecoenchants-specific)
- [All Effects](./effects/)
