// ==UserScript==
// @name         Poe2TradeAddons
// @version      2025-02-15
// @author       iPro
// @match        https://www.pathofexile.com/trade2/*
// @description none
// @icon        https://www.google.com/s2/favicons?sz=64&domain=pathofexile2.com
// @grant    none
// ==/UserScript==

setInterval(()=>{
    var enchantMod = document.getElementsByClassName("enchantMod");
    for(let i=0;i<enchantMod.length;i++){
        if(enchantMod[i].childNodes[1].childNodes.length!==2 && enchantMod[i].parentElement.parentElement.childNodes[1].innerText=='Megalomaniac\nDiamond'){
            let text = enchantMod[i].childNodes[1].textContent
            var nameEnchant=text.replace("Allocates ","")
            var all = `<div style="color:green;">${switchAllocates(nameEnchant)}</div>`;
            enchantMod[i].childNodes[1].innerHTML += all;
        }
    }
    var searchallbutton = document.getElementsByClassName("searchBy");
    for(let i=0;i<searchallbutton.length;i++){
        let btn =searchallbutton[i];
        if(btn.style.left!=="50px"){
            btn.style.left="50px";
        }
    }
    var copyallbutton= document.getElementsByClassName("copy hidden");
    for(let i=0;i<copyallbutton.length;i++){
        let btn =copyallbutton[i];
        btn.onclick=(e)=>{
            let text = e.target.parentNode.parentNode.childNodes[2].childNodes[0].innerText.split("\n");

            console.log(text);
            navigator.clipboard.writeText(text);
            document.querySelector("#trade > div:nth-child(1) > div.toast-container.toast-bottom-center").innerHTML=`<div class="toast toast-success" style="display: block;">\x3C!----> <div class="toast-title"></div> <div class="toast-message">Item text copied.</div></div>`
            setTimeout(()=>{
                document.querySelector("#trade > div:nth-child(1) > div.toast-container.toast-bottom-center").innerHTML=``
            },1000)
        }
    }
},500)

