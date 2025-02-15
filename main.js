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
    //allocates
    var enchantMod = document.getElementsByClassName("enchantMod");
    for(let i=0;i<enchantMod.length;i++){
        if(enchantMod[i].childNodes[1].childNodes.length!==2){
            let text = enchantMod[i].childNodes[1].textContent
            var nameEnchant=text.replace("Allocates ","")
            var all = `<div style="color:green;">${switchAllocates(nameEnchant)}</div>`;
            enchantMod[i].childNodes[1].innerHTML += all;
        }
    }
    //search
    var searchallbutton = document.getElementsByClassName("searchBy");
    for(let i=0;i<searchallbutton.length;i++){
        let btn =searchallbutton[i];
        if(btn.style.left!=="50px"){
            btn.style.left="50px";
        }
    }
    //copy
    var copyallbutton= document.getElementsByClassName("copy hidden");
    for(let i=0;i<copyallbutton.length;i++){
        let btn =copyallbutton[i];
        btn.onclick=(e)=>{
            let text = e.target.parentNode.parentNode.childNodes[2].childNodes[0].innerText;
            navigator.clipboard.writeText(text);
            //animation
            document.querySelector("#trade > div:nth-child(1) > div.toast-container.toast-bottom-center").innerHTML=`<div class="toast toast-success" style="display: block;">\x3C!----> <div class="toast-title"></div> <div class="toast-message">Item text copied.</div></div>`
            setTimeout(()=>{
                document.querySelector("#trade > div:nth-child(1) > div.toast-container.toast-bottom-center").innerHTML=``
            },1000)
        }
    }
},500)

