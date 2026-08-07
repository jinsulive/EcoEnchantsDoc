---
title: All Effects
titleZh: 所有效果
category: effects
outline: deep
---

# ⚡ All Effects

> This section contains a complete reference of all available **Effects** in the libreforge & EcoEnchants system. Each effect defines a specific action or modification that can be applied to players, entities, or the world.

::: tip How to use this page
Click any card below to view the full parameter reference and configuration examples for that effect. Use your browser's search (<kbd>Ctrl</kbd>+<kbd>F</kbd>) to quickly find specific effects.
:::

## 📊 Overview

| Category | Count | Description |
|----------|-------|-------------|
| Combat | 25 | Effects related to damage, healing, and combat mechanics |
| Movement | 15 | Effects that modify movement speed, flight, teleportation, etc. |
| Potion | 8 | Effects that apply, remove, or manage potion effects |
| Economy | 15 | Effects related to currency, points, and transactions |
| Item | 25 | Effects that modify items: durability, enchantments, drops |
| Utility | 40 | General-purpose effects for various use cases |
| World | 10 | Effects that modify blocks, weather, or world state |

::: info Module Legend
<Badge type="info" text="libreforge" /> — Available in the core libreforge effect library (shared by all eco plugins)
<Badge type="warning" text="EcoEnchants" /> — Requires the EcoEnchants plugin
<Badge type="danger" text="External" /> — Requires an external integration plugin (Vault, AuraSkills, McMMO, etc.)
:::

---

## 🗂️ Browse by Category

### Combat Effects

<div class="card-grid">

<div class="card">
  <h3><a href="./add_damage">Add Damage</a></h3>
  <p>Adds incoming or outgoing damage from any damage trigger.</p>
</div>

<div class="card">
  <h3><a href="./damage_multiplier">Damage Multiplier</a></h3>
  <p>Multiplies incoming or outgoing damage.</p>
</div>

<div class="card">
  <h3><a href="./damage_nearby_entities">Damage Nearby Entities</a></h3>
  <p>Damage entities near a location.</p>
</div>

<div class="card">
  <h3><a href="./damage_victim">Damage Victim</a></h3>
  <p>Damage the victim entity.</p>
</div>

<div class="card">
  <h3><a href="./damage_twice">Damage Twice</a></h3>
  <p>Deal double damage to the victim.</p>
</div>

<div class="card">
  <h3><a href="./lifesteal">Lifesteal</a></h3>
  <p>Heal the player by a percentage of damage dealt.</p>
</div>

<div class="card">
  <h3><a href="./crit_multiplier">Crit Multiplier</a></h3>
  <p>Multiplies critical strike damage.</p>
</div>

<div class="card">
  <h3><a href="./ignite">Ignite</a></h3>
  <p>Lights the victim on fire.</p>
</div>

<div class="card">
  <h3><a href="./knockback_multiplier">Knockback Multiplier</a></h3>
  <p>Multiplies attack knockback.</p>
</div>

<div class="card">
  <h3><a href="./kill">Kill</a></h3>
  <p>Kills the victim.</p>
</div>

<div class="card">
  <h3><a href="./smite">Smite</a></h3>
  <p>Strike the victim with lightning.</p>
</div>

<div class="card">
  <h3><a href="./stun">Stun</a></h3>
  <p>Stun the victim, preventing movement.</p>
</div>

<div class="card">
  <h3><a href="./total_damage_multiplier">Total Damage Multiplier</a></h3>
  <p>Multiplies all damage dealt by the player.</p>
</div>

</div>

### Healing Effects

<div class="card-grid">

<div class="card">
  <h3><a href="./give_health">Give Health</a></h3>
  <p>Gives the player health (allows negative values).</p>
</div>

<div class="card">
  <h3><a href="./give_absorption">Give Absorption</a></h3>
  <p>Gives absorption hearts.</p>
</div>

<div class="card">
  <h3><a href="./regen_multiplier">Regen Multiplier</a></h3>
  <p>Multiplies natural health regeneration.</p>
