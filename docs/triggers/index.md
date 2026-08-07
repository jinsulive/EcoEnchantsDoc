---
title: All Triggers
titleZh: 所有触发器
category: triggers
outline: deep
---

# 🔌 All Triggers

> Triggered effects require a trigger — these are the events/actions that cause the effects to run. This section contains a complete reference of all available **Triggers** in the libreforge & EcoEnchants system.

::: tip How to use this page
Click any card below to view the full trigger reference. Use your browser's search (<kbd>Ctrl</kbd>+<kbd>F</kbd>) to quickly find specific triggers.
:::

## Trigger Values

Triggers can produce a `value`, and some produce an `alt-value`. Reference them with placeholders to scale multipliers, level up EcoSkills/Jobs/Pets, or send messages in chat:

| Placeholder | Value | Aliases |
|-------------|-------|---------|
| `%trigger_value%` | The value passed by the trigger | `%triggervalue%`, `%trigger%`, `%value%`, `%tv%`, `%v%`, `%t%` |
| `%alt_trigger_value%` | The alt-value passed by the trigger | `%alttriggervalue%`, `%altvalue%`, `%atv%`, `%av%`, `%at%` |

## 📊 Overview

| Category | Count | Description |
|----------|-------|-------------|
| Internal | 108 | Built-in triggers available everywhere |
| EcoPlugin | 29 | Triggers from eco plugin integrations |
| External | 34 | Triggers from third-party plugin integrations |

---

## 🗂️ Browse by Category

### 🎮 Internal Triggers

<div class="card-grid">

<div class="card">
  <h3><a href="./melee_attack">Melee Attack</a></h3>
  <p>Triggered when injuring an entity with a melee attack.</p>
</div>

<div class="card">
  <h3><a href="./bow_attack">Bow Attack</a></h3>
  <p>Triggered when shooting an entity with a bow/crossbow.</p>
</div>

<div class="card">
  <h3><a href="./mine_block">Mine Block</a></h3>
  <p>Triggered when mining a block.</p>
</div>

<div class="card">
  <h3><a href="./take_damage">Take Damage</a></h3>
  <p>Triggered when taking damage from any source.</p>
</div>

<div class="card">
  <h3><a href="./kill">Kill</a></h3>
  <p>Triggered when a player kills a player or entity.</p>
</div>

<div class="card">
  <h3><a href="./death">Death</a></h3>
  <p>Triggered on death from any source.</p>
</div>

<div class="card">
  <h3><a href="./join">Join</a></h3>
  <p>Triggered when joining the server.</p>
</div>

<div class="card">
  <h3><a href="./leave">Leave</a></h3>
  <p>Triggered when leaving the server.</p>
</div>

<div class="card">
  <h3><a href="./jump">Jump</a></h3>
  <p>Triggered when jumping (pressing space).</p>
</div>

<div class="card">
  <h3><a href="./consume">Consume</a></h3>
  <p>Triggered on item consumption.</p>
</div>

<div class="card">
  <h3><a href="./craft">Craft</a></h3>
  <p>Triggered when crafting an item.</p>
</div>

<div class="card">
  <h3><a href="./place_block">Place Block</a></h3>
  <p>Triggered when placing a block.</p>
</div>

<div class="card">
  <h3><a href="./pick_up_item">Pick Up Item</a></h3>
  <p>Triggered when picking up an item.</p>
</div>

<div class="card">
  <h3><a href="./drop_item">Drop Item</a></h3>
  <p>Triggered when dropping an item.</p>
</div>

<div class="card">
  <h3><a href="./heal">Heal</a></h3>
  <p>Triggered when regaining health.</p>
</div>

<div class="card">
  <h3><a href="./gain_xp">Gain XP</a></h3>
  <p>Triggered when gaining experience points.</p>
</div>

<div class="card">
  <h3><a href="./teleport">Teleport</a></h3>
  <p>Triggered when teleporting.</p>
</div>

<div class="card">
  <h3><a href="./respawn">Respawn</a></h3>
  <p>Triggered when respawning.</p>
</div>

<div class="card">
  <h3><a href="./entity_death">Entity Death</a></h3>
  <p>Triggered when an entity dies.</p>
</div>

<div class="card">
  <h3><a href="./entity_damage">Entity Damage</a></h3>
  <p>Triggered when an entity takes damage.</p>
</div>

</div>

### 🧩 EcoPlugin Triggers

<div class="card-grid">

<div class="card">
  <h3><a href="./enchant_type">Enchant &lt;type&gt;</a></h3>
  <p>Triggered when enchanting with a certain enchantment type (EcoEnchants).</p>
</div>

<div class="card">
  <h3><a href="./gain_skill_xp">Gain Skill XP</a></h3>
  <p>Triggered when gaining skill experience (EcoSkills).</p>
