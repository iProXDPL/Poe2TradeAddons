// ==UserScript==
// @name         Poe2TradeAddons
// @version      2025-02-15
// @author       iPro
// @match        https://www.pathofexile.com/trade2/*
// @description none
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant    none
// ==/UserScript==

setInterval(()=>{
    var enchantMod = document.getElementsByClassName("enchantMod");
    for(let i=0;i<enchantMod.length;i++){
        if(enchantMod[i].childNodes[1].childNodes.length!==2){
            var text = enchantMod[i].childNodes[1].textContent
            var nameEnchant=text.replace("Allocates ","")
            var all = `<div style="color:green;">${switchAllocates(nameEnchant)}</div>`;
            enchantMod[i].childNodes[1].innerHTML += all;
        }
    }
    var searchallbutton =  document.getElementsByClassName("searchBy");
    for(let i=0;i<searchallbutton.length;i++){
        let btn =searchallbutton[i];
        if(btn.style.left!=="50px"){
            btn.style.left="50px";
        }
    }
},500)


function switchAllocates(Allocates){
    switch(Allocates){
        case "Stance Breaker":
            return "Anoint Effect: 50% reduced Enemy Chance to Block Sword Attacks"
            break;

        case "Open Mind":
            return "Anoint Effect: 25% increased Mana Regeneration Rate"
            break;

        case "Blinding Flash":
            return "Anoint Effect: 20% increased Blind Effect Blind Enemies when they Stun you"
            break;

        case "Insulated Treads":
            return "Anoint Effect: Gain Ailment Threshold equal to the lowest of Evasion and Armour on your Boots"
            break;

        case "High Alert":
            return "Anoint Effect: 50% increased Evasion Rating when on Full Life 25% increased Stun Threshold while on Full Life"
            break;

        case "Combat Alchemy":
            return "Anoint Effect: 10% chance for Flasks you use to not consume Charges 20% increased Life and Mana Recovery from Flasks"
            break;

        case "Eagle Eye":
            return "Anoint Effect: +30 to Accuracy Rating 10% increased Accuracy Rating"
            break;

        case "Defensive Reflexes":
            return "Anoint Effect: 12% increased Block chance 2 Mana gained when you Block"
            break;

        case "Volatile Catalyst":
            return "Anoint Effect: 10% increased Area of Effect 10% increased Cooldown Recovery Rate"
            break;
        case "Volatile Grenades":
            return "25% reduced Grenade fuse duration"
            break;
        case "Back in Action":
            return "Anoint Effect: 80% increased Stun Recovery"
            break;

        case "Hard to Kill":
            return "Anoint Effect: 40% increased Flask Life Recovery rate Regenerate 0.75% of Life per second"
            break;

        case "Investing Energies":
            return "Anoint Effect: 40% increased Mana Regeneration Rate while stationary 20% reduced Mana Regeneration Rate while moving"
            break;

        case "Deadly Flourish":
            return "Anoint Effect: 20% increased Melee Critical Hit Chance melee critical strike chance +% when on full life [20]"
            break;

        case "Vigilance":
            return "Anoint Effect: 12% increased Block chance 6 Life gained when you Block"
            break;

        case "Critical Overload":
            return "Anoint Effect: 15% increased Critical Hit Chance for Spells 15% increased Spell Damage if you've dealt a Critical Hit Recently"
            break;

        case "Altered Brain Chemistry":
            return "Anoint Effect: 25% increased Mana Recovery from Flasks 10% increased Mana Recovery Rate during Effect of any Mana Flask"
            break;

        case "Defiance":
            return "Anoint Effect: 80% increased Armour and Evasion Rating when on Low Life"
            break;

        case "Deft Recovery":
            return "Anoint Effect: 30% increased Stun Recovery 30% increased Stun Threshold if you haven't been Stunned Recently"
            break;

        case "Flashy Deflection":
            return "Anoint Effect: 12% increased Block chance 40% increased Defences from Equipped Shield"
            break;

        case "Backup Plan":
            return "Anoint Effect: 40% increased Evasion Rating if you have been Hit Recently 40% increased Armour if you haven't been Hit Recently"
            break;

        case "Sharpened Claw":
            return "Anoint Effect: 25% increased Attack Damage"
            break;

        case "Heavy Ammunition":
            return "Anoint Effect: 8% reduced Attack Speed 40% increased Projectile Damage 40% increased Projectile Stun Buildup"
            break;

        case "Smooth Buckler":
            return "Anoint Effect: 12% increased Block chance 10 Mana gained when you Block"
            break;

        case "Thickened Arteries":
            return "Anoint Effect: 5% reduced Movement Speed Regenerate 1% of Life per second while stationary"
            break;

        case "Cross Strike":
            return "Anoint Effect: 20% increased Accuracy Rating while Dual Wielding 3% increased Movement Speed while Dual Wielding"
            break;

        case "Initiative":
            return "Anoint Effect: 30% increased Melee Damage when on Full Life 16% increased Attack Speed if you haven't Attacked Recently"
            break;

        case "Practiced Signs":
            return "Anoint Effect: 6% increased Cast Speed"
            break;

        case "Determined Precision":
            return "Anoint Effect: 30% increased Accuracy Rating at Close Range +10 to Dexterity"
            break;

        case "Taste for Blood":
            return "Anoint Effect: Gain 20 Life per Enemy Killed 2% chance to Recover all Life when you Kill an Enemy"
            break;

        case "Life from Death":
            return "Anoint Effect: Recover 3% of Life on Kill"
            break;

        case "Smash":
            return "Anoint Effect: 20% increased Melee Damage 40% increased Melee Damage against Heavy Stunned enemies"
            break;

        case "Resilient Soul":
            return "Anoint Effect: 20% increased Life Regeneration rate 5% of Damage taken Recouped as Life"
            break;

        case "Self Mortification":
            return "Anoint Effect: Gain 20% of maximum Energy Shield as additional Stun Threshold 20% increased Stun Threshold while on Full Life"
            break;

        case "Arcane Alchemy":
            return "Anoint Effect: Mana Flasks gain 0.1 charges per Second +10 to Intelligence"
            break;

        case "Freedom of Movement":
            return "Anoint Effect: 30% increased Evasion Rating 30% increased Evasion Rating if you've Dodge Rolled Recently"
            break;

        case "Infused Flesh":
            return "Anoint Effect: +20 to maximum Life 8% of Damage taken Recouped as Life"
            break;

        case "Essence Infusion":
            return "Anoint Effect: 40% increased Energy Shield Recharge Rate +10 to Intelligence"
            break;

        case "Ether Flow":
            return "Anoint Effect: 25% reduced Mana Regeneration Rate while stationary 50% increased Mana Regeneration Rate while moving"
            break;

        case "Close Confines":
            return "Anoint Effect: 25% chance for Projectiles to Pierce Enemies within 3m distance of you"
            break;

        case "Catlike Agility":
            return "Anoint Effect: 25% increased Evasion Rating 25% increased Evasion Rating if you've Dodge Rolled Recently"
            break;

        case "Seeing Stars":
            return "Anoint Effect: 25% increased Daze Buildup 25% increased Daze Duration"
            break;

        case "Clear Space":
            return "Anoint Effect: 20% increased Knockback Distance 20% chance to Knock Enemies Back with Hits at Close Range"
            break;

        case "Careful Aim":
            return "Anoint Effect: 16% increased Projectile Damage 40% increased Accuracy Rating at Close Range"
            break;

        case "Briny Carapace":
            return "Anoint Effect: 60% increased Stun Threshold for each time you've been Stunned Recently"
            break;

        case "Strong Chin":
            return "Anoint Effect: Gain Stun Threshold equal to the lowest of Evasion and Armour on your Helmet"
            break;

        case "Heavy Drinker":
            return "Anoint Effect: 30% increased Flask Effect Duration 20% increased Life Recovery from Flasks Recover 5% of Life when you use a Life Flask while on Low Life"
            break;

        case "Stand Ground":
            return "Anoint Effect: Regenerate 1% of Life per second while affected by any Damaging Ailment Regenerate 1% of Life per second while stationary"
            break;

        case "Mass Rejuvenation":
            return "Anoint Effect: Regenerate 0.5% of Life per second Allies in your Presence Regenerate 1% of your Maximum Life per second"
            break;

        case "Radial Force":
            return "Anoint Effect: 10% increased Area of Effect 10% increased Area Damage"
            break;

        case "Defender's Resolve":
            return "Anoint Effect: 12% increased Block chance Stagger empties 50% faster while your Shield is lowered"
            break;

        case "Feel no Pain":
            return "Anoint Effect: 20% increased Armour and Evasion Rating 20% increased Stun Threshold"
            break;

        case "Shockwaves":
            return "Anoint Effect: 30% increased Area of Effect if you've Stunned an Enemy with a Two Handed Melee Weapon Recently"
            break;

        case "Battle-hardened":
            return "Anoint Effect: Hits against you have 20% reduced Critical Damage Bonus 20% increased Armour and Evasion Rating +5 to Strength and Dexterity"
            break;

        case "Primal Protection":
            return "Anoint Effect: 25% increased Charm Effect Duration 25% increased Charm Charges gained"
            break;

        case "Fear of Death":
            return "Anoint Effect: Minions have +150 to Accuracy Rating 25% increased Minion Accuracy Rating"
            break;

        case "Near Sighted":
            return "Anoint Effect: 60% increased Accuracy Rating at Close Range"
            break;

        case "Shedding Skin":
            return "Anoint Effect: 40% increased Elemental Ailment Threshold 10% reduced Duration of Ailments on You"
            break;

        case "Break Focus":
            return "Anoint Effect: Enemies you Mark have 15% reduced Accuracy Rating"
            break;

        case "Siphon":
            return "Anoint Effect: Recover 2% of Mana on Kill 25% increased amount of Mana Leeched"
            break;

        case "Critical Exploit":
            return "Anoint Effect: 25% increased Critical Hit Chance"
            break;

        case "Killer Instinct":
            return "Anoint Effect: 30% increased Attack Damage when on Full Life 50% increased Attack Damage when on Low Life"
            break;

        case "Warding Potions":
            return "Anoint Effect: 10% reduced Flask Charges used from Mana Flasks Remove a Curse when you use a Mana Flask"
            break;

        case "Electrifying Nature":
            return "Anoint Effect: 25% increased Lightning Damage 15% increased Shock Duration"
            break;

        case "Ripping Blade":
            return "Anoint Effect: 25% increased Damage with Swords"
            break;

        case "Exposed Wounds":
            return "Anoint Effect: 15% increased chance to inflict Ailments Break 30% increased Armour on enemies affected by Ailments"
            break;

        case "True Strike":
            return "Anoint Effect: +10 to Dexterity 20% increased Critical Hit Chance"
            break;

        case "Flip the Script":
            return "Anoint Effect: Recover 20% of Life when you Heavy Stun a Rare or Unique Enemy"
            break;

        case "Dispatch Foes":
            return "Anoint Effect: 80% increased Critical Hit Chance if you haven't dealt a Critical Hit Recently"
            break;

        case "Hulking Smash":
            return "Anoint Effect: 30% increased Stun Buildup +15 to Strength"
            break;

        case "Relentless Vindicator":
            return "Anoint Effect: 10% increased Damage 10% increased Critical Hit Chance +5 to Strength and Intelligence"
            break;

        case "Sharp Sight":
            return "Anoint Effect: 5% increased Attack Speed 30% increased Accuracy Rating against Rare or Unique Enemies"
            break;

        case "Shrapnel":
            return "Anoint Effect: 30% chance to Pierce an Enemy Projectiles have 10% chance to Chain an additional time from terrain"
            break;

        case "Rapid Recharge":
            return "Anoint Effect: 25% increased Energy Shield Recharge Rate 25% faster start of Energy Shield Recharge Witch: Minions have 15% increased maximum Life Witch: Minions Revive 15% faster"
            break;

        case "Potent Concoctions":
            return "Anoint Effect: Flasks applied to you have 25% increased Effect"
            break;

        case "Remorseless":
            return "Anoint Effect: 15% increased Projectile Damage 30% increased Stun Buildup against enemies within 2 metres +5 to Strength and Dexterity"
            break;

        case "Roil":
            return "Anoint Effect: Spell Skills have 30% increased Area of Effect 10% reduced Spell Area Damage"
            break;

        case "Wellspring":
            return "Anoint Effect: 30% increased Mana Recovery from Flasks 8% increased Attack and Cast Speed during Effect of any Mana Flask"
            break;

        case "Mental Perseverance":
            return "Anoint Effect: 10% of Damage is taken from Mana before Life"
            break;

        case "Unerring Impact":
            return "Anoint Effect: 10% increased Accuracy Rating with One Handed Melee Weapons 10% increased Accuracy Rating with Two Handed Melee Weapons +2 to Melee Strike Range"
            break;

        case "Afterimage":
            return "Anoint Effect: 8% more chance to Evade Melee Attacks"
            break;

        case "Preemptive Strike":
            return "Anoint Effect: 100% increased Critical Damage Bonus against Enemies that are on Full Life"
            break;

        case "Titan's Determination":
            return "Anoint Effect: 25% increased Stun Threshold 20% increased Life Regeneration Rate while moving"
            break;

        case "Pocket Sand":
            return "Anoint Effect: 50% increased Blind Effect"
            break;

        case "Impenetrable Shell":
            return "Anoint Effect: Defend with 150% of Armour against Attacks from further than 6m"
            break;

        case "Arcane Mixtures":
            return "Anoint Effect: 25% increased Energy Shield Recharge Rate Mana Flasks gain 0.1 charges per Second"
            break;

        case "Strong Links":
            return "Anoint Effect: Link Skills have 20% increased Buff Effect Link Skills have 20% increased Skill Effect Duration"
            break;

        case "Quick-change Act":
            return "Anoint Effect: 50% increased Weapon Swap Speed"
            break;

        case "Catapult":
            return "Anoint Effect: 15% increased Projectile Speed 15% increased Area of Effect for Attacks"
            break;

        case "Unbound Forces":
            return "Anoint Effect: 40% increased Chill Duration on Enemies 40% increased Shock Duration 25% increased Magnitude of Chill you inflict 25% increased Magnitude of Shock you inflict"
            break;

        case "Twinned Tethers":
            return "Anoint Effect: Link Skills Link to 1 additional random target"
            break;

        case "Reinvigoration":
            return "Anoint Effect: Regenerate 1% of Life per Second if you've used a Life Flask in the past 10 seconds"
            break;

        case "Immaterial":
            return "Anoint Effect: 50% increased Evasion Rating if Energy Shield Recharge has started in the past 2 seconds 30% increased Evasion Rating while you have Energy Shield"
            break;

        case "Regenerative Flesh":
            return "Anoint Effect: Minions Recoup 10% of Damage taken as Life"
            break;

        case "Forcewave":
            return "Anoint Effect: 20% increased Stun Buildup 20% increased Knockback Distance +10 to Strength"
            break;

        case "Careful Consideration":
            return "Anoint Effect: 30% reduced Evasion Rating if you have been Hit Recently 100% increased Evasion Rating if you haven't been Hit Recently"
            break;

        case "Beastial Skin":
            return "Anoint Effect: 100% increased Evasion Rating from Equipped Body Armour"
            break;

        case "Devestating Devices":
            return "Anoint Effect: 25% increased Trap Damage"
            break;

        case "Whirling Assault":
            return "Anoint Effect: 8% increased Attack Speed with Quarterstaves Knocks Back Enemies if you get a Critical Hit with a Quarterstaff"
            break;

        case "Unbreaking":
            return "Anoint Effect: 30% increased Stun Threshold 30% increased Elemental Ailment Threshold"
            break;

        case "Resolution":
            return "Anoint Effect: 10% increased Global Defences 25% increased Stun Threshold"
            break;

        case "Adverse Growth":
            return "Anoint Effect: 20% reduced Life Regeneration rate 20% of Damage taken Recouped as Mana"
            break;

        case "Doomsayer":
            return "Anoint Effect: Herald Skills have 30% increased Area of Effect Herald Skills deal 30% increased Damage"
            break;

        case "Taut Flesh":
            return "Anoint Effect: 15% of Physical Damage taken Recouped as Life"
            break;

        case "Sundering":
            return "Anoint Effect: 25% increased Critical Damage Bonus for Attack Damage +25% to Critical Damage Bonus against Stunned Enemies"
            break;

        case "Blur":
            return "Anoint Effect: 4% increased Movement Speed 20% increased Evasion Rating +10 to Dexterity"
            break;

        case "Roll and Strike":
            return "Anoint Effect: 25% increased Damage with Spears"
            break;

        case "Deafening Cries":
            return "Anoint Effect: 25% increased Warcry Cooldown Recovery Rate 8% increased Damage for each time you've Warcried Recently"
            break;

        case "Guttural Roar":
            return "Anoint Effect: 30% increased Warcry Speed Warcry Skills have 30% increased Area of Effect"
            break;

        case "Serrated Edges":
            return "Anoint Effect: 10% increased Critical Hit Chance for Attacks 30% increased Attack Damage against Rare or Unique Enemies"
            break;

        case "Cranial Impact":
            return "Anoint Effect: 30% increased Stun Buildup Gain an Endurance Charge when you Heavy Stun a Rare or Unique Enemy"
            break;

        case "Viciousness":
            return "Anoint Effect: 8% increased Melee Attack Speed +10 to Dexterity"
            break;

        case "Sturdy Metal":
            return "Anoint Effect: 80% increased Armour from Equipped Body Armour"
            break;

        case "Hunter's Talisman":
            return "Anoint Effect: +1 Charm Slot"
            break;

        case "Impact Area":
            return "Anoint Effect: 15% increased Area of Effect if you have Stunned an Enemy Recently 15% increased Area of Effect for Attacks"
            break;

        case "Spiked Whip":
            return "Anoint Effect: 25% increased Damage with Flails"
            break;

        case "Coursing Energy":
            return "Anoint Effect: 40% increased Electrocute Buildup 30% increased Shock Chance against Electrocuted Enemies"
            break;

        case "Heavy Weaponry":
            return "Anoint Effect: 15% increased Melee Damage 15% increased Stun Buildup with Melee Damage +15 to Strength"
            break;

        case "Ricochet":
            return "Anoint Effect: 15% increased Projectile Damage Projectiles have 10% chance to Chain an additional time from terrain"
            break;

        case "Piercing Shot":
            return "Anoint Effect: 50% chance to Pierce an Enemy"
            break;

        case "Conservative Casting":
            return "Anoint Effect: 20% increased Mana Regeneration Rate 8% reduced Mana Cost of Skills"
            break;

        case "Spreading Shocks":
            return "Anoint Effect: Shocking Hits have a 50% chance to also Shock enemies in a 1.5 metre radius"
            break;

        case "No Escape":
            return "Anoint Effect: Mark Skills have 60% increased Skill Effect Duration"
            break;

        case "Heatproofing":
            return "Anoint Effect: 25% of Armour also applies to Fire Damage taken from Hits"
            break;

        case "Potent Incantation":
            return "Anoint Effect: 30% increased Spell Damage 5% reduced Cast Speed"
            break;

        case "Direct Approach":
            return "Anoint Effect: 40% increased Critical Hit Chance against Enemies that are affected by no Elemental Ailments"
            break;

        case "Mass Hysteria":
            return "Anoint Effect: Allies in your Presence have 6% increased Attack Speed 6% increased Attack Speed"
            break;

        case "Hale Traveller":
            return "Anoint Effect: 20% increased Life Recovery from Flasks Life Flasks gain 0.1 charges per Second"
            break;

        case "Cautious Concoctions":
            return "Anoint Effect: 15% increased Flask Effect Duration 15% increased Flask Charges gained"
            break;

        case "Vulgar Methods":
            return "Anoint Effect: 10% reduced maximum Mana +10 to Strength 35% increased Critical Hit Chance"
            break;

        case "Towering Shield":
            return "Anoint Effect: 50% increased Defences from Equipped Shield 25% increased Chance to Block if you've Blocked with Active Block Recently"
            break;

        case "Leaping Ambush":
            return "Anoint Effect: 100% increased Critical Hit Chance against Enemies on Full Life"
            break;

        case "Pressure Points":
            return "Anoint Effect: 35% increased Stun Buildup 35% increased Freeze Buildup"
            break;

        case "Savoured Blood":
            return "Anoint Effect: 35% increased amount of Life Leeched Leech Life 20% slower"
            break;

        case "Mana Blessing":
            return "Anoint Effect: +20 to maximum Mana 5% increased maximum Mana"
            break;

        case "Devastation":
            return "Anoint Effect: 15% increased Area of Effect for Attacks 15% increased Attack Area Damage"
            break;

        case "Finishing Blows":
            return "Anoint Effect: 60% increased Damage with Hits against Enemies that are on Low Life 30% increased Stun Buildup against Enemies that are on Low Life"
            break;

        case "Way of the Wind":
            return "Anoint Effect: 25% increased Evasion if you have Hit an Enemy Recently 50% increased maximum Dash Distance with Unarmed Attack Skills"
            break;

        case "Flow Like Water":
            return "Anoint Effect: 8% increased Attack and Cast Speed +5 to Dexterity and Intelligence"
            break;

        case "Tainted Strike":
            return "Anoint Effect: 25% increased Critical Hit Chance for Attacks 30% increased Magnitude of Non-Damaging Ailments you inflict with Critical Hits"
            break;

        case "Clean Shot":
            return "Anoint Effect: 15% chance to Pierce an Enemy 15% increased Projectile Damage"
            break;

        case "Prolonged Fury":
            return "Anoint Effect: Inherent loss of Rage is 25% slower"
            break;

        case "Tough Claw":
            return "Anoint Effect: 25% increased Attack Damage"
            break;

        case "Erraticism":
            return "Anoint Effect: 16% increased Cast Speed if you've dealt a Critical Hit Recently 10% reduced Critical Hit Chance"
            break;

        case "Aftershocks":
            return "Anoint Effect: 40% increased Aftershock Area of Effect"
            break;

        case "Reaving":
            return "Anoint Effect: 8% increased Attack Speed with One Handed Weapons +15 to Dexterity"
            break;

        case "Full Recovery":
            return "Anoint Effect: 15% increased Life Regeneration rate 15% increased Mana Regeneration Rate"
            break;

        case "Precise Point":
            return "Anoint Effect: 25% increased Damage with Spears"
            break;

        case "Heavy Contact":
            return "Anoint Effect: Hits that Heavy Stun Enemies have Culling Strike"
            break;

        case "Barbaric Strength":
            return "Anoint Effect: 45% increased Critical Damage Bonus 10% increased Mana Cost of Skills +10 to Strength"
            break;

        case "Crashing Wave":
            return "Anoint Effect: 36% increased Damage if you've dealt a Critical Hit in the past 8 seconds"
            break;

        case "Destructive Apparatus":
            return "Anoint Effect: 25% increased Trap Damage"
            break;

        case "Arcane Blossom":
            return "Anoint Effect: 15% increased Mana Recovery rate"
            break;

        case "Brutal":
            return "Anoint Effect: 10% increased Stun Buildup 16% increased Melee Damage +10 to Strength"
            break;

        case "Hunker Down":
            return "Anoint Effect: Recover 20 Life when you Block 80% less Knockback Distance for Blocked Hits"
            break;

        case "Escape Strategy":
            return "Anoint Effect: 100% increased Evasion Rating if you have been Hit Recently 30% reduced Evasion Rating if you haven't been Hit Recently"
            break;

        case "Lasting Concoctions":
            return "Anoint Effect: 25% increased Flask Effect Duration 25% increased Flask Charges gained"
            break;

        case "Two-Pronged Attack":
            return "Anoint Effect: Minions deal 25% increased Damage"
            break;

        case "Efficient Alchemy":
            return "Anoint Effect: 20% increased Flask and Charm Charges gained 40% increased Life and Mana Recovery from Flasks while you have an active Charm"
            break;

        case "Shattering Blow":
            return "Anoint Effect: Break 50% of Armour on Heavy Stunning an Enemy"
            break;

        case "Honourless":
            return "Anoint Effect: 25% increased Armour if you've Hit an Enemy with a Melee Attack Recently 50% increased Melee Damage against Immobilised Enemies"
            break;

        case "Far Sighted":
            return "Anoint Effect: 30% reduced penalty to Accuracy Rating at range"
            break;

        case "Parrying Motion":
            return "Anoint Effect: 12% increased Block chance 1% increased Movement Speed for each time you've Blocked in the past 10 seconds"
            break;

        case "Thornhide":
            return "Anoint Effect: +5% to Thorns Critical Hit Chance"
            break;

        case "Loose Flesh":
            return "Anoint Effect: 15% of Elemental Damage taken Recouped as Life"
            break;

        case "Spirit Bond":
            return "Anoint Effect: 30% increased Totem Life 30% increased Totem Duration"
            break;

        case "Swift Skewering":
            return "Anoint Effect: 8% increased Attack Speed with Spears"
            break;

        case "Advanced Munitions":
            return "Anoint Effect: 25% increased chance to inflict Ailments with Projectiles"
            break;

        case "Mystic Stance":
            return "Anoint Effect: 30% faster start of Energy Shield Recharge 30% increased Stun Threshold while on Full Life"
            break;

        case "Rattled":
            return "Anoint Effect: +20 to maximum Mana 50% increased Shock Duration"
            break;

        case "Tenfold Attacks":
            return "Anoint Effect: 4% increased Attack Speed 6% increased Attack Speed if you've been Hit Recently +10 to Strength"
            break;

        case "Colossal Weapon":
            return "Anoint Effect: 15% increased Area of Effect for Attacks +10 to Strength"
            break;

        case "Dependable Ward":
            return "Anoint Effect: 25% increased Energy Shield Recharge Rate 25% faster start of Energy Shield Recharge"
            break;

        case "Blade Catcher":
            return "Anoint Effect: Defend with 200% of Armour against Critical Hits +15 to Strength"
            break;

        case "Echoing Pulse":
            return "Anoint Effect: Final Repeat of Spells has 40% increased Area of Effect"
            break;

        case "Price of Freedom":
            return "Anoint Effect: 10% reduced Mana Cost of Attacks 18% of Skill Mana Costs Converted to Life Costs"
            break;

        case "Enhanced Reflexes":
            return "Anoint Effect: 30% increased Evasion Rating 8% increased Dexterity"
            break;

        case "Vengeance":
            return "Anoint Effect: 40% increased Thorns damage"
            break;

        case "Cold Nature":
            return "Anoint Effect: 25% increased Cold Damage 15% increased Chill Duration on Enemies"
            break;

        case "Curved Weapon":
            return "Anoint Effect: 15% increased Accuracy Rating +10 to Dexterity"
            break;

        case "Jack of all Trades":
            return "Anoint Effect: 2% increased Damage per 5 of your lowest Attribute"
            break;

        case "Breakage":
            return "Anoint Effect: Break 60% increased Armour 10% chance to Defend with 200% of Armour"
            break;

        case "In Your Face":
            return "Anoint Effect: 40% increased Melee Damage with Hits at Close Range"
            break;

        case "Mental Toughness":
            return "Anoint Effect: 18% increased Mana Regeneration Rate 15% reduced Mana Cost while not on Low Mana"
            break;

        case "Sand in the Eyes":
            return "Anoint Effect: 10% increased Attack Speed 15% chance to Blind Enemies on Hit with Attacks"
            break;

        case "Blinding Strike":
            return "Anoint Effect: 24% increased Attack Damage 10% chance to Blind Enemies on Hit with Attacks"
            break;

        case "Proficiency":
            return "Anoint Effect: +25 to Dexterity"
            break;

        case "Split Shot":
            return "Anoint Effect: Projectiles have 75% chance for an additional Projectile when Forking"
            break;

        case "Icebreaker":
            return "Anoint Effect: Gain 100% of Maximum Energy Shield as additional Freeze Threshold"
            break;

        case "First Approach":
            return "Anoint Effect: 50% increased Critical Hit Chance against Enemies on Full Life Cannot be Blinded while on Full Life 80% increased Damage with Hits against Enemies that are on Full Life"
            break;

        case "Mind Eraser":
            return "Anoint Effect: 10% increased Mana Regeneration Rate 6% of Damage taken Recouped as Mana"
            break;

        case "Unstoppable Barrier":
            return "Anoint Effect: 10% increased Block chance 15% reduced Slowing Potency of Debuffs on You"
            break;

        case "Growing Swarm":
            return "Anoint Effect: Minions have 20% increased Area of Effect Minions have 20% increased Cooldown Recovery Rate"
            break;

        case "Reverberation":
            return "Anoint Effect: Spell Skills have 20% increased Area of Effect"
            break;

        case "Fortifying Blood":
            return "Anoint Effect: 20% increased amount of Life Leeched 40% increased Armour and Evasion Rating while Leeching"
            break;

        case "Essence of the Storm":
            return "Anoint Effect: Gain 5% of Damage as Extra Lightning Damage 30% increased chance to Shock"
            break;

        case "Core of the Guardian":
            return "Anoint Effect: 100% increased Defences from Equipped Shield"
            break;

        case "Coated Arms":
            return "Anoint Effect: 25% increased Damage with One Handed Weapons 20% increased Chance to inflict Ailments with One-Handed Attacks"
            break;

        case "General's Bindings":
            return "Anoint Effect: Gain 8% of Evasion Rating as extra Armour"
            break;

        case "Ancestral Mending":
            return "Anoint Effect: Regenerate 1% of Life per second while you have a Totem Totems Regenerate 3% of Life per second"
            break;

        case "Mental Alacrity":
            return "Anoint Effect: 5% increased Cast Speed 15% increased Mana Regeneration Rate +10 to Intelligence"
            break;

        case "Insightfulness":
            return "Anoint Effect: 18% increased maximum Energy Shield 12% increased Mana Regeneration Rate 6% increased Intelligence"
            break;

        case "Gravedigger":
            return "Anoint Effect: Minions Revive 15% faster You gain 2% Life when one of your Minions is Revived"
            break;

        case "Bestial Rage":
            return "Anoint Effect: 25% increased Attack Damage"
            break;

        case "Push the Advantage":
            return "Anoint Effect: 40% increased Critical Damage Bonus with One Handed Melee Weapons"
            break;

        case "Blood Rush":
            return "Anoint Effect: 6% increased Skill Speed 6% of Skill Mana Costs Converted to Life Costs"
            break;

        case "Pure Energy":
            return "Anoint Effect: 30% increased maximum Energy Shield +10 to Intelligence"
            break;

        case "Adrenaline Rush":
            return "Anoint Effect: 4% increased Movement Speed if you've Killed Recently 8% increased Attack Speed if you've Killed Recently"
            break;

        case "Stigmata":
            return "Anoint Effect: Offerings have 30% increased Maximum Life Recover 3% of Life when you create an Offering"
            break;

        case "Waters of Life":
            return "Anoint Effect: Recover 2% of Life when you use a Mana Flask Mana Flasks gain 0.1 charges per Second"
            break;

        case "Explosive Impact":
            return "Anoint Effect: 15% increased Area of Effect Burning Enemies you kill have a 5% chance to Explode, dealing a tenth of their maximum Life as Fire Damage"
            break;

        case "Silent Guardian":
            return "Anoint Effect: Minions have +20% to all Elemental Resistances"
            break;

        case "Shield Expertise":
            return "Anoint Effect: 12% increased Block chance 40% increased Block Recovery"
            break;

        case "Fireproof":
            return "Anoint Effect: +15% to Fire Resistance 25% reduced effect of Ignite on you"
            break;

        case "Manifold Method":
            return "Anoint Effect: 50% increased amount of Mana Leeched 25% increased chance to inflict Ailments against Rare or Unique Enemies"
            break;

        case "Thicket Warding":
            return "Anoint Effect: 20% chance for Charms you use to not consume Charges Recover 5% of Mana when a Charm is used"
            break;

        case "Singular Purpose":
            return "Anoint Effect: 5% reduced Attack Speed 20% increased Stun Buildup 40% increased Damage with Two Handed Weapons"
            break;

        case "Quick Response":
            return "Anoint Effect: 20% faster start of Energy Shield Recharge 30% faster start of Energy Shield Recharge when not on Full Life"
            break;

        case "Bringer of Order":
            return "Anoint Effect: Minions deal 25% increased Damage"
            break;

        case "Acceleration":
            return "Anoint Effect: 3% increased Movement Speed 10% increased Skill Speed"
            break;

        case "Ice Walls":
            return "Anoint Effect: 200% increased Ice Crystal Life"
            break;

        case "Sudden Escalation":
            return "Anoint Effect: 16% increased Critical Hit Chance for Spells 8% increased Cast Speed if you've dealt a Critical Hit Recently"
            break;

        case "Multitasking":
            return "Anoint Effect: 15% increased Skill Effect Duration 12% increased Cooldown Recovery Rate"
            break;

        case "Burn Away":
            return "Anoint Effect: 15% increased Fire Damage Damage Penetrates 10% Fire Resistance 10% increased Magnitude of Ignite you inflict"
            break;

        case "Bloodthirsty":
            return "Anoint Effect: 20% increased amount of Life Leeched Leech Life 25% faster"
            break;

        case "Deep Trance":
            return "Anoint Effect: 8% increased Attack Speed 10% reduced Cost of Skills"
            break;

        case "Wasting":
            return "Anoint Effect: 15% increased Duration of Damaging Ailments on Enemies 30% increased Damage with Hits against Enemies affected by Ailments"
            break;

        case "Dead can Dance":
            return "Anoint Effect: Minions have 25% increased Evasion Rating Your Dexterity is added to your Minions"
            break;

        case "Harsh Winter":
            return "Anoint Effect: 8% increased Cast Speed with Cold Skills 16% increased Skill Effect Duration"
            break;

        case "Turn the Clock Forward":
            return "Anoint Effect: 20% increased Projectile Speed for Spell Skills"
            break;

        case "Suffusion":
            return "Anoint Effect: 30% increased amount of Mana Leeched Unaffected by Chill while Leeching Mana"
            break;

        case "Projectile Bulwark":
            return "Anoint Effect: 30% increased Armour Defend with 120% of Armour against Projectile Attacks"
            break;

        case "Shattering":
            return "Anoint Effect: 25% increased Freeze Buildup 15% increased Chill Duration on Enemies 15% increased Magnitude of Chill you inflict"
            break;

        case "Sturdy Ally":
            return "Anoint Effect: Minions have 25% increased maximum Life"
            break;

        case "Heavy Armour":
            return "Anoint Effect: 100% of Strength Requirements from Boots, Gloves and Helmets also added to Armour"
            break;

        case "Fate Finding":
            return "Anoint Effect: 15% reduced Reservation of Herald Skills"
            break;

        case "Time Manipulation":
            return "Anoint Effect: Debuffs you inflict have 10% increased Slow Magnitude Debuffs on you expire 20% faster"
            break;

        case "Overwhelm":
            return "Anoint Effect: 5% reduced Attack Speed 20% increased Stun Buildup 40% increased Damage with Two Handed Weapons"
            break;

        case "Anticipation":
            return "Anoint Effect: Skills Supported by Unleash have 25% increased Seal gain frequency"
            break;

        case "Unbending":
            return "Anoint Effect: 3% increased maximum Life 30% increased Stun Threshold"
            break;

        case "Heavy Frost":
            return "Anoint Effect: 20% increased Freeze Buildup Hits ignore non-negative Elemental Resistances of Frozen Enemies"
            break;

        case "Harmonic Generator":
            return "Anoint Effect: 25% increased Critical Hit Chance against Shocked Enemies 40% increased Magnitude of Shock you inflict with Critical Hits"
            break;

        case "Arcane Intensity":
            return "Anoint Effect: 3% increased Spell Damage per 100 maximum Mana"
            break;

        case "Restless Dead":
            return "Anoint Effect: Minions Revive 25% faster"
            break;

        case "Master Fletching":
            return "Anoint Effect: 30% increased bonuses gained from Equipped Quiver"
            break;

        case "Chronomancy":
            return "Anoint Effect: 20% increased Skill Effect Duration Debuffs you inflict have 10% increased Slow Magnitude"
            break;

        case "Path of Storms":
            return "Anoint Effect: 18% increased Lightning Damage 30% increased chance to Shock Witch: 18% increased Chaos Damage Witch: 15% increased Skill Effect Duration"
            break;

        case "Impact Force":
            return "Anoint Effect: 20% increased Stun Buildup 25% increased Attack Area Damage"
            break;

        case "Rapid Strike":
            return "Anoint Effect: +30 to Accuracy Rating 8% increased Melee Attack Speed"
            break;

        case "Necrotised Flesh":
            return "Anoint Effect: Minions have 40% increased maximum Life Minions have 10% reduced Life Recovery rate"
            break;

        case "Vile Mending":
            return "Anoint Effect: Minions have 20% increased maximum Life Minions Regenerate 3% of Life per second Minions have +13% to Chaos Resistance"
            break;

        case "All Natural":
            return "Anoint Effect: +5% to all Elemental Resistances 30% increased Elemental Damage"
            break;

        case "Lay Siege":
            return "Anoint Effect: 1% increased Damage per 1% Chance to Block"
            break;

        case "Primal Growth":
            return "Anoint Effect: 20% increased Area of Effect if you've Killed Recently 10% increased Area of Effect for Attacks"
            break;

        case "Stormcharged":
            return "Anoint Effect: 40% increased Elemental Damage if you've dealt a Critical Hit Recently 20% increased Critical Hit Chance"
            break;

        case "Breaking Point":
            return "Anoint Effect: 10% increased Duration of Elemental Ailments on Enemies 30% increased Magnitude of Non-Damaging Ailments you inflict"
            break;

        case "Beef":
            return "Anoint Effect: +25 to Strength"
            break;

        case "Spellblade":
            return "Anoint Effect: 32% increased Spell Damage while wielding a Melee Weapon +10 to Dexterity"
            break;

        case "Turn the Clock Back":
            return "Anoint Effect: 20% reduced Projectile Speed for Spell Skills"
            break;

        case "Sigil of Fire":
            return "Anoint Effect: 30% increased Damage with Hits against Ignited Enemies"
            break;

        case "Electrotherapy":
            return "Anoint Effect: 5% increased Skill Speed 30% increased Electrocute Buildup"
            break;

        case "Alternating Current":
            return "Anoint Effect: 25% increased Mana Regeneration Rate if you have Shocked an Enemy Recently 20% increased Magnitude of Shock you inflict"
            break;

        case "Frenetic":
            return "Anoint Effect: 5% chance that if you would gain Frenzy Charges , you instead gain up to your maximum number of Frenzy Charges +1 to Maximum Frenzy Charges"
            break;

        case "Guts":
            return "Anoint Effect: Recover 3% of Life for each Endurance Charge consumed +1 to Maximum Endurance Charges"
            break;

        case "Immortal Thirst":
            return "Anoint Effect: 15% increased maximum Energy Shield 25% increased amount of Mana Leeched"
            break;

        case "Thrill of Battle":
            return "Anoint Effect: 20% increased Attack Speed while Surrounded"
            break;

        case "Thin Ice":
            return "Anoint Effect: 20% increased Freeze Buildup 50% increased Damage with Hits against Frozen Enemies"
            break;

        case "Leather Bound Gauntlets":
            return "Anoint Effect: +1 to Evasion Rating per 1 Armour on Equipped Gloves"
            break;

        case "Echoing Frost":
            return "Anoint Effect: 30% increased Elemental Damage if you've Chilled an Enemy Recently"
            break;

        case "Ball and Chain":
            return "Anoint Effect: 15% increased Damage with Flails 6% increased Attack Speed with Flails"
            break;

        case "Resourceful Ally":
            return "Anoint Effect: Minions deal 25% increased Damage"
            break;

        case "Spirit Bonds":
            return "Anoint Effect: Link Skills can target Damageable Minions"
            break;

        case "Heavy Blade":
            return "Anoint Effect: 25% increased Damage with Swords"
            break;

        case "Crushing Verdict":
            return "Anoint Effect: 5% reduced Attack Speed 30% increased Stun Buildup 50% increased Attack Damage"
            break;

        case "Cooked":
            return "Anoint Effect: 50% increased Critical Damage Bonus during any Flask Effect"
            break;

        case "Melding":
            return "Anoint Effect: 40% increased maximum Energy Shield 10% reduced maximum Mana"
            break;

        case "Distracting Presence":
            return "Anoint Effect: 10% increased Cooldown Recovery Rate Enemies in your Presence have 10% reduced Cooldown Recovery Rate"
            break;

        case "Short Shot":
            return "Anoint Effect: 15% reduced Projectile Speed 20% increased Projectile Damage"
            break;

        case "Spiral into Mania":
            return "Anoint Effect: 10% increased Cast Speed +7% to Chaos Resistance"
            break;

        case "Perforation":
            return "Anoint Effect: 20% chance for Bleeding to be Aggravated when Inflicted against Enemies on Jagged Ground 40% increased Jagged Ground Duration"
            break;

        case "Aspiring Genius":
            return "Anoint Effect: 20% increased Mana Regeneration Rate 10% chance to Gain Arcane Surge when you deal a Critical Hit"
            break;

        case "Careful Assassin":
            return "Anoint Effect: 20% reduced Critical Damage Bonus 50% increased Critical Hit Chance"
            break;

        case "Morning Star":
            return "Anoint Effect: 30% increased Critical Hit Chance with Flails 20% increased Critical Damage Bonus with Flails"
            break;

        case "Hindered Capabilities":
            return "Anoint Effect: 30% increased Damage with Hits against Hindered Enemies Debuffs you inflict have 10% increased Slow Magnitude"
            break;

        case "Authority":
            return "Anoint Effect: 20% increased Area of Effect for Attacks 10% increased Cooldown Recovery Rate"
            break;

        case "Desensitisation":
            return "Anoint Effect: 25% increased Critical Damage Bonus Hits against you have 25% reduced Critical Damage Bonus"
            break;

        case "Shimmering":
            return "Anoint Effect: 20% increased Energy Shield Recovery Rate if you haven't been Hit Recently 3% increased Movement Speed while you have Energy Shield"
            break;

        case "Madness in the Bones":
            return "Anoint Effect: Gain 6% of Physical Damage as extra Chaos Damage"
            break;

        case "Ancestral Reach":
            return "Anoint Effect: 25% increased Totem Placement speed 50% increased Totem Placement range"
            break;

        case "Ancestral Alacrity":
            return "Anoint Effect: 30% increased Totem Placement speed 8% increased Attack and Cast Speed if you've summoned a Totem Recently"
            break;

        case "For the Jugular":
            return "Anoint Effect: 30% increased Critical Damage Bonus +10 to Intelligence"
            break;

        case "Subterfuge Mask":
            return "Anoint Effect: +2 to Evasion Rating per 1 Maximum Energy Shield on Equipped Helmet"
            break;

        case "Refocus":
            return "Anoint Effect: 30% increased Energy Shield Recharge Rate 20% increased Mana Regeneration Rate"
            break;

        case "Slow Burn":
            return "Anoint Effect: 20% increased Ignite Duration on Enemies 20% increased Magnitude of Ignite you inflict"
            break;

        case "Apocalypse":
            return "Anoint Effect: 40% reduced Damage +6% to Critical Hit Chance of Herald Skills"
            break;

        case "Stylebender":
            return "Anoint Effect: Break 30% increased Armour on enemies affected by Ailments +10 to Strength 25% increased Physical Damage"
            break;

        case "Natural Immunity":
            return "Anoint Effect: + 4 to Ailment Threshold per Dexterity"
            break;

        case "Electrocution":
            return "Anoint Effect: Enemies you Electrocute have 20% increased Damage taken"
            break;

        case "Mindful Awareness":
            return "Anoint Effect: 24% increased Evasion Rating 24% increased maximum Energy Shield"
            break;

        case "The Power Within":
            return "Anoint Effect: 20% increased Critical Damage Bonus if you've gained a Power Charge Recently +1 to Maximum Power Charges"
            break;

        case "Lasting Trauma":
            return "Anoint Effect: 5% reduced Attack Speed 30% increased Magnitude of Ailments you inflict 20% increased Duration of Damaging Ailments on Enemies"
            break;

        case "Cruel Methods":
            return "Anoint Effect: Break 40% increased Armour 25% increased Physical Damage"
            break;

        case "Moment of Truth":
            return "Anoint Effect: 25% increased Critical Damage Bonus if you've dealt a Non-Critical Hit Recently 20% increased Critical Hit Chance"
            break;

        case "Preservation":
            return "Anoint Effect: 25% increased Skill Effect Duration"
            break;

        case "Hefty Unit":
            return "Anoint Effect: + 3 to Stun Threshold per Strength"
            break;

        case "Echoing Flames":
            return "Anoint Effect: Mastery: Bestiary 30% increased Elemental Damage if you've Ignited an Enemy Recently"
            break;

        case "Sigil of Ice":
            return "Anoint Effect: 30% increased Damage with Hits against Chilled Enemies"
            break;

        case "Overheating Blow":
            return "Anoint Effect: Hits that Heavy Stun inflict Fire Exposure"
            break;

        case "Branching Bolts":
            return "Anoint Effect: 60% chance for Lightning Skills to Chain an additional time"
            break;

        case "Convalescence":
            return "Anoint Effect: 15% reduced Energy Shield Recharge Rate 40% faster start of Energy Shield Recharge"
            break;

        case "Emboldened Avatar":
            return "Anoint Effect: 25% increased chance to Ignite 25% increased Freeze Buildup 25% increased chance to Shock 25% increased Electrocute Buildup"
            break;

        case "Escape Velocity":
            return "Anoint Effect: 3% increased Movement Speed 30% increased Evasion Rating"
            break;

        case "Living Death":
            return "Anoint Effect: Minions have +22% to all Elemental Resistances Minions have +3% to all Maximum Elemental Resistances"
            break;

        case "Sigil of Lightning":
            return "Anoint Effect: 30% increased Damage with Hits against Shocked Enemies"
            break;

        case "Grit":
            return "Anoint Effect: 5% chance that if you would gain Endurance Charges , you instead gain up to maximum Endurance Charges +1 to Maximum Endurance Charges"
            break;

        case "Lucidity":
            return "Anoint Effect: 8% of Damage is taken from Mana before Life +15 to Intelligence"
            break;

        case "Deadly Force":
            return "Anoint Effect: 30% increased Damage if you've dealt a Critical Hit in the past 8 seconds 12% increased Critical Hit Chance"
            break;

        case "Impair":
            return "Anoint Effect: 25% increased Damage with One Handed Weapons Attacks have 10% chance to Maim on Hit"
            break;

        case "Lust for Sacrifice":
            return "Anoint Effect: 40% increased Minion Damage while you have at least two different active Offerings"
            break;

        case "Bolstering Yell":
            return "Anoint Effect: Empowered Attacks deal 30% increased Damage Warcry Skills have 30% increased Area of Effect"
            break;

        case "Feel the Earth":
            return "Anoint Effect: 25% reduced Shock duration on you 40% increased Elemental Ailment Threshold"
            break;

        case "Admonisher":
            return "Anoint Effect: 25% increased Warcry Speed 25% increased Warcry Cooldown Recovery Rate"
            break;

        case "Echoing Thunder":
            return "Anoint Effect: 30% increased Elemental Damage if you've Shocked an Enemy Recently"
            break;

        case "Vengeful Fury":
            return "Anoint Effect: Gain 5 Rage when Hit by an Enemy Every Rage also grants 1% increased Armour"
            break;

        case "Bravado":
            return "Anoint Effect: Empowered Attacks have 50% increased Stun Buildup 100% increased Stun Threshold during Empowered Attacks"
            break;

        case "Prolonged Assault":
            return "Anoint Effect: 16% increased Attack Damage 16% increased Skill Effect Duration Buffs on you expire 10% slower"
            break;

        case "Essence of the Mountain":
            return "Anoint Effect: Gain 5% of Damage as Extra Cold Damage 20% increased Freeze Buildup"
            break;

        case "Coated Knife":
            return "Anoint Effect: Critical Hits with Daggers have a 25% chance to Poison the Enemy"
            break;

        case "Cull the Hordes":
            return "Anoint Effect: 25% increased Culling Strike Threshold"
            break;

        case "Forthcoming":
            return "Anoint Effect: 16% reduced Skill Effect Duration 10% increased Cooldown Recovery Rate"
            break;

        case "Quick Recovery":
            return "Anoint Effect: 40% increased Stun Recovery Regenerate 5% of Life over 1 second when Stunned"
            break;

        case "Silent Shiv":
            return "Anoint Effect: 5% increased Attack Speed with Daggers 15% increased Critical Hit Chance with Daggers"
            break;

        case "Ruin":
            return "Anoint Effect: Spell Skills have 10% reduced Area of Effect 35% increased Spell Area Damage"
            break;

        case "Aggravation":
            return "Anoint Effect: 10% chance to Aggravate Bleeding on targets you Hit with Attacks"
            break;

        case "Path of Winter":
            return "Anoint Effect: 18% increased Cold Damage 30% increased Freeze Buildup Witch: Minions deal 15% increased Damage Witch: Minions have 3% increased Attack and Cast Speed"
            break;

        case "Spiral into Depression":
            return "Anoint Effect: 3% increased Movement Speed 25% increased Armour 25% increased maximum Energy Shield"
            break;

        case "Bolstering Presence":
            return "Anoint Effect: 20% increased Effect of Auras from your Skills"
            break;

        case "Crystalline Flesh":
            return "Anoint Effect: Minions have +20% to all Elemental Resistances Minions have +5% to all Maximum Elemental Resistances"
            break;

        case "Fan the Flames":
            return "Anoint Effect: 25% reduced Ignite Duration on you 40% increased Elemental Ailment Threshold"
            break;

        case "Vile Wounds":
            return "Anoint Effect: 33% increased Damage with Hits against Enemies affected by Elemental Ailments"
            break;

        case "Unsight":
            return "Anoint Effect: Enemies near Enemies you Mark are Blinded Enemies you Mark cannot deal Critical Hits"
            break;

        case "Holy Protector":
            return "Anoint Effect: Minions have 25% increased maximum Life"
            break;

        case "Marked Agility":
            return "Anoint Effect: 30% reduced Mana Cost of Mark Skills 4% increased Movement Speed if you've cast a Mark Spell Recently"
            break;

        case "Necrotic Touch":
            return "Anoint Effect: Minions have 40% increased Critical Hit Chance"
            break;

        case "Chilled to the Bone":
            return "Anoint Effect: 20% increased Chill Duration on Enemies 30% increased Magnitude of Chill you inflict"
            break;

        case "Warm the Heart":
            return "Anoint Effect: 25% reduced Freeze Duration on you 60% increased Freeze Threshold"
            break;

        case "Retaliation":
            return "Anoint Effect: 75% increased Thorns damage if you've Blocked Recently"
            break;

        case "Shattered Crystal":
            return "Anoint Effect: 60% reduced Ice Crystal Life"
            break;

        case "Bloodletting":
            return "Anoint Effect: 10% chance to inflict Bleeding on Hit 15% increased Magnitude of Bleeding you inflict"
            break;

        case "Made to Last":
            return "Anoint Effect: 15% of Physical Damage prevented Recouped as Life"
            break;

        case "Intense Flames":
            return "Anoint Effect: 35% increased Damage with Hits against Burning Enemies"
            break;

        case "Flurry":
            return "Anoint Effect: 20% increased Area of Effect while Unarmed 25% reduced Damage with Unarmed Attacks 20% increased Unarmed Attack Speed"
            break;

        case "Instant Reload":
            return "Anoint Effect: 40% increased Crossbow Reload Speed"
            break;

        case "Path of Flame":
            return "Anoint Effect: 18% increased Fire Damage 30% increased chance to Ignite Witch: 15% increased Critical Hit Chance for Spells Witch: 18% increased Physical Damage"
            break;

        case "Crystal Elixir":
            return "Anoint Effect: 40% increased Elemental Damage with Attack Skills during any Flask Effect"
            break;

        case "Deflection":
            return "Anoint Effect: 30% increased Block chance You take 10% of damage from Blocked Hits"
            break;

        case "Ancestral Unity":
            return "Anoint Effect: Totems have 4% increased Attack Speed per Summoned Totem"
            break;

        case "Spectral Ward":
            return "Anoint Effect: +1 to Maximum Energy Shield per 12 Evasion Rating on Equipped Body Armour"
            break;

        case "Warding Fetish":
            return "Anoint Effect: 30% increased Damage per Curse on you 30% reduced effect of Curses on you 60% increased Energy Shield from Equipped Focus"
            break;

        case "Immortal Infamy":
            return "Anoint Effect: 10% increased Energy Shield Recharge Rate Recover 2% of Life on Kill +10 to Intelligence"
            break;

        case "Savagery":
            return "Anoint Effect: 50% increased Evasion Rating if you've consumed a Frenzy Charge Recently +1 to Maximum Frenzy Charges"
            break;

        case "Tides of Change":
            return "Anoint Effect: 25% increased Skill Effect Duration"
            break;

        case "Feral Force":
            return "Anoint Effect: 25% increased Attack Damage"
            break;

        case "Finesse":
            return "Anoint Effect: 10% increased Accuracy Rating Gain Accuracy Rating equal to your Intelligence"
            break;

        case "Dreamcatcher":
            return "Anoint Effect: 25% increased Spell Damage while on Full Energy Shield 75% increased Energy Shield from Equipped Focus"
            break;

        case "Greatest Defence":
            return "Anoint Effect: 2% increased Attack Damage per 75 Armour or Evasion Rating on Shield"
            break;

        case "Bleeding Out":
            return "Anoint Effect: +250 to Accuracy against Bleeding Enemies Bleeding you inflict deals Damage 10% faster"
            break;

        case "Ignore Pain":
            return "Anoint Effect: Gain 3 Rage when Hit by an Enemy Every Rage also grants 2% increased Stun Threshold"
            break;

        case "Equilibrium":
            return "Anoint Effect: 30% increased Attack Damage if you've Cast a Spell Recently 10% increased Cast Speed if you've Attacked Recently"
            break;

        case "Swift Claw":
            return "Anoint Effect: 25% increased Attack Damage"
            break;

        case "Spiked Shield":
            return "Anoint Effect: 50% increased Defences from Equipped Shield 1% increased Attack Damage per 75 Armour or Evasion Rating on Shield"
            break;

        case "Carved Earth":
            return "Anoint Effect: 20% increased Totem Damage 6% increased Attack and Cast Speed if you've summoned a Totem Recently"
            break;

        case "Pure Power":
            return "Anoint Effect: 2% increased Lightning Damage per 10 Intelligence"
            break;

        case "Power Conduction":
            return "Anoint Effect: 25% increased Shock Duration 25% increased Magnitude of Shock you inflict"
            break;

        case "Perfect Opportunity":
            return "Anoint Effect: 30% increased Stun Buildup Damage with Hits is Lucky against Heavy Stunned Enemies"
            break;

        case "Fulmination":
            return "Anoint Effect: 40% increased chance to Ignite 40% increased Damage with Hits against Ignited Enemies"
            break;

        case "Leeching Toxins":
            return "Anoint Effect: 30% increased Magnitude of Poison you inflict Recover 2% of Life on Killing a Poisoned Enemy"
            break;

        case "Storm Swell":
            return "Anoint Effect: Damage Penetrates 15% Cold Resistance Damage Penetrates 8% Lightning Resistance"
            break;

        case "Entropic Incarnation":
            return "Anoint Effect: Minions have +13% to Chaos Resistance Minions gain 8% of Physical Damage as Chaos Damage"
            break;

        case "Illuminated Crown":
            return "Anoint Effect: 20% increased Light Radius 70% increased Energy Shield from Equipped Helmet"
            break;

        case "Breath of Ice":
            return "Anoint Effect: Damage Penetrates 15% Cold Resistance +10 to Intelligence"
            break;

        case "Watchtowers":
            return "Anoint Effect: Attack Skills have +1 to maximum number of Summoned Totems Skills that would Summon a Totem have 20% chance to Summon two Totems instead"
            break;

        case "Falcon Technique":
            return "Anoint Effect: 1% increased Attack Speed per 15 Dexterity"
            break;

        case "Ancestral Conduits":
            return "Anoint Effect: 12% increased Attack and Cast Speed if you've summoned a Totem Recently"
            break;

        case "Master of Hexes":
            return "Anoint Effect: 25% reduced Curse Duration 18% increased Effect of your Curses"
            break;

        case "Ancestral Artifice":
            return "Anoint Effect: Attack Skills have +1 to maximum number of Summoned Totems 20% increased Totem Placement range"
            break;

        case "Lust for Power":
            return "Anoint Effect: 5% chance that if you would gain Power Charges , you instead gain up to your maximum number of Power Charges +1 to Maximum Power Charges"
            break;

        case "Spell Haste":
            return "Anoint Effect: 15% increased Evasion Rating 8% increased Cast Speed"
            break;

        case "Pile On":
            return "Anoint Effect: 60% increased Damage against Enemies with Fully Broken Armour"
            break;

        case "Asceticism":
            return "Anoint Effect: Stun Threshold is based on 30% of your Energy Shield instead of Life"
            break;

        case "Skullcrusher":
            return "Anoint Effect: 20% more Damage against Heavy Stunned Enemies with Maces"
            break;

        case "Perpetual Freeze":
            return "Anoint Effect: 15% increased Freeze Buildup 15% increased Chill and Freeze Duration on Enemies"
            break;

        case "Wither Away":
            return "Anoint Effect: Unwithered enemies are Withered for 8 seconds when they enter your Presence 20% increased Effect of Withered"
            break;

        case "Dynamism":
            return "Anoint Effect: 40% increased Damage if you've Triggered a Skill Recently Meta Skills gain 15% increased Energy"
            break;

        case "Refills":
            return "Anoint Effect: Life Flasks gain 0.15 charges per Second"
            break;

        case "Crushing Judgement":
            return "Anoint Effect: 25% increased Armour Break Duration 25% increased Attack Area Damage"
            break;

        case "Shredding Force":
            return "Anoint Effect: 15% increased Critical Hit Chance for Spells 15% increased Critical Spell Damage Bonus 15% increased Magnitude of Damaging Ailments you inflict with Critical Hits"
            break;

        case "Firestarter":
            return "Anoint Effect: 40% increased chance to Ignite Enemies Ignited by you have -5% to Fire Resistance"
            break;

        case "Escalation":
            return "Anoint Effect: 25% increased Warcry Speed 20% increased Damage for each different Warcry you've used Recently"
            break;

        case "Full Salvo":
            return "Anoint Effect: 25% increased Damage with Crossbows for each type of Ammunition fired in the past 10 seconds"
            break;

        case "Pure Chaos":
            return "Anoint Effect: Gain 11% of Damage as Extra Chaos Damage"
            break;

        case "Endurance":
            return "Anoint Effect: +2 to Maximum Endurance Charges"
            break;

        case "Impending Doom":
            return "Anoint Effect: 40% faster Curse Activation Your Curses have 20% increased Effect if 50% of Curse Duration expired"
            break;

        case "Adamant Recovery":
            return "Anoint Effect: Increases and Reductions to Armour also apply to Energy Shield Recharge Rate at 40% of their value"
            break;

        case "Backstabbing":
            return "Anoint Effect: 25% increased Critical Damage Bonus with Daggers"
            break;

        case "Versatile Arms":
            return "Anoint Effect: 6% increased Attack Speed with One Handed Melee Weapons 15% increased Accuracy Rating with One Handed Melee Weapons +10 to Strength and Dexterity"
            break;

        case "Sturdy Mind":
            return "Anoint Effect: +30 to maximum Mana 14% increased Mana Regeneration Rate"
            break;

        case "Burning Nature":
            return "Anoint Effect: 25% increased Fire Damage 15% increased Ignite Duration on Enemies"
            break;

        case "Unforgiving":
            return "Anoint Effect: +4 to Maximum Rage Inherent Rage Loss starts 1 second later"
            break;

        case "Inner Faith":
            return "Anoint Effect: 20% increased Evasion Rating 20% increased maximum Energy Shield 25% reduced effect of Curses on you"
            break;

        case "Spiral into Insanity":
            return "Anoint Effect: 29% increased Chaos Damage 10% increased Global Defences"
            break;

        case "Overflowing Power":
            return "Anoint Effect: +2 to Maximum Power Charges"
            break;

        case "Storm Surge":
            return "Anoint Effect: Damage Penetrates 8% Cold Resistance Damage Penetrates 15% Lightning Resistance"
            break;

        case "Throatseeker":
            return "Anoint Effect: 60% increased Critical Damage Bonus 20% reduced Critical Hit Chance"
            break;

        case "Crippling Toxins":
            return "Anoint Effect: 25% chance for Attacks to Maim on Hit against Poisoned Enemies 25% increased Magnitude of Poison you inflict"
            break;

        case "Pinpoint Shot":
            return "Anoint Effect: Attacks gain increased Accuracy Rating equal to their Critical Hit Chance"
            break;

        case "Inescapable Cold":
            return "Anoint Effect: 40% increased Freeze Buildup 20% increased Freeze Duration on Enemies"
            break;

        case "Energise":
            return "Anoint Effect: 25% chance for Trigger skills to refund half of Energy Spent"
            break;

        case "Whirling Onslaught":
            return "Anoint Effect: 50% chance to gain Onslaught on Killing Blow with Axes"
            break;

        case "Flash Storm":
            return "Anoint Effect: 30% increased chance to Shock Damage Penetrates 15% Lightning Resistance"
            break;

        case "One with the River":
            return "Anoint Effect: 30% increased Defences while wielding a Staff 30% increased Stun Buildup with Quarterstaves 30% increased Daze Buildup with Quarterstaves 30% increased Freeze Buildup with Quarterstaves"
            break;

        case "Reaching Strike":
            return "Anoint Effect: 25% increased Melee Damage +2 to Melee Strike Range"
            break;

        case "Glaciation":
            return "Anoint Effect: Damage Penetrates 18% Cold Resistance 25% increased Cold Exposure Effect"
            break;

        case "Heavy Buffer":
            return "Anoint Effect: 40% increased maximum Energy Shield 10% reduced maximum Life"
            break;

        case "Burnout":
            return "Anoint Effect: Ignites you inflict deal Damage 15% faster"
            break;

        case "Fast Acting Toxins":
            return "Anoint Effect: Damaging Ailments deal damage 12% faster"
            break;

        case "Invocated Efficiency":
            return "Anoint Effect: Recover 3% of Mana when you Invoke a Spell Triggered Spells deal 45% increased Spell Damage"
            break;

        case "Overload":
            return "Anoint Effect: Damage Penetrates 10% Lightning Resistance if on Low Mana Damage Penetrates 15% Lightning Resistance"
            break;

        case "Hold Focus":
            return "Anoint Effect: 15% increased Effect of your Mark Skills"
            break;

        case "Incendiary":
            return "Anoint Effect: 30% increased chance to Ignite 30% increased Damage with Hits against Burning Enemies"
            break;

        case "Marked for Sickness":
            return "Anoint Effect: Enemies you Mark take 10% increased Damage"
            break;

        case "Void":
            return "Anoint Effect: 29% increased Chaos Damage Enemies you Curse have -3% to Chaos Resistance"
            break;

        case "Battle Fever":
            return "Anoint Effect: 5% increased Attack and Cast Speed 25% increased Physical Damage"
            break;

        case "Revenge":
            return "Anoint Effect: 12% increased Attack Speed if you've been Hit Recently"
            break;

        case "Savouring":
            return "Anoint Effect: 20% chance for Flasks you use to not consume Charges"
            break;

        case "Lucky Rabbit Foot":
            return "Anoint Effect: 30% increased Damage while you have an active Charm 6% increased Movement Speed while you have an active Charm"
            break;

        case "Snowpiercer":
            return "Anoint Effect: Damage Penetrates 15% Cold Resistance +10 to Intelligence"
            break;

        case "Lasting Incantations":
            return "Anoint Effect: 20% increased Spell Damage 20% increased Skill Effect Duration"
            break;

        case "Stand and Deliver":
            return "Anoint Effect: Projectiles have 40% increased Critical Damage Bonus against Enemies within 2m Projectiles deal 25% increased Damage with Hits against Enemies within 2m"
            break;

        case "Pliable Flesh":
            return "Anoint Effect: 6% of Damage taken Recouped as Life 25% increased speed of Recoup Effects"
            break;

        case "Near at Hand":
            return "Anoint Effect: 16% reduced Skill Effect Duration 10% reduced Slowing Potency of Debuffs on You"
            break;

        case "Falcon Dive":
            return "Anoint Effect: 1% increased Attack Speed per 250 Accuracy Rating"
            break;

        case "Deterioration":
            return "Anoint Effect: Damaging Ailments Cannot Be inflicted on you while you already have one 20% increased Magnitude of Damaging Ailments you inflict"
            break;

        case "Exposed to the Inferno":
            return "Anoint Effect: Damage Penetrates 15% Fire Resistance Fire Exposure you inflict lowers Total Fire Resistance by an extra 5%"
            break;

        case "Burning Strikes":
            return "Anoint Effect: Gain 12% of Physical Damage as Extra Fire Damage"
            break;

        case "Exploit":
            return "Anoint Effect: 25% increased Damage with Hits against Enemies affected by Elemental Ailments 15% increased Duration of Ignite , Shock and Chill on Enemies"
            break;

        case "Breath of Lightning":
            return "Anoint Effect: Damage Penetrates 15% Lightning Resistance +10 to Dexterity"
            break;

        case "Stacking Toxins":
            return "Anoint Effect: Targets can be affected by +1 of your Poisons at the same time 20% reduced Magnitude of Poison you inflict"
            break;

        case "Psychic Fragmentation":
            return "Anoint Effect: 12% chance for Spell Skills to fire 2 additional Projectiles"
            break;

        case "Split the Earth":
            return "Anoint Effect: 10% chance to Aftershock for Slam Skills you use with Maces 10% chance to Aftershock for Strike Skills you use with Maces"
            break;

        case "Lingering Horror":
            return "Anoint Effect: 23% increased Chaos Damage 15% increased Skill Effect Duration"
            break;

        case "Harness the Elements":
            return "Anoint Effect: 15% increased Damage for each type of Elemental Ailment on Enemy"
            break;

        case "Soul Bloom":
            return "Anoint Effect: 15% increased Energy Shield Recovery rate"
            break;

        case "Staggering Palm":
            return "Anoint Effect: 20% increased Critical Damage Bonus 20% increased Knockback Distance 20% increased Physical Damage"
            break;

        case "Event Horizon":
            return "Anoint Effect: 53% increased Chaos Damage Lose 3% of Life and Energy Shield when you use a Chaos Skill"
            break;

        case "Stormbreaker":
            return "Anoint Effect: 15% increased Damage for each type of Elemental Ailment on Enemy"
            break;

        case "Maiming Strike":
            return "Anoint Effect: 25% increased Attack Damage Attacks have 25% chance to Maim on Hit"
            break;

        case "Grip of Evil":
            return "Anoint Effect: Minions have 40% increased Critical Damage Bonus"
            break;

        case "Kite Runner":
            return "Anoint Effect: 3% increased Movement Speed 15% increased Projectile Speed 15% increased Projectile Damage"
            break;

        case "Climate Change":
            return "Anoint Effect: 20% increased Freeze Buildup Gain 25% of Cold Damage as Extra Fire Damage against Frozen Enemies"
            break;

        case "Unexpected Finesse":
            return "Anoint Effect: 10% increased Attack Damage Gain Accuracy Rating equal to your Strength"
            break;

        case "Blood Tearing":
            return "Anoint Effect: 15% increased Magnitude of Bleeding you inflict 25% increased Physical Damage"
            break;

        case "Struck Through":
            return "Anoint Effect: Attacks have +1% to Critical Hit Chance"
            break;

        case "Cut to the Bone":
            return "Anoint Effect: Break Armour on Critical Hit with Spells equal to 10% of Physical Damage dealt 10% chance to inflict Bleeding on Hit 20% increased Physical Damage"
            break;

        case "Lasting Toxins":
            return "Anoint Effect: 10% increased Skill Effect Duration 50% increased Poison Duration"
            break;

        case "Exposed to the Storm":
            return "Anoint Effect: Damage Penetrates 18% Lightning Resistance 30% increased Critical Hit Chance against enemies with Lightning Exposure"
            break;

        case "Lingering Whispers":
            return "Anoint Effect: 40% increased Curse Duration 10% increased Effect of your Curses"
            break;

        case "Pierce the Heart":
            return "Anoint Effect: Arrows Pierce an additional Target"
            break;

        case "Reusable Ammunition":
            return "Anoint Effect: 15% chance for Crossbow Attacks to not consume a bolt"
            break;

        case "Tempered Mind":
            return "Anoint Effect: 20% increased Critical Damage Bonus +10 to Strength 20% increased Physical Damage"
            break;

        case "Escalating Toxins":
            return "Anoint Effect: 10% increased Poison Duration for each Poison you have inflicted Recently, up to a maximum of 100%"
            break;

        case "Final Barrage":
            return "Anoint Effect: 20% increased Cast Speed when on Low Life 10% reduced Cast Speed when on Full Life"
            break;

        case "Fated End":
            return "Anoint Effect: 30% increased Curse Duration Enemies Cursed by you have 50% reduced Life Regeneration Rate Enemies you Curse cannot Recharge Energy Shield"
            break;

        case "Giantslayer":
            return "Anoint Effect: 25% increased Damage with Hits against Rare and Unique Enemies 20% increased Accuracy Rating against Rare or Unique Enemies 20% increased chance to inflict Ailments against Rare or Unique Enemies"
            break;

        case "Endless Circuit":
            return "Anoint Effect: 25% chance on Consuming a Shock on an Enemy to reapply it"
            break;

        case "Breath of Fire":
            return "Anoint Effect: Damage Penetrates 15% Fire Resistance +10 to Strength"
            break;

        case "Fervour":
            return "Anoint Effect: +2 to Maximum Frenzy Charges"
            break;

        case "Cacophony":
            return "Anoint Effect: 40% increased Damage with Warcries Warcry Skills have 25% increased Area of Effect"
            break;

        case "Dampening Shield":
            return "Anoint Effect: 28% increased maximum Energy Shield Gain 12% of maximum Energy Shield as additional Stun Threshold"
            break;

        case "Death from Afar":
            return "Anoint Effect: Projectiles have 25% increased Critical Hit Chance against Enemies further than 6m Projectiles deal 25% increased Damage with Hits against Enemies further than 6m"
            break;

        case "Martial Artistry":
            return "Anoint Effect: 25% increased Accuracy Rating with Quarterstaves 25% increased Critical Damage Bonus with Quarterstaves +25 to Dexterity"
            break;

        case "Presence Present":
            return "Anoint Effect: Allies in your Presence have +100 to Accuracy Rating 35% increased Attack Damage while you have an Ally in your Presence"
            break;

        case "Exploit the Elements":
            return "Anoint Effect: 24% increased Damage with Hits against Enemies affected by Elemental Ailments 30% increased chance to inflict Ailments against Rare or Unique Enemies"
            break;

        case "Fleshcrafting":
            return "Anoint Effect: Minions gain 15% of their Maximum Life as Extra Maximum Energy Shield"
            break;

        case "Casting Cascade":
            return "Anoint Effect: 15% reduced Spell Damage 6% increased Cast Speed for each different Non-Instant Spell you've Cast Recently"
            break;

        case "Controlling Magic":
            return "Anoint Effect: 25% increased Critical Hit Chance for Spells Hits have 25% reduced Critical Hit Chance against you"
            break;

        case "Smoke Inhalation":
            return "Anoint Effect: Damage Penetrates 15% Fire Resistance 15% increased Duration of Damaging Ailments on Enemies"
            break;

        case "Surging Currents":
            return "Anoint Effect: Damage Penetrates 15% Lightning Resistance +10 to Dexterity"
            break;

        case "Grenadier":
            return "Anoint Effect: Grenade Skills have + 1 Cooldown Use"
            break;

        case "Perfectly Placed Knife":
            return "Anoint Effect: 30% increased Critical Hit Chance against Bleeding Enemies 20% chance to Aggravate Bleeding on targets you Critically Hit with Attacks"
            break;

        case "Exposed to the Cosmos":
            return "Anoint Effect: Damage Penetrates 15% Cold Resistance Cold Exposure you inflict lowers Total Cold Resistance by an extra 5%"
            break;

        case "Heartbreaking":
            return "Anoint Effect: 35% increased Critical Damage Bonus +10 to Strength"
            break;

        case "Electric Amplification":
            return "Anoint Effect: Damage Penetrates 18% Lightning Resistance 25% increased Lightning Exposure Effect"
            break;

        case "Battle Trance":
            return "Anoint Effect: +8 to Maximum Rage"
            break;

        case "Offensive Stance":
            return "Anoint Effect: 1% increased Damage per 1% Chance to Block"
            break;

        case "Supportive Ancestors":
            return "Anoint Effect: 25% increased Damage while you have a Totem Totems have 2% increased Cast Speed per Summoned Totem Totems have 2% increased Attack Speed per Summoned Totem"
            break;

        case "Spaghettification":
            return "Anoint Effect: 3% increased Movement Speed 29% increased Chaos Damage -13% to Chaos Resistance 23% reduced Light Radius 7% increased Attributes"
            break;

        case "Relentless Fallen":
            return "Anoint Effect: Minions have 20% increased Movement Speed Minions have 8% increased Attack and Cast Speed"
            break;

        case "Overzealous":
            return "Anoint Effect: 16% increased Cast Speed 15% increased Mana Cost of Skills"
            break;

        case "Lightning Quick":
            return "Anoint Effect: 14% increased Lightning Damage 8% increased Attack and Cast Speed with Lightning Skills"
            break;

        case "Glazed Flesh":
            return "Anoint Effect: 3% of Damage Taken Recouped as Life, Mana and Energy Shield"
            break;

        case "Woodland Aspect":
            return "Anoint Effect: Charms applied to you have 25% increased Effect"
            break;

        case "Marked for Death":
            return "Anoint Effect: Culling Strike against Enemies you Mark"
            break;

        case "Forces of Nature":
            return "Anoint Effect: Attack Damage Penetrates 15% of Enemy Elemental Resistances"
            break;

        case "Raw Mana":
            return "Anoint Effect: 12% increased maximum Mana 10% increased Mana Cost of Skills"
            break;

        case "Trick Shot":
            return "Anoint Effect: Projectiles have 15% chance to Chain an additional time from terrain"
            break;

        case "Total Incineration":
            return "Anoint Effect: 25% increased Critical Damage Bonus against Burning Enemies 10% chance to refresh Ignite Duration on Critical Hit"
            break;

        case "Ingenuity":
            return "Anoint Effect: +25 to Intelligence"
            break;

        case "Drenched":
            return "Anoint Effect: 40% increased chance to Shock Gain 5% of Lightning Damage as Extra Cold Damage"
            break;

        case "Low Tolerance":
            return "Anoint Effect: 60% increased Effect of Poison you inflict on targets that are not Poisoned"
            break;

        case "General Electric":
            return "Anoint Effect: 40% increased chance to Shock 5% increased Attack and Cast Speed with Lightning Skills"
            break;

        case "Overexposure":
            return "Anoint Effect: 30% increased Cold Exposure Effect 30% increased Fire Exposure Effect 30% increased Lightning Exposure Effect"
            break;

        case "Voracious":
            return "Anoint Effect: 20% of Leech is Instant"
            break;

        case "Left Hand of Darkness":
            return "Anoint Effect: Minions have 20% additional Physical Damage Reduction Minions have +23% to Chaos Resistance"
            break;

        case "Right Hand of Darkness":
            return "Anoint Effect: Minions have 20% increased Area of Effect Minions have 10% chance to inflict Withered on Hit"
            break;

        case "Effervescent":
            return "Anoint Effect: 4% increased Cast Speed for each different Non-Instant Spell you've Cast Recently"
            break;

        case "Stars Aligned":
            return "Anoint Effect: Damage with Hits is Lucky against Enemies that are on Low Life"
            break;

        case "Volcanic Skin":
            return "Anoint Effect: Gain 8% of Damage as Extra Fire Damage +20% to Fire Resistance"
            break;

        case "Polymathy":
            return "Anoint Effect: 10% increased Attributes"
            break;

        case "Power Shots":
            return "Anoint Effect: 15% reduced Attack Speed with Crossbows 80% increased Critical Damage Bonus with Crossbows"
            break;

        case "Cluster Bombs":
            return "Anoint Effect: 50% increased Grenade fuse duration Grenade Skills Fire an additional Projectile"
            break;

        case "One with the Storm":
            return "Anoint Effect: Quarterstaff Skills that consume Power Charges count as consuming an additional Power Charge"
            break;

        case "Coming Calamity":
            return "Anoint Effect: 50% increased Cold Damage while affected by Herald of Ice 50% increased Fire Damage while affected by Herald of Ash 50% increased Lightning Damage while affected by Herald of Thunder"
            break;

        case "Touch the Arcane":
            return "Anoint Effect: 40% increased effect of Arcane Surge on you"
            break;

        case "Repeating Explosives":
            return "Anoint Effect: Grenades have 15% chance to activate a second time"
            break;

        case "Calibration":
            return "Anoint Effect: 30% increased maximum Energy Shield 4% increased maximum Mana"
            break;

        case "Sniper":
            return "Anoint Effect: Arrows gain Critical Hit Chance as they travel farther, up to 60% increased Critical Hit Chance"
            break;

        case "Urgent Call":
            return "Anoint Effect: Recover 2% of Life and Mana when you use a Warcry 24% increased Warcry Speed 18% increased Warcry Cooldown Recovery Rate"
            break;

        case "Endless Blizzard":
            return "Anoint Effect: +1 to Level of all Cold Skills"
            break;

        case "Sudden Infuriation":
            return "Anoint Effect: 3% chance that if you would gain Rage on Hit , you instead gain up to your maximum Rage"
            break;

        case "Patient Barrier":
            return "Anoint Effect: 60% increased maximum Energy Shield 20% slower start of Energy Shield Recharge"
            break;

        case "Feathered Fletching":
            return "Anoint Effect: Increases and Reductions to Projectile Speed also apply to Damage with Bows"
            break;

        case "Fast Metabolism":
            return "Anoint Effect: Life Leech effects are not removed when Unreserved Life is Filled"
            break;

        case "Eldritch Will":
            return "Anoint Effect: 3% increased maximum Life, Mana and Energy Shield Gain 20% of maximum Energy Shield as additional Stun Threshold"
            break;

        case "Goring":
            return "Anoint Effect: 5% reduced maximum Life 30% increased amount of Life Leeched 40% increased Physical Damage"
            break;

        case "Lord of Horrors":
            return "Anoint Effect: Minions have 12% reduced Reservation"
            break;

        case "Spike Pit":
            return "Anoint Effect: Enemies in Jagged Ground you create take 10% increased Damage"
            break;

        case "Building Toxins":
            return "Anoint Effect: 25% reduced Poison Duration Targets can be affected by +1 of your Poisons at the same time"
            break;

        case "Unimpeded":
            return "Anoint Effect: 24% reduced Slowing Potency of Debuffs on You"
            break;

        case "Wide Barrier":
            return "Anoint Effect: 30% increased Block chance 25% reduced Global Defences"
            break;

        case "Zone of Control":
            return "Anoint Effect: 40% increased Area of Effect of Curses 8% increased Effect of your Curses Enemies you Curse are Hindered , with 15% reduced Movement Speed"
            break;

        case "Catalysis":
            return "Anoint Effect: 20% increased Elemental Damage with Attacks 5% of Physical Damage from Hits taken as Damage of a Random Element"
            break;

        case "Enhanced Barrier":
            return "Anoint Effect: 25% increased maximum Energy Shield +1% to all Maximum Elemental Resistances"
            break;

        case "Cremation":
            return "Anoint Effect: Damage Penetrates 18% Fire Resistance 25% increased Fire Exposure Effect"
            break;

        case "Vocal Empowerment":
            return "Anoint Effect: Warcries Empower an additional Attack"
            break;

        case "Dark Entries":
            return "Anoint Effect: +1 to Level of all Chaos Skills"
            break;

        case "Enraged Reaver":
            return "Anoint Effect: + 10 to Maximum Rage while wielding an Axe"
            break;

        case "Wild Storm":
            return "Anoint Effect: 15% more Maximum Lightning Damage"
            break;

        case "Lightning Rod":
            return "Anoint Effect: Lightning Damage with Non-Critical Hits is Lucky"
            break;

        case "Prism Guard":
            return "Anoint Effect: +1% to all Maximum Elemental Resistances +5% to all Elemental Resistances"
            break;

        case "Unnatural Resilience":
            return "Anoint Effect: 2% to Maximum Fire Resistance for each 40% Uncapped Fire Resistance"
            break;

    }}