</div>

<div class="card">
  <h3><a href="./bonus_health">Bonus Health</a></h3>
  <p>Gives bonus max health.</p>
</div>

</div>

### Movement Effects

<div class="card-grid">

<div class="card">
  <h3><a href="./movement_speed_multiplier">Movement Speed Multiplier</a></h3>
  <p>Multiplies movement speed.</p>
</div>

<div class="card">
  <h3><a href="./attack_speed_multiplier">Attack Speed Multiplier</a></h3>
  <p>Multiplies attack speed.</p>
</div>

<div class="card">
  <h3><a href="./flight">Flight</a></h3>
  <p>Enables or disables flight.</p>
</div>

<div class="card">
  <h3><a href="./teleport">Teleport</a></h3>
  <p>Teleports to a location.</p>
</div>

<div class="card">
  <h3><a href="./teleport_to">Teleport To</a></h3>
  <p>Teleports to the victim's location.</p>
</div>

<div class="card">
  <h3><a href="./random_teleport">Random Teleport</a></h3>
  <p>Teleports the player to a random location.</p>
</div>

<div class="card">
  <h3><a href="./launch">Launch</a></h3>
  <p>Launches the player into the air.</p>
</div>

<div class="card">
  <h3><a href="./pull_to_location">Pull To Location</a></h3>
  <p>Get pulled to a location.</p>
</div>

<div class="card">
  <h3><a href="./set_velocity">Set Velocity</a></h3>
  <p>Sets the velocity of an entity.</p>
</div>

<div class="card">
  <h3><a href="./multiply_velocity">Multiply Velocity</a></h3>
  <p>Multiplies velocity.</p>
</div>

<div class="card">
  <h3><a href="./jump_strength_multiplier">Jump Strength Multiplier</a></h3>
  <p>Multiplies jump strength.</p>
</div>

</div>

### Potion Effects

<div class="card-grid">

<div class="card">
  <h3><a href="./potion_effect">Potion Effect</a></h3>
  <p>Applies a temporary potion effect.</p>
</div>

<div class="card">
  <h3><a href="./permanent_potion_effect">Permanent Potion Effect</a></h3>
  <p>Applies a permanent potion effect while conditions are met.</p>
</div>

<div class="card">
  <h3><a href="./remove_potion_effect">Remove Potion Effect</a></h3>
  <p>Removes a potion effect.</p>
</div>

<div class="card">
  <h3><a href="./potion_duration_multiplier">Potion Duration Multiplier</a></h3>
  <p>Multiplies potion effect duration.</p>
</div>

</div>

### Economy Effects

<div class="card-grid">

<div class="card">
  <h3><a href="./give_money">Give Money</a></h3>
  <p>Gives a player money (requires Vault).</p>
</div>

<div class="card">
  <h3><a href="./take_money">Take Money</a></h3>
  <p>Takes money from the player (requires Vault).</p>
</div>

<div class="card">
  <h3><a href="./give_price">Give Price</a></h3>
  <p>Gives a price value.</p>
</div>

<div class="card">
  <h3><a href="./pay_price">Pay Price</a></h3>
  <p>Charges a price from the player.</p>
</div>

<div class="card">
  <h3><a href="./add_points">Add Points</a></h3>
  <p>Add/subtract points to/from a player.</p>
</div>

<div class="card">
  <h3><a href="./give_points">Give Points</a></h3>
  <p>Gives points to a player.</p>
</div>

<div class="card">
  <h3><a href="./set_points">Set Points</a></h3>
  <p>Sets the points value of a player.</p>
</div>

<div class="card">
  <h3><a href="./multiply_points">Multiply Points</a></h3>
  <p>Multiplies a player's points.</p>
</div>

<div class="card">
  <h3><a href="./give_global_points">Give Global Points</a></h3>
  <p>Gives global (server-wide) points.</p>
</div>

<div class="card">
  <h3><a href="./sell_items">Sell Items</a></h3>
  <p>Sells items from the player's inventory.</p>
</div>