function switchAllocates(Allocates){
    switch(Allocates){
        case "Stance Breaker":
            return "50% reduced Enemy Chance to Block Sword Attacks"
            break;

        case "Open Mind":
            return "25% increased Mana Regeneration Rate"
            break;

        case "Blinding Flash":
            return "20% increased Blind Effect Blind Enemies when they Stun you"
            break;

        case "Insulated Treads":
            return "Gain Ailment Threshold equal to the lowest of Evasion and Armour on your Boots"
            break;

        case "High Alert":
            return "50% increased Evasion Rating when on Full Life 25% increased Stun Threshold while on Full Life"
            break;

        case "Combat Alchemy":
            return "10% chance for Flasks you use to not consume Charges 20% increased Life and Mana Recovery from Flasks"
            break;

        case "Eagle Eye":
            return "+30 to Accuracy Rating 10% increased Accuracy Rating"
            break;

        case "Defensive Reflexes":
            return "12% increased Block chance 2 Mana gained when you Block"
            break;

        case "Volatile Catalyst":
            return "10% increased Area of Effect 10% increased Cooldown Recovery Rate"
            break;

        case "Volatile Grenades":
            return "25% reduced Grenade fuse duration"
            break;

        case "Back in Action":
            return "80% increased Stun Recovery"
            break;

        case "Hard to Kill":
            return "40% increased Flask Life Recovery rate Regenerate 0.75% of Life per second"
            break;

        case "Investing Energies":
            return "40% increased Mana Regeneration Rate while stationary 20% reduced Mana Regeneration Rate while moving"
            break;

        case "Deadly Flourish":
            return "20% increased Melee Critical Hit Chance melee critical strike chance +% when on full life [20]"
            break;

        case "Vigilance":
            return "12% increased Block chance 6 Life gained when you Block"
            break;

        case "Critical Overload":
            return "15% increased Critical Hit Chance for Spells 15% increased Spell Damage if you've dealt a Critical Hit Recently"
            break;

        case "Altered Brain Chemistry":
            return "25% increased Mana Recovery from Flasks 10% increased Mana Recovery Rate during Effect of any Mana Flask"
            break;

        case "Defiance":
            return "80% increased Armour and Evasion Rating when on Low Life"
            break;

        case "Deft Recovery":
            return "30% increased Stun Recovery 30% increased Stun Threshold if you haven't been Stunned Recently"
            break;

        case "Flashy Deflection":
            return "12% increased Block chance 40% increased Defences from Equipped Shield"
            break;

        case "Backup Plan":
            return "40% increased Evasion Rating if you have been Hit Recently 40% increased Armour if you haven't been Hit Recently"
            break;

        case "Sharpened Claw":
            return "25% increased Attack Damage"
            break;

        case "Heavy Ammunition":
            return "8% reduced Attack Speed 40% increased Projectile Damage 40% increased Projectile Stun Buildup"
            break;

        case "Smooth Buckler":
            return "12% increased Block chance 10 Mana gained when you Block"
            break;

        case "Thickened Arteries":
            return "5% reduced Movement Speed Regenerate 1% of Life per second while stationary"
            break;

        case "Cross Strike":
            return "20% increased Accuracy Rating while Dual Wielding 3% increased Movement Speed while Dual Wielding"
            break;

        case "Initiative":
            return "30% increased Melee Damage when on Full Life 16% increased Attack Speed if you haven't Attacked Recently"
            break;

        case "Practiced Signs":
            return "6% increased Cast Speed"
            break;

        case "Determined Precision":
            return "30% increased Accuracy Rating at Close Range +10 to Dexterity"
            break;

        case "Taste for Blood":
            return "Gain 20 Life per Enemy Killed 2% chance to Recover all Life when you Kill an Enemy"
            break;

        case "Life from Death":
            return "Recover 3% of Life on Kill"
            break;

        case "Smash":
            return "20% increased Melee Damage 40% increased Melee Damage against Heavy Stunned enemies"
            break;

        case "Resilient Soul":
            return "20% increased Life Regeneration rate 5% of Damage taken Recouped as Life"
            break;

        case "Self Mortification":
            return "Gain 20% of maximum Energy Shield as additional Stun Threshold 20% increased Stun Threshold while on Full Life"
            break;

        case "Arcane Alchemy":
            return "Mana Flasks gain 0.1 charges per Second +10 to Intelligence"
            break;

        case "Freedom of Movement":
            return "30% increased Evasion Rating 30% increased Evasion Rating if you've Dodge Rolled Recently"
            break;

        case "Infused Flesh"://
            return "+20 to maximum Life 8% of Damage taken Recouped as Life"
            break;

        case "Essence Infusion":
            return "40% increased Energy Shield Recharge Rate +10 to Intelligence"
            break;

        case "Ether Flow":
            return "25% reduced Mana Regeneration Rate while stationary 50% increased Mana Regeneration Rate while moving"
            break;

        case "Close Confines":
            return "25% chance for Projectiles to Pierce Enemies within 3m distance of you"
            break;

        case "Catlike Agility":
            return "25% increased Evasion Rating 25% increased Evasion Rating if you've Dodge Rolled Recently"
            break;

        case "Seeing Stars":
            return "25% increased Daze Buildup 25% increased Daze Duration"
            break;

        case "Clear Space":
            return "20% increased Knockback Distance 20% chance to Knock Enemies Back with Hits at Close Range"
            break;

        case "Careful Aim":
            return "16% increased Projectile Damage 40% increased Accuracy Rating at Close Range"
            break;

        case "Briny Carapace":
            return "60% increased Stun Threshold for each time you've been Stunned Recently"
            break;

        case "Strong Chin":
            return "Gain Stun Threshold equal to the lowest of Evasion and Armour on your Helmet"
            break;

        case "Heavy Drinker":
            return "30% increased Flask Effect Duration 20% increased Life Recovery from Flasks Recover 5% of Life when you use a Life Flask while on Low Life"
            break;

        case "Stand Ground":
            return "Regenerate 1% of Life per second while affected by any Damaging Ailment Regenerate 1% of Life per second while stationary"
            break;

        case "Mass Rejuvenation":
            return "Regenerate 0.5% of Life per second Allies in your Presence Regenerate 1% of your Maximum Life per second"
            break;

        case "Radial Force":
            return "10% increased Area of Effect 10% increased Area Damage"
            break;

        case "Defender's Resolve":
            return "12% increased Block chance Stagger empties 50% faster while your Shield is lowered"
            break;

        case "Feel no Pain":
            return "20% increased Armour and Evasion Rating 20% increased Stun Threshold"
            break;

        case "Shockwaves":
            return "30% increased Area of Effect if you've Stunned an Enemy with a Two Handed Melee Weapon Recently"
            break;

        case "Battle-hardened":
            return "Hits against you have 20% reduced Critical Damage Bonus 20% increased Armour and Evasion Rating +5 to Strength and Dexterity"
            break;

        case "Primal Protection":
            return "25% increased Charm Effect Duration 25% increased Charm Charges gained"
            break;

        case "Fear of Death":
            return "Minions have +150 to Accuracy Rating 25% increased Minion Accuracy Rating"
            break;

        case "Near Sighted":
            return "60% increased Accuracy Rating at Close Range"
            break;

        case "Shedding Skin":
            return "40% increased Elemental Ailment Threshold 10% reduced Duration of Ailments on You"
            break;

        case "Break Focus":
            return "Enemies you Mark have 15% reduced Accuracy Rating"
            break;

        case "Siphon":
            return "Recover 2% of Mana on Kill 25% increased amount of Mana Leeched"
            break;

        case "Critical Exploit":
            return "25% increased Critical Hit Chance"
            break;

        case "Killer Instinct":
            return "30% increased Attack Damage when on Full Life 50% increased Attack Damage when on Low Life"
            break;

        case "Warding Potions":
            return "10% reduced Flask Charges used from Mana Flasks Remove a Curse when you use a Mana Flask"
            break;

        case "Electrifying Nature":
            return "25% increased Lightning Damage 15% increased Shock Duration"
            break;

        case "Ripping Blade":
            return "25% increased Damage with Swords"
            break;

        case "Exposed Wounds":
            return "15% increased chance to inflict Ailments Break 30% increased Armour on enemies affected by Ailments"
            break;

        case "True Strike":
            return "+10 to Dexterity 20% increased Critical Hit Chance"
            break;

        case "Flip the Script":
            return "Recover 20% of Life when you Heavy Stun a Rare or Unique Enemy"
            break;

        case "Dispatch Foes":
            return "80% increased Critical Hit Chance if you haven't dealt a Critical Hit Recently"
            break;

        case "Hulking Smash":
            return "30% increased Stun Buildup +15 to Strength"
            break;

        case "Relentless Vindicator":
            return "10% increased Damage 10% increased Critical Hit Chance +5 to Strength and Intelligence"
            break;

        case "Sharp Sight":
            return "5% increased Attack Speed 30% increased Accuracy Rating against Rare or Unique Enemies"
            break;

        case "Shrapnel":
            return "30% chance to Pierce an Enemy Projectiles have 10% chance to Chain an additional time from terrain"
            break;

        case "Rapid Recharge":
            return "25% increased Energy Shield Recharge Rate 25% faster start of Energy Shield Recharge Witch: Minions have 15% increased maximum Life Witch: Minions Revive 15% faster"
            break;

        case "Potent Concoctions":
            return "Flasks applied to you have 25% increased Effect"
            break;

        case "Remorseless":
            return "15% increased Projectile Damage 30% increased Stun Buildup against enemies within 2 metres +5 to Strength and Dexterity"
            break;

        case "Roil":
            return "Spell Skills have 30% increased Area of Effect 10% reduced Spell Area Damage"
            break;

        case "Wellspring":
            return "30% increased Mana Recovery from Flasks 8% increased Attack and Cast Speed during Effect of any Mana Flask"
            break;

        case "Mental Perseverance":
            return "10% of Damage is taken from Mana before Life"
            break;

        case "Unerring Impact":
            return "10% increased Accuracy Rating with One Handed Melee Weapons 10% increased Accuracy Rating with Two Handed Melee Weapons +2 to Melee Strike Range"
            break;

        case "Afterimage":
            return "8% more chance to Evade Melee Attacks"
            break;

        case "Preemptive Strike":
            return "100% increased Critical Damage Bonus against Enemies that are on Full Life"
            break;

        case "Titan's Determination":
            return "25% increased Stun Threshold 20% increased Life Regeneration Rate while moving"
            break;

        case "Pocket Sand":
            return "50% increased Blind Effect"
            break;

        case "Impenetrable Shell":
            return "Defend with 150% of Armour against Attacks from further than 6m"
            break;

        case "Arcane Mixtures":
            return "25% increased Energy Shield Recharge Rate Mana Flasks gain 0.1 charges per Second"
            break;

        case "Strong Links":
            return "Link Skills have 20% increased Buff Effect Link Skills have 20% increased Skill Effect Duration"
            break;

        case "Quick-change Act":
            return "50% increased Weapon Swap Speed"
            break;

        case "Catapult":
            return "15% increased Projectile Speed 15% increased Area of Effect for Attacks"
            break;

        case "Unbound Forces":
            return "40% increased Chill Duration on Enemies 40% increased Shock Duration 25% increased Magnitude of Chill you inflict 25% increased Magnitude of Shock you inflict"
            break;

        case "Twinned Tethers":
            return "Link Skills Link to 1 additional random target"
            break;

        case "Reinvigoration":
            return "Regenerate 1% of Life per Second if you've used a Life Flask in the past 10 seconds"
            break;

        case "Immaterial":
            return "50% increased Evasion Rating if Energy Shield Recharge has started in the past 2 seconds 30% increased Evasion Rating while you have Energy Shield"
            break;

        case "Regenerative Flesh":
            return "Minions Recoup 10% of Damage taken as Life"
            break;

        case "Forcewave":
            return "20% increased Stun Buildup 20% increased Knockback Distance +10 to Strength"
            break;

        case "Careful Consideration":
            return "30% reduced Evasion Rating if you have been Hit Recently 100% increased Evasion Rating if you haven't been Hit Recently"
            break;

        case "Beastial Skin":
            return "100% increased Evasion Rating from Equipped Body Armour"
            break;

        case "Devestating Devices":
            return "25% increased Trap Damage"
            break;

        case "Whirling Assault":
            return "8% increased Attack Speed with Quarterstaves Knocks Back Enemies if you get a Critical Hit with a Quarterstaff"
            break;

        case "Unbreaking":
            return "30% increased Stun Threshold 30% increased Elemental Ailment Threshold"
            break;

        case "Resolution":
            return "10% increased Global Defences 25% increased Stun Threshold"
            break;

        case "Adverse Growth":
            return "20% reduced Life Regeneration rate 20% of Damage taken Recouped as Mana"
            break;

        case "Doomsayer":
            return "Herald Skills have 30% increased Area of Effect Herald Skills deal 30% increased Damage"
            break;

        case "Taut Flesh":
            return "15% of Physical Damage taken Recouped as Life"
            break;

        case "Sundering":
            return "25% increased Critical Damage Bonus for Attack Damage +25% to Critical Damage Bonus against Stunned Enemies"
            break;

        case "Blur":
            return "4% increased Movement Speed 20% increased Evasion Rating +10 to Dexterity"
            break;

        case "Roll and Strike":
            return "25% increased Damage with Spears"
            break;

        case "Deafening Cries":
            return "25% increased Warcry Cooldown Recovery Rate 8% increased Damage for each time you've Warcried Recently"
            break;

        case "Guttural Roar":
            return "30% increased Warcry Speed Warcry Skills have 30% increased Area of Effect"
            break;

        case "Serrated Edges":
            return "10% increased Critical Hit Chance for Attacks 30% increased Attack Damage against Rare or Unique Enemies"
            break;

        case "Cranial Impact":
            return "30% increased Stun Buildup Gain an Endurance Charge when you Heavy Stun a Rare or Unique Enemy"
            break;

        case "Viciousness":
            return "8% increased Melee Attack Speed +10 to Dexterity"
            break;

        case "Sturdy Metal":
            return "80% increased Armour from Equipped Body Armour"
            break;

        case "Hunter's Talisman":
            return "+1 Charm Slot"
            break;

        case "Impact Area":
            return "15% increased Area of Effect if you have Stunned an Enemy Recently 15% increased Area of Effect for Attacks"
            break;

        case "Spiked Whip":
            return "25% increased Damage with Flails"
            break;

        case "Coursing Energy":
            return "40% increased Electrocute Buildup 30% increased Shock Chance against Electrocuted Enemies"
            break;

        case "Heavy Weaponry":
            return "15% increased Melee Damage 15% increased Stun Buildup with Melee Damage +15 to Strength"
            break;

        case "Ricochet":
            return "15% increased Projectile Damage Projectiles have 10% chance to Chain an additional time from terrain"
            break;

        case "Piercing Shot":
            return "50% chance to Pierce an Enemy"
            break;

        case "Conservative Casting":
            return "20% increased Mana Regeneration Rate 8% reduced Mana Cost of Skills"
            break;

        case "Spreading Shocks":
            return "Shocking Hits have a 50% chance to also Shock enemies in a 1.5 metre radius"
            break;

        case "No Escape":
            return "Mark Skills have 60% increased Skill Effect Duration"
            break;

        case "Heatproofing":
            return "25% of Armour also applies to Fire Damage taken from Hits"
            break;

        case "Potent Incantation":
            return "30% increased Spell Damage 5% reduced Cast Speed"
            break;

        case "Direct Approach":
            return "40% increased Critical Hit Chance against Enemies that are affected by no Elemental Ailments"
            break;

        case "Mass Hysteria":
            return "Allies in your Presence have 6% increased Attack Speed 6% increased Attack Speed"
            break;

        case "Hale Traveller":
            return "20% increased Life Recovery from Flasks Life Flasks gain 0.1 charges per Second"
            break;

        case "Cautious Concoctions":
            return "15% increased Flask Effect Duration 15% increased Flask Charges gained"
            break;

        case "Vulgar Methods":
            return "10% reduced maximum Mana +10 to Strength 35% increased Critical Hit Chance"
            break;

        case "Towering Shield":
            return "50% increased Defences from Equipped Shield 25% increased Chance to Block if you've Blocked with Active Block Recently"
            break;

        case "Leaping Ambush":
            return "100% increased Critical Hit Chance against Enemies on Full Life"
            break;

        case "Pressure Points":
            return "35% increased Stun Buildup 35% increased Freeze Buildup"
            break;

        case "Savoured Blood":
            return "35% increased amount of Life Leeched Leech Life 20% slower"
            break;

        case "Mana Blessing":
            return "+20 to maximum Mana 5% increased maximum Mana"
            break;

        case "Devastation":
            return "15% increased Area of Effect for Attacks 15% increased Attack Area Damage"
            break;

        case "Finishing Blows":
            return "60% increased Damage with Hits against Enemies that are on Low Life 30% increased Stun Buildup against Enemies that are on Low Life"
            break;

        case "Way of the Wind":
            return "25% increased Evasion if you have Hit an Enemy Recently 50% increased maximum Dash Distance with Unarmed Attack Skills"
            break;

        case "Flow Like Water":
            return "8% increased Attack and Cast Speed +5 to Dexterity and Intelligence"
            break;

        case "Tainted Strike":
            return "25% increased Critical Hit Chance for Attacks 30% increased Magnitude of Non-Damaging Ailments you inflict with Critical Hits"
            break;

        case "Clean Shot":
            return "15% chance to Pierce an Enemy 15% increased Projectile Damage"
            break;

        case "Prolonged Fury":
            return "Inherent loss of Rage is 25% slower"
            break;

        case "Tough Claw":
            return "25% increased Attack Damage"
            break;

        case "Erraticism":
            return "16% increased Cast Speed if you've dealt a Critical Hit Recently 10% reduced Critical Hit Chance"
            break;

        case "Aftershocks":
            return "40% increased Aftershock Area of Effect"
            break;

        case "Reaving":
            return "8% increased Attack Speed with One Handed Weapons +15 to Dexterity"
            break;

        case "Full Recovery":
            return "15% increased Life Regeneration rate 15% increased Mana Regeneration Rate"
            break;

        case "Precise Point":
            return "25% increased Damage with Spears"
            break;

        case "Heavy Contact":
            return "Hits that Heavy Stun Enemies have Culling Strike"
            break;

        case "Barbaric Strength":
            return "45% increased Critical Damage Bonus 10% increased Mana Cost of Skills +10 to Strength"
            break;

        case "Crashing Wave":
            return "36% increased Damage if you've dealt a Critical Hit in the past 8 seconds"
            break;

        case "Destructive Apparatus":
            return "25% increased Trap Damage"
            break;

        case "Arcane Blossom":
            return "15% increased Mana Recovery rate"
            break;

        case "Brutal":
            return "10% increased Stun Buildup 16% increased Melee Damage +10 to Strength"
            break;

        case "Hunker Down":
            return "Recover 20 Life when you Block 80% less Knockback Distance for Blocked Hits"
            break;

        case "Escape Strategy":
            return "100% increased Evasion Rating if you have been Hit Recently 30% reduced Evasion Rating if you haven't been Hit Recently"
            break;

        case "Lasting Concoctions":
            return "25% increased Flask Effect Duration 25% increased Flask Charges gained"
            break;

        case "Two-Pronged Attack":
            return "Minions deal 25% increased Damage"
            break;

        case "Efficient Alchemy":
            return "20% increased Flask and Charm Charges gained 40% increased Life and Mana Recovery from Flasks while you have an active Charm"
            break;

        case "Shattering Blow":
            return "Break 50% of Armour on Heavy Stunning an Enemy"
            break;

        case "Honourless":
            return "25% increased Armour if you've Hit an Enemy with a Melee Attack Recently 50% increased Melee Damage against Immobilised Enemies"
            break;

        case "Far Sighted":
            return "30% reduced penalty to Accuracy Rating at range"
            break;

        case "Parrying Motion":
            return "12% increased Block chance 1% increased Movement Speed for each time you've Blocked in the past 10 seconds"
            break;

        case "Thornhide":
            return "+5% to Thorns Critical Hit Chance"
            break;

        case "Loose Flesh":
            return "15% of Elemental Damage taken Recouped as Life"
            break;

        case "Spirit Bond":
            return "30% increased Totem Life 30% increased Totem Duration"
            break;

        case "Swift Skewering":
            return "8% increased Attack Speed with Spears"
            break;

        case "Advanced Munitions":
            return "25% increased chance to inflict Ailments with Projectiles"
            break;

        case "Mystic Stance":
            return "30% faster start of Energy Shield Recharge 30% increased Stun Threshold while on Full Life"
            break;

        case "Rattled":
            return "+20 to maximum Mana 50% increased Shock Duration"
            break;

        case "Tenfold Attacks":
            return "4% increased Attack Speed 6% increased Attack Speed if you've been Hit Recently +10 to Strength"
            break;

        case "Colossal Weapon":
            return "15% increased Area of Effect for Attacks +10 to Strength"
            break;

        case "Dependable Ward":
            return "25% increased Energy Shield Recharge Rate 25% faster start of Energy Shield Recharge"
            break;

        case "Blade Catcher":
            return "Defend with 200% of Armour against Critical Hits +15 to Strength"
            break;

        case "Echoing Pulse":
            return "Final Repeat of Spells has 40% increased Area of Effect"
            break;

        case "Price of Freedom":
            return "10% reduced Mana Cost of Attacks 18% of Skill Mana Costs Converted to Life Costs"
            break;

        case "Enhanced Reflexes":
            return "30% increased Evasion Rating 8% increased Dexterity"
            break;

        case "Vengeance":
            return "40% increased Thorns damage"
            break;

        case "Cold Nature":
            return "25% increased Cold Damage 15% increased Chill Duration on Enemies"
            break;

        case "Curved Weapon":
            return "15% increased Accuracy Rating +10 to Dexterity"
            break;

        case "Jack of all Trades":
            return "2% increased Damage per 5 of your lowest Attribute"
            break;

        case "Breakage":
            return "Break 60% increased Armour 10% chance to Defend with 200% of Armour"
            break;

        case "In Your Face":
            return "40% increased Melee Damage with Hits at Close Range"
            break;

        case "Mental Toughness":
            return "18% increased Mana Regeneration Rate 15% reduced Mana Cost while not on Low Mana"
            break;

        case "Sand in the Eyes":
            return "10% increased Attack Speed 15% chance to Blind Enemies on Hit with Attacks"
            break;

        case "Blinding Strike":
            return "24% increased Attack Damage 10% chance to Blind Enemies on Hit with Attacks"
            break;

        case "Proficiency":
            return "+25 to Dexterity"
            break;

        case "Split Shot":
            return "Projectiles have 75% chance for an additional Projectile when Forking"
            break;

        case "Icebreaker":
            return "Gain 100% of Maximum Energy Shield as additional Freeze Threshold"
            break;

        case "First Approach":
            return "50% increased Critical Hit Chance against Enemies on Full Life Cannot be Blinded while on Full Life 80% increased Damage with Hits against Enemies that are on Full Life"
            break;

        case "Mind Eraser":
            return "10% increased Mana Regeneration Rate 6% of Damage taken Recouped as Mana"
            break;

        case "Unstoppable Barrier":
            return "10% increased Block chance 15% reduced Slowing Potency of Debuffs on You"
            break;

        case "Growing Swarm":
            return "Minions have 20% increased Area of Effect Minions have 20% increased Cooldown Recovery Rate"
            break;

        case "Reverberation":
            return "Spell Skills have 20% increased Area of Effect"
            break;

        case "Fortifying Blood":
            return "20% increased amount of Life Leeched 40% increased Armour and Evasion Rating while Leeching"
            break;

        case "Essence of the Storm":
            return "Gain 5% of Damage as Extra Lightning Damage 30% increased chance to Shock"
            break;

        case "Core of the Guardian":
            return "100% increased Defences from Equipped Shield"
            break;

        case "Coated Arms":
            return "25% increased Damage with One Handed Weapons 20% increased Chance to inflict Ailments with One-Handed Attacks"
            break;

        case "General's Bindings":
            return "Gain 8% of Evasion Rating as extra Armour"
            break;

        case "Ancestral Mending":
            return "Regenerate 1% of Life per second while you have a Totem Totems Regenerate 3% of Life per second"
            break;

        case "Mental Alacrity":
            return "5% increased Cast Speed 15% increased Mana Regeneration Rate +10 to Intelligence"
            break;

        case "Insightfulness":
            return "18% increased maximum Energy Shield 12% increased Mana Regeneration Rate 6% increased Intelligence"
            break;

        case "Gravedigger":
            return "Minions Revive 15% faster You gain 2% Life when one of your Minions is Revived"
            break;

        case "Bestial Rage":
            return "25% increased Attack Damage"
            break;

        case "Push the Advantage":
            return "40% increased Critical Damage Bonus with One Handed Melee Weapons"
            break;

        case "Blood Rush":
            return "6% increased Skill Speed 6% of Skill Mana Costs Converted to Life Costs"
            break;

        case "Pure Energy":
            return "30% increased maximum Energy Shield +10 to Intelligence"
            break;

        case "Adrenaline Rush":
            return "4% increased Movement Speed if you've Killed Recently 8% increased Attack Speed if you've Killed Recently"
            break;

        case "Stigmata":
            return "Offerings have 30% increased Maximum Life Recover 3% of Life when you create an Offering"
            break;

        case "Waters of Life":
            return "Recover 2% of Life when you use a Mana Flask Mana Flasks gain 0.1 charges per Second"
            break;

        case "Explosive Impact":
            return "15% increased Area of Effect Burning Enemies you kill have a 5% chance to Explode, dealing a tenth of their maximum Life as Fire Damage"
            break;

        case "Silent Guardian":
            return "Minions have +20% to all Elemental Resistances"
            break;

        case "Shield Expertise":
            return "12% increased Block chance 40% increased Block Recovery"
            break;

        case "Fireproof":
            return "+15% to Fire Resistance 25% reduced effect of Ignite on you"
            break;

        case "Manifold Method":
            return "50% increased amount of Mana Leeched 25% increased chance to inflict Ailments against Rare or Unique Enemies"
            break;

        case "Thicket Warding":
            return "20% chance for Charms you use to not consume Charges Recover 5% of Mana when a Charm is used"
            break;

        case "Singular Purpose":
            return "5% reduced Attack Speed 20% increased Stun Buildup 40% increased Damage with Two Handed Weapons"
            break;

        case "Quick Response":
            return "20% faster start of Energy Shield Recharge 30% faster start of Energy Shield Recharge when not on Full Life"
            break;

        case "Bringer of Order":
            return "Minions deal 25% increased Damage"
            break;

        case "Acceleration":
            return "3% increased Movement Speed 10% increased Skill Speed"
            break;

        case "Ice Walls":
            return "200% increased Ice Crystal Life"
            break;

        case "Sudden Escalation":
            return "16% increased Critical Hit Chance for Spells 8% increased Cast Speed if you've dealt a Critical Hit Recently"
            break;

        case "Multitasking":
            return "15% increased Skill Effect Duration 12% increased Cooldown Recovery Rate"
            break;

        case "Burn Away":
            return "15% increased Fire Damage Damage Penetrates 10% Fire Resistance 10% increased Magnitude of Ignite you inflict"
            break;

        case "Bloodthirsty":
            return "20% increased amount of Life Leeched Leech Life 25% faster"
            break;

        case "Deep Trance":
            return "8% increased Attack Speed 10% reduced Cost of Skills"
            break;

        case "Wasting":
            return "15% increased Duration of Damaging Ailments on Enemies 30% increased Damage with Hits against Enemies affected by Ailments"
            break;

        case "Dead can Dance":
            return "Minions have 25% increased Evasion Rating Your Dexterity is added to your Minions"
            break;

        case "Harsh Winter":
            return "8% increased Cast Speed with Cold Skills 16% increased Skill Effect Duration"
            break;

        case "Turn the Clock Forward":
            return "20% increased Projectile Speed for Spell Skills"
            break;

        case "Suffusion":
            return "30% increased amount of Mana Leeched Unaffected by Chill while Leeching Mana"
            break;

        case "Projectile Bulwark":
            return "30% increased Armour Defend with 120% of Armour against Projectile Attacks"
            break;

        case "Shattering":
            return "25% increased Freeze Buildup 15% increased Chill Duration on Enemies 15% increased Magnitude of Chill you inflict"
            break;

        case "Sturdy Ally":
            return "Minions have 25% increased maximum Life"
            break;

        case "Heavy Armour":
            return "100% of Strength Requirements from Boots, Gloves and Helmets also added to Armour"
            break;

        case "Fate Finding":
            return "15% reduced Reservation of Herald Skills"
            break;

        case "Time Manipulation":
            return "Debuffs you inflict have 10% increased Slow Magnitude Debuffs on you expire 20% faster"
            break;

        case "Overwhelm":
            return "5% reduced Attack Speed 20% increased Stun Buildup 40% increased Damage with Two Handed Weapons"
            break;

        case "Anticipation":
            return "Skills Supported by Unleash have 25% increased Seal gain frequency"
            break;

        case "Unbending":
            return "3% increased maximum Life 30% increased Stun Threshold"
            break;

        case "Heavy Frost":
            return "20% increased Freeze Buildup Hits ignore non-negative Elemental Resistances of Frozen Enemies"
            break;

        case "Harmonic Generator":
            return "25% increased Critical Hit Chance against Shocked Enemies 40% increased Magnitude of Shock you inflict with Critical Hits"
            break;

        case "Arcane Intensity":
            return "3% increased Spell Damage per 100 maximum Mana"
            break;

        case "Restless Dead":
            return "Minions Revive 25% faster"
            break;

        case "Master Fletching":
            return "30% increased bonuses gained from Equipped Quiver"
            break;

        case "Chronomancy":
            return "20% increased Skill Effect Duration Debuffs you inflict have 10% increased Slow Magnitude"
            break;

        case "Path of Storms":
            return "18% increased Lightning Damage 30% increased chance to Shock Witch: 18% increased Chaos Damage Witch: 15% increased Skill Effect Duration"
            break;

        case "Impact Force":
            return "20% increased Stun Buildup 25% increased Attack Area Damage"
            break;

        case "Rapid Strike":
            return "+30 to Accuracy Rating 8% increased Melee Attack Speed"
            break;

        case "Necrotised Flesh":
            return "Minions have 40% increased maximum Life Minions have 10% reduced Life Recovery rate"
            break;

        case "Vile Mending":
            return "Minions have 20% increased maximum Life Minions Regenerate 3% of Life per second Minions have +13% to Chaos Resistance"
            break;

        case "All Natural":
            return "+5% to all Elemental Resistances 30% increased Elemental Damage"
            break;

        case "Lay Siege":
            return "1% increased Damage per 1% Chance to Block"
            break;

        case "Primal Growth":
            return "20% increased Area of Effect if you've Killed Recently 10% increased Area of Effect for Attacks"
            break;

        case "Stormcharged":
            return "40% increased Elemental Damage if you've dealt a Critical Hit Recently 20% increased Critical Hit Chance"
            break;

        case "Breaking Point":
            return "10% increased Duration of Elemental Ailments on Enemies 30% increased Magnitude of Non-Damaging Ailments you inflict"
            break;

        case "Beef":
            return "+25 to Strength"
            break;

        case "Spellblade":
            return "32% increased Spell Damage while wielding a Melee Weapon +10 to Dexterity"
            break;

        case "Turn the Clock Back":
            return "20% reduced Projectile Speed for Spell Skills"
            break;

        case "Sigil of Fire":
            return "30% increased Damage with Hits against Ignited Enemies"
            break;

        case "Electrotherapy":
            return "5% increased Skill Speed 30% increased Electrocute Buildup"
            break;

        case "Alternating Current":
            return "25% increased Mana Regeneration Rate if you have Shocked an Enemy Recently 20% increased Magnitude of Shock you inflict"
            break;

        case "Frenetic":
            return "5% chance that if you would gain Frenzy Charges , you instead gain up to your maximum number of Frenzy Charges +1 to Maximum Frenzy Charges"
            break;

        case "Guts":
            return "Recover 3% of Life for each Endurance Charge consumed +1 to Maximum Endurance Charges"
            break;

        case "Immortal Thirst":
            return "15% increased maximum Energy Shield 25% increased amount of Mana Leeched"
            break;

        case "Thrill of Battle":
            return "20% increased Attack Speed while Surrounded"
            break;

        case "Thin Ice":
            return "20% increased Freeze Buildup 50% increased Damage with Hits against Frozen Enemies"
            break;

        case "Leather Bound Gauntlets":
            return "+1 to Evasion Rating per 1 Armour on Equipped Gloves"
            break;

        case "Echoing Frost":
            return "30% increased Elemental Damage if you've Chilled an Enemy Recently"
            break;

        case "Ball and Chain":
            return "15% increased Damage with Flails 6% increased Attack Speed with Flails"
            break;

        case "Resourceful Ally":
            return "Minions deal 25% increased Damage"
            break;

        case "Spirit Bonds":
            return "Link Skills can target Damageable Minions"
            break;

        case "Heavy Blade":
            return "25% increased Damage with Swords"
            break;

        case "Crushing Verdict":
            return "5% reduced Attack Speed 30% increased Stun Buildup 50% increased Attack Damage"
            break;

        case "Cooked":
            return "50% increased Critical Damage Bonus during any Flask Effect"
            break;

        case "Melding":
            return "40% increased maximum Energy Shield 10% reduced maximum Mana"
            break;

        case "Distracting Presence":
            return "10% increased Cooldown Recovery Rate Enemies in your Presence have 10% reduced Cooldown Recovery Rate"
            break;

        case "Short Shot":
            return "15% reduced Projectile Speed 20% increased Projectile Damage"
            break;

        case "Spiral into Mania":
            return "10% increased Cast Speed +7% to Chaos Resistance"
            break;

        case "Perforation":
            return "20% chance for Bleeding to be Aggravated when Inflicted against Enemies on Jagged Ground 40% increased Jagged Ground Duration"
            break;

        case "Aspiring Genius":
            return "20% increased Mana Regeneration Rate 10% chance to Gain Arcane Surge when you deal a Critical Hit"
            break;

        case "Careful Assassin":
            return "20% reduced Critical Damage Bonus 50% increased Critical Hit Chance"
            break;

        case "Morning Star":
            return "30% increased Critical Hit Chance with Flails 20% increased Critical Damage Bonus with Flails"
            break;

        case "Hindered Capabilities":
            return "30% increased Damage with Hits against Hindered Enemies Debuffs you inflict have 10% increased Slow Magnitude"
            break;

        case "Authority":
            return "20% increased Area of Effect for Attacks 10% increased Cooldown Recovery Rate"
            break;

        case "Desensitisation":
            return "25% increased Critical Damage Bonus Hits against you have 25% reduced Critical Damage Bonus"
            break;

        case "Shimmering":
            return "20% increased Energy Shield Recovery Rate if you haven't been Hit Recently 3% increased Movement Speed while you have Energy Shield"
            break;

        case "Madness in the Bones":
            return "Gain 6% of Physical Damage as extra Chaos Damage"
            break;

        case "Ancestral Reach":
            return "25% increased Totem Placement speed 50% increased Totem Placement range"
            break;

        case "Ancestral Alacrity":
            return "30% increased Totem Placement speed 8% increased Attack and Cast Speed if you've summoned a Totem Recently"
            break;

        case "For the Jugular":
            return "30% increased Critical Damage Bonus +10 to Intelligence"
            break;

        case "Subterfuge Mask":
            return "+2 to Evasion Rating per 1 Maximum Energy Shield on Equipped Helmet"
            break;

        case "Refocus":
            return "30% increased Energy Shield Recharge Rate 20% increased Mana Regeneration Rate"
            break;

        case "Slow Burn":
            return "20% increased Ignite Duration on Enemies 20% increased Magnitude of Ignite you inflict"
            break;

        case "Apocalypse":
            return "40% reduced Damage +6% to Critical Hit Chance of Herald Skills"
            break;

        case "Stylebender":
            return "Break 30% increased Armour on enemies affected by Ailments +10 to Strength 25% increased Physical Damage"
            break;

        case "Natural Immunity":
            return "+ 4 to Ailment Threshold per Dexterity"
            break;

        case "Electrocution":
            return "Enemies you Electrocute have 20% increased Damage taken"
            break;

        case "Mindful Awareness":
            return "24% increased Evasion Rating 24% increased maximum Energy Shield"
            break;

        case "The Power Within":
            return "20% increased Critical Damage Bonus if you've gained a Power Charge Recently +1 to Maximum Power Charges"
            break;

        case "Lasting Trauma":
            return "5% reduced Attack Speed 30% increased Magnitude of Ailments you inflict 20% increased Duration of Damaging Ailments on Enemies"
            break;

        case "Cruel Methods":
            return "Break 40% increased Armour 25% increased Physical Damage"
            break;

        case "Moment of Truth":
            return "25% increased Critical Damage Bonus if you've dealt a Non-Critical Hit Recently 20% increased Critical Hit Chance"
            break;

        case "Preservation":
            return "25% increased Skill Effect Duration"
            break;

        case "Hefty Unit":
            return "+ 3 to Stun Threshold per Strength"
            break;

        case "Echoing Flames":
            return "Mastery: Bestiary 30% increased Elemental Damage if you've Ignited an Enemy Recently"
            break;

        case "Sigil of Ice":
            return "30% increased Damage with Hits against Chilled Enemies"
            break;

        case "Overheating Blow":
            return "Hits that Heavy Stun inflict Fire Exposure"
            break;

        case "Branching Bolts":
            return "60% chance for Lightning Skills to Chain an additional time"
            break;

        case "Convalescence":
            return "15% reduced Energy Shield Recharge Rate 40% faster start of Energy Shield Recharge"
            break;

        case "Emboldened Avatar":
            return "25% increased chance to Ignite 25% increased Freeze Buildup 25% increased chance to Shock 25% increased Electrocute Buildup"
            break;

        case "Escape Velocity":
            return "3% increased Movement Speed 30% increased Evasion Rating"
            break;

        case "Living Death":
            return "Minions have +22% to all Elemental Resistances Minions have +3% to all Maximum Elemental Resistances"
            break;

        case "Sigil of Lightning":
            return "30% increased Damage with Hits against Shocked Enemies"
            break;

        case "Grit":
            return "5% chance that if you would gain Endurance Charges , you instead gain up to maximum Endurance Charges +1 to Maximum Endurance Charges"
            break;

        case "Lucidity":
            return "8% of Damage is taken from Mana before Life +15 to Intelligence"
            break;

        case "Deadly Force":
            return "30% increased Damage if you've dealt a Critical Hit in the past 8 seconds 12% increased Critical Hit Chance"
            break;

        case "Impair":
            return "25% increased Damage with One Handed Weapons Attacks have 10% chance to Maim on Hit"
            break;

        case "Lust for Sacrifice":
            return "40% increased Minion Damage while you have at least two different active Offerings"
            break;

        case "Bolstering Yell":
            return "Empowered Attacks deal 30% increased Damage Warcry Skills have 30% increased Area of Effect"
            break;

        case "Feel the Earth":
            return "25% reduced Shock duration on you 40% increased Elemental Ailment Threshold"
            break;

        case "Admonisher":
            return "25% increased Warcry Speed 25% increased Warcry Cooldown Recovery Rate"
            break;

        case "Echoing Thunder":
            return "30% increased Elemental Damage if you've Shocked an Enemy Recently"
            break;

        case "Vengeful Fury":
            return "Gain 5 Rage when Hit by an Enemy Every Rage also grants 1% increased Armour"
            break;

        case "Bravado":
            return "Empowered Attacks have 50% increased Stun Buildup 100% increased Stun Threshold during Empowered Attacks"
            break;

        case "Prolonged Assault":
            return "16% increased Attack Damage 16% increased Skill Effect Duration Buffs on you expire 10% slower"
            break;

        case "Essence of the Mountain":
            return "Gain 5% of Damage as Extra Cold Damage 20% increased Freeze Buildup"
            break;

        case "Coated Knife":
            return "Critical Hits with Daggers have a 25% chance to Poison the Enemy"
            break;

        case "Cull the Hordes":
            return "25% increased Culling Strike Threshold"
            break;

        case "Forthcoming":
            return "16% reduced Skill Effect Duration 10% increased Cooldown Recovery Rate"
            break;

        case "Quick Recovery":
            return "40% increased Stun Recovery Regenerate 5% of Life over 1 second when Stunned"
            break;

        case "Silent Shiv":
            return "5% increased Attack Speed with Daggers 15% increased Critical Hit Chance with Daggers"
            break;

        case "Ruin":
            return "Spell Skills have 10% reduced Area of Effect 35% increased Spell Area Damage"
            break;

        case "Aggravation":
            return "10% chance to Aggravate Bleeding on targets you Hit with Attacks"
            break;

        case "Path of Winter":
            return "18% increased Cold Damage 30% increased Freeze Buildup Witch: Minions deal 15% increased Damage Witch: Minions have 3% increased Attack and Cast Speed"
            break;

        case "Spiral into Depression":
            return "3% increased Movement Speed 25% increased Armour 25% increased maximum Energy Shield"
            break;

        case "Bolstering Presence":
            return "20% increased Effect of Auras from your Skills"
            break;

        case "Crystalline Flesh":
            return "Minions have +20% to all Elemental Resistances Minions have +5% to all Maximum Elemental Resistances"
            break;

        case "Fan the Flames":
            return "25% reduced Ignite Duration on you 40% increased Elemental Ailment Threshold"
            break;

        case "Vile Wounds":
            return "33% increased Damage with Hits against Enemies affected by Elemental Ailments"
            break;

        case "Unsight":
            return "Enemies near Enemies you Mark are Blinded Enemies you Mark cannot deal Critical Hits"
            break;

        case "Holy Protector":
            return "Minions have 25% increased maximum Life"
            break;

        case "Marked Agility":
            return "30% reduced Mana Cost of Mark Skills 4% increased Movement Speed if you've cast a Mark Spell Recently"
            break;

        case "Necrotic Touch":
            return "Minions have 40% increased Critical Hit Chance"
            break;

        case "Chilled to the Bone":
            return "20% increased Chill Duration on Enemies 30% increased Magnitude of Chill you inflict"
            break;

        case "Warm the Heart":
            return "25% reduced Freeze Duration on you 60% increased Freeze Threshold"
            break;

        case "Retaliation":
            return "75% increased Thorns damage if you've Blocked Recently"
            break;

        case "Shattered Crystal":
            return "60% reduced Ice Crystal Life"
            break;

        case "Bloodletting":
            return "10% chance to inflict Bleeding on Hit 15% increased Magnitude of Bleeding you inflict"
            break;

        case "Made to Last":
            return "15% of Physical Damage prevented Recouped as Life"
            break;

        case "Intense Flames":
            return "35% increased Damage with Hits against Burning Enemies"
            break;

        case "Flurry":
            return "20% increased Area of Effect while Unarmed 25% reduced Damage with Unarmed Attacks 20% increased Unarmed Attack Speed"
            break;

        case "Instant Reload":
            return "40% increased Crossbow Reload Speed"
            break;

        case "Path of Flame":
            return "18% increased Fire Damage 30% increased chance to Ignite Witch: 15% increased Critical Hit Chance for Spells Witch: 18% increased Physical Damage"
            break;

        case "Crystal Elixir":
            return "40% increased Elemental Damage with Attack Skills during any Flask Effect"
            break;

        case "Deflection":
            return "30% increased Block chance You take 10% of damage from Blocked Hits"
            break;

        case "Ancestral Unity":
            return "Totems have 4% increased Attack Speed per Summoned Totem"
            break;

        case "Spectral Ward":
            return "+1 to Maximum Energy Shield per 12 Evasion Rating on Equipped Body Armour"
            break;

        case "Warding Fetish":
            return "30% increased Damage per Curse on you 30% reduced effect of Curses on you 60% increased Energy Shield from Equipped Focus"
            break;

        case "Immortal Infamy":
            return "10% increased Energy Shield Recharge Rate Recover 2% of Life on Kill +10 to Intelligence"
            break;

        case "Savagery":
            return "50% increased Evasion Rating if you've consumed a Frenzy Charge Recently +1 to Maximum Frenzy Charges"
            break;

        case "Tides of Change":
            return "25% increased Skill Effect Duration"
            break;

        case "Feral Force":
            return "25% increased Attack Damage"
            break;

        case "Finesse":
            return "10% increased Accuracy Rating Gain Accuracy Rating equal to your Intelligence"
            break;

        case "Dreamcatcher":
            return "25% increased Spell Damage while on Full Energy Shield 75% increased Energy Shield from Equipped Focus"
            break;

        case "Greatest Defence":
            return "2% increased Attack Damage per 75 Armour or Evasion Rating on Shield"
            break;

        case "Bleeding Out":
            return "+250 to Accuracy against Bleeding Enemies Bleeding you inflict deals Damage 10% faster"
            break;

        case "Ignore Pain":
            return "Gain 3 Rage when Hit by an Enemy Every Rage also grants 2% increased Stun Threshold"
            break;

        case "Equilibrium":
            return "30% increased Attack Damage if you've Cast a Spell Recently 10% increased Cast Speed if you've Attacked Recently"
            break;

        case "Swift Claw":
            return "25% increased Attack Damage"
            break;

        case "Spiked Shield":
            return "50% increased Defences from Equipped Shield 1% increased Attack Damage per 75 Armour or Evasion Rating on Shield"
            break;

        case "Carved Earth":
            return "20% increased Totem Damage 6% increased Attack and Cast Speed if you've summoned a Totem Recently"
            break;

        case "Pure Power":
            return "2% increased Lightning Damage per 10 Intelligence"
            break;

        case "Power Conduction":
            return "25% increased Shock Duration 25% increased Magnitude of Shock you inflict"
            break;

        case "Perfect Opportunity":
            return "30% increased Stun Buildup Damage with Hits is Lucky against Heavy Stunned Enemies"
            break;

        case "Fulmination":
            return "40% increased chance to Ignite 40% increased Damage with Hits against Ignited Enemies"
            break;

        case "Leeching Toxins":
            return "30% increased Magnitude of Poison you inflict Recover 2% of Life on Killing a Poisoned Enemy"
            break;

        case "Storm Swell":
            return "Damage Penetrates 15% Cold Resistance Damage Penetrates 8% Lightning Resistance"
            break;

        case "Entropic Incarnation":
            return "Minions have +13% to Chaos Resistance Minions gain 8% of Physical Damage as Chaos Damage"
            break;

        case "Illuminated Crown":
            return "20% increased Light Radius 70% increased Energy Shield from Equipped Helmet"
            break;

        case "Breath of Ice":
            return "Damage Penetrates 15% Cold Resistance +10 to Intelligence"
            break;

        case "Watchtowers":
            return "Attack Skills have +1 to maximum number of Summoned Totems Skills that would Summon a Totem have 20% chance to Summon two Totems instead"
            break;

        case "Falcon Technique":
            return "1% increased Attack Speed per 15 Dexterity"
            break;

        case "Ancestral Conduits":
            return "12% increased Attack and Cast Speed if you've summoned a Totem Recently"
            break;

        case "Master of Hexes":
            return "25% reduced Curse Duration 18% increased Effect of your Curses"
            break;

        case "Ancestral Artifice":
            return "Attack Skills have +1 to maximum number of Summoned Totems 20% increased Totem Placement range"
            break;

        case "Lust for Power":
            return "5% chance that if you would gain Power Charges , you instead gain up to your maximum number of Power Charges +1 to Maximum Power Charges"
            break;

        case "Spell Haste":
            return "15% increased Evasion Rating 8% increased Cast Speed"
            break;

        case "Pile On":
            return "60% increased Damage against Enemies with Fully Broken Armour"
            break;

        case "Asceticism":
            return "Stun Threshold is based on 30% of your Energy Shield instead of Life"
            break;

        case "Skullcrusher":
            return "20% more Damage against Heavy Stunned Enemies with Maces"
            break;

        case "Perpetual Freeze":
            return "15% increased Freeze Buildup 15% increased Chill and Freeze Duration on Enemies"
            break;

        case "Wither Away":
            return "Unwithered enemies are Withered for 8 seconds when they enter your Presence 20% increased Effect of Withered"
            break;

        case "Dynamism":
            return "40% increased Damage if you've Triggered a Skill Recently Meta Skills gain 15% increased Energy"
            break;

        case "Refills":
            return "Life Flasks gain 0.15 charges per Second"
            break;

        case "Crushing Judgement":
            return "25% increased Armour Break Duration 25% increased Attack Area Damage"
            break;

        case "Shredding Force":
            return "15% increased Critical Hit Chance for Spells 15% increased Critical Spell Damage Bonus 15% increased Magnitude of Damaging Ailments you inflict with Critical Hits"
            break;

        case "Firestarter":
            return "40% increased chance to Ignite Enemies Ignited by you have -5% to Fire Resistance"
            break;

        case "Escalation":
            return "25% increased Warcry Speed 20% increased Damage for each different Warcry you've used Recently"
            break;

        case "Full Salvo":
            return "25% increased Damage with Crossbows for each type of Ammunition fired in the past 10 seconds"
            break;

        case "Pure Chaos":
            return "Gain 11% of Damage as Extra Chaos Damage"
            break;

        case "Endurance":
            return "+2 to Maximum Endurance Charges"
            break;

        case "Impending Doom":
            return "40% faster Curse Activation Your Curses have 20% increased Effect if 50% of Curse Duration expired"
            break;

        case "Adamant Recovery":
            return "Increases and Reductions to Armour also apply to Energy Shield Recharge Rate at 40% of their value"
            break;

        case "Backstabbing":
            return "25% increased Critical Damage Bonus with Daggers"
            break;

        case "Versatile Arms":
            return "6% increased Attack Speed with One Handed Melee Weapons 15% increased Accuracy Rating with One Handed Melee Weapons +10 to Strength and Dexterity"
            break;

        case "Sturdy Mind":
            return "+30 to maximum Mana 14% increased Mana Regeneration Rate"
            break;

        case "Burning Nature":
            return "25% increased Fire Damage 15% increased Ignite Duration on Enemies"
            break;

        case "Unforgiving":
            return "+4 to Maximum Rage Inherent Rage Loss starts 1 second later"
            break;

        case "Inner Faith":
            return "20% increased Evasion Rating 20% increased maximum Energy Shield 25% reduced effect of Curses on you"
            break;

        case "Spiral into Insanity":
            return "29% increased Chaos Damage 10% increased Global Defences"
            break;

        case "Overflowing Power":
            return "+2 to Maximum Power Charges"
            break;

        case "Storm Surge":
            return "Damage Penetrates 8% Cold Resistance Damage Penetrates 15% Lightning Resistance"
            break;

        case "Throatseeker":
            return "60% increased Critical Damage Bonus 20% reduced Critical Hit Chance"
            break;

        case "Crippling Toxins":
            return "25% chance for Attacks to Maim on Hit against Poisoned Enemies 25% increased Magnitude of Poison you inflict"
            break;

        case "Pinpoint Shot":
            return "Attacks gain increased Accuracy Rating equal to their Critical Hit Chance"
            break;

        case "Inescapable Cold":
            return "40% increased Freeze Buildup 20% increased Freeze Duration on Enemies"
            break;

        case "Energise":
            return "25% chance for Trigger skills to refund half of Energy Spent"
            break;

        case "Whirling Onslaught":
            return "50% chance to gain Onslaught on Killing Blow with Axes"
            break;

        case "Flash Storm":
            return "30% increased chance to Shock Damage Penetrates 15% Lightning Resistance"
            break;

        case "One with the River":
            return "30% increased Defences while wielding a Staff 30% increased Stun Buildup with Quarterstaves 30% increased Daze Buildup with Quarterstaves 30% increased Freeze Buildup with Quarterstaves"
            break;

        case "Reaching Strike":
            return "25% increased Melee Damage +2 to Melee Strike Range"
            break;

        case "Glaciation":
            return "Damage Penetrates 18% Cold Resistance 25% increased Cold Exposure Effect"
            break;

        case "Heavy Buffer":
            return "40% increased maximum Energy Shield 10% reduced maximum Life"
            break;

        case "Burnout":
            return "Ignites you inflict deal Damage 15% faster"
            break;

        case "Fast Acting Toxins":
            return "Damaging Ailments deal damage 12% faster"
            break;

        case "Invocated Efficiency":
            return "Recover 3% of Mana when you Invoke a Spell Triggered Spells deal 45% increased Spell Damage"
            break;

        case "Overload":
            return "Damage Penetrates 10% Lightning Resistance if on Low Mana Damage Penetrates 15% Lightning Resistance"
            break;

        case "Hold Focus":
            return "15% increased Effect of your Mark Skills"
            break;

        case "Incendiary":
            return "30% increased chance to Ignite 30% increased Damage with Hits against Burning Enemies"
            break;

        case "Marked for Sickness":
            return "Enemies you Mark take 10% increased Damage"
            break;

        case "Void":
            return "29% increased Chaos Damage Enemies you Curse have -3% to Chaos Resistance"
            break;

        case "Battle Fever":
            return "5% increased Attack and Cast Speed 25% increased Physical Damage"
            break;

        case "Revenge":
            return "12% increased Attack Speed if you've been Hit Recently"
            break;

        case "Savouring":
            return "20% chance for Flasks you use to not consume Charges"
            break;

        case "Lucky Rabbit Foot":
            return "30% increased Damage while you have an active Charm 6% increased Movement Speed while you have an active Charm"
            break;

        case "Snowpiercer":
            return "Damage Penetrates 15% Cold Resistance +10 to Intelligence"
            break;

        case "Lasting Incantations":
            return "20% increased Spell Damage 20% increased Skill Effect Duration"
            break;

        case "Stand and Deliver":
            return "Projectiles have 40% increased Critical Damage Bonus against Enemies within 2m Projectiles deal 25% increased Damage with Hits against Enemies within 2m"
            break;

        case "Pliable Flesh":
            return "6% of Damage taken Recouped as Life 25% increased speed of Recoup Effects"
            break;

        case "Near at Hand":
            return "16% reduced Skill Effect Duration 10% reduced Slowing Potency of Debuffs on You"
            break;

        case "Falcon Dive":
            return "1% increased Attack Speed per 250 Accuracy Rating"
            break;

        case "Deterioration":
            return "Damaging Ailments Cannot Be inflicted on you while you already have one 20% increased Magnitude of Damaging Ailments you inflict"
            break;

        case "Exposed to the Inferno":
            return "Damage Penetrates 15% Fire Resistance Fire Exposure you inflict lowers Total Fire Resistance by an extra 5%"
            break;

        case "Burning Strikes":
            return "Gain 12% of Physical Damage as Extra Fire Damage"
            break;

        case "Exploit":
            return "25% increased Damage with Hits against Enemies affected by Elemental Ailments 15% increased Duration of Ignite , Shock and Chill on Enemies"
            break;

        case "Breath of Lightning":
            return "Damage Penetrates 15% Lightning Resistance +10 to Dexterity"
            break;

        case "Stacking Toxins":
            return "Targets can be affected by +1 of your Poisons at the same time 20% reduced Magnitude of Poison you inflict"
            break;

        case "Psychic Fragmentation":
            return "12% chance for Spell Skills to fire 2 additional Projectiles"
            break;

        case "Split the Earth":
            return "10% chance to Aftershock for Slam Skills you use with Maces 10% chance to Aftershock for Strike Skills you use with Maces"
            break;

        case "Lingering Horror":
            return "23% increased Chaos Damage 15% increased Skill Effect Duration"
            break;

        case "Harness the Elements":
            return "15% increased Damage for each type of Elemental Ailment on Enemy"
            break;

        case "Soul Bloom":
            return "15% increased Energy Shield Recovery rate"
            break;

        case "Staggering Palm":
            return "20% increased Critical Damage Bonus 20% increased Knockback Distance 20% increased Physical Damage"
            break;

        case "Event Horizon":
            return "53% increased Chaos Damage Lose 3% of Life and Energy Shield when you use a Chaos Skill"
            break;

        case "Stormbreaker":
            return "15% increased Damage for each type of Elemental Ailment on Enemy"
            break;

        case "Maiming Strike":
            return "25% increased Attack Damage Attacks have 25% chance to Maim on Hit"
            break;

        case "Grip of Evil":
            return "Minions have 40% increased Critical Damage Bonus"
            break;

        case "Kite Runner":
            return "3% increased Movement Speed 15% increased Projectile Speed 15% increased Projectile Damage"
            break;

        case "Climate Change":
            return "20% increased Freeze Buildup Gain 25% of Cold Damage as Extra Fire Damage against Frozen Enemies"
            break;

        case "Unexpected Finesse":
            return "10% increased Attack Damage Gain Accuracy Rating equal to your Strength"
            break;

        case "Blood Tearing":
            return "15% increased Magnitude of Bleeding you inflict 25% increased Physical Damage"
            break;

        case "Struck Through":
            return "Attacks have +1% to Critical Hit Chance"
            break;

        case "Cut to the Bone":
            return "Break Armour on Critical Hit with Spells equal to 10% of Physical Damage dealt 10% chance to inflict Bleeding on Hit 20% increased Physical Damage"
            break;

        case "Lasting Toxins":
            return "10% increased Skill Effect Duration 50% increased Poison Duration"
            break;

        case "Exposed to the Storm":
            return "Damage Penetrates 18% Lightning Resistance 30% increased Critical Hit Chance against enemies with Lightning Exposure"
            break;

        case "Lingering Whispers":
            return "40% increased Curse Duration 10% increased Effect of your Curses"
            break;

        case "Pierce the Heart":
            return "Arrows Pierce an additional Target"
            break;

        case "Reusable Ammunition":
            return "15% chance for Crossbow Attacks to not consume a bolt"
            break;

        case "Tempered Mind":
            return "20% increased Critical Damage Bonus +10 to Strength 20% increased Physical Damage"
            break;

        case "Escalating Toxins":
            return "10% increased Poison Duration for each Poison you have inflicted Recently, up to a maximum of 100%"
            break;

        case "Final Barrage":
            return "20% increased Cast Speed when on Low Life 10% reduced Cast Speed when on Full Life"
            break;

        case "Fated End":
            return "30% increased Curse Duration Enemies Cursed by you have 50% reduced Life Regeneration Rate Enemies you Curse cannot Recharge Energy Shield"
            break;

        case "Giantslayer":
            return "25% increased Damage with Hits against Rare and Unique Enemies 20% increased Accuracy Rating against Rare or Unique Enemies 20% increased chance to inflict Ailments against Rare or Unique Enemies"
            break;

        case "Endless Circuit":
            return "25% chance on Consuming a Shock on an Enemy to reapply it"
            break;

        case "Breath of Fire":
            return "Damage Penetrates 15% Fire Resistance +10 to Strength"
            break;

        case "Fervour":
            return "+2 to Maximum Frenzy Charges"
            break;

        case "Cacophony":
            return "40% increased Damage with Warcries Warcry Skills have 25% increased Area of Effect"
            break;

        case "Dampening Shield":
            return "28% increased maximum Energy Shield Gain 12% of maximum Energy Shield as additional Stun Threshold"
            break;

        case "Death from Afar":
            return "Projectiles have 25% increased Critical Hit Chance against Enemies further than 6m Projectiles deal 25% increased Damage with Hits against Enemies further than 6m"
            break;

        case "Martial Artistry":
            return "25% increased Accuracy Rating with Quarterstaves 25% increased Critical Damage Bonus with Quarterstaves +25 to Dexterity"
            break;

        case "Presence Present":
            return "Allies in your Presence have +100 to Accuracy Rating 35% increased Attack Damage while you have an Ally in your Presence"
            break;

        case "Exploit the Elements":
            return "24% increased Damage with Hits against Enemies affected by Elemental Ailments 30% increased chance to inflict Ailments against Rare or Unique Enemies"
            break;

        case "Fleshcrafting":
            return "Minions gain 15% of their Maximum Life as Extra Maximum Energy Shield"
            break;

        case "Casting Cascade":
            return "15% reduced Spell Damage 6% increased Cast Speed for each different Non-Instant Spell you've Cast Recently"
            break;

        case "Controlling Magic":
            return "25% increased Critical Hit Chance for Spells Hits have 25% reduced Critical Hit Chance against you"
            break;

        case "Smoke Inhalation":
            return "Damage Penetrates 15% Fire Resistance 15% increased Duration of Damaging Ailments on Enemies"
            break;

        case "Surging Currents":
            return "Damage Penetrates 15% Lightning Resistance +10 to Dexterity"
            break;

        case "Grenadier":
            return "Grenade Skills have + 1 Cooldown Use"
            break;

        case "Perfectly Placed Knife":
            return "30% increased Critical Hit Chance against Bleeding Enemies 20% chance to Aggravate Bleeding on targets you Critically Hit with Attacks"
            break;

        case "Exposed to the Cosmos":
            return "Damage Penetrates 15% Cold Resistance Cold Exposure you inflict lowers Total Cold Resistance by an extra 5%"
            break;

        case "Heartbreaking":
            return "35% increased Critical Damage Bonus +10 to Strength"
            break;

        case "Electric Amplification":
            return "Damage Penetrates 18% Lightning Resistance 25% increased Lightning Exposure Effect"
            break;

        case "Battle Trance":
            return "+8 to Maximum Rage"
            break;

        case "Offensive Stance":
            return "1% increased Damage per 1% Chance to Block"
            break;

        case "Supportive Ancestors":
            return "25% increased Damage while you have a Totem Totems have 2% increased Cast Speed per Summoned Totem Totems have 2% increased Attack Speed per Summoned Totem"
            break;

        case "Spaghettification":
            return "3% increased Movement Speed 29% increased Chaos Damage -13% to Chaos Resistance 23% reduced Light Radius 7% increased Attributes"
            break;

        case "Relentless Fallen":
            return "Minions have 20% increased Movement Speed Minions have 8% increased Attack and Cast Speed"
            break;

        case "Overzealous":
            return "16% increased Cast Speed 15% increased Mana Cost of Skills"
            break;

        case "Lightning Quick":
            return "14% increased Lightning Damage 8% increased Attack and Cast Speed with Lightning Skills"
            break;

        case "Glazed Flesh":
            return "3% of Damage Taken Recouped as Life, Mana and Energy Shield"
            break;

        case "Woodland Aspect":
            return "Charms applied to you have 25% increased Effect"
            break;

        case "Marked for Death":
            return "Culling Strike against Enemies you Mark"
            break;

        case "Forces of Nature":
            return "Attack Damage Penetrates 15% of Enemy Elemental Resistances"
            break;

        case "Raw Mana":
            return "12% increased maximum Mana 10% increased Mana Cost of Skills"
            break;

        case "Trick Shot":
            return "Projectiles have 15% chance to Chain an additional time from terrain"
            break;

        case "Total Incineration":
            return "25% increased Critical Damage Bonus against Burning Enemies 10% chance to refresh Ignite Duration on Critical Hit"
            break;

        case "Ingenuity":
            return "+25 to Intelligence"
            break;

        case "Drenched":
            return "40% increased chance to Shock Gain 5% of Lightning Damage as Extra Cold Damage"
            break;

        case "Low Tolerance":
            return "60% increased Effect of Poison you inflict on targets that are not Poisoned"
            break;

        case "General Electric":
            return "40% increased chance to Shock 5% increased Attack and Cast Speed with Lightning Skills"
            break;

        case "Overexposure":
            return "30% increased Cold Exposure Effect 30% increased Fire Exposure Effect 30% increased Lightning Exposure Effect"
            break;

        case "Voracious":
            return "20% of Leech is Instant"
            break;

        case "Left Hand of Darkness":
            return "Minions have 20% additional Physical Damage Reduction Minions have +23% to Chaos Resistance"
            break;

        case "Right Hand of Darkness":
            return "Minions have 20% increased Area of Effect Minions have 10% chance to inflict Withered on Hit"
            break;

        case "Effervescent":
            return "4% increased Cast Speed for each different Non-Instant Spell you've Cast Recently"
            break;

        case "Stars Aligned":
            return "Damage with Hits is Lucky against Enemies that are on Low Life"
            break;

        case "Volcanic Skin":
            return "Gain 8% of Damage as Extra Fire Damage +20% to Fire Resistance"
            break;

        case "Polymathy":
            return "10% increased Attributes"
            break;

        case "Power Shots":
            return "15% reduced Attack Speed with Crossbows 80% increased Critical Damage Bonus with Crossbows"
            break;

        case "Cluster Bombs":
            return "50% increased Grenade fuse duration Grenade Skills Fire an additional Projectile"
            break;

        case "One with the Storm":
            return "Quarterstaff Skills that consume Power Charges count as consuming an additional Power Charge"
            break;

        case "Coming Calamity":
            return "50% increased Cold Damage while affected by Herald of Ice 50% increased Fire Damage while affected by Herald of Ash 50% increased Lightning Damage while affected by Herald of Thunder"
            break;

        case "Touch the Arcane":
            return "40% increased effect of Arcane Surge on you"
            break;

        case "Repeating Explosives":
            return "Grenades have 15% chance to activate a second time"
            break;

        case "Calibration":
            return "30% increased maximum Energy Shield 4% increased maximum Mana"
            break;

        case "Sniper":
            return "Arrows gain Critical Hit Chance as they travel farther, up to 60% increased Critical Hit Chance"
            break;

        case "Urgent Call":
            return "Recover 2% of Life and Mana when you use a Warcry 24% increased Warcry Speed 18% increased Warcry Cooldown Recovery Rate"
            break;

        case "Endless Blizzard":
            return "+1 to Level of all Cold Skills"
            break;

        case "Sudden Infuriation":
            return "3% chance that if you would gain Rage on Hit , you instead gain up to your maximum Rage"
            break;

        case "Patient Barrier":
            return "60% increased maximum Energy Shield 20% slower start of Energy Shield Recharge"
            break;

        case "Feathered Fletching":
            return "Increases and Reductions to Projectile Speed also apply to Damage with Bows"
            break;

        case "Fast Metabolism":
            return "Life Leech effects are not removed when Unreserved Life is Filled"
            break;

        case "Eldritch Will":
            return "3% increased maximum Life, Mana and Energy Shield Gain 20% of maximum Energy Shield as additional Stun Threshold"
            break;

        case "Goring":
            return "5% reduced maximum Life 30% increased amount of Life Leeched 40% increased Physical Damage"
            break;

        case "Lord of Horrors":
            return "Minions have 12% reduced Reservation"
            break;

        case "Spike Pit":
            return "Enemies in Jagged Ground you create take 10% increased Damage"
            break;

        case "Building Toxins":
            return "25% reduced Poison Duration Targets can be affected by +1 of your Poisons at the same time"
            break;

        case "Unimpeded":
            return "24% reduced Slowing Potency of Debuffs on You"
            break;

        case "Wide Barrier":
            return "30% increased Block chance 25% reduced Global Defences"
            break;

        case "Zone of Control":
            return "40% increased Area of Effect of Curses 8% increased Effect of your Curses Enemies you Curse are Hindered , with 15% reduced Movement Speed"
            break;

        case "Catalysis":
            return "20% increased Elemental Damage with Attacks 5% of Physical Damage from Hits taken as Damage of a Random Element"
            break;

        case "Enhanced Barrier":
            return "25% increased maximum Energy Shield +1% to all Maximum Elemental Resistances"
            break;

        case "Cremation":
            return "Damage Penetrates 18% Fire Resistance 25% increased Fire Exposure Effect"
            break;

        case "Vocal Empowerment":
            return "Warcries Empower an additional Attack"
            break;

        case "Dark Entries":
            return "+1 to Level of all Chaos Skills"
            break;

        case "Enraged Reaver":
            return "+ 10 to Maximum Rage while wielding an Axe"
            break;

        case "Wild Storm":
            return "15% more Maximum Lightning Damage"
            break;

        case "Lightning Rod":
            return "Lightning Damage with Non-Critical Hits is Lucky"
            break;

        case "Prism Guard":
            return "+1% to all Maximum Elemental Resistances +5% to all Elemental Resistances"
            break;

        case "Unnatural Resilience":
            return "2% to Maximum Fire Resistance for each 40% Uncapped Fire Resistance"
            break;

    }}
