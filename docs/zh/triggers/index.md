---
title: 所有触发器
titleEn: All Triggers
category: triggers
outline: deep
---

# 🔌 所有触发器

> 触发型效果需要一个触发器——它们是导致效果运行的事件/动作。本节包含 libreforge 与 EcoEnchants 系统中所有可用 **触发器（Triggers）** 的完整参考。

::: tip 如何使用本页
点击下方任意卡片查看完整触发器参考。可使用浏览器搜索（<kbd>Ctrl</kbd>+<kbd>F</kbd>）快速定位。
:::

## 触发器值

触发器可以产生一个 `value`（值），部分还会产生 `alt-value`（替代值）。通过占位符引用它们，可以缩放倍率、升级 EcoSkills/Jobs/Pets，或在聊天中发送消息：

| 占位符 | 值 | 别名 |
|--------|-----|------|
| `%trigger_value%` | 触发器传递的值 | `%triggervalue%`、`%trigger%`、`%value%`、`%tv%`、`%v%`、`%t%` |
| `%alt_trigger_value%` | 触发器传递的替代值 | `%alttriggervalue%`、`%altvalue%`、`%atv%`、`%av%`、`%at%` |

## 📊 概览

| 分类 | 数量 | 说明 |
|------|------|------|
| 内置 | 108 | 随处可用的内置触发器 |
| Eco 插件 | 29 | eco 插件集成提供的触发器 |
| 外部集成 | 34 | 第三方插件集成提供的触发器 |

---

## 🗂️ 按分类浏览

### 🎮 内置触发器

<div class="card-grid">

<div class="card">
  <h3><a href="./melee_attack">近战攻击（Melee Attack）</a></h3>
  <p>使用近战攻击伤害实体时触发。</p>
</div>

<div class="card">
  <h3><a href="./bow_attack">弓箭攻击（Bow Attack）</a></h3>
  <p>使用弓/弩射击实体时触发。</p>
</div>

<div class="card">
  <h3><a href="./mine_block">挖掘方块（Mine Block）</a></h3>
  <p>挖掘方块时触发。</p>
</div>

<div class="card">
  <h3><a href="./take_damage">受到伤害（Take Damage）</a></h3>
  <p>受到任意来源伤害时触发。</p>
</div>

<div class="card">
  <h3><a href="./kill">击杀（Kill）</a></h3>
  <p>玩家击杀玩家或实体时触发。</p>
</div>

<div class="card">
  <h3><a href="./death">死亡（Death）</a></h3>
  <p>任意来源导致死亡时触发。</p>
</div>

<div class="card">
  <h3><a href="./join">加入（Join）</a></h3>
  <p>加入服务器时触发。</p>
</div>

<div class="card">
  <h3><a href="./leave">离开（Leave）</a></h3>
  <p>离开服务器时触发。</p>
</div>

<div class="card">
  <h3><a href="./jump">跳跃（Jump）</a></h3>
  <p>跳跃（按空格键）时触发。</p>
</div>

<div class="card">
  <h3><a href="./consume">食用（Consume）</a></h3>
  <p>消耗物品时触发。</p>
</div>

<div class="card">
  <h3><a href="./craft">合成（Craft）</a></h3>
  <p>合成物品时触发。</p>
</div>

<div class="card">
  <h3><a href="./place_block">放置方块（Place Block）</a></h3>
  <p>放置方块时触发。</p>
</div>

<div class="card">
  <h3><a href="./pick_up_item">拾取物品（Pick Up Item）</a></h3>
  <p>拾取物品时触发。</p>
</div>

<div class="card">
  <h3><a href="./drop_item">丢弃物品（Drop Item）</a></h3>
  <p>丢弃物品时触发。</p>
</div>

<div class="card">
  <h3><a href="./heal">回血（Heal）</a></h3>
  <p>恢复生命值时触发。</p>
</div>

<div class="card">
  <h3><a href="./gain_xp">获得经验（Gain XP）</a></h3>
  <p>获得经验值时触发。</p>
</div>

<div class="card">
  <h3><a href="./teleport">传送（Teleport）</a></h3>
  <p>传送时触发。</p>
