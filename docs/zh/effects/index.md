---
title: 所有效果
titleEn: All Effects
category: effects
outline: deep
---

# ⚡ 所有效果

> 本节包含 libreforge 与 EcoEnchants 系统中所有可用 **效果（Effects）** 的完整参考。每个效果定义了可应用于玩家、实体或世界的特定操作或修改。

::: tip 如何使用本页
点击下方任意卡片查看该效果的完整参数说明与配置示例。可使用浏览器搜索（<kbd>Ctrl</kbd>+<kbd>F</kbd>）快速定位。
:::

## 📊 概览

| 分类 | 数量 | 说明 |
|------|------|------|
| 战斗 | 25 | 与伤害、治疗、战斗机制相关的效果 |
| 移动 | 15 | 修改移动速度、飞行、传送等的效果 |
| 药水 | 8 | 施加、移除或管理药水效果 |
| 经济 | 15 | 与货币、点数和交易相关的效果 |
| 物品 | 25 | 修改物品耐久、附魔、掉落的效果 |
| 工具 | 40 | 通用场景的多用途效果 |
| 世界 | 10 | 修改方块、天气或世界状态的效果 |

::: info 模块图例
<Badge type="info" text="libreforge" /> — 核心 libreforge 效果库内置（所有 eco 插件共享）
<Badge type="warning" text="EcoEnchants" /> — 需要 EcoEnchants 插件
<Badge type="danger" text="外部" /> — 需要外部集成插件（Vault、AuraSkills、McMMO 等）
:::

---

## 🗂️ 按分类浏览

### 战斗效果

<div class="card-grid">

<div class="card">
  <h3><a href="./add_damage">附加伤害（Add Damage）</a></h3>
  <p>为任意伤害触发器的进出伤害增加数值。</p>
</div>

<div class="card">
  <h3><a href="./damage_multiplier">伤害倍率（Damage Multiplier）</a></h3>
  <p>倍率化进出的伤害。</p>
</div>

<div class="card">
  <h3><a href="./damage_nearby_entities">伤害附近实体（Damage Nearby Entities）</a></h3>
  <p>对某位置附近的实体造成伤害。</p>
</div>

<div class="card">
  <h3><a href="./damage_victim">伤害目标（Damage Victim）</a></h3>
  <p>对目标实体造成伤害。</p>
</div>

<div class="card">
  <h3><a href="./damage_twice">双重伤害（Damage Twice）</a></h3>
  <p>对目标造成双重伤害。</p>
</div>

<div class="card">
  <h3><a href="./lifesteal">吸血（Lifesteal）</a></h3>
  <p>按造成伤害的百分比治疗玩家。</p>
</div>

<div class="card">
  <h3><a href="./crit_multiplier">暴击倍率（Crit Multiplier）</a></h3>
  <p>倍率化暴击伤害。</p>
</div>

<div class="card">
  <h3><a href="./ignite">点燃（Ignite）</a></h3>
  <p>点燃目标实体。</p>
</div>

<div class="card">
  <h3><a href="./knockback_multiplier">击退倍率（Knockback Multiplier）</a></h3>
  <p>倍率化攻击击退。</p>
</div>

<div class="card">
  <h3><a href="./kill">击杀（Kill）</a></h3>
  <p>杀死目标。</p>
</div>

<div class="card">
  <h3><a href="./smite">雷击（Smite）</a></h3>
  <p>用闪电击中目标。</p>
</div>

<div class="card">
  <h3><a href="./stun">眩晕（Stun）</a></h3>
  <p>眩晕目标，阻止其移动。</p>
</div>

<div class="card">
  <h3><a href="./total_damage_multiplier">总伤害倍率（Total Damage Multiplier）</a></h3>
  <p>倍率化玩家造成的所有伤害。</p>
</div>

</div>

### 治疗效果

<div class="card-grid">

<div class="card">
  <h3><a href="./give_health">给予生命（Give Health）</a></h3>
  <p>给予玩家生命值（允许负值）。</p>
</div>

<div class="card">
  <h3><a href="./give_absorption">给予吸收（Give Absorption）</a></h3>
  <p>给予吸收心。</p>
</div>

<div class="card">
  <h3><a href="./regen_multiplier">回血倍率（Regen Multiplier）</a></h3>
  <p>倍率化自然生命恢复。</p>
</div>