<div class="card">
  <h3><a href="./sell_multiplier">Sell Multiplier</a></h3>
  <p>Multiplies sell prices.</p>
</div>

</div>

### Item & Drop Effects

<div class="card-grid">

<div class="card">
  <h3><a href="./give_item">Give Item</a></h3>
  <p>Gives a player an item.</p>
</div>

<div class="card">
  <h3><a href="./remove_item">Remove Item</a></h3>
  <p>Removes an item from the player.</p>
</div>

<div class="card">
  <h3><a href="./drop_item">Drop Item</a></h3>
  <p>Drops an item at a location.</p>
</div>

<div class="card">
  <h3><a href="./drop_random_item">Drop Random Item</a></h3>
  <p>Drops a random item from a list.</p>
</div>

<div class="card">
  <h3><a href="./multiply_drops">Multiply Drops</a></h3>
  <p>Multiplies block/entity drops.</p>
</div>

<div class="card">
  <h3><a href="./telekinesis">Telekinesis</a></h3>
  <p>Teleports all drops to the player's inventory.</p>
</div>

<div class="card">
  <h3><a href="./autosmelt">Autosmelt</a></h3>
  <p>Automatically smelts mined ores.</p>
</div>

<div class="card">
  <h3><a href="./add_enchant">Add Enchant</a></h3>
  <p>Adds an enchantment to an item.</p>
</div>

<div class="card">
  <h3><a href="./remove_enchant">Remove Enchant</a></h3>
  <p>Removes an enchantment from an item.</p>
</div>

<div class="card">
  <h3><a href="./damage_item">Damage Item</a></h3>
  <p>Damages an item.</p>
</div>

<div class="card">
  <h3><a href="./repair_item">Repair Item</a></h3>
  <p>Repairs an item.</p>
</div>

<div class="card">
  <h3><a href="./set_unbreakable">Set Unbreakable</a></h3>
  <p>Makes an item unbreakable.</p>
</div>

<div class="card">
  <h3><a href="./keep_inventory">Keep Inventory</a></h3>
  <p>Gives the player keep inventory on death.</p>
</div>

<div class="card">
  <h3><a href="./keep_level">Keep Level</a></h3>
  <p>Gives the player keep XP levels on death.</p>
</div>

</div>

### Particle & Visual Effects

<div class="card-grid">

<div class="card">
  <h3><a href="./spawn_particle">Spawn Particle</a></h3>
  <p>Spawns a particle effect.</p>
</div>

<div class="card">
  <h3><a href="./particle_line">Particle Line</a></h3>
  <p>Spawns a line of particles between two points.</p>
</div>

<div class="card">
  <h3><a href="./particle_animation">Particle Animation</a></h3>
  <p>Spawns an animated particle effect.</p>
</div>

<div class="card">
  <h3><a href="./create_hologram">Create Hologram</a></h3>
  <p>Creates a hologram.</p>
</div>

<div class="card">
  <h3><a href="./firework">Firework</a></h3>
  <p>Spawns a firework.</p>
</div>

<div class="card">
  <h3><a href="./set_glowing">Set Glowing</a></h3>
  <p>Makes an entity glow.</p>
</div>

</div>

### Audio & Message Effects

<div class="card-grid">

<div class="card">
  <h3><a href="./send_message">Send Message</a></h3>
  <p>Sends the player a message (chat or action bar).</p>
</div>

<div class="card">
  <h3><a href="./send_minimessage">Send MiniMessage</a></h3>
  <p>Sends a MiniMessage-formatted message (requires Paper).</p>
</div>

<div class="card">
  <h3><a href="./send_title">Send Title</a></h3>
  <p>Sends a title/subtitle to the player.</p>
</div>

<div class="card">
  <h3><a href="./broadcast">Broadcast</a></h3>
  <p>Sends a message to everyone online.</p>
</div>

<div class="card">
  <h3><a href="./play_sound">Play Sound</a></h3>
  <p>Plays a sound to the player.</p>
</div>

</div>

### World & Block Effects

<div class="card-grid">