</div>

<div class="card">
  <h3><a href="./respawn">重生（Respawn）</a></h3>
  <p>重生时触发。</p>
</div>

<div class="card">
  <h3><a href="./entity_death">实体死亡（Entity Death）</a></h3>
  <p>实体死亡时触发。</p>
</div>

<div class="card">
  <h3><a href="./entity_damage">实体受伤（Entity Damage）</a></h3>
  <p>实体受到伤害时触发。</p>
</div>

</div>

### 🧩 Eco 插件触发器

<div class="card-grid">

<div class="card">
  <h3><a href="./enchant_type">附魔 &lt;类型&gt;（Enchant &lt;type&gt;）</a></h3>
  <p>使用特定类型附魔附魔时触发（EcoEnchants）。</p>
</div>

<div class="card">
  <h3><a href="./gain_skill_xp">获得技能经验（Gain Skill XP）</a></h3>
  <p>获得技能经验时触发（EcoSkills）。</p>
</div>

<div class="card">
  <h3><a href="./level_up_skill">技能升级（Level Up Skill）</a></h3>
  <p>技能升级时触发（EcoSkills）。</p>
</div>

<div class="card">
  <h3><a href="./gain_job_xp">获得职业经验（Gain Job XP）</a></h3>
  <p>获得职业经验时触发（EcoJobs）。</p>
</div>

<div class="card">
  <h3><a href="./gain_pet_xp">获得宠物经验（Gain Pet XP）</a></h3>
  <p>获得宠物经验时触发（EcoPets）。</p>
</div>

<div class="card">
  <h3><a href="./complete_quest">完成任务（Complete Quest）</a></h3>
  <p>完成任务时触发（EcoQuests）。</p>
</div>

<div class="card">
  <h3><a href="./gain_battlepass_xp">获得通行证经验（Gain Battlepass XP）</a></h3>
  <p>获得战斗通行证经验时触发（EcoBattlepass）。</p>
</div>

</div>

### 🔗 外部集成触发器

<div class="card-grid">

<div class="card">
  <h3><a href="./enter_region">进入区域（Enter Region）</a></h3>
  <p>进入区域时触发（WorldGuard）。</p>
</div>

<div class="card">
  <h3><a href="./leave_region">离开区域（Leave Region）</a></h3>
  <p>离开区域时触发（WorldGuard）。</p>
</div>

<div class="card">
  <h3><a href="./gain_mcmmo_xp">获得 McMMO 经验（Gain McMMO XP）</a></h3>
  <p>获得 McMMO 经验时触发。</p>
</div>

<div class="card">
  <h3><a href="./level_up_mcmmo">McMMO 升级（Level Up McMMO）</a></h3>
  <p>McMMO 技能升级时触发。</p>
</div>

<div class="card">
  <h3><a href="./player_trade">玩家交易（Player Trade）</a></h3>
  <p>与玩家交易时触发（AxTrade）。</p>
</div>

<div class="card">
  <h3><a href="./take_mythic_damage">MythicMobs 伤害（Take Mythic Damage）</a></h3>
  <p>受到 MythicMobs 伤害时触发。</p>
</div>

<div class="card">
  <h3><a href="./register_vote">投票（Register Vote）</a></h3>
  <p>玩家为服务器投票时触发（Votifier）。</p>
</div>

</div>

---

## 🔍 快速参考表

### 内置触发器