<div class="card">
  <h3><a href="./bonus_health">额外生命（Bonus Health）</a></h3>
  <p>给予额外最大生命值。</p>
</div>

</div>

### 移动效果

<div class="card-grid">

<div class="card">
  <h3><a href="./movement_speed_multiplier">移动速度倍率（Movement Speed Multiplier）</a></h3>
  <p>倍率化移动速度。</p>
</div>

<div class="card">
  <h3><a href="./attack_speed_multiplier">攻击速度倍率（Attack Speed Multiplier）</a></h3>
  <p>倍率化攻击速度。</p>
</div>

<div class="card">
  <h3><a href="./flight">飞行（Flight）</a></h3>
  <p>启用或禁用飞行。</p>
</div>

<div class="card">
  <h3><a href="./teleport">传送（Teleport）</a></h3>
  <p>传送到某个位置。</p>
</div>

<div class="card">
  <h3><a href="./teleport_to">传送到目标（Teleport To）</a></h3>
  <p>传送到目标的位置。</p>
</div>

<div class="card">
  <h3><a href="./random_teleport">随机传送（Random Teleport）</a></h3>
  <p>将玩家传送到随机位置。</p>
</div>

<div class="card">
  <h3><a href="./launch">发射（Launch）</a></h3>
  <p>将玩家发射到空中。</p>
</div>

<div class="card">
  <h3><a href="./pull_to_location">拉向位置（Pull To Location）</a></h3>
  <p>被拉向某个位置。</p>
</div>

<div class="card">
  <h3><a href="./set_velocity">设置速度（Set Velocity）</a></h3>
  <p>设置实体的速度。</p>
</div>

<div class="card">
  <h3><a href="./multiply_velocity">速度倍率（Multiply Velocity）</a></h3>
  <p>倍率化速度。</p>
</div>

<div class="card">
  <h3><a href="./jump_strength_multiplier">跳跃强度倍率（Jump Strength Multiplier）</a></h3>
  <p>倍率化跳跃强度。</p>
</div>

</div>

### 药水效果

<div class="card-grid">

<div class="card">
  <h3><a href="./potion_effect">药水效果（Potion Effect）</a></h3>
  <p>施加临时药水效果。</p>
</div>

<div class="card">
  <h3><a href="./permanent_potion_effect">永久药水效果（Permanent Potion Effect）</a></h3>
  <p>条件满足时施加永久药水效果。</p>
</div>

<div class="card">
  <h3><a href="./remove_potion_effect">移除药水效果（Remove Potion Effect）</a></h3>
  <p>移除药水效果。</p>
</div>

<div class="card">
  <h3><a href="./potion_duration_multiplier">药水时长倍率（Potion Duration Multiplier）</a></h3>
  <p>倍率化药水效果持续时间。</p>
</div>

</div>

### 经济效果

<div class="card-grid">

<div class="card">
  <h3><a href="./give_money">给予金钱（Give Money）</a></h3>
  <p>给予玩家金钱（需要 Vault）。</p>
</div>

<div class="card">
  <h3><a href="./take_money">扣除金钱（Take Money）</a></h3>
  <p>从玩家处扣除金钱（需要 Vault）。</p>
</div>

<div class="card">
  <h3><a href="./give_price">给予价格（Give Price）</a></h3>
  <p>给予一个价格值。</p>
</div>

<div class="card">
  <h3><a href="./pay_price">支付价格（Pay Price）</a></h3>
  <p>向玩家收取价格。</p>
</div>

<div class="card">
  <h3><a href="./add_points">增减点数（Add Points）</a></h3>
  <p>为玩家增加/减少点数。</p>
</div>

<div class="card">
  <h3><a href="./give_points">给予点数（Give Points）</a></h3>
  <p>给予玩家点数。</p>
</div>

<div class="card">
  <h3><a href="./set_points">设置点数（Set Points）</a></h3>
  <p>设置玩家的点数。</p>
</div>

<div class="card">
  <h3><a href="./multiply_points">点数倍率（Multiply Points）</a></h3>
  <p>倍率化玩家点数。</p>
</div>

<div class="card">
  <h3><a href="./give_global_points">给予全局点数（Give Global Points）</a></h3>
  <p>给予全局（服务器级）点数。</p>
</div>

<div class="card">
  <h3><a href="./sell_items">出售物品（Sell Items）</a></h3>
  <p>出售玩家物品栏中的物品。</p>