</div>

<div class="card">
  <h3><a href="./level_up_skill">Level Up Skill</a></h3>
  <p>Triggered when levelling up a skill (EcoSkills).</p>
</div>

<div class="card">
  <h3><a href="./gain_job_xp">Gain Job XP</a></h3>
  <p>Triggered when gaining job experience (EcoJobs).</p>
</div>

<div class="card">
  <h3><a href="./gain_pet_xp">Gain Pet XP</a></h3>
  <p>Triggered when gaining pet experience (EcoPets).</p>
</div>

<div class="card">
  <h3><a href="./complete_quest">Complete Quest</a></h3>
  <p>Triggered when completing a quest (EcoQuests).</p>
</div>

<div class="card">
  <h3><a href="./gain_battlepass_xp">Gain Battlepass XP</a></h3>
  <p>Triggered when gaining battlepass XP (EcoBattlepass).</p>
</div>

</div>

### 🔗 External Integration Triggers

<div class="card-grid">

<div class="card">
  <h3><a href="./enter_region">Enter Region</a></h3>
  <p>Triggered when entering a region (WorldGuard).</p>
</div>

<div class="card">
  <h3><a href="./leave_region">Leave Region</a></h3>
  <p>Triggered when leaving a region (WorldGuard).</p>
</div>

<div class="card">
  <h3><a href="./gain_mcmmo_xp">Gain McMMO XP</a></h3>
  <p>Triggered when gaining McMMO XP.</p>
</div>

<div class="card">
  <h3><a href="./level_up_mcmmo">Level Up McMMO</a></h3>
  <p>Triggered when levelling up a McMMO skill.</p>
</div>

<div class="card">
  <h3><a href="./player_trade">Player Trade</a></h3>
  <p>Triggered when trading with a player (AxTrade).</p>
</div>

<div class="card">
  <h3><a href="./take_mythic_damage">Take Mythic Damage</a></h3>
  <p>Triggered when taking MythicMobs damage.</p>
</div>

<div class="card">
  <h3><a href="./register_vote">Register Vote</a></h3>
  <p>Triggered when a player votes for the server (Votifier).</p>
</div>

</div>

---

## 🔍 Quick Reference

### Internal Triggers

| Trigger ID | Value(s) |
|-----------|----------|
| `alt_click` | `1` |
| `anvil_modify` *(Purpur)* | Experience cost |
| `beacon_effect` *(Paper)* | `1` |
| `bite` | `1` |
| `block_item_drop` | Amount of items dropped |
| `bonemeal_crop` | `1` |
| `bow_attack` | Damage dealt |
| `breed` | Experience received |
| `brew` | `1` |
| `brew_ingredient` | `1` |
| `cast_rod` | `1` |
| `catch_entity` | `1` |
| `catch_fish` | Experience dropped |
| `catch_fish_fail` | `1` |
| `cauldron_level_change` | New cauldron level |
| `change_armor` | `1` |
| `change_biome` | `1` |
| `change_chunk` | `1` |
| `change_world` | `1` |
| `click_block` | `1` |
| `click_entity` | `1` |
| `collide_with_entity` | `1` |
| `complete_advancement` | `1` |
| `compost_item` *(Paper)* | `1` (alt: 1 if level increases) |
| `consume` | `1` |
| `craft` | Amount of items crafted |
| `damage_item` | The damage |
| `death` | `1` |
| `deploy_elytra` | `1` |
| `disable` | `1` |
| `drop_item` | Amount of items |
| `elytra_boost` *(Paper)* | `1` |
| `empty_bucket` | `1` |
| `enable` | `1` |
| `enchant_item` | XP cost |
| `enter_bed` | `1` |
| `enter_vehicle` | `1` |
| `entity_break_door` | `1` |
| `entity_catch_fire_from_block` | `1` |
| `entity_catch_fire_from_entity` | `1` |
| `entity_damage` | Damage taken |
| `entity_damage_by_entity` | Damage taken |
| `entity_death` | `1` |
| `entity_item_drop` | Amount of items dropped |
| `entity_spawn` | `1` |
| `entity_target` | `1` |
| `entity_teleport` | `1` |
| `exit_vehicle` | `1` |
| `fall_damage` | Damage taken |
| `fill_bucket` | `1` |
| `gain_hunger` | Hunger gained |
| `gain_xp` | XP gained |
| `global_static_%interval%` | `1` |
| `grind_item` *(Purpur)* | Experience gained |
| `headshot` | Damage dealt |
| `heal` | Health regained |
| `hold_item` | `1` |
| `hook_in_ground` | `1` |
| `item_break` | `1` |
| `join` | `1` |
| `jump` | `1` |
| `kill` | Victim's max health |
| `leash_entity` | `1` |
| `leave` | `1` |
| `leave_bed` | `1` |
| `leave_land` | `1` |
| `level_up_item` | New item level |
| `level_up_xp` | New level |
| `lose_hunger` | Hunger lost |
| `lose_potion_effect` | `1` |
| `melee_attack` | Damage dealt |
| `mine_block` | `1` |
| `mine_block_cascade` | `1` |
| `mine_block_progress` | `1` |
| `move` | Distance moved |
| `note_block_play` | `1` |
| `pick_up_item` | Amount of items |
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
| `sell_item` | The price |
| `send_message` | `1` |
| `shear_entity` | `1` |
| `shield_block` | Damage blocked |
| `shoot_bow` | Bow force (0-1) |
| `smelt` | Amount of items smelted |
| `smith_item` | `1` |
| `static_%interval%` | `1` |
| `swap_hands` | `1` |
| `swing` *(Paper)* | `1` |
| `take_damage` | Damage taken |
| `take_entity_damage` | Damage taken |
| `tame_animal` | `1` |
| `teleport` | `1` |
| `toggle_flight` | `1` |
| `toggle_sneak` | `1` |
| `toggle_sprint` | `1` |
| `trident_attack` *(Paper)* | Damage dealt |
| `trident_hit` | `1` |
| `unleash_entity` | `1` |
| `use_flower_pot` *(Paper)* | `1` |
| `villager_trade` *(Paper)* | Experience the villager gains |
| `win_raid` | Level of bad omen |

