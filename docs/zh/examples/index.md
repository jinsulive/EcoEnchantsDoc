---
title: 配置示例
titleZh: 配置示例
category: examples
outline: deep
---

# 💡 配置示例

> 常见场景的即用配置方案。每个示例都将 **Effects（效果）**、**Triggers（触发器）**、**Conditions（条件）**、**Filters（过滤器）** 与 **Mutators（变异器）** 组合成完整的、可直接复制粘贴的配置。

::: tip 如何使用这些示例
以下示例均以 **EcoEnchants 附魔配置**（每个附魔一个文件，位于 `plugins/EcoEnchants/enchants/` 下）编写。同样的结构适用于任何 eco 插件——按需替换外层区块即可。请将 ID、名称和数值替换为你自己的内容。
:::

## 1. 基础自定义附魔

最简单的附魔：挖掘钻石矿石时获得消息与额外经验。

```yaml
# plugins/EcoEnchants/enchants/gem_eye.yml
display-name: "&b宝石之眼"
description:
  - "&7挖掘钻石获得额外经验"
max-level: 3

effects:
  - id: give_xp
    args:
      amount: "25 * %level%" # 随附魔等级缩放
    triggers:
      - mine_block
    filters:
      blocks:
        - diamond_ore
        - deepslate_diamond_ore
```

**效果说明：** 玩家挖掘钻石矿石时，获得 `25 × 附魔等级` 点经验值。1 级 = 25 XP，3 级 = 75 XP。

## 2. 带冷却的暴击

一个激进的战斗附魔，将暴击伤害乘以 3 倍，并设置冷却防止滥用。

```yaml
# plugins/EcoEnchants/enchants/executioner.yml
display-name: "&c处刑者"
description:
  - "&7暴击伤害提升 &cx3 &7倍"
max-level: 1

effects:
  - id: damage_multiplier
    args:
      multiplier: 3
      cooldown: 5 # 两次触发之间间隔 5 秒
    triggers:
      - crit
```

**效果说明：** 每次暴击造成 3 倍伤害，但该效果每 5 秒最多触发一次。

## 3. 自动熔炼镐

在同一个触发器上组合多个效果，实现挖掘矿石自动熔炼并附带视觉效果。

```yaml
# plugins/EcoEnchants/enchants/forged_pick.yml
display-name: "&6熔炼之镐"
description:
  - "&7自动熔炼挖掘的矿石"
max-level: 3

effects:
  - id: autosmelt
    args:
      drop_xp: true
    triggers:
      - mine_block

  - id: spawn_particle
    args:
      particle: flame
      amount: 5
      chance: 50
    triggers:
      - mine_block
```

**效果说明：** 挖掘的矿石被自动熔炼（同时掉落熔炉经验），并有 50% 概率生成火焰粒子。

## 4. 击杀得金钱

每击杀一只僵尸，从服务器经济中奖励玩家金钱。

```yaml
# plugins/EcoEnchants/enchants/bounty_hunter.yml
display-name: "&a赏金猎人"
description:
  - "&7击杀僵尸获得金钱"
max-level: 5

effects:
  - id: give_money # 需要 Vault
    args:
      amount: "50 * %level%"
    triggers:
      - kill_entity
    filters:
      entities:
        - zombie
```

**效果说明：** 每击杀一只僵尸奖励 `50 × 等级`。5 级时每只僵尸 = 250。

## 5. 范围光环（AOE Buff）

一个永久效果，为半径内的所有人提供增益——无需触发器。

```yaml
# plugins/EcoEnchants/enchants/aura_of_war.yml
display-name: "&d战争光环"
description:
  - "&7附近盟友获得额外伤害"
max-level: 2

effects:
  - id: add_permanent_holder_in_radius
    args:
      radius: 10
      apply-to-self: true
      effects:
        - id: damage_multiplier
          args:
            multiplier: "1 + (0.1 * %level%)"
```