</div>

<div class="card">
  <h3><a href="./sell_multiplier">售价倍率（Sell Multiplier）</a></h3>
  <p>倍率化出售价格。</p>
</div>

</div>

### 物品与掉落效果

<div class="card-grid">

<div class="card">
  <h3><a href="./give_item">给予物品（Give Item）</a></h3>
  <p>给予玩家物品。</p>
</div>

<div class="card">
  <h3><a href="./remove_item">移除物品（Remove Item）</a></h3>
  <p>从玩家处移除物品。</p>
</div>

<div class="card">
  <h3><a href="./drop_item">掉落物品（Drop Item）</a></h3>
  <p>在某位置掉落物品。</p>
</div>

<div class="card">
  <h3><a href="./drop_random_item">随机掉落（Drop Random Item）</a></h3>
  <p>从列表随机掉落物品。</p>
</div>

<div class="card">
  <h3><a href="./multiply_drops">掉落倍率（Multiply Drops）</a></h3>
  <p>倍率化方块/实体掉落。</p>
</div>

<div class="card">
  <h3><a href="./telekinesis">自动拾取（Telekinesis）</a></h3>
  <p>将所有掉落传送至玩家物品栏。</p>
</div>

<div class="card">
  <h3><a href="./autosmelt">自动冶炼（Autosmelt）</a></h3>
  <p>自动冶炼开采的矿石。</p>
</div>

<div class="card">
  <h3><a href="./add_enchant">附加附魔（Add Enchant）</a></h3>
  <p>为物品附加附魔。</p>
</div>

<div class="card">
  <h3><a href="./remove_enchant">移除附魔（Remove Enchant）</a></h3>
  <p>移除物品上的附魔。</p>
</div>

<div class="card">
  <h3><a href="./damage_item">损耗物品（Damage Item）</a></h3>
  <p>损耗物品耐久。</p>
</div>

<div class="card">
  <h3><a href="./repair_item">修复物品（Repair Item）</a></h3>
  <p>修复物品。</p>
</div>

<div class="card">
  <h3><a href="./set_unbreakable">设置不可破坏（Set Unbreakable）</a></h3>
  <p>使物品不可破坏。</p>
</div>

<div class="card">
  <h3><a href="./keep_inventory">保留物品栏（Keep Inventory）</a></h3>
  <p>死亡时保留物品栏。</p>
</div>

<div class="card">
  <h3><a href="./keep_level">保留等级（Keep Level）</a></h3>
  <p>死亡时保留经验等级。</p>
</div>

</div>

### 粒子与视觉效果

<div class="card-grid">

<div class="card">
  <h3><a href="./spawn_particle">生成粒子（Spawn Particle）</a></h3>
  <p>生成粒子效果。</p>
</div>

<div class="card">
  <h3><a href="./particle_line">粒子线条（Particle Line）</a></h3>
  <p>在两点之间生成粒子线。</p>
</div>

<div class="card">
  <h3><a href="./particle_animation">粒子动画（Particle Animation）</a></h3>
  <p>生成动画粒子效果。</p>
</div>

<div class="card">
  <h3><a href="./create_hologram">创建全息影像（Create Hologram）</a></h3>
  <p>创建全息文字。</p>
</div>

<div class="card">
  <h3><a href="./firework">烟花（Firework）</a></h3>
  <p>生成烟花。</p>
</div>

<div class="card">
  <h3><a href="./set_glowing">发光（Set Glowing）</a></h3>
  <p>使实体发光。</p>
</div>

</div>

### 音频与消息效果

<div class="card-grid">

<div class="card">
  <h3><a href="./send_message">发送消息（Send Message）</a></h3>
  <p>向玩家发送消息（聊天或快捷栏）。</p>
</div>

<div class="card">
  <h3><a href="./send_minimessage">MiniMessage 消息（Send MiniMessage）</a></h3>
  <p>发送 MiniMessage 格式消息（需要 Paper）。</p>
</div>

<div class="card">
  <h3><a href="./send_title">发送标题（Send Title）</a></h3>
  <p>向玩家发送标题/副标题。</p>
</div>

<div class="card">
  <h3><a href="./broadcast">全服广播（Broadcast）</a></h3>
  <p>向所有在线玩家发送消息。</p>
</div>

<div class="card">
  <h3><a href="./play_sound">播放音效（Play Sound）</a></h3>
  <p>向玩家播放音效。</p>