<div class="card">
  <h3><a href="./set_block">Set Block</a></h3>
  <p>Sets a block at a location.</p>
</div>

<div class="card">
  <h3><a href="./place_block">Place Block</a></h3>
  <p>Places a block.</p>
</div>

<div class="card">
  <h3><a href="./break_block">Break Block</a></h3>
  <p>Breaks a block.</p>
</div>

<div class="card">
  <h3><a href="./create_explosion">Create Explosion</a></h3>
  <p>Creates an explosion.</p>
</div>

<div class="card">
  <h3><a href="./strike_lightning">Strike Lightning</a></h3>
  <p>Strikes lightning at a location.</p>
</div>

<div class="card">
  <h3><a href="./spawn_entity">Spawn Entity</a></h3>
  <p>Spawns an entity.</p>
</div>

<div class="card">
  <h3><a href="./spawn_mobs">Spawn Mobs</a></h3>
  <p>Spawns multiple mobs.</p>
</div>

</div>

### Utility & Advanced Effects

<div class="card-grid">

<div class="card">
  <h3><a href="./run_command">Run Command</a></h3>
  <p>Runs a console command.</p>
</div>

<div class="card">
  <h3><a href="./run_player_command">Run Player Command</a></h3>
  <p>Runs a command as the player.</p>
</div>

<div class="card">
  <h3><a href="./run_chain">Run Chain</a></h3>
  <p>Runs a reusable or inline effect chain.</p>
</div>

<div class="card">
  <h3><a href="./trigger_custom">Trigger Custom</a></h3>
  <p>Calls a custom trigger.</p>
</div>

<div class="card">
  <h3><a href="./give_xp">Give XP</a></h3>
  <p>Gives experience points.</p>
</div>

<div class="card">
  <h3><a href="./drop_xp">Drop XP</a></h3>
  <p>Drops XP orbs.</p>
</div>

<div class="card">
  <h3><a href="./xp_multiplier">XP Multiplier</a></h3>
  <p>Multiplies XP gained.</p>
</div>

<div class="card">
  <h3><a href="./give_food">Give Food</a></h3>
  <p>Gives the player food.</p>
</div>

<div class="card">
  <h3><a href="./give_saturation">Give Saturation</a></h3>
  <p>Gives the player saturation.</p>
</div>

<div class="card">
  <h3><a href="./give_oxygen">Give Oxygen</a></h3>
  <p>Gives the player oxygen.</p>
</div>

<div class="card">
  <h3><a href="./clear_inventory">Clear Inventory</a></h3>
  <p>Clears the player's inventory.</p>
</div>

<div class="card">
  <h3><a href="./open_ender_chest">Open Ender Chest</a></h3>
  <p>Opens the player's ender chest.</p>
</div>

<div class="card">
  <h3><a href="./open_crafting">Open Crafting</a></h3>
  <p>Opens a crafting table GUI.</p>
</div>

<div class="card">
  <h3><a href="./close_inventory">Close Inventory</a></h3>
  <p>Closes the player's inventory.</p>
</div>

<div class="card">
  <h3><a href="./aoe">AOE</a></h3>
  <p>Runs effects in an area of effect around a target.</p>
</div>

<div class="card">
  <h3><a href="./aoe_blocks">AOE Blocks</a></h3>
  <p>Runs effects on blocks in an area.</p>
</div>

<div class="card">
  <h3><a href="./all_players">All Players</a></h3>
  <p>Runs effects for all players.</p>
</div>

<div class="card">
  <h3><a href="./random_player">Random Player</a></h3>
  <p>Runs effects for a random player.</p>
</div>

<div class="card">
  <h3><a href="./block_commands">Block Commands</a></h3>
  <p>Blocks command execution.</p>
</div>

<div class="card">
  <h3><a href="./cancel_event">Cancel Event</a></h3>
  <p>Cancels the triggering event.</p>
</div>

</div>

---

## 🔍 Quick Reference