**效果说明：** 装备后，玩家及周围 10 格内的所有人都获得 `damage_multiplier`：1 级为 1.1，2 级为 1.2。

## 6. 主动技能：右键传送

需要玩家操作的触发式效果——右键时向前传送。

```yaml
# plugins/EcoEnchants/enchants/blink.yml
display-name: "&b闪现"
description:
  - "&7右键向前传送"
max-level: 1

effects:
  - id: blink
    args:
      distance: "5 + (5 * %level%)"
    triggers:
      - right_click
    conditions:
      - id: is_sneaking
        args:
          inverse: true # 仅在不潜行时生效
```

**效果说明：** 右键传送 10 格（1 级），且必须处于非潜行状态。

## 7. 单触发器组合多效果

同一触发器上的所有效果都会执行——这里同时点燃并击退受害者。

```yaml
# plugins/EcoEnchants/enchants/dragon_claw.yml
display-name: "&4龙爪"
description:
  - "&7点燃受害者并将其击退"
max-level: 3

effects:
  - id: ignite
    args:
      damage_per_tick: 4
      ticks: "20 + (20 * %level%)"
    triggers:
      - melee_attack

  - id: knock_away
    args:
      velocity: "0.2 + (0.1 * %level%)"
    triggers:
      - melee_attack
```

**效果说明：** 每次近战命中点燃受害者并击退。燃烧时长与击退速度均随等级提升。

## 8. 用变异器改变目标

变异器可以重定向效果——这里改为在**受害者**位置生成粒子，而不是玩家位置。

```yaml
# plugins/EcoEnchants/enchants/bloodburst.yml
display-name: "&c血爆"
description:
  - "&7从受害者身上爆出血色粒子"
max-level: 1

effects:
  - id: spawn_particle
    args:
      particle: redstone
      amount: 20
    triggers:
      - melee_attack
    mutators:
      - id: set_location
        args:
          x: "%victim_location_x%"
          y: "%victim_location_y%"
          z: "%victim_location_z%"
```

**效果说明：** 每次近战攻击时，在受害者位置生成 20 个红石粒子。

## 9. 效果链与可复用链

用 **effect chain（效果链）** 将多个效果分组，然后在任何地方通过 `run_chain` 引用。

```yaml
# plugins/EcoEnchants/enchants/royal_welcome.yml
display-name: "&e皇家欢迎"
description:
  - "&7登录时为你绽放庆祝烟花"
max-level: 1

effects:
  - id: run_chain
    args:
      chain: celebrate
    triggers:
      - join
```

```yaml
# plugins/EcoEnchants/chains.yml
chains:
  celebrate:
    - id: firework
      args:
        power: 2
    - id: send_title
      args:
        title: "&e欢迎回来！"
    - id: play_sound
      args:
        sound: entity_firework_rocket_launch
```

**效果说明：** 玩家登录时获得烟花、标题与音效——全部在一条可复用链中统一定义。

## 常用模式

| 模式 | 做法 |
|------|------|
| **概率触发** | 在任意效果的 `args` 中写 `chance: 25` |
| **随等级缩放** | 在任意数值参数中使用 `%level%`，如 `amount: "10 * %level%"` |
| **冷却** | `args: { cooldown: 5, cooldown_group: shared }` |
| **高消耗技能** | `args: { cost: 200, mana_cost: 10 }`（需要 Vault / AuraSkills） |
| **延迟 / 重复** | `args: { delay: 20, repeat: { times: 3, increment: 1 } }` |
| **基于触发值计算** | 用 `amount: "%v% * 0.5"` 取用触发器的数值（如造成的伤害） |
| **条件表达式** | `args: { require: "%player_level% > 10" }` |

## 相关页面

- [Effect 基础](../guide/effect-basics) — 效果、触发器、过滤器、条件与变异器如何协同
- [术语表](../glossary) — 用通俗语言解释的术语
- [所有效果](../effects/) — 每个效果的参数参考
- [所有触发器](../triggers/) — 每个触发器
- [所有条件](../conditions/) — 每个条件