</div>

</div>

### 世界与方块效果

<div class="card-grid">

<div class="card">
  <h3><a href="./set_block">设置方块（Set Block）</a></h3>
  <p>在某位置设置方块。</p>
</div>

<div class="card">
  <h3><a href="./place_block">放置方块（Place Block）</a></h3>
  <p>放置方块。</p>
</div>

<div class="card">
  <h3><a href="./break_block">破坏方块（Break Block）</a></h3>
  <p>破坏方块。</p>
</div>

<div class="card">
  <h3><a href="./create_explosion">创造爆炸（Create Explosion）</a></h3>
  <p>创造爆炸。</p>
</div>

<div class="card">
  <h3><a href="./strike_lightning">召唤闪电（Strike Lightning）</a></h3>
  <p>在某位置召唤闪电。</p>
</div>

<div class="card">
  <h3><a href="./spawn_entity">生成实体（Spawn Entity）</a></h3>
  <p>生成一个实体。</p>
</div>

<div class="card">
  <h3><a href="./spawn_mobs">生成生物（Spawn Mobs）</a></h3>
  <p>生成多个生物。</p>
</div>

</div>

### 工具与高级效果

<div class="card-grid">

<div class="card">
  <h3><a href="./run_command">运行指令（Run Command）</a></h3>
  <p>运行控制台指令。</p>
</div>

<div class="card">
  <h3><a href="./run_player_command">玩家执行指令（Run Player Command）</a></h3>
  <p>以玩家身份运行指令。</p>
</div>

<div class="card">
  <h3><a href="./run_chain">运行效果链（Run Chain）</a></h3>
  <p>运行可复用或内联的效果链。</p>
</div>

<div class="card">
  <h3><a href="./trigger_custom">自定义触发器（Trigger Custom）</a></h3>
  <p>调用自定义触发器。</p>
</div>

<div class="card">
  <h3><a href="./give_xp">给予经验（Give XP）</a></h3>
  <p>给予经验值。</p>
</div>

<div class="card">
  <h3><a href="./drop_xp">掉落经验（Drop XP）</a></h3>
  <p>掉落经验球。</p>
</div>

<div class="card">
  <h3><a href="./xp_multiplier">经验倍率（XP Multiplier）</a></h3>
  <p>倍率化获得的经验。</p>
</div>

<div class="card">
  <h3><a href="./give_food">给予食物（Give Food）</a></h3>
  <p>给予玩家食物值。</p>
</div>

<div class="card">
  <h3><a href="./give_saturation">给予饱和（Give Saturation）</a></h3>
  <p>给予玩家饱和值。</p>
</div>

<div class="card">
  <h3><a href="./give_oxygen">给予氧气（Give Oxygen）</a></h3>
  <p>给予玩家氧气。</p>
</div>

<div class="card">
  <h3><a href="./clear_inventory">清空物品栏（Clear Inventory）</a></h3>
  <p>清空玩家物品栏。</p>
</div>

<div class="card">
  <h3><a href="./open_ender_chest">打开末影箱（Open Ender Chest）</a></h3>
  <p>打开玩家的末影箱。</p>
</div>

<div class="card">
  <h3><a href="./open_crafting">打开工作台（Open Crafting）</a></h3>
  <p>打开工作台界面。</p>
</div>

<div class="card">
  <h3><a href="./close_inventory">关闭物品栏（Close Inventory）</a></h3>
  <p>关闭玩家物品栏。</p>
</div>

<div class="card">
  <h3><a href="./aoe">范围效果（AOE）</a></h3>
  <p>在目标周围区域运行效果。</p>
</div>

<div class="card">
  <h3><a href="./aoe_blocks">范围方块效果（AOE Blocks）</a></h3>
  <p>在区域内对方块运行效果。</p>
</div>

<div class="card">
  <h3><a href="./all_players">所有玩家（All Players）</a></h3>
  <p>对所有玩家运行效果。</p>
</div>

<div class="card">
  <h3><a href="./random_player">随机玩家（Random Player）</a></h3>
  <p>对随机玩家运行效果。</p>
</div>

<div class="card">
  <h3><a href="./block_commands">阻止指令（Block Commands）</a></h3>
  <p>阻止指令执行。</p>
</div>

<div class="card">
  <h3><a href="./cancel_event">取消事件（Cancel Event）</a></h3>
  <p>取消触发事件。</p>