//Data from https://poe2db.tw/us/Distilled_Emotions#DistilledEmotionsPassives
function switchAllocates(Allocates){
    switch(Allocates){
    case "Beef":
    return "+25 to Strength";
    break;
    case "Proficiency":
    return "+25 to Dexterity";
    break;
    case "Ingenuity":
    return "+25 to Intelligence";
    break;
    case "Polymathy":
    return "10% increased Attributes";
    break;
    case "Jack of all Trades":
    return "2% increased Damage per 5 of your lowest Attribute";
    break;
    case "One with the River":
    return "30% increased Defences while wielding a Staff";
    break;
    case "Whirling Assault":
    return "8% increased Attack Speed with Quarterstaves";
    break;
    case "One with the Storm":
    return "Quarterstaff Skills that consume Power Charges count as consuming an additional Power Charge";
    break;
    case "Martial Artistry":
    return "25% increased Accuracy Rating with Quarterstaves";
    break;
    case "Silent Shiv":
    return "5% increased Attack Speed with Daggers";
    break;
    case "Coated Knife":
    return "Critical Hits with Daggers have a 25% chance to Poison the Enemy";
    break;
    case "Backstabbing":
    return "25% increased Critical Damage Bonus with Daggers";
    break;
    case "Clever Construction":
    return "25% increased Critical Hit Chance with Traps";
    break;
    case "Devestating Devices":
    return "25% increased Trap Damage";
    break;
    case "Destructive Apparatus":
    return "25% increased Trap Damage";
    break;
    case "Feathered Fletching":
    return "Increases and Reductions to Projectile Speed also apply to Damage with Bows";
    break;
    case "Sniper":
    return "Arrows gain Critical Hit Chance as they travel farther, up to 60% increased Critical Hit Chance";
    break;
    case "Pierce the Heart":
    return "Arrows Pierce an additional Target";
    break;
    case "Javelin":
    return "25% increased Damage with Spears";
    break;
    case "Swift Skewering":
    return "8% increased Attack Speed with Spears";
    break;
    case "Precise Point":
    return "25% increased Damage with Spears";
    break;
    case "Roll and Strike":
    return "25% increased Damage with Spears";
    break;
    case "Deflection":
    return "30% increased Block chance";
    break;
    case "Reprisal":
    return "Attack Skills deal 25% increased Damage while holding a Shield";
    break;
    case "Heavy Blade":
    return "25% increased Damage with Swords";
    break;
    case "Ripping Blade":
    return "25% increased Damage with Swords";
    break;
    case "Stance Breaker":
    return "50% reduced Enemy Chance to Block Sword Attacks";
    break;
    case "Lay Siege":
    return "1% increased Damage per 1% Chance to Block";
    break;
    case "Greatest Defence":
    return "2% increased Attack Damage per 75 Armour or Evasion Rating on Shield";
    break;
    case "Wide Barrier":
    return "30% increased Block chance";
    break;
    case "Core of the Guardian":
    return "100% increased Defences from Equipped Shield";
    break;
    case "Offensive Stance":
    return "1% increased Damage per 1% Chance to Block";
    break;
    case "Vigilance":
    return "12% increased Block chance";
    break;
    case "Defensive Reflexes":
    return "12% increased Block chance";
    break;
    case "Power Shots":
    return "15% reduced Attack Speed with Crossbows";
    break;
    case "Repeating Explosives":
    return "Grenades have 15% chance to activate a second time";
    break;
    case "Instant Reload":
    return "40% increased Crossbow Reload Speed";
    break;
    case "Reusable Ammunition":
    return "15% chance for Crossbow Attacks to not consume a bolt";
    break;
    case "Full Salvo":
    return "25% increased Damage with Crossbows for each type of Ammunition fired in the past 10 seconds";
    break;
    case "Whirling Onslaught":
    return "50% chance to gain Onslaught on Killing Blow with Axes";
    break;
    case "Enraged Reaver":
    return "+10 to Maximum Rage while wielding an Axe";
    break;
    case "Skullcrusher":
    return "20% more Damage against Heavy Stunned Enemies with Maces";
    break;
    case "Split the Earth":
    return "10% chance to Aftershock for Slam Skills you use with Maces";
    break;
    case "Ball and Chain":
    return "15% increased Damage with Flails";
    break;
    case "Morning Star":
    return "30% increased Critical Hit Chance with Flails";
    break;
    case "Rattling Ball":
    return "25% increased Damage with Flails";
    break;
    case "Spiked Whip":
    return "25% increased Damage with Flails";
    break;
    case "Warding Fetish":
    return "30% increased Damage per Curse on you";
    break;
    case "Dreamcatcher":
    return "25% increased Spell Damage while on Full Energy Shield";
    break;
    case "Versatile Arms":
    return "6% increased Attack Speed with One Handed Melee Weapons";
    break;
    case "Push the Advantage":
    return "40% increased Critical Damage Bonus with One Handed Melee Weapons";
    break;
    case "Impair":
    return "25% increased Damage with One Handed Weapons";
    break;
    case "Coated Arms":
    return "25% increased Damage with One Handed Weapons";
    break;
    case "Singular Purpose":
    return "5% reduced Attack Speed";
    break;
    case "Heavy Contact":
    return "Hits that Heavy Stun Enemies have Culling Strike";
    break;
    case "Colossal Weapon":
    return "15% increased Area of Effect for Attacks";
    break;
    case "Curved Weapon":
    return "15% increased Accuracy Rating";
    break;
    case "Shockwaves":
    return "30% increased Area of Effect if you've Stunned an Enemy with a Two Handed Melee Weapon Recently";
    break;
    case "Overwhelm":
    return "5% reduced Attack Speed";
    break;
    case "Cross Strike":
    return "20% increased Accuracy Rating while Dual Wielding";
    break;
    case "Blade Flurry":
    return "6% increased Attack Speed while Dual Wielding";
    break;
    case "Polished Iron":
    return "25% increased Armour";
    break;
    case "Heatproofing":
    return "25% of Armour also applies to Fire Damage taken from Hits";
    break;
    case "Projectile Bulwark":
    return "30% increased Armour";
    break;
    case "Blade Catcher":
    return "Defend with 200% of Armour against Critical Hits";
    break;
    case "Heavy Armour":
    return "100% of Strength Requirements from Boots, Gloves and Helmets also added to Armour";
    break;
    case "Made to Last":
    return "15% of Physical Damage prevented Recouped as Life";
    break;
    case "Sturdy Metal":
    return "80% increased Armour from Equipped Body Armour";
    break;
    case "Impenetrable Shell":
    return "Defend with 150% of Armour against Attacks from further than 6m";
    break;
    case "General's Bindings":
    return "Gain 8% of Evasion Rating as extra Armour";
    break;
    case "High Alert":
    return "50% increased Evasion Rating when on Full Life";
    break;
    case "Escape Strategy":
    return "100% increased Evasion Rating if you have been Hit Recently";
    break;
    case "Careful Consideration":
    return "30% reduced Evasion Rating if you have been Hit Recently";
    break;
    case "Freedom of Movement":
    return "30% increased Evasion Rating";
    break;
    case "Escape Velocity":
    return "3% increased Movement Speed";
    break;
    case "Enhanced Reflexes":
    return "30% increased Evasion Rating";
    break;
    case "Beastial Skin":
    return "100% increased Evasion Rating from Equipped Body Armour";
    break;
    case "Afterimage":
    return "8% more chance to Evade Melee Attacks";
    break;
    case "Leather Bound Gauntlets":
    return "+1 to Evasion Rating per 1 Armour on Equipped Gloves";
    break;
    case "Catlike Agility":
    return "25% increased Evasion Rating";
    break;
    case "Calibration":
    return "30% increased maximum Energy Shield";
    break;
    case "Patient Barrier":
    return "60% increased maximum Energy Shield";
    break;
    case "Insightfulness":
    return "18% increased maximum Energy Shield";
    break;
    case "Melding":
    return "40% increased maximum Energy Shield";
    break;
    case "Enhanced Barrier":
    return "25% increased maximum Energy Shield";
    break;
    case "Dampening Shield":
    return "28% increased maximum Energy Shield";
    break;
    case "Heavy Buffer":
    return "40% increased maximum Energy Shield";
    break;
    case "Illuminated Crown":
    return "20% increased Light Radius";
    break;
    case "Strong Chin":
    return "Gain Stun Threshold equal to the lowest of Evasion and Armour on your Helmet";
    break;
    case "Defiance":
    return "80% increased Armour and Evasion Rating when on Low Life";
    break;
    case "Backup Plan":
    return "40% increased Evasion Rating if you have been Hit Recently";
    break;
    case "Insulated Treads":
    return "Gain Ailment Threshold equal to the lowest of Evasion and Armour on your Boots";
    break;
    case "Feel no Pain":
    return "20% increased Armour and Evasion Rating";
    break;
    case "Spectral Ward":
    return "+1 to Maximum Energy Shield per 12 Evasion Rating on Equipped Body Armour";
    break;
    case "Inner Faith":
    return "20% increased Evasion Rating";
    break;
    case "Shadow Dancing":
    return "30% increased Evasion Rating if you have been Hit Recently";
    break;
    case "Immaterial":
    return "50% increased Evasion Rating if Energy Shield Recharge has started in the past 2 seconds";
    break;
    case "Shimmering":
    return "20% increased Energy Shield Recovery Rate if you haven't been Hit Recently";
    break;
    case "Subterfuge Mask":
    return "+2 to Evasion Rating per 1 Maximum Energy Shield on Equipped Helmet";
    break;
    case "Mindful Awareness":
    return "24% increased Evasion Rating";
    break;
    case "Ancient Aegis":
    return "60% increased Armour from Equipped Body Armour";
    break;
    case "Adamant Recovery":
    return "Increases and Reductions to Armour also apply to Energy ShieldRecharge Rate at 40% of their value";
    break;
    case "Reinforced Barrier":
    return "20% increased maximum Energy Shield";
    break;
    case "Spiral into Depression":
    return "3% increased Movement Speed";
    break;
    case "Unnatural Resilience":
    return "2% to Maximum Fire Resistance for each 40% Uncapped Fire Resistance";
    break;
    case "Prism Guard":
    return "+1% to all Maximum Elemental Resistances";
    break;
    case "Natural Immunity":
    return "+4 to Ailment Threshold per Dexterity";
    break;
    case "Fan the Flames":
    return "25% reduced Ignite Duration on you";
    break;
    case "Warm the Heart":
    return "25% reduced Freeze Duration on you";
    break;
    case "Feel the Earth":
    return "25% reduced Shock duration on you";
    break;
    case "Shedding Skin":
    return "40% increased Elemental Ailment Threshold";
    break;
    case "Mystic Stance":
    return "30% faster start of Energy Shield Recharge";
    break;
    case "Quick Response":
    return "20% faster start of Energy Shield Recharge";
    break;
    case "Rapid Recharge":
    return "25% increased Energy Shield Recharge Rate";
    break;
    case "Covering Ward":
    return "25% increased Energy Shield Recharge Rate";
    break;
    case "Essence Infusion":
    return "40% increased Energy Shield Recharge Rate";
    break;
    case "Refocus":
    return "30% increased Energy Shield Recharge Rate";
    break;
    case "Dependable Ward":
    return "25% increased Energy Shield Recharge Rate";
    break;
    case "Convalescence":
    return "15% reduced Energy Shield Recharge Rate";
    break;
    case "Arcane Mixtures":
    return "25% increased Energy Shield Recharge Rate";
    break;
    case "Unstoppable Barrier":
    return "10% increased Block chance";
    break;
    case "Hunker Down":
    return "Recover 20 Life when you Block";
    break;
    case "Towering Shield":
    return "50% increased Defences from Equipped Shield";
    break;
    case "Defender's Resolve":
    return "12% increased Block chance";
    break;
    case "Parrying Motion":
    return "12% increased Block chance";
    break;
    case "Spiked Shield":
    return "50% increased Defences from Equipped Shield";
    break;
    case "Shield Expertise":
    return "12% increased Block chance";
    break;
    case "Smooth Buckler":
    return "12% increased Block chance";
    break;
    case "Flashy Deflection":
    return "12% increased Block chance";
    break;
    case "Resolution":
    return "10% increased Global Defences";
    break;
    case "Quick Recovery":
    return "40% increased Stun Recovery";
    break;
    case "Titan's Determination":
    return "25% increased Stun Threshold";
    break;
    case "Unbreaking":
    return "30% increased Stun Threshold";
    break;
    case "Hefty Unit":
    return "+3 to Stun Threshold per Strength";
    break;
    case "Unbending":
    return "3% increased maximum Life";
    break;
    case "Austerity Measures":
    return "+5 to all Attributes";
    break;
    case "Asceticism":
    return "Stun Threshold is based on 30% of your Energy Shield instead of Life";
    break;
    case "Self Mortification":
    return "Gain 20% of maximum Energy Shield as additional Stun Threshold";
    break;
    case "Hallowed":
    return "20% increased Stun Recovery";
    break;
    case "Eldritch Will":
    return "3% increased maximum Life, Mana and Energy Shield";
    break;
    case "Briny Carapace":
    return "60% increased Stun Threshold for each time you've been Stunned Recently";
    break;
    case "Deft Recovery":
    return "30% increased Stun Recovery";
    break;
    case "Back in Action":
    return "80% increased Stun Recovery";
    break;
    case "Fireproof":
    return "+15% to Fire Resistance";
    break;
    case "Slippery Ice":
    return "25% reduced Effect of Chill on you";
    break;
    case "Icebreaker":
    return "Gain 100% of Maximum Energy Shield as additional Freeze Threshold";
    break;
    case "Electrocution":
    return "Enemies you Electrocute have 20% increased Damage taken";
    break;
    case "Coursing Energy":
    return "40% increased Electrocute Buildup";
    break;
    case "Mass Rejuvenation":
    return "Regenerate 0.5% of Life per second";
    break;
    case "Desperate Times":
    return "Regenerate 1.5% of Life per second while on Low Life";
    break;
    case "Resilient Soul":
    return "20% increased Life Regeneration rate";
    break;
    case "Thickened Arteries":
    return "5% reduced Movement Speed";
    break;
    case "Hard to Kill":
    return "40% increased Flask Life Recovery rate";
    break;
    case "Hale Heart":
    return "15% increased Life Recovery rate";
    break;
    case "Stand Ground":
    return "Regenerate 1% of Life per second while affected by any Damaging Ailment";
    break;
    case "Fortifying Blood":
    return "20% increased amount of Life Leeched";
    break;
    case "Voracious":
    return "20% of Leech is Instant";
    break;
    case "Bloodthirsty":
    return "20% increased amount of Life Leeched";
    break;
    case "Goring":
    return "5% reduced maximum Life";
    break;
    case "Savoured Blood":
    return "35% increased amount of Life Leeched";
    break;
    case "Fast Metabolism":
    return "Life Leech effects are not removed when Unreserved Life is Filled";
    break;
    case "Loose Flesh":
    return "15% of Elemental Damage taken Recouped as Life";
    break;
    case "Taut Flesh":
    return "15% of Physical Damage taken Recouped as Life";
    break;
    case "Heart Tissue":
    return "6% of Damage taken Recouped as Life";
    break;
    case "Infused Flesh":
    return "+20 to maximum Life";
    break;
    case "Pliable Flesh":
    return "6% of Damage taken Recouped as Life";
    break;
    case "Glazed Flesh":
    return "3% of Damage Taken Recouped as Life, Mana and Energy Shield";
    break;
    case "Immortal Infamy":
    return "10% increased Energy Shield Recharge Rate";
    break;
    case "Life from Death":
    return "Recover 3% of Life on Kill";
    break;
    case "Taste for Blood":
    return "Gain 20 Life per Enemy Killed";
    break;
    case "Refills":
    return "Life Flasks gain 0.15 charges per Second";
    break;
    case "Hale Traveller":
    return "20% increased Life Recovery from Flasks";
    break;
    case "Reinvigoration":
    return "Regenerate 1% of Life per Second if you've used a Life Flask in the past 10 seconds";
    break;
    case "Staunching":
    return "Life Flasks gain 0.1 charges per Second";
    break;
    case "Succour":
    return "30% increased Life Regeneration rate during Effect of any Life Flask";
    break;
    case "Heavy Drinker":
    return "30% increased Flask Effect Duration";
    break;
    case "Potent Concoctions":
    return "Flasks applied to you have 25% increased Effect";
    break;
    case "Efficient Alchemy":
    return "20% increased Flask and Charm Charges gained";
    break;
    case "Lasting Concoctions":
    return "25% increased Flask Effect Duration";
    break;
    case "Savouring":
    return "20% chance for Flasks you use to not consume Charges";
    break;
    case "Combat Alchemy":
    return "10% chance for Flasks you use to not consume Charges";
    break;
    case "Cautious Concoctions":
    return "15% increased Flask Effect Duration";
    break;
    case "Crashing Wave":
    return "36% increased Damage if you've dealt a Critical Hit in the past 8 seconds";
    break;
    case "Cruel Fate":
    return "20% increased Critical Damage Bonus";
    break;
    case "Leaping Ambush":
    return "100% increased Critical Hit Chance against Enemies on Full Life";
    break;
    case "Direct Approach":
    return "40% increased Critical Hit Chance against Enemies that are affectedby no Elemental Ailments";
    break;
    case "True Strike":
    return "+10 to Dexterity";
    break;
    case "For the Jugular":
    return "30% increased Critical Damage Bonus";
    break;
    case "Critical Exploit":
    return "25% increased Critical Hit Chance";
    break;
    case "Moment of Truth":
    return "25% increased Critical Damage Bonus if you've dealt a Non-Critical Hit Recently";
    break;
    case "Preemptive Strike":
    return "100% increased Critical Damage Bonus against Enemies that are on Full Life";
    break;
    case "Desensitisation":
    return "25% increased Critical Damage Bonus";
    break;
    case "Cooked":
    return "50% increased Critical Damage Bonus during any Flask Effect";
    break;
    case "Deadly Force":
    return "30% increased Damage if you've dealt a Critical Hit in the past 8 seconds";
    break;
    case "Sundering":
    return "25% increased Critical Damage Bonus for Attack Damage";
    break;
    case "Heartstopping":
    return "+10 to Intelligence";
    break;
    case "Heartbreaking":
    return "35% increased Critical Damage Bonus";
    break;
    case "Struck Through":
    return "Attacks have +1% to Critical Hit Chance";
    break;
    case "Overwhelming Strike":
    return "20% increased Critical Hit Chance for Attacks";
    break;
    case "Vulgar Methods":
    return "10% reduced maximum Mana";
    break;
    case "Barbaric Strength":
    return "45% increased Critical Damage Bonus";
    break;
    case "Tainted Strike":
    return "25% increased Critical Hit Chance for Attacks";
    break;
    case "Dispatch Foes":
    return "80% increased Critical Hit Chance if you haven't dealt a Critical Hit Recently";
    break;
    case "Careful Assassin":
    return "20% reduced Critical Damage Bonus";
    break;
    case "Throatseeker":
    return "60% increased Critical Damage Bonus";
    break;
    case "Blurred Motion":
    return "5% increased Attack Speed";
    break;
    case "Tenfold Attacks":
    return "4% increased Attack Speed";
    break;
    case "Stimulants":
    return "12% increased Attack Speed during any Flask Effect";
    break;
    case "Reaving":
    return "8% increased Attack Speed with One Handed Weapons";
    break;
    case "Mass Hysteria":
    return "Allies in your Presence have 6% increased Attack Speed";
    break;
    case "Falcon Technique":
    return "1% increased Attack Speed per 15 Dexterity";
    break;
    case "Sand in the Eyes":
    return "10% increased Attack Speed";
    break;
    case "Deep Trance":
    return "8% increased Attack Speed";
    break;
    case "Flow State":
    return "5% increased Skill Speed";
    break;
    case "Blinding Flash":
    return "20% increased Blind Effect";
    break;
    case "Blood Rush":
    return "6% increased Skill Speed";
    break;
    case "Final Barrage":
    return "20% increased Cast Speed when on Low Life";
    break;
    case "Casting Cascade":
    return "15% reduced Spell Damage";
    break;
    case "Effervescent":
    return "4% increased Cast Speed for each different Non-Instant Spell you've Cast Recently";
    break;
    case "Overzealous":
    return "16% increased Cast Speed";
    break;
    case "Spiral into Mania":
    return "10% increased Cast Speed";
    break;
    case "Spell Haste":
    return "15% increased Evasion Rating";
    break;
    case "Practiced Signs":
    return "6% increased Cast Speed";
    break;
    case "Erraticism":
    return "16% increased Cast Speed if you've dealt a Critical Hit Recently";
    break;
    case "Mental Alacrity":
    return "5% increased Cast Speed";
    break;
    case "Hulking Smash":
    return "30% increased Stun Buildup";
    break;
    case "Titanic":
    return "30% increased Stun Buildup";
    break;
    case "Cranial Impact":
    return "30% increased Stun Buildup";
    break;
    case "Perfect Opportunity":
    return "30% increased Stun Buildup";
    break;
    case "Shattering Blow":
    return "Break 50% of Armour on Heavy Stunning an Enemy";
    break;
    case "Flip the Script":
    return "Recover 20% of Life when you Heavy Stun a Rare or Unique Enemy";
    break;
    case "Ignore Pain":
    return "Gain 3 Rage when Hit by an Enemy";
    break;
    case "Battle Trance":
    return "+8 to Maximum Rage";
    break;
    case "Prolonged Fury":
    return "Inherent loss of Rage is 25% slower";
    break;
    case "Unforgiving":
    return "Inherent Rage Loss starts 1 second later";
    break;
    case "Vengeful Fury":
    return "Gain 5 Rage when Hit by an Enemy";
    break;
    case "Sudden Infuriation":
    return "3% chance that if you would gain Rage on Hit, you instead gain up to your maximum Rage";
    break;
    case "Deep Wounds":
    return "Attack Hits Aggravate any Bleeding on targets which is older than 4 seconds";
    break;
    case "Bloodletting":
    return "10% chance to inflict Bleeding on Hit";
    break;
    case "Perfectly Placed Knife":
    return "30% increased Critical Hit Chance against Bleeding Enemies";
    break;
    case "Aggravation":
    return "10% chance to Aggravate Bleeding on targets you Hit with Attacks";
    break;
    case "Bleeding Out":
    return "+250 to Accuracy against Bleeding Enemies";
    break;
    case "Immolation":
    return "25% increased Magnitude of Ignite you inflict";
    break;
    case "Slow Burn":
    return "20% increased Ignite Duration on Enemies";
    break;
    case "Firestarter":
    return "40% increased chance to Ignite";
    break;
    case "Burnout":
    return "Ignites you inflict deal Damage 15% faster";
    break;
    case "Inescapable Cold":
    return "40% increased Freeze Buildup";
    break;
    case "Shattering":
    return "25% increased Freeze Buildup";
    break;
    case "Chilled to the Bone":
    return "20% increased Chill Duration on Enemies";
    break;
    case "Perpetual Freeze":
    return "15% increased Freeze Buildup";
    break;
    case "Branching Bolts":
    return "60% chance for Lightning Skills to Chain an additional time";
    break;
    case "Frazzled":
    return "15% increased Mana Regeneration Rate";
    break;
    case "General Electric":
    return "40% increased chance to Shock";
    break;
    case "Drenched":
    return "40% increased chance to Shock";
    break;
    case "Rattled":
    return "+20 to maximum Mana";
    break;
    case "Harmonic Generator":
    return "25% increased Critical Hit Chance against Shocked Enemies";
    break;
    case "Escalating Toxins":
    return "10% increased Poison Duration for each Poison you have inflicted Recently, up to a maximum of 100%";
    break;
    case "Building Toxins":
    return "25% reduced Poison Duration";
    break;
    case "Crippling Toxins":
    return "25% chance for Attacks to Maim on Hit against Poisoned Enemies";
    break;
    case "Leeching Toxins":
    return "30% increased Magnitude of Poison you inflict";
    break;
    case "Lasting Toxins":
    return "10% increased Skill Effect Duration";
    break;
    case "Low Tolerance":
    return "60% increased Effect of Poison you inflict on targets that are not Poisoned";
    break;
    case "Stacking Toxins":
    return "Targets can be affected by +1 of your Poisons at the same time";
    break;
    case "Frenetic":
    return "5% chance that if you would gain Frenzy Charges, you instead gain up to your maximum number of Frenzy Charges";
    break;
    case "Savagery":
    return "50% increased Evasion Rating if you've consumed a Frenzy Charge Recently";
    break;
    case "Fervour":
    return "+2 to Maximum Frenzy Charges";
    break;
    case "Endurance":
    return "+2 to Maximum Endurance Charges";
    break;
    case "Guts":
    return "Recover 3% of Life for each Endurance Charge consumed";
    break;
    case "Grit":
    return "5% chance that if you would gain Endurance Charges, you instead gain up to maximum Endurance Charges";
    break;
    case "Lust for Power":
    return "5% chance that if you would gain Power Charges, you instead gain up toyour maximum number of Power Charges";
    break;
    case "Overflowing Power":
    return "+2 to Maximum Power Charges";
    break;
    case "The Power Within":
    return "20% increased Critical Damage Bonus if you've gained a Power Charge Recently";
    break;
    case "Cacophony":
    return "40% increased Damage with Warcries";
    break;
    case "Vocal Empowerment":
    return "Warcries Empower an additional Attack";
    break;
    case "Internal Bleeding":
    return "20% chance to Aggravate Bleeding on targets you Hit with Empowered Attacks";
    break;
    case "Bravado":
    return "Empowered Attacks have 50% increased Stun Buildup";
    break;
    case "Deafening Cries":
    return "25% increased Warcry Cooldown Recovery Rate";
    break;
    case "Guttural Roar":
    return "30% increased Warcry Speed";
    break;
    case "Admonisher":
    return "25% increased Warcry Speed";
    break;
    case "Bolstering Yell":
    return "Empowered Attacks deal 30% increased Damage";
    break;
    case "Urgent Call":
    return "Recover 2% of Life and Mana when you use a Warcry";
    break;
    case "Escalation":
    return "25% increased Warcry Speed";
    break;
    case "Impending Doom":
    return "40% faster Curse Activation";
    break;
    case "Zone of Control":
    return "40% increased Area of Effect of Curses";
    break;
    case "Master of Hexes":
    return "25% reduced Curse Duration";
    break;
    case "Fated End":
    return "30% increased Curse Duration";
    break;
    case "Lingering Whispers":
    return "40% increased Curse Duration";
    break;
    case "Supportive Ancestors":
    return "25% increased Damage while you have a Totem";
    break;
    case "Carved Earth":
    return "20% increased Totem Damage";
    break;
    case "Watchtowers":
    return "Attack Skills have +1 to maximum number of Summoned Totems";
    break;
    case "Ancestral Artifice":
    return "Attack Skills have +1 to maximum number of Summoned Totems";
    break;
    case "Ancestral Unity":
    return "Totems have 4% increased Attack Speed per Summoned Totem";
    break;
    case "Hardened Wood":
    return "Totems gain +20% to all Elemental Resistances";
    break;
    case "Spirit Bond":
    return "30% increased Totem Life";
    break;
    case "Ancestral Reach":
    return "25% increased Totem Placement speed";
    break;
    case "Ancestral Alacrity":
    return "30% increased Totem Placement speed";
    break;
    case "Ancestral Conduits":
    return "12% increased Attack and Cast Speed if you've summoned a Totem Recently";
    break;
    case "Ancestral Mending":
    return "Regenerate 1% of Life per second while you have a Totem";
    break;
    case "Deadly Swarm":
    return "Minions deal 15% increased Damage";
    break;
    case "Lord of Horrors":
    return "Minions have 12% reduced Reservation";
    break;
    case "Fear of Death":
    return "Minions have +150 to Accuracy Rating";
    break;
    case "Dead can Dance":
    return "Minions have 25% increased Evasion Rating";
    break;
    case "Relentless Fallen":
    return "Minions have 20% increased Movement Speed";
    break;
    case "Right Hand of Darkness":
    return "Minions have 20% increased Area of Effect";
    break;
    case "Grip of Evil":
    return "Minions have 40% increased Critical Damage Bonus";
    break;
    case "Necrotic Touch":
    return "Minions have 40% increased Critical Hit Chance";
    break;
    case "Restless Dead":
    return "Minions Revive 25% faster";
    break;
    case "Growing Swarm":
    return "Minions have 20% increased Area of Effect";
    break;
    case "Gravedigger":
    return "Minions Revive 15% faster";
    break;
    case "Necrotised Flesh":
    return "Minions have 40% increased maximum Life";
    break;
    case "Left Hand of Darkness":
    return "Minions have 20% additional Physical Damage Reduction";
    break;
    case "Crystalline Flesh":
    return "Minions have +20% to all Elemental Resistances";
    break;
    case "Fleshcrafting":
    return "Minions gain 15% of their Maximum Life as Extra Maximum Energy Shield";
    break;
    case "Vile Mending":
    return "Minions have 20% increased maximum Life";
    break;
    case "Regenerative Flesh":
    return "Minions Recoup 10% of Damage taken as Life";
    break;
    case "Living Death":
    return "Minions have +22% to all Elemental Resistances";
    break;
    case "Entropic Incarnation":
    return "Minions have +13% to Chaos Resistance";
    break;
    case "Anticipation":
    return "Skills Supported by Unleash have 25% increased Seal gain frequency";
    break;
    case "Lasting Incantations":
    return "20% increased Spell Damage";
    break;
    case "Potent Incantation":
    return "30% increased Spell Damage";
    break;
    case "Spellblade":
    return "32% increased Spell Damage while wielding a Melee Weapon";
    break;
    case "Rapid Strike":
    return "+30 to Accuracy Rating";
    break;
    case "Serrated Edges":
    return "10% increased Critical Hit Chance for Attacks";
    break;
    case "Personal Touch":
    return "20% increased Melee Damage";
    break;
    case "In Your Face":
    return "40% increased Melee Damage with Hits at Close Range";
    break;
    case "Viciousness":
    return "8% increased Melee Attack Speed";
    break;
    case "Unerring Impact":
    return "10% increased Accuracy Rating with One Handed Melee Weapons";
    break;
    case "Heavy Weaponry":
    return "15% increased Melee Damage";
    break;
    case "Reaching Strike":
    return "25% increased Melee Damage";
    break;
    case "Deadly Flourish":
    return "20% increased Melee Critical Hit Chance";
    break;
    case "Initiative":
    return "30% increased Melee Damage when on Full Life";
    break;
    case "Breaking Blows":
    return "30% increased Stun Buildup";
    break;
    case "Honourless":
    return "25% increased Armour if you've Hit an Enemy with a Melee Attack Recently";
    break;
    case "Smash":
    return "20% increased Melee Damage";
    break;
    case "Maiming Strike":
    return "25% increased Attack Damage";
    break;
    case "Prolonged Assault":
    return "16% increased Attack Damage";
    break;
    case "Blinding Strike":
    return "24% increased Attack Damage";
    break;
    case "Killer Instinct":
    return "30% increased Attack Damage when on Full Life";
    break;
    case "Presence Present":
    return "Allies in your Presence have +100 to Accuracy Rating";
    break;
    case "Unexpected Finesse":
    return "10% increased Attack Damage";
    break;
    case "Kite Runner":
    return "3% increased Movement Speed";
    break;
    case "Careful Aim":
    return "16% increased Projectile Damage";
    break;
    case "Heavy Ammunition":
    return "8% reduced Attack Speed";
    break;
    case "Trick Shot":
    return "Projectiles have 15% chance to Chain an additional time from terrain";
    break;
    case "Piercing Shot":
    return "50% chance to Pierce an Enemy";
    break;
    case "Split Shot":
    return "Projectiles have 75% chance for an additional Projectile when Forking";
    break;
    case "Catapult":
    return "15% increased Projectile Speed";
    break;
    case "Short Shot":
    return "15% reduced Projectile Speed";
    break;
    case "Close Confines":
    return "25% chance for Projectiles to Pierce Enemies within 3m distance of you";
    break;
    case "Shrapnel":
    return "30% chance to Pierce an Enemy";
    break;
    case "Advanced Munitions":
    return "25% increased chance to inflict Ailments with Projectiles";
    break;
    case "Total Incineration":
    return "25% increased Critical Damage Bonus against Burning Enemies";
    break;
    case "Burning Nature":
    return "25% increased Fire Damage";
    break;
    case "Sigil of Fire":
    return "30% increased Damage with Hits against Ignited Enemies";
    break;
    case "Path of Flame":
    return "18% increased Fire Damage";
    break;
    case "Burn Away":
    return "15% increased Fire Damage";
    break;
    case "Echoing Flames":
    return "Mastery: Bestiary";
    break;
    case "Intense Flames":
    return "35% increased Damage with Hits against Burning Enemies";
    break;
    case "Explosive Impact":
    return "15% increased Area of Effect";
    break;
    case "Volcanic Skin":
    return "Gain 8% of Damage as Extra Fire Damage";
    break;
    case "Burning Strikes":
    return "Gain 12% of Physical Damage as Extra Fire Damage";
    break;
    case "Incendiary":
    return "30% increased chance to Ignite";
    break;
    case "Fulmination":
    return "40% increased chance to Ignite";
    break;
    case "Cold Nature":
    return "25% increased Cold Damage";
    break;
    case "Sigil of Ice":
    return "30% increased Damage with Hits against Chilled Enemies";
    break;
    case "Thin Ice":
    return "20% increased Freeze Buildup";
    break;
    case "Heavy Frost":
    return "20% increased Freeze Buildup";
    break;
    case "Path of Winter":
    return "18% increased Cold Damage";
    break;
    case "Harsh Winter":
    return "8% increased Cast Speed with Cold Skills";
    break;
    case "Climate Change":
    return "20% increased Freeze Buildup";
    break;
    case "Echoing Frost":
    return "30% increased Elemental Damage if you've Chilled an Enemy Recently";
    break;
    case "Endless Blizzard":
    return "+1 to Level of all Cold Skills";
    break;
    case "Essence of the Mountain":
    return "Gain 5% of Damage as Extra Cold Damage";
    break;
    case "Pure Power":
    return "2% increased Lightning Damage per 10 Intelligence";
    break;
    case "Electrifying Nature":
    return "25% increased Lightning Damage";
    break;
    case "Sigil of Lightning":
    return "30% increased Damage with Hits against Shocked Enemies";
    break;
    case "Power Conduction":
    return "25% increased Shock Duration";
    break;
    case "Wild Storm":
    return "15% more Maximum Lightning Damage";
    break;
    case "Path of Storms":
    return "18% increased Lightning Damage";
    break;
    case "Flash Storm":
    return "30% increased chance to Shock";
    break;
    case "Thunderstruck":
    return "50% increased Electrocute Buildup against Shocked Enemies";
    break;
    case "Spreading Shocks":
    return "Shocking Hits have a 50% chance to also Shock enemies in a 1.5 metre radius";
    break;
    case "Endless Circuit":
    return "25% chance on Consuming a Shock on an Enemy to reapply it";
    break;
    case "Lightning Quick":
    return "14% increased Lightning Damage";
    break;
    case "Echoing Thunder":
    return "30% increased Elemental Damage if you've Shocked an Enemy Recently";
    break;
    case "Essence of the Storm":
    return "Gain 5% of Damage as Extra Lightning Damage";
    break;
    case "Alternating Current":
    return "25% increased Mana Regeneration Rate if you have Shocked an Enemy Recently";
    break;
    case "Pure Chaos":
    return "Gain 11% of Damage as Extra Chaos Damage";
    break;
    case "Dark Entries":
    return "+1 to Level of all Chaos Skills";
    break;
    case "Spaghettification":
    return "3% increased Movement Speed";
    break;
    case "Event Horizon":
    return "53% increased Chaos Damage";
    break;
    case "Spiral into Insanity":
    return "29% increased Chaos Damage";
    break;
    case "Stylebender":
    return "Break 30% increased Armour on enemies affected by Ailments";
    break;
    case "Void":
    return "29% increased Chaos Damage";
    break;
    case "Lingering Horror":
    return "23% increased Chaos Damage";
    break;
    case "Wither Away":
    return "Unwithered enemies are Withered for 8 seconds when they enter your Presence";
    break;
    case "Shatter Palm":
    return "30% increased Stun Buildup";
    break;
    case "Cut to the Bone":
    return "Break Armour on Critical Hit with Spells equal to 10% of Physical Damage dealt";
    break;
    case "Staggering Palm":
    return "20% increased Critical Damage Bonus";
    break;
    case "Madness in the Bones":
    return "Gain 6% of Physical Damage as extra Chaos Damage";
    break;
    case "Shredding Force":
    return "15% increased Critical Hit Chance for Spells";
    break;
    case "Blood Tearing":
    return "15% increased Magnitude of Bleeding you inflict";
    break;
    case "Tempered Mind":
    return "20% increased Critical Damage Bonus";
    break;
    case "Battle Fever":
    return "5% increased Attack and Cast Speed";
    break;
    case "Unbound Forces":
    return "40% increased Chill Duration on Enemies";
    break;
    case "Harness the Elements":
    return "15% increased Damage for each type of Elemental Ailment on Enemy";
    break;
    case "Stormcharged":
    return "40% increased Elemental Damage if you've dealt a Critical Hit Recently";
    break;
    case "Overexposure":
    return "30% increased Cold Exposure Effect";
    break;
    case "Breaking Point":
    return "10% increased Duration of Elemental Ailments on Enemies";
    break;
    case "All Natural":
    return "+5% to all Elemental Resistances";
    break;
    case "Stormbreaker":
    return "15% increased Damage for each type of Elemental Ailment on Enemy";
    break;
    case "Mind Eraser":
    return "10% increased Mana Regeneration Rate";
    break;
    case "Sturdy Mind":
    return "+30 to maximum Mana";
    break;
    case "Mana Blessing":
    return "+20 to maximum Mana";
    break;
    case "Lucidity":
    return "8% of Damage is taken from Mana before Life";
    break;
    case "Mental Toughness":
    return "18% increased Mana Regeneration Rate";
    break;
    case "Arcane Intensity":
    return "3% increased Spell Damage per 100 maximum Mana";
    break;
    case "Raw Mana":
    return "12% increased maximum Mana";
    break;
    case "Adverse Growth":
    return "20% reduced Life Regeneration rate";
    break;
    case "Soul Bloom":
    return "15% increased Energy Shield Recovery rate";
    break;
    case "Investing Energies":
    return "40% increased Mana Regeneration Rate while stationary";
    break;
    case "Conservative Casting":
    return "20% increased Mana Regeneration Rate";
    break;
    case "Full Recovery":
    return "15% increased Life Regeneration rate";
    break;
    case "Arcane Blossom":
    return "15% increased Mana Recovery rate";
    break;
    case "Aspiring Genius":
    return "20% increased Mana Regeneration Rate";
    break;
    case "Open Mind":
    return "25% increased Mana Regeneration Rate";
    break;
    case "Touch the Arcane":
    return "40% increased effect of Arcane Surge on you";
    break;
    case "Ether Flow":
    return "25% reduced Mana Regeneration Rate while stationary";
    break;
    case "Price of Freedom":
    return "10% reduced Mana Cost of Attacks";
    break;
    case "Suffusion":
    return "30% increased amount of Mana Leeched";
    break;
    case "Siphon":
    return "Recover 2% of Mana on Kill";
    break;
    case "Manifold Method":
    return "50% increased amount of Mana Leeched";
    break;
    case "Immortal Thirst":
    return "15% increased maximum Energy Shield";
    break;
    case "Altered Brain Chemistry":
    return "25% increased Mana Recovery from Flasks";
    break;
    case "Wellspring":
    return "30% increased Mana Recovery from Flasks";
    break;
    case "Arcane Alchemy":
    return "Mana Flasks gain 0.1 charges per Second";
    break;
    case "Warding Potions":
    return "10% reduced Flask Charges used from Mana Flasks";
    break;
    case "Waters of Life":
    return "Recover 2% of Life when you use a Mana Flask";
    break;
    case "Finesse":
    return "10% increased Accuracy Rating";
    break;
    case "Determined Precision":
    return "30% increased Accuracy Rating at Close Range";
    break;
    case "Eagle Eye":
    return "+30 to Accuracy Rating";
    break;
    case "Locked On":
    return "15% increased Critical Hit Chance for Attacks";
    break;
    case "Falcon Dive":
    return "1% increased Attack Speed per 250 Accuracy Rating";
    break;
    case "Near Sighted":
    return "60% increased Accuracy Rating at Close Range";
    break;
    case "Far Sighted":
    return "30% reduced penalty to Accuracy Rating at range";
    break;
    case "Sharp Sight":
    return "5% increased Attack Speed";
    break;
    case "Pinpoint Shot":
    return "Attacks gain increased Accuracy Rating equal to their Critical Hit Chance";
    break;
    case "Coming Calamity":
    return "50% increased Cold Damage while affected by Herald of Ice";
    break;
    case "Fate Finding":
    return "15% reduced Reservation of Herald Skills";
    break;
    case "Apocalypse":
    return "40% reduced Damage";
    break;
    case "Doomsayer":
    return "Herald Skills have 30% increased Area of Effect";
    break;
    case "Bolstering Presence":
    return "20% increased Effect of Auras from your Aura Skills";
    break;
    case "Energise":
    return "25% chance for Trigger skills to refund half of Energy Spent";
    break;
    case "Invocated Efficiency":
    return "Recover 3% of Mana when you Invoke a Spell";
    break;
    case "Dynamism":
    return "40% increased Damage if you've Triggered a Skill Recently";
    break;
    case "Protraction":
    return "20% increased Skill Effect Duration";
    break;
    case "Preservation":
    return "25% increased Skill Effect Duration";
    break;
    case "Tides of Change":
    return "25% increased Skill Effect Duration";
    break;
    case "Forthcoming":
    return "16% reduced Skill Effect Duration";
    break;
    case "Twinned Tethers":
    return "Link Skills Link to 1 additional random target";
    break;
    case "Strong Links":
    return "Link Skills have 20% increased Buff Effect";
    break;
    case "Spirit Bonds":
    return "Link Skills can target Damageable Minions";
    break;
    case "Swift Claw":
    return "25% increased Attack Damage";
    break;
    case "Tough Claw":
    return "25% increased Attack Damage";
    break;
    case "Sharpened Claw":
    return "25% increased Attack Damage";
    break;
    case "Bestial Rage":
    return "25% increased Attack Damage";
    break;
    case "Feral Force":
    return "25% increased Attack Damage";
    break;
    case "First Approach":
    return "50% increased Critical Hit Chance against Enemies on Full Life";
    break;
    case "Finishing Blows":
    return "60% increased Damage with Hits against Enemies that are on Low Life";
    break;
    case "Stars Aligned":
    return "Damage with Hits is Lucky against Enemies that are on Low Life";
    break;
    case "Mental Perseverance":
    return "10% of Damage is taken from Mana before Life";
    break;
    case "Two-Pronged Attack":
    return "Minions deal 25% increased Damage";
    break;
    case "Resourceful Ally":
    return "Minions deal 25% increased Damage";
    break;
    case "Sturdy Ally":
    return "Minions have 25% increased maximum Life";
    break;
    case "Unimpeded":
    return "24% reduced Slowing Potency of Debuffs on You";
    break;
    case "Near at Hand":
    return "16% reduced Skill Effect Duration";
    break;
    case "Time Manipulation":
    return "Debuffs you inflict have 10% increased Slow Magnitude";
    break;
    case "Chronomancy":
    return "20% increased Skill Effect Duration";
    break;
    case "Hindered Capabilities":
    return "30% increased Damage with Hits against Hindered Enemies";
    break;
    case "Quick-change Act":
    return "50% increased Weapon Swap Speed";
    break;
    case "Catalysis":
    return "20% increased Elemental Damage with Attacks";
    break;
    case "Crystal Elixir":
    return "40% increased Elemental Damage with Attack Skills during any Flask Effect";
    break;
    case "Forces of Nature":
    return "Attack Damage Penetrates 15% of Enemy Elemental Resistances";
    break;
    case "Emboldened Avatar":
    return "25% increased chance to Ignite";
    break;
    case "Pocket Sand":
    return "50% increased Blind Effect";
    break;
    case "Acceleration":
    return "3% increased Movement Speed";
    break;
    case "Adrenaline Rush":
    return "4% increased Movement Speed if you've Killed Recently";
    break;
    case "Primal Growth":
    return "20% increased Area of Effect if you've Killed Recently";
    break;
    case "Impact Area":
    return "15% increased Area of Effect if you have Stunned an Enemy Recently";
    break;
    case "Devastation":
    return "15% increased Area of Effect for Attacks";
    break;
    case "Impact Force":
    return "20% increased Stun Buildup";
    break;
    case "Authority":
    return "20% increased Area of Effect for Attacks";
    break;
    case "Crushing Judgement":
    return "25% increased Armour Break Duration";
    break;
    case "Reverberating Impact":
    return "Break 25% increased Armour";
    break;
    case "Roil":
    return "10% reduced Spell Area Damage";
    break;
    case "Repulsion":
    return "Area Skills have 20% chance to Knock Enemies Back on Hit";
    break;
    case "Echoing Pulse":
    return "Final Repeat of Spells has 40% increased Area of Effect";
    break;
    case "Reverberation":
    return "Spell Skills have 20% increased Area of Effect";
    break;
    case "Ruin":
    return "35% increased Spell Area Damage";
    break;
    case "Turn the Clock Back":
    return "20% reduced Projectile Speed for Spell Skills";
    break;
    case "Turn the Clock Forward":
    return "20% increased Projectile Speed for Spell Skills";
    break;
    case "Psychic Fragmentation":
    return "12% chance for Spell Skills to fire 2 additional Projectiles";
    break;
    case "Radial Force":
    return "10% increased Area of Effect";
    break;
    case "Cull the Hordes":
    return "25% increased Culling Strike Threshold";
    break;
    case "Giantslayer":
    return "25% increased Damage with Hits against Rare and Unique Enemies";
    break;
    case "Crushing Verdict":
    return "5% reduced Attack Speed";
    break;
    case "Lasting Trauma":
    return "5% reduced Attack Speed";
    break;
    case "Seeing Stars":
    return "25% increased Daze Buildup";
    break;
    case "Stupefy":
    return "25% increased Critical Hit Chance against Dazed Enemies";
    break;
    case "Revenge":
    return "12% increased Attack Speed if you've been Hit Recently";
    break;
    case "Retaliation":
    return "75% increased Thorns damage if you've Blocked Recently";
    break;
    case "Spiked Armour":
    return "Gain Physical Thorns damage equal to 2% of Armour from equipped Body Armour";
    break;
    case "Vengeance":
    return "40% increased Thorns damage";
    break;
    case "Thornhide":
    return "+5% to Thorns Critical Hit Chance";
    break;
    case "In the Thick of It":
    return "Regenerate 2.5% of Life per second while Surrounded";
    break;
    case "Thrill of Battle":
    return "20% increased Attack Speed while Surrounded";
    break;
    case "Silent Guardian":
    return "Minions have +20% to all Elemental Resistances";
    break;
    case "Bringer of Order":
    return "Minions deal 25% increased Damage";
    break;
    case "Holy Protector":
    return "Minions have 25% increased maximum Life";
    break;
    case "Aftershocks":
    return "40% increased Aftershock Area of Effect";
    break;
    case "Hold Focus":
    return "15% increased Effect of your Mark Skills";
    break;
    case "Marked for Death":
    return "Culling Strike against Enemies you Mark";
    break;
    case "No Escape":
    return "Mark Skills have 60% increased Skill Effect Duration";
    break;
    case "Break Focus":
    return "Enemies you Mark have 15% reduced Accuracy Rating";
    break;
    case "Marked for Sickness":
    return "Enemies you Mark take 10% increased Damage";
    break;
    case "Marked Agility":
    return "30% reduced Mana Cost of Mark Skills";
    break;
    case "Unsight":
    return "Enemies near Enemies you Mark are Blinded";
    break;
    case "Stigmata":
    return "Offerings have 30% increased Maximum Life";
    break;
    case "Meat Recycling":
    return "15% chance to not destroy Corpses when Consuming Corpses";
    break;
    case "Lust for Sacrifice":
    return "40% increased Minion Damage while you have at least two different active Offerings";
    break;
    case "Vile Wounds":
    return "33% increased Damage with Hits against Enemies affected by Elemental Ailments";
    break;
    case "Exploit":
    return "25% increased Damage with Hits against Enemies affected by Elemental Ailments";
    break;
    case "Exploit the Elements":
    return "24% increased Damage with Hits against Enemies affected by Elemental Ailments";
    break;
    case "Clean Shot":
    return "15% chance to Pierce an Enemy";
    break;
    case "Ricochet":
    return "15% increased Projectile Damage";
    break;
    case "Stand and Deliver":
    return "Projectiles have 40% increased Critical Damage Bonus against Enemies within 2m";
    break;
    case "Death from Afar":
    return "Projectiles have 25% increased Critical Hit Chance against Enemies further than 6m";
    break;
    case "Brutal":
    return "10% increased Stun Buildup";
    break;
    case "Relentless":
    return "15% increased Armour";
    break;
    case "Blur":
    return "4% increased Movement Speed";
    break;
    case "Honed Instincts":
    return "8% increased Projectile Speed";
    break;
    case "Raw Power":
    return "20% increased Spell Damage";
    break;
    case "Pure Energy":
    return "30% increased maximum Energy Shield";
    break;
    case "Battle-hardened":
    return "Hits against you have 20% reduced Critical Damage Bonus";
    break;
    case "Remorseless":
    return "15% increased Projectile Damage";
    break;
    case "Relentless Vindicator":
    return "10% increased Damage";
    break;
    case "Devoted Protector":
    return "10% increased Mana Regeneration Rate";
    break;
    case "Flow Like Water":
    return "8% increased Attack and Cast Speed";
    break;
    case "Step Like Mist":
    return "4% increased Movement Speed";
    break;
    case "Sudden Escalation":
    return "16% increased Critical Hit Chance for Spells";
    break;
    case "Critical Overload":
    return "15% increased Critical Hit Chance for Spells";
    break;
    case "Controlling Magic":
    return "25% increased Critical Hit Chance for Spells";
    break;
    case "Equilibrium":
    return "30% increased Attack Damage if you've Cast a Spell Recently";
    break;
    case "Forcewave":
    return "20% increased Stun Buildup";
    break;
    case "Clear Space":
    return "20% increased Knockback Distance";
    break;
    case "Exposed to the Inferno":
    return "Damage Penetrates 15% Fire Resistance";
    break;
    case "Breath of Fire":
    return "Damage Penetrates 15% Fire Resistance";
    break;
    case "Cremation":
    return "Damage Penetrates 18% Fire Resistance";
    break;
    case "Smoke Inhalation":
    return "Damage Penetrates 15% Fire Resistance";
    break;
    case "Overheating Blow":
    return "Hits that Heavy Stun inflict Fire Exposure";
    break;
    case "Shattered Crystal":
    return "60% reduced Ice Crystal Life";
    break;
    case "Ice Walls":
    return "200% increased Ice Crystal Life";
    break;
    case "Storm Swell":
    return "Damage Penetrates 15% Cold Resistance";
    break;
    case "Exposed to the Cosmos":
    return "Damage Penetrates 15% Cold Resistance";
    break;
    case "Snowpiercer":
    return "Damage Penetrates 15% Cold Resistance";
    break;
    case "Breath of Ice":
    return "Damage Penetrates 15% Cold Resistance";
    break;
    case "Glaciation":
    return "Damage Penetrates 18% Cold Resistance";
    break;
    case "Overload":
    return "Damage Penetrates 10% Lightning Resistance if on Low Mana";
    break;
    case "Exposed to the Storm":
    return "Damage Penetrates 18% Lightning Resistance";
    break;
    case "Storm Surge":
    return "Damage Penetrates 8% Cold Resistance";
    break;
    case "Breath of Lightning":
    return "Damage Penetrates 15% Lightning Resistance";
    break;
    case "Surging Currents":
    return "Damage Penetrates 15% Lightning Resistance";
    break;
    case "Electric Amplification":
    return "Damage Penetrates 18% Lightning Resistance";
    break;
    case "Lightning Rod":
    return "Lightning Damage with Non-Critical Hits is Lucky";
    break;
    case "Electrotherapy":
    return "5% increased Skill Speed";
    break;
    case "Way of the Wind":
    return "25% increased Evasion if you have Hit an Enemy Recently";
    break;
    case "Flurry":
    return "20% increased Area of Effect while Unarmed";
    break;
    case "Pressure Points":
    return "35% increased Stun Buildup";
    break;
    case "Breakage":
    return "Break 60% increased Armour";
    break;
    case "Pile On":
    return "60% increased Damage against Enemies with Fully Broken Armour";
    break;
    case "Irreparable":
    return "100% increased Armour Break Duration";
    break;
    case "Cruel Methods":
    return "Break 40% increased Armour";
    break;
    case "Perforation":
    return "20% chance for Bleeding to be Aggravated when Inflicted against Enemies on Jagged Ground";
    break;
    case "Spike Pit":
    return "Enemies in Jagged Ground you create take 10% increased Damage";
    break;
    case "Distracting Presence":
    return "10% increased Cooldown Recovery Rate";
    break;
    case "Multitasking":
    return "15% increased Skill Effect Duration";
    break;
    case "Volatile Catalyst":
    return "10% increased Area of Effect";
    break;
    case "Deterioration":
    return "Damaging Ailments Cannot Be inflicted on you while you already have one";
    break;
    case "Exposed Wounds":
    return "15% increased chance to inflict Ailments";
    break;
    case "Fast Acting Toxins":
    return "Damaging Ailments deal damage 12% faster";
    break;
    case "Wasting":
    return "15% increased Duration of Damaging Ailments on Enemies";
    break;
    case "Master Fletching":
    return "30% increased bonuses gained from Equipped Quiver";
    break;
    case "Grenadier":
    return "Grenade Skills have +1 Cooldown Use";
    break;
    case "Cluster Bombs":
    return "50% increased Grenade fuse duration";
    break;
    case "Volatile Grenades":
    return "25% reduced Grenade fuse duration";
    break;
    case "Pinned Down":
    return "Enemies are Maimed for 4 seconds after becoming Unpinned";
    break;
    case "Pin and Run":
    return "30% increased Pin Buildup";
    break;
    case "Primal Protection":
    return "25% increased Charm Effect Duration";
    break;
    case "Vale Shelter":
    return "Charms gain 0.15 charges per Second";
    break;
    case "Thicket Warding":
    return "20% chance for Charms you use to not consume Charges";
    break;
    case "Lucky Rabbit Foot":
    return "30% increased Damage while you have an active Charm";
    break;
    case "Woodland Aspect":
    return "Charms applied to you have 25% increased Effect";
    break;
    case "Hunter's Talisman":
    return "+1 Charm Slot";
    break;
    }}