| 触发器 ID | 值 |
|-----------|-----|
| `alt_click` | `1` |
| `anvil_modify` *(Purpur)* | 经验花费 |
| `beacon_effect` *(Paper)* | `1` |
| `bite` | `1` |
| `block_item_drop` | 掉落的物品数量 |
| `bonemeal_crop` | `1` |
| `bow_attack` | 造成的伤害 |
| `breed` | 获得的经验 |
| `brew` | `1` |
| `brew_ingredient` | `1` |
| `cast_rod` | `1` |
| `catch_entity` | `1` |
| `catch_fish` | 掉落的经验 |
| `catch_fish_fail` | `1` |
| `cauldron_level_change` | 新锅水位 |
| `change_armor` | `1` |
| `change_biome` | `1` |
| `change_chunk` | `1` |
| `change_world` | `1` |
| `click_block` | `1` |
| `click_entity` | `1` |
| `collide_with_entity` | `1` |
| `complete_advancement` | `1` |
| `compost_item` *(Paper)* | `1`（水位提升时 alt: 1） |
| `consume` | `1` |
| `craft` | 合成的物品数量 |
| `damage_item` | 损耗值 |
| `death` | `1` |
| `deploy_elytra` | `1` |
| `disable` | `1` |
| `drop_item` | 物品数量 |
| `elytra_boost` *(Paper)* | `1` |
| `empty_bucket` | `1` |
| `enable` | `1` |
| `enchant_item` | XP 花费 |
| `enter_bed` | `1` |
| `enter_vehicle` | `1` |
| `entity_break_door` | `1` |
| `entity_catch_fire_from_block` | `1` |
| `entity_catch_fire_from_entity` | `1` |
| `entity_damage` | 受到的伤害 |
| `entity_damage_by_entity` | 受到的伤害 |
| `entity_death` | `1` |
| `entity_item_drop` | 掉落的物品数量 |
| `entity_spawn` | `1` |
| `entity_target` | `1` |
| `entity_teleport` | `1` |
| `exit_vehicle` | `1` |
| `fall_damage` | 受到的伤害 |
| `fill_bucket` | `1` |
| `gain_hunger` | 获得的饥饿值 |
| `gain_xp` | 获得的经验 |
| `global_static_%interval%` | `1` |
| `grind_item` *(Purpur)* | 获得的经验 |
| `headshot` | 造成的伤害 |
| `heal` | 恢复的生命 |
| `hold_item` | `1` |
| `hook_in_ground` | `1` |
| `item_break` | `1` |
| `join` | `1` |
| `jump` | `1` |
| `kill` | 目标的最高生命 |
| `leash_entity` | `1` |
| `leave` | `1` |
| `leave_bed` | `1` |
| `leave_land` | `1` |
| `level_up_item` | 新物品等级 |
| `level_up_xp` | 新等级 |
| `lose_hunger` | 失去的饥饿值 |
| `lose_potion_effect` | `1` |
| `melee_attack` | 造成的伤害 |
| `mine_block` | `1` |
| `mine_block_cascade` | `1` |
| `mine_block_progress` | `1` |
| `move` | 移动距离 |
| `note_block_play` | `1` |
| `pick_up_item` | 物品数量 |
| `place_block` | `1` |
| `potion_effect` | `1` |
| `projectile_hit` | `1` |
| `projectile_launch` | `1` |
| `reel_in` | `1` |
| `rename_entity` *(Paper)* | `1` |
| `respawn` | `1` |
| `resurrect` | `1` |
| `ring_bell` | `1` |
| `run_command` | `1` |
| `sell_item` | 价格 |
| `send_message` | `1` |
| `shear_entity` | `1` |
| `shield_block` | 格挡的伤害 |
| `shoot_bow` | 弓的拉弓力度（0-1） |
| `smelt` | 冶炼的物品数量 |
| `smith_item` | `1` |
| `static_%interval%` | `1` |
| `swap_hands` | `1` |
| `swing` *(Paper)* | `1` |
| `take_damage` | 受到的伤害 |
| `take_entity_damage` | 受到的伤害 |
| `tame_animal` | `1` |
| `teleport` | `1` |
| `toggle_flight` | `1` |
| `toggle_sneak` | `1` |
| `toggle_sprint` | `1` |
| `trident_attack` *(Paper)* | 造成的伤害 |
| `trident_hit` | `1` |
| `unleash_entity` | `1` |
| `use_flower_pot` *(Paper)* | `1` |
| `villager_trade` *(Paper)* | 村民获得的经验 |
| `win_raid` | 不祥之兆等级 |

### Eco 插件触发器