</div>

</div>

---

## 🔍 快速参考表

| 效果 ID | 分类 | 所属模块 | 简述 |
|---------|------|----------|------|
| `add_damage` | 战斗 | <Badge type="info" text="libreforge" /> | 增加进出伤害 |
| `damage_multiplier` | 战斗 | <Badge type="info" text="libreforge" /> | 倍率化进出伤害 |
| `damage_nearby_entities` | 战斗 | <Badge type="info" text="libreforge" /> | 伤害附近实体 |
| `damage_victim` | 战斗 | <Badge type="info" text="libreforge" /> | 伤害目标 |
| `lifesteal` | 战斗 | <Badge type="info" text="libreforge" /> | 造成伤害时吸血 |
| `crit_multiplier` | 战斗 | <Badge type="info" text="libreforge" /> | 倍率化暴击伤害 |
| `ignite` | 战斗 | <Badge type="info" text="libreforge" /> | 点燃目标 |
| `knockback_multiplier` | 战斗 | <Badge type="info" text="libreforge" /> | 倍率化击退 |
| `give_health` | 治疗 | <Badge type="info" text="libreforge" /> | 给予玩家生命 |
| `give_absorption` | 治疗 | <Badge type="info" text="libreforge" /> | 给予吸收心 |
| `movement_speed_multiplier` | 移动 | <Badge type="info" text="libreforge" /> | 倍率化移动速度 |
| `attack_speed_multiplier` | 移动 | <Badge type="info" text="libreforge" /> | 倍率化攻击速度 |
| `flight` | 移动 | <Badge type="info" text="libreforge" /> | 启用/禁用飞行 |
| `teleport` | 移动 | <Badge type="info" text="libreforge" /> | 传送到位置 |
| `potion_effect` | 药水 | <Badge type="info" text="libreforge" /> | 施加药水效果 |
| `permanent_potion_effect` | 药水 | <Badge type="info" text="libreforge" /> | 施加永久药水效果 |
| `remove_potion_effect` | 药水 | <Badge type="info" text="libreforge" /> | 移除药水效果 |
| `give_money` | 经济 | <Badge type="danger" text="Vault" /> | 给予金钱 |
| `take_money` | 经济 | <Badge type="danger" text="Vault" /> | 扣除金钱 |
| `give_price` | 经济 | <Badge type="info" text="libreforge" /> | 给予价格值 |
| `pay_price` | 经济 | <Badge type="info" text="libreforge" /> | 收取价格 |
| `add_points` | 经济 | <Badge type="info" text="libreforge" /> | 增减点数 |
| `give_points` | 经济 | <Badge type="info" text="libreforge" /> | 给予点数 |
| `set_points` | 经济 | <Badge type="info" text="libreforge" /> | 设置点数 |
| `multiply_points` | 经济 | <Badge type="info" text="libreforge" /> | 倍率化点数 |
| `give_global_points` | 经济 | <Badge type="info" text="libreforge" /> | 给予全局点数 |
| `give_item` | 物品 | <Badge type="info" text="libreforge" /> | 给予物品 |
| `remove_item` | 物品 | <Badge type="info" text="libreforge" /> | 移除物品 |
| `drop_item` | 物品 | <Badge type="info" text="libreforge" /> | 掉落物品 |
| `drop_random_item` | 物品 | <Badge type="info" text="libreforge" /> | 随机掉落 |
| `multiply_drops` | 物品 | <Badge type="info" text="libreforge" /> | 倍率化掉落 |
| `telekinesis` | 物品 | <Badge type="info" text="libreforge" /> | 掉落自动入包 |
| `autosmelt` | 物品 | <Badge type="info" text="libreforge" /> | 自动冶炼 |
| `add_enchant` | 物品 | <Badge type="info" text="libreforge" /> | 附加附魔 |
| `remove_enchant` | 物品 | <Badge type="info" text="libreforge" /> | 移除附魔 |
| `damage_item` | 物品 | <Badge type="info" text="libreforge" /> | 损耗物品 |
| `repair_item` | 物品 | <Badge type="info" text="libreforge" /> | 修复物品 |
| `set_unbreakable` | 物品 | <Badge type="info" text="libreforge" /> | 设置不可破坏 |
| `keep_inventory` | 物品 | <Badge type="info" text="libreforge" /> | 死亡保留物品栏 |
| `keep_level` | 物品 | <Badge type="info" text="libreforge" /> | 死亡保留等级 |
| `spawn_particle` | 视觉 | <Badge type="info" text="libreforge" /> | 生成粒子 |
| `particle_line` | 视觉 | <Badge type="info" text="libreforge" /> | 粒子线条 |
| `particle_animation` | 视觉 | <Badge type="info" text="libreforge" /> | 粒子动画 |
| `create_hologram` | 视觉 | <Badge type="info" text="libreforge" /> | 创建全息影像 |
| `firework` | 视觉 | <Badge type="info" text="libreforge" /> | 烟花 |
| `set_glowing` | 视觉 | <Badge type="info" text="libreforge" /> | 实体发光 |
| `send_message` | 音频/消息 | <Badge type="info" text="libreforge" /> | 发送消息 |
| `send_minimessage` | 音频/消息 | <Badge type="danger" text="Paper" /> | MiniMessage 消息 |
| `send_title` | 音频/消息 | <Badge type="info" text="libreforge" /> | 发送标题 |
| `broadcast` | 音频/消息 | <Badge type="info" text="libreforge" /> | 全服广播 |
| `play_sound` | 音频/消息 | <Badge type="info" text="libreforge" /> | 播放音效 |
| `set_block` | 世界 | <Badge type="info" text="libreforge" /> | 设置方块 |
| `place_block` | 世界 | <Badge type="info" text="libreforge" /> | 放置方块 |
| `break_block` | 世界 | <Badge type="info" text="libreforge" /> | 破坏方块 |
| `create_explosion` | 世界 | <Badge type="info" text="libreforge" /> | 创造爆炸 |
| `strike_lightning` | 世界 | <Badge type="info" text="libreforge" /> | 召唤闪电 |
| `spawn_entity` | 世界 | <Badge type="info" text="libreforge" /> | 生成实体 |
| `spawn_mobs` | 世界 | <Badge type="info" text="libreforge" /> | 生成生物 |
| `run_command` | 工具 | <Badge type="info" text="libreforge" /> | 运行控制台指令 |
| `run_player_command` | 工具 | <Badge type="info" text="libreforge" /> | 玩家执行指令 |
| `run_chain` | 工具 | <Badge type="info" text="libreforge" /> | 运行效果链 |
| `trigger_custom` | 工具 | <Badge type="info" text="libreforge" /> | 调用自定义触发器 |
| `give_xp` | 工具 | <Badge type="info" text="libreforge" /> | 给予经验 |
| `drop_xp` | 工具 | <Badge type="info" text="libreforge" /> | 掉落经验球 |
| `xp_multiplier` | 工具 | <Badge type="info" text="libreforge" /> | 倍率化经验 |
| `give_food` | 工具 | <Badge type="info" text="libreforge" /> | 给予食物 |
| `give_saturation` | 工具 | <Badge type="info" text="libreforge" /> | 给予饱和 |
| `give_oxygen` | 工具 | <Badge type="info" text="libreforge" /> | 给予氧气 |
| `clear_inventory` | 工具 | <Badge type="info" text="libreforge" /> | 清空物品栏 |
| `open_ender_chest` | 工具 | <Badge type="info" text="libreforge" /> | 打开末影箱 |
| `open_crafting` | 工具 | <Badge type="info" text="libreforge" /> | 打开工作台 |
| `close_inventory` | 工具 | <Badge type="info" text="libreforge" /> | 关闭物品栏 |
| `aoe` | 工具 | <Badge type="info" text="libreforge" /> | 范围效果执行 |
| `aoe_blocks` | 工具 | <Badge type="info" text="libreforge" /> | 范围方块效果 |
| `all_players` | 工具 | <Badge type="info" text="libreforge" /> | 对所有玩家执行 |
| `random_player` | 工具 | <Badge type="info" text="libreforge" /> | 对随机玩家执行 |
| `block_commands` | 工具 | <Badge type="info" text="libreforge" /> | 阻止指令 |
| `cancel_event` | 工具 | <Badge type="info" text="libreforge" /> | 取消事件 |

📝 **编者注：** 上表列出了数据完整、最常用的效果。完整的 260+ 效果列表可在侧边栏查看。标记为 "libreforge" 的效果页面属于共享效果库，EcoEnchants 与所有 eco 插件均使用。

## 关联页面

- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
- [所有变异器](../mutators/)