### EcoPlugin Triggers

| Trigger ID | Plugin | Value(s) |
|-----------|--------|----------|
| `claim_battlepass_reward` | EcoBattlepass | `1` |
| `complete_battlepass_task` | EcoBattlepass | `1` |
| `gain_battlepass_xp` | EcoBattlepass | Experience gained |
| `tier_up_battlepass` | EcoBattlepass | New level |
| `complete_collection` | EcoCollections | `1` |
| `tier_up_collection` | EcoCollections | New tier |
| `unlock_collection` | EcoCollections | `1` |
| `enchant_<type>` | **EcoEnchants** | XP cost |
| `advance_armor` | EcoArmor | `1` |
| `upgrade_armor_tier` | EcoArmor | Tier ID |
| `gain_job_xp` | EcoJobs | Experience gained |
| `join_job` | EcoJobs | Job level |
| `leave_job` | EcoJobs | Job level |
| `level_up_job` | EcoJobs | New level |
| `gain_pet_xp` | EcoPets | Experience gained |
| `level_up_pet` | EcoPets | New level |
| `pet_activate` | EcoPets | `1` |
| `pet_deactivate` | EcoPets | `1` |
| `complete_quest` | EcoQuests | `1` |
| `complete_task` | EcoQuests | `1` |
| `gain_task_xp` | EcoQuests | Experience gained |
| `start_quest` | EcoQuests | `1` |
| `inscribe` | EcoScrolls | `1` |
| `try_inscribe` | EcoScrolls | `1` |
| `buy_item` | EcoShop | The price |
| `gain_skill_xp` | EcoSkills | Experience gained |
| `level_up_skill` | EcoSkills | New level |
| `regen_magic` | EcoSkills | `1` |
| `reforge_item` | Reforges | Reforge cost |

### External Integration Triggers

| Trigger ID | Plugin | Value(s) |
|-----------|--------|----------|
| `collect_envoy` | AxEnvoy | `1` |
| `player_trade` | AxTrade | Total items (alt: total currency) |
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
| `jobs_level_up` | Jobs Reborn | New level |
| `join_land` | Lands | `1` |
| `lands_bank_deposit` | Lands | Value deposited (alt: new balance) |
| `lands_bank_withdraw` | Lands | Value withdrawn (alt: new balance) |
| `lands_spawn_teleport` | Lands | `1` |
| `gain_mcmmo_xp` | McMMO | XP gained |
| `level_down_mcmmo` | McMMO | New level |
| `level_up_mcmmo` | McMMO | New level |
| `mcmmo_ability_activate` | McMMO | `1` |
| `mcmmo_ability_deactivate` | McMMO | `1` |
| `take_mythic_damage` | MythicMobs | Damage taken |
| `scyther_auto_collect` | Scyther | `1` |
| `scyther_auto_sell` | Scyther | `1` |
| `register_vote` | Votifier | `1` |
| `pyro_catch_fish` | PyroFishingPro | Fish number |
| `enter_region` | WorldGuard | `1` |
| `leave_region` | WorldGuard | `1` |

::: tip 💡 Dynamic Triggers
`static_%interval%` runs every x ticks (e.g. `static_20` = every second) — math supported: `static_%level%*5`. `global_static_%interval%` does the same server-wide.
:::

## Related Pages

- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
- [All Mutators](../mutators/)