| 触发器 ID | 插件 | 值 |
|-----------|------|-----|
| `claim_battlepass_reward` | EcoBattlepass | `1` |
| `complete_battlepass_task` | EcoBattlepass | `1` |
| `gain_battlepass_xp` | EcoBattlepass | 获得的经验 |
| `tier_up_battlepass` | EcoBattlepass | 新等级 |
| `complete_collection` | EcoCollections | `1` |
| `tier_up_collection` | EcoCollections | 新等级 |
| `unlock_collection` | EcoCollections | `1` |
| `enchant_<type>` | **EcoEnchants** | XP 花费 |
| `advance_armor` | EcoArmor | `1` |
| `upgrade_armor_tier` | EcoArmor | 等级 ID |
| `gain_job_xp` | EcoJobs | 获得的经验 |
| `join_job` | EcoJobs | 职业等级 |
| `leave_job` | EcoJobs | 职业等级 |
| `level_up_job` | EcoJobs | 新等级 |
| `gain_pet_xp` | EcoPets | 获得的经验 |
| `level_up_pet` | EcoPets | 新等级 |
| `pet_activate` | EcoPets | `1` |
| `pet_deactivate` | EcoPets | `1` |
| `complete_quest` | EcoQuests | `1` |
| `complete_task` | EcoQuests | `1` |
| `gain_task_xp` | EcoQuests | 获得的经验 |
| `start_quest` | EcoQuests | `1` |
| `inscribe` | EcoScrolls | `1` |
| `try_inscribe` | EcoScrolls | `1` |
| `buy_item` | EcoShop | 价格 |
| `gain_skill_xp` | EcoSkills | 获得的经验 |
| `level_up_skill` | EcoSkills | 新等级 |
| `regen_magic` | EcoSkills | `1` |
| `reforge_item` | Reforges | 重铸花费 |

### 外部集成触发器

| 触发器 ID | 插件 | 值 |
|-----------|------|-----|
| `collect_envoy` | AxEnvoy | `1` |
| `player_trade` | AxTrade | 交易物品总数（alt: 货币总数） |
| `left_click_npc` | Citizens / FancyNpcs | `1` |
| `right_click_npc` | Citizens / FancyNpcs | `1` |
| `harvest_custom_crop` | CustomCrops | `1` |
| `plant_custom_crop` | CustomCrops | `1` |
| `use_fertilizer` | CustomCrops | `1` |
| `use_watering_can` | CustomCrops | `1` |
| `change_town_role` | HuskTowns | `1` |
| `create_town` | HuskTowns | `1` |
| `disband_town` | HuskTowns | `1` |
| `join_town` | HuskTowns | `1` |
| `leave_town` | HuskTowns | `1` |
| `enter_claim` | HuskTowns / HuskClaims | `1` |
| `claim` | HuskTowns / HuskClaims / Lands | `1` |
| `exit_claim` | HuskTowns / HuskClaims / Lands | `1` |
| `unclaim` | HuskTowns / HuskClaims / Lands | `1` |
| `jobs_level_up` | Jobs Reborn | 新等级 |
| `join_land` | Lands | `1` |
| `lands_bank_deposit` | Lands | 存入值（alt: 新余额） |
| `lands_bank_withdraw` | Lands | 取出值（alt: 新余额） |
| `lands_spawn_teleport` | Lands | `1` |
| `gain_mcmmo_xp` | McMMO | 获得的经验 |
| `level_down_mcmmo` | McMMO | 新等级 |
| `level_up_mcmmo` | McMMO | 新等级 |
| `mcmmo_ability_activate` | McMMO | `1` |
| `mcmmo_ability_deactivate` | McMMO | `1` |
| `take_mythic_damage` | MythicMobs | 受到的伤害 |
| `scyther_auto_collect` | Scyther | `1` |
| `scyther_auto_sell` | Scyther | `1` |
| `register_vote` | Votifier | `1` |
| `pyro_catch_fish` | PyroFishingPro | 鱼的编号 |
| `enter_region` | WorldGuard | `1` |
| `leave_region` | WorldGuard | `1` |

::: tip 💡 动态触发器
`static_%interval%` 每 x 刻运行一次（如 `static_20` = 每秒），支持数学：`static_%level%*5`。`global_static_%interval%` 在服务器范围内执行相同操作。
:::

## 关联页面

- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
- [所有变异器](../mutators/)