| Effect ID | Category | Module | Brief |
|-----------|----------|--------|-------|
| `add_damage` | Combat | <Badge type="info" text="libreforge" /> | Add incoming/outgoing damage |
| `damage_multiplier` | Combat | <Badge type="info" text="libreforge" /> | Multiply incoming/outgoing damage |
| `damage_nearby_entities` | Combat | <Badge type="info" text="libreforge" /> | Damage entities near a location |
| `damage_victim` | Combat | <Badge type="info" text="libreforge" /> | Damage the victim |
| `lifesteal` | Combat | <Badge type="info" text="libreforge" /> | Heal on damage dealt |
| `crit_multiplier` | Combat | <Badge type="info" text="libreforge" /> | Multiply crit damage |
| `ignite` | Combat | <Badge type="info" text="libreforge" /> | Set the victim on fire |
| `knockback_multiplier` | Combat | <Badge type="info" text="libreforge" /> | Multiply knockback |
| `give_health` | Healing | <Badge type="info" text="libreforge" /> | Give health to the player |
| `give_absorption` | Healing | <Badge type="info" text="libreforge" /> | Give absorption hearts |
| `movement_speed_multiplier` | Movement | <Badge type="info" text="libreforge" /> | Multiply movement speed |
| `attack_speed_multiplier` | Movement | <Badge type="info" text="libreforge" /> | Multiply attack speed |
| `flight` | Movement | <Badge type="info" text="libreforge" /> | Enable/disable flight |
| `teleport` | Movement | <Badge type="info" text="libreforge" /> | Teleport to a location |
| `potion_effect` | Potion | <Badge type="info" text="libreforge" /> | Apply a potion effect |
| `permanent_potion_effect` | Potion | <Badge type="info" text="libreforge" /> | Apply a permanent potion effect |
| `remove_potion_effect` | Potion | <Badge type="info" text="libreforge" /> | Remove a potion effect |
| `give_money` | Economy | <Badge type="danger" text="Vault" /> | Give money to the player |
| `take_money` | Economy | <Badge type="danger" text="Vault" /> | Take money from the player |
| `give_price` | Economy | <Badge type="info" text="libreforge" /> | Give a price value |
| `pay_price` | Economy | <Badge type="info" text="libreforge" /> | Charge a price |
| `add_points` | Economy | <Badge type="info" text="libreforge" /> | Add/subtract points |
| `give_points` | Economy | <Badge type="info" text="libreforge" /> | Give points |
| `set_points` | Economy | <Badge type="info" text="libreforge" /> | Set points |
| `multiply_points` | Economy | <Badge type="info" text="libreforge" /> | Multiply points |
| `give_global_points` | Economy | <Badge type="info" text="libreforge" /> | Give global points |
| `give_item` | Item | <Badge type="info" text="libreforge" /> | Give an item |
| `remove_item` | Item | <Badge type="info" text="libreforge" /> | Remove an item |
| `drop_item` | Item | <Badge type="info" text="libreforge" /> | Drop an item |
| `drop_random_item` | Item | <Badge type="info" text="libreforge" /> | Drop a random item |
| `multiply_drops` | Item | <Badge type="info" text="libreforge" /> | Multiply drops |
| `telekinesis` | Item | <Badge type="info" text="libreforge" /> | Teleport drops to inventory |
| `autosmelt` | Item | <Badge type="info" text="libreforge" /> | Auto-smelt mined ores |
| `add_enchant` | Item | <Badge type="info" text="libreforge" /> | Add an enchantment |
| `remove_enchant` | Item | <Badge type="info" text="libreforge" /> | Remove an enchantment |
| `damage_item` | Item | <Badge type="info" text="libreforge" /> | Damage an item |
| `repair_item` | Item | <Badge type="info" text="libreforge" /> | Repair an item |
| `set_unbreakable` | Item | <Badge type="info" text="libreforge" /> | Make an item unbreakable |
| `keep_inventory` | Item | <Badge type="info" text="libreforge" /> | Keep inventory on death |
| `keep_level` | Item | <Badge type="info" text="libreforge" /> | Keep XP on death |
| `spawn_particle` | Visual | <Badge type="info" text="libreforge" /> | Spawn a particle |
| `particle_line` | Visual | <Badge type="info" text="libreforge" /> | Spawn a particle line |
| `particle_animation` | Visual | <Badge type="info" text="libreforge" /> | Spawn particle animation |
| `create_hologram` | Visual | <Badge type="info" text="libreforge" /> | Create a hologram |
| `firework` | Visual | <Badge type="info" text="libreforge" /> | Spawn a firework |
| `set_glowing` | Visual | <Badge type="info" text="libreforge" /> | Make an entity glow |
| `send_message` | Audio/Message | <Badge type="info" text="libreforge" /> | Send a message |
| `send_minimessage` | Audio/Message | <Badge type="danger" text="Paper" /> | Send a MiniMessage |
| `send_title` | Audio/Message | <Badge type="info" text="libreforge" /> | Send a title |
| `broadcast` | Audio/Message | <Badge type="info" text="libreforge" /> | Broadcast a message |
| `play_sound` | Audio/Message | <Badge type="info" text="libreforge" /> | Play a sound |
| `set_block` | World | <Badge type="info" text="libreforge" /> | Set a block |
| `place_block` | World | <Badge type="info" text="libreforge" /> | Place a block |
| `break_block` | World | <Badge type="info" text="libreforge" /> | Break a block |
| `create_explosion` | World | <Badge type="info" text="libreforge" /> | Create an explosion |
| `strike_lightning` | World | <Badge type="info" text="libreforge" /> | Strike lightning |
| `spawn_entity` | World | <Badge type="info" text="libreforge" /> | Spawn an entity |
| `spawn_mobs` | World | <Badge type="info" text="libreforge" /> | Spawn mobs |
| `run_command` | Utility | <Badge type="info" text="libreforge" /> | Run a console command |
| `run_player_command` | Utility | <Badge type="info" text="libreforge" /> | Run a command as the player |
| `run_chain` | Utility | <Badge type="info" text="libreforge" /> | Run an effect chain |
| `trigger_custom` | Utility | <Badge type="info" text="libreforge" /> | Call a custom trigger |
| `give_xp` | Utility | <Badge type="info" text="libreforge" /> | Give experience points |
| `drop_xp` | Utility | <Badge type="info" text="libreforge" /> | Drop XP orbs |
| `xp_multiplier` | Utility | <Badge type="info" text="libreforge" /> | Multiply XP gained |
| `give_food` | Utility | <Badge type="info" text="libreforge" /> | Give food |
| `give_saturation` | Utility | <Badge type="info" text="libreforge" /> | Give saturation |
| `give_oxygen` | Utility | <Badge type="info" text="libreforge" /> | Give oxygen |
| `clear_inventory` | Utility | <Badge type="info" text="libreforge" /> | Clear inventory |
| `open_ender_chest` | Utility | <Badge type="info" text="libreforge" /> | Open ender chest |
| `open_crafting` | Utility | <Badge type="info" text="libreforge" /> | Open crafting GUI |
| `close_inventory` | Utility | <Badge type="info" text="libreforge" /> | Close inventory |
| `aoe` | Utility | <Badge type="info" text="libreforge" /> | Area-of-effect execution |
| `aoe_blocks` | Utility | <Badge type="info" text="libreforge" /> | Area-of-effect on blocks |
| `all_players` | Utility | <Badge type="info" text="libreforge" /> | Run for all players |
| `random_player` | Utility | <Badge type="info" text="libreforge" /> | Run for a random player |
| `block_commands` | Utility | <Badge type="info" text="libreforge" /> | Block commands |
| `cancel_event` | Utility | <Badge type="info" text="libreforge" /> | Cancel the event |

📝 **Editor's Note:** The table above lists the most commonly used effects with complete data. The full 260+ effect list is available in the sidebar. Effect pages marked "libreforge" are part of the shared effect library used by EcoEnchants and all eco plugins.

## Related Pages

- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
- [All Mutators](../mutators/)
