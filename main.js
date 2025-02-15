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
    //Allocates
    var enchantMod = document.getElementsByClassName("enchantMod");
    for(let i=0;i<enchantMod.length;i++){
        if(enchantMod[i].childNodes[1].childNodes.length!==2 && enchantMod[i].parentElement.parentElement.childNodes[1].innerText=='Megalomaniac\nDiamond'){
            let text = enchantMod[i].childNodes[1].textContent
            var nameEnchant=text.replace("Allocates ","")
            var all = `<div style="color:green;">${switchAllocates(nameEnchant)}</div>`;
            enchantMod[i].childNodes[1].innerHTML += all;
        }
    }
    //Search btn
    var searchallbutton = document.getElementsByClassName("searchBy");
    for(let i=0;i<searchallbutton.length;i++){
        let btn =searchallbutton[i];
        if(btn.style.left!=="50px"){
            btn.style.left="50px";
        }
    }
    //Copy btn
    var copyallbutton= document.getElementsByClassName("copy hidden");
    for(let i=0;i<copyallbutton.length;i++){
        let btn =copyallbutton[i];
        btn.onclick=(e)=>{
            let text = e.target.parentNode.parentNode.childNodes[2].childNodes[0].innerText.replace(/\b(P[1-9]|P11|P12|S[1-9]|S11|S12)\b\n?/g,"");//Regex for Sufix and Prefix
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
    switch(Allocates){case "Beef":
            return "<div>+25 to Strength<div>";
            break;
        case "Proficiency":
            return "<div>+25 to Dexterity<div>";
            break;
        case "Ingenuity":
            return "<div>+25 to Intelligence<div>";
            break;
        case "Polymathy":
            return "<div>10% increased Attributes<div>";
            break;
        case "Jack of all Trades":
            return "<div>2% increased Damage per 5 of your lowest Attribute<div>";
            break;
        case "One with the River":
            return "<div>30% increased Defences while wielding a Staff<div><div>30% increased Freeze Buildup with Quarterstaves<div><div>30% increased Stun Buildup with Quarterstaves<div>";
            break;
        case "Whirling Assault":
            return "<div>8% increased Attack Speed with Quarterstaves<div><div>Knocks Back Enemies if you get a Critical Hit with a Quarterstaff<div>";
            break;
        case "One with the Storm":
            return "<div>Quarterstaff Skills that consume Power Charges count as consuming an additional Power Charge<div>";
            break;
        case "Martial Artistry":
            return "<div>25% increased Accuracy Rating with Quarterstaves<div><div>25% increased Critical Damage Bonus with Quarterstaves<div><div>+25 to Dexterity<div>";
            break;
        case "Silent Shiv":
            return "<div>5% increased Attack Speed with Daggers<div><div>15% increased Critical Hit Chance with Daggers<div>";
            break;
        case "Coated Knife":
            return "<div>Critical Hits with Daggers have a 25% chance to Poison the Enemy<div>";
            break;
        case "Backstabbing":
            return "<div>25% increased Critical Damage Bonus with Daggers<div>";
            break;
        case "Clever Construction":
            return "<div>25% increased Critical Hit Chance with Traps<div>";
            break;
        case "Devestating Devices":
            return "<div>25% increased Trap Damage<div>";
            break;
        case "Destructive Apparatus":
            return "<div>25% increased Trap Damage<div>";
            break;
        case "Feathered Fletching":
            return "<div>Increases and Reductions to Projectile Speed also apply to Damage with Bows<div>";
            break;
        case "Sniper":
            return "<div>Arrows gain Critical Hit Chance as they travel farther, up to 60% increased Critical Hit Chance<div>";
            break;
        case "Pierce the Heart":
            return "<div>Arrows Pierce an additional Target<div>";
            break;
        case "Javelin":
            return "<div>25% increased Damage with Spears<div>";
            break;
        case "Swift Skewering":
            return "<div>8% increased Attack Speed with Spears<div>";
            break;
        case "Precise Point":
            return "<div>25% increased Damage with Spears<div>";
            break;
        case "Roll and Strike":
            return "<div>25% increased Damage with Spears<div>";
            break;
        case "Deflection":
            return "<div>30% increased Block chance<div><div>You take 10% of damage from Blocked Hits<div>";
            break;
        case "Reprisal":
            return "<div>Attack Skills deal 25% increased Damage while holding a Shield<div><div>75% increased Evasion from Equipped Shield<div>";
            break;
        case "Heavy Blade":
            return "<div>25% increased Damage with Swords<div>";
            break;
        case "Ripping Blade":
            return "<div>25% increased Damage with Swords<div>";
            break;
        case "Stance Breaker":
            return "<div>50% reduced Enemy Chance to Block Sword Attacks<div>";
            break;
        case "Lay Siege":
            return "<div>1% increased Damage per 1% Chance to Block<div>";
            break;
        case "Greatest Defence":
            return "<div>2% increased Attack Damage per 75 Armour or Evasion Rating on Shield<div>";
            break;
        case "Wide Barrier":
            return "<div>30% increased Block chance<div><div>25% reduced Global Defences<div>";
            break;
        case "Core of the Guardian":
            return "<div>100% increased Defences from Equipped Shield<div>";
            break;
        case "Offensive Stance":
            return "<div>1% increased Damage per 1% Chance to Block<div>";
            break;
        case "Vigilance":
            return "<div>12% increased Block chance<div><div>6 Life gained when you Block<div>";
            break;
        case "Defensive Reflexes":
            return "<div>12% increased Block chance<div><div>2 Mana gained when you Block<div>";
            break;
        case "Power Shots":
            return "<div>15% reduced Attack Speed with Crossbows<div><div>80% increased Critical Damage Bonus with Crossbows<div>";
            break;
        case "Repeating Explosives":
            return "<div>Grenades have 15% chance to activate a second time<div>";
            break;
        case "Instant Reload":
            return "<div>40% increased Crossbow Reload Speed<div>";
            break;
        case "Reusable Ammunition":
            return "<div>15% chance for Crossbow Attacks to not consume a bolt<div>";
            break;
        case "Full Salvo":
            return "<div>25% increased Damage with Crossbows for each type of Ammunition fired in the past 10 seconds<div>";
            break;
        case "Whirling Onslaught":
            return "<div>50% chance to gain Onslaught on Killing Blow with Axes<div>";
            break;
        case "Enraged Reaver":
            return "<div>+10 to Maximum Rage while wielding an Axe<div>";
            break;
        case "Skullcrusher":
            return "<div>20% more Damage against Heavy Stunned Enemies with Maces<div>";
            break;
        case "Split the Earth":
            return "<div>10% chance to Aftershock for Slam Skills you use with Maces<div><div>10% chance to Aftershock for Strike Skills you use with Maces<div>";
            break;
        case "Ball and Chain":
            return "<div>15% increased Damage with Flails<div><div>6% increased Attack Speed with Flails<div>";
            break;
        case "Morning Star":
            return "<div>30% increased Critical Hit Chance with Flails<div><div>20% increased Critical Damage Bonus with Flails<div>";
            break;
        case "Rattling Ball":
            return "<div>25% increased Damage with Flails<div>";
            break;
        case "Spiked Whip":
            return "<div>25% increased Damage with Flails<div>";
            break;
        case "Warding Fetish":
            return "<div>30% increased Damage per Curse on you<div><div>30% reduced effect of Curses on you<div><div>60% increased Energy Shield from Equipped Focus<div>";
            break;
        case "Dreamcatcher":
            return "<div>25% increased Spell Damage while on Full Energy Shield<div><div>75% increased Energy Shield from Equipped Focus<div>";
            break;
        case "Versatile Arms":
            return "<div>6% increased Attack Speed with One Handed Melee Weapons<div><div>15% increased Accuracy Rating with One Handed Melee Weapons<div><div>+10 to Strength and Dexterity<div>";
            break;
        case "Push the Advantage":
            return "<div>40% increased Critical Damage Bonus with One Handed Melee Weapons<div>";
            break;
        case "Impair":
            return "<div>25% increased Damage with One Handed Weapons<div><div>Attacks have 10% chance to Maim on Hit<div>";
            break;
        case "Coated Arms":
            return "<div>25% increased Damage with One Handed Weapons<div><div>20% increased Chance to inflict Ailments with One-Handed Attacks<div>";
            break;
        case "Singular Purpose":
            return "<div>5% reduced Attack Speed<div><div>20% increased Stun Buildup<div><div>40% increased Damage with Two Handed Weapons<div>";
            break;
        case "Heavy Contact":
            return "<div>Hits that Heavy Stun Enemies have Culling Strike<div>";
            break;
        case "Colossal Weapon":
            return "<div>15% increased Area of Effect for Attacks<div><div>+10 to Strength<div>";
            break;
        case "Curved Weapon":
            return "<div>15% increased Accuracy Rating<div><div>+10 to Dexterity<div>";
            break;
        case "Shockwaves":
            return "<div>30% increased Area of Effect if you've Stunned an Enemy with a Two Handed Melee Weapon Recently<div>";
            break;
        case "Overwhelm":
            return "<div>5% reduced Attack Speed<div><div>20% increased Stun Buildup<div><div>40% increased Damage with Two Handed Weapons<div>";
            break;
        case "Cross Strike":
            return "<div>20% increased Accuracy Rating while Dual Wielding<div><div>3% increased Movement Speed while Dual Wielding<div>";
            break;
        case "Blade Flurry":
            return "<div>6% increased Attack Speed while Dual Wielding<div><div>15% increased Attack Critical Hit Chance while Dual Wielding<div>";
            break;
        case "Polished Iron":
            return "<div>25% increased Armour<div><div>50% of Base Armour from Equipment also added to Stun Threshold<div>";
            break;
        case "Heatproofing":
            return "<div>25% of Armour also applies to Fire Damage taken from Hits<div>";
            break;
        case "Projectile Bulwark":
            return "<div>30% increased Armour<div><div>Defend with 120% of Armour against Projectile Attacks<div>";
            break;
        case "Blade Catcher":
            return "<div>Defend with 200% of Armour against Critical Hits<div><div>+15 to Strength<div>";
            break;
        case "Heavy Armour":
            return "<div>100% of Strength Requirements from Boots, Gloves and Helmets also added to Armour<div>";
            break;
        case "Made to Last":
            return "<div>15% of Physical Damage prevented Recouped as Life<div>";
            break;
        case "Sturdy Metal":
            return "<div>80% increased Armour from Equipped Body Armour<div>";
            break;
        case "Impenetrable Shell":
            return "<div>Defend with 150% of Armour against Attacks from further than 6m<div>";
            break;
        case "General's Bindings":
            return "<div>Gain 8% of Evasion Rating as extra Armour<div>";
            break;
        case "High Alert":
            return "<div>50% increased Evasion Rating when on Full Life<div><div>25% increased Stun Threshold while on Full Life<div>";
            break;
        case "Escape Strategy":
            return "<div>100% increased Evasion Rating if you have been Hit Recently<div><div>30% reduced Evasion Rating if you haven't been Hit Recently<div>";
            break;
        case "Careful Consideration":
            return "<div>30% reduced Evasion Rating if you have been Hit Recently<div><div>100% increased Evasion Rating if you haven't been Hit Recently<div>";
            break;
        case "Freedom of Movement":
            return "<div>30% increased Evasion Rating<div><div>30% increased Evasion Rating if you've Dodge Rolled Recently<div>";
            break;
        case "Escape Velocity":
            return "<div>3% increased Movement Speed<div><div>30% increased Evasion Rating<div>";
            break;
        case "Enhanced Reflexes":
            return "<div>30% increased Evasion Rating<div><div>8% increased Dexterity<div>";
            break;
        case "Beastial Skin":
            return "<div>100% increased Evasion Rating from Equipped Body Armour<div>";
            break;
        case "Afterimage":
            return "<div>8% more chance to Evade Melee Attacks<div>";
            break;
        case "Leather Bound Gauntlets":
            return "<div>+1 to Evasion Rating per 1 Armour on Equipped Gloves<div>";
            break;
        case "Catlike Agility":
            return "<div>25% increased Evasion Rating<div><div>25% increased Evasion Rating if you've Dodge Rolled Recently<div>";
            break;
        case "Calibration":
            return "<div>30% increased maximum Energy Shield<div><div>4% increased maximum Mana<div>";
            break;
        case "Patient Barrier":
            return "<div>60% increased maximum Energy Shield<div><div>20% slower start of Energy Shield Recharge<div>";
            break;
        case "Insightfulness":
            return "<div>18% increased maximum Energy Shield<div><div>12% increased Mana Regeneration Rate<div><div>6% increased Intelligence<div>";
            break;
        case "Melding":
            return "<div>40% increased maximum Energy Shield<div><div>10% reduced maximum Mana<div>";
            break;
        case "Enhanced Barrier":
            return "<div>25% increased maximum Energy Shield<div><div>+1% to all Maximum Elemental Resistances<div>";
            break;
        case "Dampening Shield":
            return "<div>28% increased maximum Energy Shield<div><div>Gain 12% of maximum Energy Shield as additional Stun Threshold<div>";
            break;
        case "Heavy Buffer":
            return "<div>40% increased maximum Energy Shield<div><div>10% reduced maximum Life<div>";
            break;
        case "Illuminated Crown":
            return "<div>20% increased Light Radius<div><div>70% increased Energy Shield from Equipped Helmet<div>";
            break;
        case "Strong Chin":
            return "<div>Gain Stun Threshold equal to the lowest of Evasion and Armour on your Helmet<div>";
            break;
        case "Defiance":
            return "<div>80% increased Armour and Evasion Rating when on Low Life<div>";
            break;
        case "Backup Plan":
            return "<div>40% increased Evasion Rating if you have been Hit Recently<div><div>40% increased Armour if you haven't been Hit Recently<div>";
            break;
        case "Insulated Treads":
            return "<div>Gain Ailment Threshold equal to the lowest of Evasion and Armour on your Boots<div>";
            break;
        case "Feel no Pain":
            return "<div>20% increased Armour and Evasion Rating<div><div>20% increased Stun Threshold<div>";
            break;
        case "Spectral Ward":
            return "<div>+1 to Maximum Energy Shield per 12 Evasion Rating on Equipped Body Armour<div>";
            break;
        case "Inner Faith":
            return "<div>20% increased Evasion Rating<div><div>20% increased maximum Energy Shield<div><div>25% reduced effect of Curses on you<div>";
            break;
        case "Shadow Dancing":
            return "<div>30% increased Evasion Rating if you have been Hit Recently<div><div>60% faster start of Energy Shield Recharge if you've been Stunned Recently<div>";
            break;
        case "Immaterial":
            return "<div>50% increased Evasion Rating if Energy Shield Recharge has started in the past 2 seconds<div><div>30% increased Evasion Rating while you have Energy Shield<div>";
            break;
        case "Shimmering":
            return "<div>20% increased Energy Shield Recovery Rate if you haven't been Hit Recently<div><div>3% increased Movement Speed while you have Energy Shield<div>";
            break;
        case "Subterfuge Mask":
            return "<div>+2 to Evasion Rating per 1 Maximum Energy Shield on Equipped Helmet<div>";
            break;
        case "Mindful Awareness":
            return "<div>24% increased Evasion Rating<div><div>24% increased maximum Energy Shield<div>";
            break;
        case "Ancient Aegis":
            return "<div>60% increased Armour from Equipped Body Armour<div><div>60% increased Energy Shield from Equipped Body Armour<div>";
            break;
        case "Adamant Recovery":
            return "<div>Increases and Reductions to Armour also apply to Energy ShieldRecharge Rate at 40% of their value<div>";
            break;
        case "Reinforced Barrier":
            return "<div>20% increased maximum Energy Shield<div><div>Defend with 120% of Armour while not on Low Energy Shield<div>";
            break;
        case "Spiral into Depression":
            return "<div>3% increased Movement Speed<div><div>25% increased Armour<div><div>25% increased maximum Energy Shield<div>";
            break;
        case "Unnatural Resilience":
            return "<div>2% to Maximum Fire Resistance for each 40% Uncapped Fire Resistance<div>";
            break;
        case "Prism Guard":
            return "<div>+1% to all Maximum Elemental Resistances<div><div>+5% to all Elemental Resistances<div>";
            break;
        case "Natural Immunity":
            return "<div>+4 to Ailment Threshold per Dexterity<div>";
            break;
        case "Fan the Flames":
            return "<div>25% reduced Ignite Duration on you<div><div>40% increased Elemental Ailment Threshold<div>";
            break;
        case "Warm the Heart":
            return "<div>25% reduced Freeze Duration on you<div><div>60% increased Freeze Threshold<div>";
            break;
        case "Feel the Earth":
            return "<div>25% reduced Shock duration on you<div><div>40% increased Elemental Ailment Threshold<div>";
            break;
        case "Shedding Skin":
            return "<div>40% increased Elemental Ailment Threshold<div><div>10% reduced Duration of Ailments on You<div>";
            break;
        case "Mystic Stance":
            return "<div>30% faster start of Energy Shield Recharge<div><div>30% increased Stun Threshold while on Full Life<div>";
            break;
        case "Quick Response":
            return "<div>20% faster start of Energy Shield Recharge<div><div>30% faster start of Energy Shield Recharge when not on Full Life<div>";
            break;
        case "Rapid Recharge":
            return "<div>25% increased Energy Shield Recharge Rate<div><div>25% faster start of Energy Shield Recharge<div><div>Witch: Minions have 15% increased maximum Life<div>";
            break;
        case "Covering Ward":
            return "<div>25% increased Energy Shield Recharge Rate<div><div>Gain 20 Energy Shield when you Block<div>";
            break;
        case "Essence Infusion":
            return "<div>40% increased Energy Shield Recharge Rate<div><div>+10 to Intelligence<div>";
            break;
        case "Refocus":
            return "<div>30% increased Energy Shield Recharge Rate<div><div>20% increased Mana Regeneration Rate<div>";
            break;
        case "Dependable Ward":
            return "<div>25% increased Energy Shield Recharge Rate<div><div>25% faster start of Energy Shield Recharge<div>";
            break;
        case "Convalescence":
            return "<div>15% reduced Energy Shield Recharge Rate<div><div>40% faster start of Energy Shield Recharge<div>";
            break;
        case "Arcane Mixtures":
            return "<div>25% increased Energy Shield Recharge Rate<div><div>Mana Flasks gain 0.1 charges per Second<div>";
            break;
        case "Unstoppable Barrier":
            return "<div>10% increased Block chance<div><div>15% reduced Slowing Potency of Debuffs on You<div>";
            break;
        case "Hunker Down":
            return "<div>Recover 20 Life when you Block<div><div>80% less Knockback Distance for Blocked Hits<div>";
            break;
        case "Towering Shield":
            return "<div>50% increased Defences from Equipped Shield<div><div>25% increased Chance to Block if you've Blocked with Active Block Recently<div>";
            break;
        case "Defender's Resolve":
            return "<div>12% increased Block chance<div><div>Stagger empties 50% faster while your Shield is lowered<div>";
            break;
        case "Parrying Motion":
            return "<div>12% increased Block chance<div><div>1% increased Movement Speed for each time you've Blocked in the past 10 seconds<div>";
            break;
        case "Spiked Shield":
            return "<div>50% increased Defences from Equipped Shield<div><div>1% increased Attack Damage per 75 Armour or Evasion Rating on Shield<div>";
            break;
        case "Shield Expertise":
            return "<div>12% increased Block chance<div><div>40% increased Block Recovery<div>";
            break;
        case "Smooth Buckler":
            return "<div>12% increased Block chance<div><div>10 Mana gained when you Block<div>";
            break;
        case "Flashy Deflection":
            return "<div>12% increased Block chance<div><div>40% increased Defences from Equipped Shield<div>";
            break;
        case "Resolution":
            return "<div>10% increased Global Defences<div><div>25% increased Stun Threshold<div>";
            break;
        case "Quick Recovery":
            return "<div>40% increased Stun Recovery<div><div>Regenerate 5% of Life over 1 second when Stunned<div>";
            break;
        case "Titan's Determination":
            return "<div>25% increased Stun Threshold<div><div>20% increased Life Regeneration Rate while moving<div>";
            break;
        case "Unbreaking":
            return "<div>30% increased Stun Threshold<div><div>30% increased Elemental Ailment Threshold<div>";
            break;
        case "Hefty Unit":
            return "<div>+3 to Stun Threshold per Strength<div>";
            break;
        case "Unbending":
            return "<div>3% increased maximum Life<div><div>30% increased Stun Threshold<div>";
            break;
        case "Austerity Measures":
            return "<div>+5 to all Attributes<div><div>Gain 20% of maximum Energy Shield as additional Stun Threshold<div>";
            break;
        case "Asceticism":
            return "<div>Stun Threshold is based on 30% of your Energy Shield instead of Life<div>";
            break;
        case "Self Mortification":
            return "<div>Gain 20% of maximum Energy Shield as additional Stun Threshold<div><div>20% increased Stun Threshold while on Full Life<div>";
            break;
        case "Hallowed":
            return "<div>20% increased Stun Recovery<div><div>Gain 20% of maximum Energy Shield as additional Stun Threshold<div>";
            break;
        case "Eldritch Will":
            return "<div>3% increased maximum Life, Mana and Energy Shield<div><div>Gain 20% of maximum Energy Shield as additional Stun Threshold<div>";
            break;
        case "Briny Carapace":
            return "<div>60% increased Stun Threshold for each time you've been Stunned Recently<div>";
            break;
        case "Deft Recovery":
            return "<div>30% increased Stun Recovery<div><div>30% increased Stun Threshold if you haven't been Stunned Recently<div>";
            break;
        case "Back in Action":
            return "<div>80% increased Stun Recovery<div>";
            break;
        case "Fireproof":
            return "<div>+15% to Fire Resistance<div><div>25% reduced effect of Ignite on you<div>";
            break;
        case "Slippery Ice":
            return "<div>25% reduced Effect of Chill on you<div><div>Unaffected by Chill during Dodge Roll<div>";
            break;
        case "Icebreaker":
            return "<div>Gain 100% of Maximum Energy Shield as additional Freeze Threshold<div>";
            break;
        case "Electrocution":
            return "<div>Enemies you Electrocute have 20% increased Damage taken<div>";
            break;
        case "Coursing Energy":
            return "<div>40% increased Electrocute Buildup<div><div>30% increased Shock Chance against Electrocuted Enemies<div>";
            break;
        case "Mass Rejuvenation":
            return "<div>Regenerate 0.5% of Life per second<div><div>Allies in your Presence Regenerate 1% of your Maximum Life per second<div>";
            break;
        case "Desperate Times":
            return "<div>Regenerate 1.5% of Life per second while on Low Life<div><div>40% increased Life Recovery from Flasks used when on Low Life<div>";
            break;
        case "Resilient Soul":
            return "<div>20% increased Life Regeneration rate<div><div>5% of Damage taken Recouped as Life<div>";
            break;
        case "Thickened Arteries":
            return "<div>5% reduced Movement Speed<div><div>Regenerate 1% of Life per second while stationary<div>";
            break;
        case "Hard to Kill":
            return "<div>40% increased Flask Life Recovery rate<div><div>Regenerate 0.75% of Life per second<div>";
            break;
        case "Hale Heart":
            return "<div>15% increased Life Recovery rate<div>";
            break;
        case "Stand Ground":
            return "<div>Regenerate 1% of Life per second while affected by any Damaging Ailment<div><div>Regenerate 1% of Life per second while stationary<div>";
            break;
        case "Fortifying Blood":
            return "<div>20% increased amount of Life Leeched<div><div>40% increased Armour and Evasion Rating while Leeching<div>";
            break;
        case "Voracious":
            return "<div>20% of Leech is Instant<div>";
            break;
        case "Bloodthirsty":
            return "<div>20% increased amount of Life Leeched<div><div>Leech Life 25% faster<div>";
            break;
        case "Goring":
            return "<div>5% reduced maximum Life<div><div>30% increased amount of Life Leeched<div><div>40% increased Physical Damage<div>";
            break;
        case "Savoured Blood":
            return "<div>35% increased amount of Life Leeched<div><div>Leech Life 20% slower<div>";
            break;
        case "Fast Metabolism":
            return "<div>Life Leech effects are not removed when Unreserved Life is Filled<div>";
            break;
        case "Loose Flesh":
            return "<div>15% of Elemental Damage taken Recouped as Life<div>";
            break;
        case "Taut Flesh":
            return "<div>15% of Physical Damage taken Recouped as Life<div>";
            break;
        case "Heart Tissue":
            return "<div>6% of Damage taken Recouped as Life<div><div>Regenerate 0.4% of Life per second if you have been Hit Recently<div>";
            break;
        case "Infused Flesh":
            return "<div>+20 to maximum Life<div><div>8% of Damage taken Recouped as Life<div>";
            break;
        case "Pliable Flesh":
            return "<div>6% of Damage taken Recouped as Life<div><div>25% increased speed of Recoup Effects<div>";
            break;
        case "Glazed Flesh":
            return "<div>3% of Damage Taken Recouped as Life, Mana and Energy Shield<div>";
            break;
        case "Immortal Infamy":
            return "<div>10% increased Energy Shield Recharge Rate<div><div>Recover 2% of Life on Kill<div><div>+10 to Intelligence<div>";
            break;
        case "Life from Death":
            return "<div>Recover 3% of Life on Kill<div>";
            break;
        case "Taste for Blood":
            return "<div>Gain 20 Life per Enemy Killed<div><div>2% chance to Recover all Life when you Kill an Enemy<div>";
            break;
        case "Refills":
            return "<div>Life Flasks gain 0.15 charges per Second<div>";
            break;
        case "Hale Traveller":
            return "<div>20% increased Life Recovery from Flasks<div><div>Life Flasks gain 0.1 charges per Second<div>";
            break;
        case "Reinvigoration":
            return "<div>Regenerate 1% of Life per Second if you've used a Life Flask in the past 10 seconds<div>";
            break;
        case "Staunching":
            return "<div>Life Flasks gain 0.1 charges per Second<div><div>+10 to Strength<div>";
            break;
        case "Succour":
            return "<div>30% increased Life Regeneration rate during Effect of any Life Flask<div>";
            break;
        case "Heavy Drinker":
            return "<div>30% increased Flask Effect Duration<div><div>20% increased Life Recovery from Flasks<div><div>Recover 5% of Life when you use a Life Flask while on Low Life<div>";
            break;
        case "Potent Concoctions":
            return "<div>Flasks applied to you have 25% increased Effect<div>";
            break;
        case "Efficient Alchemy":
            return "<div>20% increased Flask and Charm Charges gained<div><div>40% increased Life and Mana Recovery from Flasks while you have an active Charm<div>";
            break;
        case "Lasting Concoctions":
            return "<div>25% increased Flask Effect Duration<div><div>25% increased Flask Charges gained<div>";
            break;
        case "Savouring":
            return "<div>20% chance for Flasks you use to not consume Charges<div>";
            break;
        case "Combat Alchemy":
            return "<div>10% chance for Flasks you use to not consume Charges<div><div>20% increased Life and Mana Recovery from Flasks<div>";
            break;
        case "Cautious Concoctions":
            return "<div>15% increased Flask Effect Duration<div><div>15% increased Flask Charges gained<div>";
            break;
        case "Crashing Wave":
            return "<div>36% increased Damage if you've dealt a Critical Hit in the past 8 seconds<div>";
            break;
        case "Cruel Fate":
            return "<div>20% increased Critical Damage Bonus<div><div>20% increased Magnitude of Non-Damaging Ailments you inflict with Critical Hits<div>";
            break;
        case "Leaping Ambush":
            return "<div>100% increased Critical Hit Chance against Enemies on Full Life<div>";
            break;
        case "Direct Approach":
            return "<div>40% increased Critical Hit Chance against Enemies that are affectedby no Elemental Ailments<div>";
            break;
        case "True Strike":
            return "<div>+10 to Dexterity<div><div>20% increased Critical Hit Chance<div>";
            break;
        case "For the Jugular":
            return "<div>30% increased Critical Damage Bonus<div><div>+10 to Intelligence<div>";
            break;
        case "Critical Exploit":
            return "<div>25% increased Critical Hit Chance<div>";
            break;
        case "Moment of Truth":
            return "<div>25% increased Critical Damage Bonus if you've dealt a Non-Critical Hit Recently<div><div>20% increased Critical Hit Chance<div>";
            break;
        case "Preemptive Strike":
            return "<div>100% increased Critical Damage Bonus against Enemies that are on Full Life<div>";
            break;
        case "Desensitisation":
            return "<div>25% increased Critical Damage Bonus<div><div>Hits against you have 25% reduced Critical Damage Bonus<div>";
            break;
        case "Cooked":
            return "<div>50% increased Critical Damage Bonus during any Flask Effect<div>";
            break;
        case "Deadly Force":
            return "<div>30% increased Damage if you've dealt a Critical Hit in the past 8 seconds<div><div>12% increased Critical Hit Chance<div>";
            break;
        case "Sundering":
            return "<div>25% increased Critical Damage Bonus for Attack Damage<div><div>+25% to Critical Damage Bonus against Stunned Enemies<div>";
            break;
        case "Heartstopping":
            return "<div>+10 to Intelligence<div><div>25% increased Critical Hit Chance<div>";
            break;
        case "Heartbreaking":
            return "<div>35% increased Critical Damage Bonus<div><div>+10 to Strength<div>";
            break;
        case "Struck Through":
            return "<div>Attacks have +1% to Critical Hit Chance<div>";
            break;
        case "Overwhelming Strike":
            return "<div>20% increased Critical Hit Chance for Attacks<div><div>20% increased Critical Damage Bonus for Attack Damage<div><div>20% increased Stun Buildup with Critical Hits<div>";
            break;
        case "Vulgar Methods":
            return "<div>10% reduced maximum Mana<div><div>+10 to Strength<div><div>35% increased Critical Hit Chance<div>";
            break;
        case "Barbaric Strength":
            return "<div>45% increased Critical Damage Bonus<div><div>10% increased Mana Cost of Skills<div><div>+10 to Strength<div>";
            break;
        case "Tainted Strike":
            return "<div>25% increased Critical Hit Chance for Attacks<div><div>30% increased Magnitude of Non-Damaging Ailments you inflict with Critical Hits<div>";
            break;
        case "Dispatch Foes":
            return "<div>80% increased Critical Hit Chance if you haven't dealt a Critical Hit Recently<div>";
            break;
        case "Careful Assassin":
            return "<div>20% reduced Critical Damage Bonus<div><div>50% increased Critical Hit Chance<div>";
            break;
        case "Throatseeker":
            return "<div>60% increased Critical Damage Bonus<div><div>20% reduced Critical Hit Chance<div>";
            break;
        case "Blurred Motion":
            return "<div>5% increased Attack Speed<div><div>10% increased Accuracy Rating<div><div>5% increased Dexterity<div>";
            break;
        case "Tenfold Attacks":
            return "<div>4% increased Attack Speed<div><div>6% increased Attack Speed if you've been Hit Recently<div><div>+10 to Strength<div>";
            break;
        case "Stimulants":
            return "<div>12% increased Attack Speed during any Flask Effect<div>";
            break;
        case "Reaving":
            return "<div>8% increased Attack Speed with One Handed Weapons<div><div>+15 to Dexterity<div>";
            break;
        case "Mass Hysteria":
            return "<div>Allies in your Presence have 6% increased Attack Speed<div><div>6% increased Attack Speed<div>";
            break;
        case "Falcon Technique":
            return "<div>1% increased Attack Speed per 15 Dexterity<div>";
            break;
        case "Sand in the Eyes":
            return "<div>10% increased Attack Speed<div><div>15% chance to Blind Enemies on Hit with Attacks<div>";
            break;
        case "Deep Trance":
            return "<div>8% increased Attack Speed<div><div>10% reduced Cost of Skills<div>";
            break;
        case "Flow State":
            return "<div>5% increased Skill Speed<div><div>15% increased Mana Regeneration Rate<div>";
            break;
        case "Blinding Flash":
            return "<div>20% increased Blind Effect<div><div>Blind Enemies when they Stun you<div>";
            break;
        case "Blood Rush":
            return "<div>6% increased Skill Speed<div><div>6% of Skill Mana Costs Converted to Life Costs<div>";
            break;
        case "Final Barrage":
            return "<div>20% increased Cast Speed when on Low Life<div><div>10% reduced Cast Speed when on Full Life<div>";
            break;
        case "Casting Cascade":
            return "<div>15% reduced Spell Damage<div><div>6% increased Cast Speed for each different Non-Instant Spell you've Cast Recently<div>";
            break;
        case "Effervescent":
            return "<div>4% increased Cast Speed for each different Non-Instant Spell you've Cast Recently<div>";
            break;
        case "Overzealous":
            return "<div>16% increased Cast Speed<div><div>15% increased Mana Cost of Skills<div>";
            break;
        case "Spiral into Mania":
            return "<div>10% increased Cast Speed<div><div>+7% to Chaos Resistance<div>";
            break;
        case "Spell Haste":
            return "<div>15% increased Evasion Rating<div><div>8% increased Cast Speed<div>";
            break;
        case "Practiced Signs":
            return "<div>6% increased Cast Speed<div>";
            break;
        case "Erraticism":
            return "<div>16% increased Cast Speed if you've dealt a Critical Hit Recently<div><div>10% reduced Critical Hit Chance<div>";
            break;
        case "Mental Alacrity":
            return "<div>5% increased Cast Speed<div><div>15% increased Mana Regeneration Rate<div><div>+10 to Intelligence<div>";
            break;
        case "Hulking Smash":
            return "<div>30% increased Stun Buildup<div><div>+15 to Strength<div>";
            break;
        case "Titanic":
            return "<div>30% increased Stun Buildup<div><div>30% increased Stun Threshold<div><div>5% increased Strength<div>";
            break;
        case "Cranial Impact":
            return "<div>30% increased Stun Buildup<div><div>Gain an Endurance Charge when you Heavy Stun a Rare or Unique Enemy<div>";
            break;
        case "Perfect Opportunity":
            return "<div>30% increased Stun Buildup<div><div>Damage with Hits is Lucky against Heavy Stunned Enemies<div>";
            break;
        case "Shattering Blow":
            return "<div>Break 50% of Armour on Heavy Stunning an Enemy<div>";
            break;
        case "Flip the Script":
            return "<div>Recover 20% of Life when you Heavy Stun a Rare or Unique Enemy<div>";
            break;
        case "Ignore Pain":
            return "<div>Gain 3 Rage when Hit by an Enemy<div><div>Every Rage also grants 2% increased Stun Threshold<div>";
            break;
        case "Battle Trance":
            return "<div>+8 to Maximum Rage<div>";
            break;
        case "Prolonged Fury":
            return "<div>Inherent loss of Rage is 25% slower<div>";
            break;
        case "Unforgiving":
            return "<div>Inherent Rage Loss starts 1 second later<div><div>+4 to Maximum Rage<div>";
            break;
        case "Vengeful Fury":
            return "<div>Gain 5 Rage when Hit by an Enemy<div><div>Every Rage also grants 1% increased Armour<div>";
            break;
        case "Sudden Infuriation":
            return "<div>3% chance that if you would gain Rage on Hit, you instead gain up to your maximum Rage<div>";
            break;
        case "Deep Wounds":
            return "<div>Attack Hits Aggravate any Bleeding on targets which is older than 4 seconds<div>";
            break;
        case "Bloodletting":
            return "<div>10% chance to inflict Bleeding on Hit<div><div>15% increased Magnitude of Bleeding you inflict<div>";
            break;
        case "Perfectly Placed Knife":
            return "<div>30% increased Critical Hit Chance against Bleeding Enemies<div><div>20% chance to Aggravate Bleeding on targets you Critically Hit with Attacks<div>";
            break;
        case "Aggravation":
            return "<div>10% chance to Aggravate Bleeding on targets you Hit with Attacks<div>";
            break;
        case "Bleeding Out":
            return "<div>+250 to Accuracy against Bleeding Enemies<div><div>Bleeding you inflict deals Damage 10% faster<div>";
            break;
        case "Immolation":
            return "<div>25% increased Magnitude of Ignite you inflict<div><div>+10 to Strength<div>";
            break;
        case "Slow Burn":
            return "<div>20% increased Ignite Duration on Enemies<div><div>20% increased Magnitude of Ignite you inflict<div>";
            break;
        case "Firestarter":
            return "<div>40% increased chance to Ignite<div><div>Enemies Ignited by you have -5% to Fire Resistance<div>";
            break;
        case "Burnout":
            return "<div>Ignites you inflict deal Damage 15% faster<div>";
            break;
        case "Inescapable Cold":
            return "<div>40% increased Freeze Buildup<div><div>20% increased Freeze Duration on Enemies<div>";
            break;
        case "Shattering":
            return "<div>25% increased Freeze Buildup<div><div>15% increased Chill Duration on Enemies<div><div>15% increased Magnitude of Chill you inflict<div>";
            break;
        case "Chilled to the Bone":
            return "<div>20% increased Chill Duration on Enemies<div><div>30% increased Magnitude of Chill you inflict<div>";
            break;
        case "Perpetual Freeze":
            return "<div>15% increased Freeze Buildup<div><div>15% increased Chill and Freeze Duration on Enemies<div>";
            break;
        case "Branching Bolts":
            return "<div>60% chance for Lightning Skills to Chain an additional time<div>";
            break;
        case "Frazzled":
            return "<div>15% increased Mana Regeneration Rate<div><div>30% increased Magnitude of Shock you inflict<div>";
            break;
        case "General Electric":
            return "<div>40% increased chance to Shock<div><div>5% increased Attack and Cast Speed with Lightning Skills<div>";
            break;
        case "Drenched":
            return "<div>40% increased chance to Shock<div><div>Gain 5% of Lightning Damage as Extra Cold Damage<div>";
            break;
        case "Rattled":
            return "<div>+20 to maximum Mana<div><div>50% increased Shock Duration<div>";
            break;
        case "Harmonic Generator":
            return "<div>25% increased Critical Hit Chance against Shocked Enemies<div><div>40% increased Magnitude of Shock you inflict with Critical Hits<div>";
            break;
        case "Escalating Toxins":
            return "<div>10% increased Poison Duration for each Poison you have inflicted Recently, up to a maximum of 100%<div>";
            break;
        case "Building Toxins":
            return "<div>25% reduced Poison Duration<div><div>Targets can be affected by +1 of your Poisons at the same time<div>";
            break;
        case "Crippling Toxins":
            return "<div>25% chance for Attacks to Maim on Hit against Poisoned Enemies<div><div>25% increased Magnitude of Poison you inflict<div>";
            break;
        case "Leeching Toxins":
            return "<div>30% increased Magnitude of Poison you inflict<div><div>Recover 2% of Life on Killing a Poisoned Enemy<div>";
            break;
        case "Lasting Toxins":
            return "<div>10% increased Skill Effect Duration<div><div>50% increased Poison Duration<div>";
            break;
        case "Low Tolerance":
            return "<div>60% increased Effect of Poison you inflict on targets that are not Poisoned<div>";
            break;
        case "Stacking Toxins":
            return "<div>Targets can be affected by +1 of your Poisons at the same time<div><div>20% reduced Magnitude of Poison you inflict<div>";
            break;
        case "Frenetic":
            return "<div>5% chance that if you would gain Frenzy Charges, you instead gain up to your maximum number of Frenzy Charges<div><div>+1 to Maximum Frenzy Charges<div>";
            break;
        case "Savagery":
            return "<div>50% increased Evasion Rating if you've consumed a Frenzy Charge Recently<div><div>+1 to Maximum Frenzy Charges<div>";
            break;
        case "Fervour":
            return "<div>+2 to Maximum Frenzy Charges<div>";
            break;
        case "Endurance":
            return "<div>+2 to Maximum Endurance Charges<div>";
            break;
        case "Guts":
            return "<div>Recover 3% of Life for each Endurance Charge consumed<div><div>+1 to Maximum Endurance Charges<div>";
            break;
        case "Grit":
            return "<div>5% chance that if you would gain Endurance Charges, you instead gain up to maximum Endurance Charges<div><div>+1 to Maximum Endurance Charges<div>";
            break;
        case "Lust for Power":
            return "<div>5% chance that if you would gain Power Charges, you instead gain up toyour maximum number of Power Charges<div><div>+1 to Maximum Power Charges<div>";
            break;
        case "Overflowing Power":
            return "<div>+2 to Maximum Power Charges<div>";
            break;
        case "The Power Within":
            return "<div>20% increased Critical Damage Bonus if you've gained a Power Charge Recently<div><div>+1 to Maximum Power Charges<div>";
            break;
        case "Cacophony":
            return "<div>40% increased Damage with Warcries<div><div>Warcry Skills have 25% increased Area of Effect<div>";
            break;
        case "Vocal Empowerment":
            return "<div>Warcries Empower an additional Attack<div>";
            break;
        case "Internal Bleeding":
            return "<div>20% chance to Aggravate Bleeding on targets you Hit with Empowered Attacks<div><div>Empowered Attacks deal 30% increased Damage<div>";
            break;
        case "Bravado":
            return "<div>Empowered Attacks have 50% increased Stun Buildup<div><div>100% increased Stun Threshold during Empowered Attacks<div>";
            break;
        case "Deafening Cries":
            return "<div>25% increased Warcry Cooldown Recovery Rate<div><div>8% increased Damage for each time you've Warcried Recently<div>";
            break;
        case "Guttural Roar":
            return "<div>30% increased Warcry Speed<div><div>Warcry Skills have 30% increased Area of Effect<div>";
            break;
        case "Admonisher":
            return "<div>25% increased Warcry Speed<div><div>25% increased Warcry Cooldown Recovery Rate<div>";
            break;
        case "Bolstering Yell":
            return "<div>Empowered Attacks deal 30% increased Damage<div><div>Warcry Skills have 30% increased Area of Effect<div>";
            break;
        case "Urgent Call":
            return "<div>Recover 2% of Life and Mana when you use a Warcry<div><div>24% increased Warcry Speed<div><div>18% increased Warcry Cooldown Recovery Rate<div>";
            break;
        case "Escalation":
            return "<div>25% increased Warcry Speed<div><div>20% increased Damage for each different Warcry you've used Recently<div>";
            break;
        case "Impending Doom":
            return "<div>40% faster Curse Activation<div><div>Your Curses have 20% increased Effect if 50% of Curse Duration expired<div>";
            break;
        case "Zone of Control":
            return "<div>40% increased Area of Effect of Curses<div><div>8% increased Effect of your Curses<div><div>Enemies you Curse are Hindered, with 15% reduced Movement Speed<div>";
            break;
        case "Master of Hexes":
            return "<div>25% reduced Curse Duration<div><div>18% increased Effect of your Curses<div>";
            break;
        case "Fated End":
            return "<div>30% increased Curse Duration<div><div>Enemies Cursed by you have 50% reduced Life Regeneration Rate<div><div>Enemies you Curse cannot Recharge Energy Shield<div>";
            break;
        case "Lingering Whispers":
            return "<div>40% increased Curse Duration<div><div>10% increased Effect of your Curses<div>";
            break;
        case "Supportive Ancestors":
            return "<div>25% increased Damage while you have a Totem<div><div>Totems have 2% increased Cast Speed per Summoned Totem<div><div>Totems have 2% increased Attack Speed per Summoned Totem<div>";
            break;
        case "Carved Earth":
            return "<div>20% increased Totem Damage<div><div>6% increased Attack and Cast Speed if you've summoned a Totem Recently<div>";
            break;
        case "Watchtowers":
            return "<div>Attack Skills have +1 to maximum number of Summoned Totems<div><div>Skills that would Summon a Totem have 20% chance to Summon two Totems instead<div>";
            break;
        case "Ancestral Artifice":
            return "<div>Attack Skills have +1 to maximum number of Summoned Totems<div><div>20% increased Totem Placement range<div>";
            break;
        case "Ancestral Unity":
            return "<div>Totems have 4% increased Attack Speed per Summoned Totem<div>";
            break;
        case "Hardened Wood":
            return "<div>Totems gain +20% to all Elemental Resistances<div><div>Totems have 20% additional Physical Damage Reduction<div>";
            break;
        case "Spirit Bond":
            return "<div>30% increased Totem Life<div><div>30% increased Totem Duration<div>";
            break;
        case "Ancestral Reach":
            return "<div>25% increased Totem Placement speed<div><div>50% increased Totem Placement range<div>";
            break;
        case "Ancestral Alacrity":
            return "<div>30% increased Totem Placement speed<div><div>8% increased Attack and Cast Speed if you've summoned a Totem Recently<div>";
            break;
        case "Ancestral Conduits":
            return "<div>12% increased Attack and Cast Speed if you've summoned a Totem Recently<div>";
            break;
        case "Ancestral Mending":
            return "<div>Regenerate 1% of Life per second while you have a Totem<div><div>Totems Regenerate 3% of Life per second<div>";
            break;
        case "Deadly Swarm":
            return "<div>Minions deal 15% increased Damage<div><div>Minions have 20% increased Critical Hit Chance<div>";
            break;
        case "Lord of Horrors":
            return "<div>Minions have 12% reduced Reservation<div>";
            break;
        case "Fear of Death":
            return "<div>Minions have +150 to Accuracy Rating<div><div>25% increased Minion Accuracy Rating<div>";
            break;
        case "Dead can Dance":
            return "<div>Minions have 25% increased Evasion Rating<div><div>Your Dexterity is added to your Minions<div>";
            break;
        case "Relentless Fallen":
            return "<div>Minions have 20% increased Movement Speed<div><div>Minions have 8% increased Attack and Cast Speed<div>";
            break;
        case "Right Hand of Darkness":
            return "<div>Minions have 20% increased Area of Effect<div><div>Minions have 10% chance to inflict Withered on Hit<div>";
            break;
        case "Grip of Evil":
            return "<div>Minions have 40% increased Critical Damage Bonus<div>";
            break;
        case "Necrotic Touch":
            return "<div>Minions have 40% increased Critical Hit Chance<div>";
            break;
        case "Restless Dead":
            return "<div>Minions Revive 25% faster<div>";
            break;
        case "Growing Swarm":
            return "<div>Minions have 20% increased Area of Effect<div><div>Minions have 20% increased Cooldown Recovery Rate<div>";
            break;
        case "Gravedigger":
            return "<div>Minions Revive 15% faster<div><div>You gain 2% Life when one of your Minions is Revived<div>";
            break;
        case "Necrotised Flesh":
            return "<div>Minions have 40% increased maximum Life<div><div>Minions have 10% reduced Life Recovery rate<div>";
            break;
        case "Left Hand of Darkness":
            return "<div>Minions have 20% additional Physical Damage Reduction<div><div>Minions have +23% to Chaos Resistance<div>";
            break;
        case "Crystalline Flesh":
            return "<div>Minions have +20% to all Elemental Resistances<div><div>Minions have +5% to all Maximum Elemental Resistances<div>";
            break;
        case "Fleshcrafting":
            return "<div>Minions gain 15% of their Maximum Life as Extra Maximum Energy Shield<div>";
            break;
        case "Vile Mending":
            return "<div>Minions have 20% increased maximum Life<div><div>Minions Regenerate 3% of Life per second<div><div>Minions have +13% to Chaos Resistance<div>";
            break;
        case "Regenerative Flesh":
            return "<div>Minions Recoup 10% of Damage taken as Life<div>";
            break;
        case "Living Death":
            return "<div>Minions have +22% to all Elemental Resistances<div><div>Minions have +3% to all Maximum Elemental Resistances<div>";
            break;
        case "Entropic Incarnation":
            return "<div>Minions have +13% to Chaos Resistance<div><div>Minions gain 8% of Physical Damage as Chaos Damage<div>";
            break;
        case "Anticipation":
            return "<div>Skills Supported by Unleash have 25% increased Seal gain frequency<div>";
            break;
        case "Lasting Incantations":
            return "<div>20% increased Spell Damage<div><div>20% increased Skill Effect Duration<div>";
            break;
        case "Potent Incantation":
            return "<div>30% increased Spell Damage<div><div>5% reduced Cast Speed<div>";
            break;
        case "Spellblade":
            return "<div>32% increased Spell Damage while wielding a Melee Weapon<div><div>+10 to Dexterity<div>";
            break;
        case "Rapid Strike":
            return "<div>+30 to Accuracy Rating<div><div>8% increased Melee Attack Speed<div>";
            break;
        case "Serrated Edges":
            return "<div>10% increased Critical Hit Chance for Attacks<div><div>30% increased Attack Damage against Rare or Unique Enemies<div>";
            break;
        case "Personal Touch":
            return "<div>20% increased Melee Damage<div><div>25% increased Melee Damage against Immobilised Enemies<div>";
            break;
        case "In Your Face":
            return "<div>40% increased Melee Damage with Hits at Close Range<div>";
            break;
        case "Viciousness":
            return "<div>8% increased Melee Attack Speed<div><div>+10 to Dexterity<div>";
            break;
        case "Unerring Impact":
            return "<div>10% increased Accuracy Rating with One Handed Melee Weapons<div><div>10% increased Accuracy Rating with Two Handed Melee Weapons<div><div>+2 to Melee Strike Range<div>";
            break;
        case "Heavy Weaponry":
            return "<div>15% increased Melee Damage<div><div>15% increased Stun Buildup with Melee Damage<div><div>+15 to Strength<div>";
            break;
        case "Reaching Strike":
            return "<div>25% increased Melee Damage<div><div>+2 to Melee Strike Range<div>";
            break;
        case "Deadly Flourish":
            return "<div>20% increased Melee Critical Hit Chance<div><div>melee critical strike chance +% when on full life [20]<div>";
            break;
        case "Initiative":
            return "<div>30% increased Melee Damage when on Full Life<div><div>16% increased Attack Speed if you haven't Attacked Recently<div>";
            break;
        case "Breaking Blows":
            return "<div>30% increased Stun Buildup<div><div>15% increased Area of Effect if you have Stunned an Enemy Recently<div>";
            break;
        case "Honourless":
            return "<div>25% increased Armour if you've Hit an Enemy with a Melee Attack Recently<div><div>50% increased Melee Damage against Immobilised Enemies<div>";
            break;
        case "Smash":
            return "<div>20% increased Melee Damage<div><div>40% increased Melee Damage against Heavy Stunned enemies<div>";
            break;
        case "Maiming Strike":
            return "<div>25% increased Attack Damage<div><div>Attacks have 25% chance to Maim on Hit<div>";
            break;
        case "Prolonged Assault":
            return "<div>16% increased Attack Damage<div><div>16% increased Skill Effect Duration<div><div>Buffs on you expire 10% slower<div>";
            break;
        case "Blinding Strike":
            return "<div>24% increased Attack Damage<div><div>10% chance to Blind Enemies on Hit with Attacks<div>";
            break;
        case "Killer Instinct":
            return "<div>30% increased Attack Damage when on Full Life<div><div>50% increased Attack Damage when on Low Life<div>";
            break;
        case "Presence Present":
            return "<div>Allies in your Presence have +100 to Accuracy Rating<div><div>35% increased Attack Damage while you have an Ally in your Presence<div>";
            break;
        case "Unexpected Finesse":
            return "<div>10% increased Attack Damage<div><div>Gain Accuracy Rating equal to your Strength<div>";
            break;
        case "Kite Runner":
            return "<div>3% increased Movement Speed<div><div>15% increased Projectile Speed<div><div>15% increased Projectile Damage<div>";
            break;
        case "Careful Aim":
            return "<div>16% increased Projectile Damage<div><div>40% increased Accuracy Rating at Close Range<div>";
            break;
        case "Heavy Ammunition":
            return "<div>8% reduced Attack Speed<div><div>40% increased Projectile Damage<div><div>40% increased Projectile Stun Buildup<div>";
            break;
        case "Trick Shot":
            return "<div>Projectiles have 15% chance to Chain an additional time from terrain<div>";
            break;
        case "Piercing Shot":
            return "<div>50% chance to Pierce an Enemy<div>";
            break;
        case "Split Shot":
            return "<div>Projectiles have 75% chance for an additional Projectile when Forking<div>";
            break;
        case "Catapult":
            return "<div>15% increased Projectile Speed<div><div>15% increased Area of Effect for Attacks<div>";
            break;
        case "Short Shot":
            return "<div>15% reduced Projectile Speed<div><div>20% increased Projectile Damage<div>";
            break;
        case "Close Confines":
            return "<div>25% chance for Projectiles to Pierce Enemies within 3m distance of you<div>";
            break;
        case "Shrapnel":
            return "<div>30% chance to Pierce an Enemy<div><div>Projectiles have 10% chance to Chain an additional time from terrain<div>";
            break;
        case "Advanced Munitions":
            return "<div>25% increased chance to inflict Ailments with Projectiles<div>";
            break;
        case "Total Incineration":
            return "<div>25% increased Critical Damage Bonus against Burning Enemies<div><div>10% chance to refresh Ignite Duration on Critical Hit<div>";
            break;
        case "Burning Nature":
            return "<div>25% increased Fire Damage<div><div>15% increased Ignite Duration on Enemies<div>";
            break;
        case "Sigil of Fire":
            return "<div>30% increased Damage with Hits against Ignited Enemies<div>";
            break;
        case "Path of Flame":
            return "<div>18% increased Fire Damage<div><div>30% increased chance to Ignite<div><div>Witch: 15% increased Critical Hit Chance for Spells<div>";
            break;
        case "Burn Away":
            return "<div>15% increased Fire Damage<div><div>Damage Penetrates 10% Fire Resistance<div><div>10% increased Magnitude of Ignite you inflict<div>";
            break;
        case "Echoing Flames":
            return "<div>Mastery: Bestiary<div><div><div><div>30% increased Elemental Damage if you've Ignited an Enemy Recently<div>";
            break;
        case "Intense Flames":
            return "<div>35% increased Damage with Hits against Burning Enemies<div>";
            break;
        case "Explosive Impact":
            return "<div>15% increased Area of Effect<div><div>Burning Enemies you kill have a 5% chance to Explode, dealing a tenth of their maximum Life as Fire Damage<div>";
            break;
        case "Volcanic Skin":
            return "<div>Gain 8% of Damage as Extra Fire Damage<div><div>+20% to Fire Resistance<div>";
            break;
        case "Burning Strikes":
            return "<div>Gain 12% of Physical Damage as Extra Fire Damage<div>";
            break;
        case "Incendiary":
            return "<div>30% increased chance to Ignite<div><div>30% increased Damage with Hits against Burning Enemies<div>";
            break;
        case "Fulmination":
            return "<div>40% increased chance to Ignite<div><div>40% increased Damage with Hits against Ignited Enemies<div>";
            break;
        case "Cold Nature":
            return "<div>25% increased Cold Damage<div><div>15% increased Chill Duration on Enemies<div>";
            break;
        case "Sigil of Ice":
            return "<div>30% increased Damage with Hits against Chilled Enemies<div>";
            break;
        case "Thin Ice":
            return "<div>20% increased Freeze Buildup<div><div>50% increased Damage with Hits against Frozen Enemies<div>";
            break;
        case "Heavy Frost":
            return "<div>20% increased Freeze Buildup<div><div>Hits ignore non-negative Elemental Resistances of Frozen Enemies<div>";
            break;
        case "Path of Winter":
            return "<div>18% increased Cold Damage<div><div>30% increased Freeze Buildup<div><div>Witch: Minions deal 15% increased Damage<div>";
            break;
        case "Harsh Winter":
            return "<div>8% increased Cast Speed with Cold Skills<div><div>16% increased Skill Effect Duration<div>";
            break;
        case "Climate Change":
            return "<div>20% increased Freeze Buildup<div><div>Gain 25% of Cold Damage as Extra Fire Damage against Frozen Enemies<div>";
            break;
        case "Echoing Frost":
            return "<div>30% increased Elemental Damage if you've Chilled an Enemy Recently<div>";
            break;
        case "Endless Blizzard":
            return "<div>+1 to Level of all Cold Skills<div>";
            break;
        case "Essence of the Mountain":
            return "<div>Gain 5% of Damage as Extra Cold Damage<div><div>20% increased Freeze Buildup<div>";
            break;
        case "Pure Power":
            return "<div>2% increased Lightning Damage per 10 Intelligence<div>";
            break;
        case "Electrifying Nature":
            return "<div>25% increased Lightning Damage<div><div>15% increased Shock Duration<div>";
            break;
        case "Sigil of Lightning":
            return "<div>30% increased Damage with Hits against Shocked Enemies<div>";
            break;
        case "Power Conduction":
            return "<div>25% increased Shock Duration<div><div>25% increased Magnitude of Shock you inflict<div>";
            break;
        case "Wild Storm":
            return "<div>15% more Maximum Lightning Damage<div>";
            break;
        case "Path of Storms":
            return "<div>18% increased Lightning Damage<div><div>30% increased chance to Shock<div><div>Witch: 18% increased Chaos Damage<div>";
            break;
        case "Flash Storm":
            return "<div>30% increased chance to Shock<div><div>Damage Penetrates 15% Lightning Resistance<div>";
            break;
        case "Thunderstruck":
            return "<div>50% increased Electrocute Buildup against Shocked Enemies<div><div>50% increased Shock Chance against Electrocuted Enemies<div>";
            break;
        case "Spreading Shocks":
            return "<div>Shocking Hits have a 50% chance to also Shock enemies in a 1.5 metre radius<div>";
            break;
        case "Endless Circuit":
            return "<div>25% chance on Consuming a Shock on an Enemy to reapply it<div>";
            break;
        case "Lightning Quick":
            return "<div>14% increased Lightning Damage<div><div>8% increased Attack and Cast Speed with Lightning Skills<div>";
            break;
        case "Echoing Thunder":
            return "<div>30% increased Elemental Damage if you've Shocked an Enemy Recently<div>";
            break;
        case "Essence of the Storm":
            return "<div>Gain 5% of Damage as Extra Lightning Damage<div><div>30% increased chance to Shock<div>";
            break;
        case "Alternating Current":
            return "<div>25% increased Mana Regeneration Rate if you have Shocked an Enemy Recently<div><div>20% increased Magnitude of Shock you inflict<div>";
            break;
        case "Pure Chaos":
            return "<div>Gain 11% of Damage as Extra Chaos Damage<div>";
            break;
        case "Dark Entries":
            return "<div>+1 to Level of all Chaos Skills<div>";
            break;
        case "Spaghettification":
            return "<div>3% increased Movement Speed<div><div>29% increased Chaos Damage<div><div>-13% to Chaos Resistance<div>";
            break;
        case "Event Horizon":
            return "<div>53% increased Chaos Damage<div><div>Lose 3% of Life and Energy Shield when you use a Chaos Skill<div>";
            break;
        case "Spiral into Insanity":
            return "<div>29% increased Chaos Damage<div><div>10% increased Global Defences<div>";
            break;
        case "Stylebender":
            return "<div>Break 30% increased Armour on enemies affected by Ailments<div><div>+10 to Strength<div><div>25% increased Physical Damage<div>";
            break;
        case "Void":
            return "<div>29% increased Chaos Damage<div><div>Enemies you Curse have -3% to Chaos Resistance<div>";
            break;
        case "Lingering Horror":
            return "<div>23% increased Chaos Damage<div><div>15% increased Skill Effect Duration<div>";
            break;
        case "Wither Away":
            return "<div>Unwithered enemies are Withered for 8 seconds when they enter your Presence<div><div>20% increased Effect of Withered<div>";
            break;
        case "Shatter Palm":
            return "<div>30% increased Stun Buildup<div><div>30% increased Daze Buildup<div>";
            break;
        case "Cut to the Bone":
            return "<div>Break Armour on Critical Hit with Spells equal to 10% of Physical Damage dealt<div><div>10% chance to inflict Bleeding on Hit<div><div>20% increased Physical Damage<div>";
            break;
        case "Staggering Palm":
            return "<div>20% increased Critical Damage Bonus<div><div>20% increased Knockback Distance<div><div>20% increased Physical Damage<div>";
            break;
        case "Madness in the Bones":
            return "<div>Gain 6% of Physical Damage as extra Chaos Damage<div>";
            break;
        case "Shredding Force":
            return "<div>15% increased Critical Hit Chance for Spells<div><div>15% increased Critical Spell Damage Bonus<div><div>15% increased Magnitude of Damaging Ailments you inflict with Critical Hits<div>";
            break;
        case "Blood Tearing":
            return "<div>15% increased Magnitude of Bleeding you inflict<div><div>25% increased Physical Damage<div>";
            break;
        case "Tempered Mind":
            return "<div>20% increased Critical Damage Bonus<div><div>+10 to Strength<div><div>20% increased Physical Damage<div>";
            break;
        case "Battle Fever":
            return "<div>5% increased Attack and Cast Speed<div><div>25% increased Physical Damage<div>";
            break;
        case "Unbound Forces":
            return "<div>40% increased Chill Duration on Enemies<div><div>40% increased Shock Duration<div><div>25% increased Magnitude of Chill you inflict<div>";
            break;
        case "Harness the Elements":
            return "<div>15% increased Damage for each type of Elemental Ailment on Enemy<div>";
            break;
        case "Stormcharged":
            return "<div>40% increased Elemental Damage if you've dealt a Critical Hit Recently<div><div>20% increased Critical Hit Chance<div>";
            break;
        case "Overexposure":
            return "<div>30% increased Cold Exposure Effect<div><div>30% increased Fire Exposure Effect<div><div>30% increased Lightning Exposure Effect<div>";
            break;
        case "Breaking Point":
            return "<div>10% increased Duration of Elemental Ailments on Enemies<div><div>30% increased Magnitude of Non-Damaging Ailments you inflict<div>";
            break;
        case "All Natural":
            return "<div>+5% to all Elemental Resistances<div><div>30% increased Elemental Damage<div>";
            break;
        case "Stormbreaker":
            return "<div>15% increased Damage for each type of Elemental Ailment on Enemy<div>";
            break;
        case "Mind Eraser":
            return "<div>10% increased Mana Regeneration Rate<div><div>6% of Damage taken Recouped as Mana<div>";
            break;
        case "Sturdy Mind":
            return "<div>+30 to maximum Mana<div><div>14% increased Mana Regeneration Rate<div>";
            break;
        case "Mana Blessing":
            return "<div>+20 to maximum Mana<div><div>5% increased maximum Mana<div>";
            break;
        case "Lucidity":
            return "<div>8% of Damage is taken from Mana before Life<div><div>+15 to Intelligence<div>";
            break;
        case "Mental Toughness":
            return "<div>18% increased Mana Regeneration Rate<div><div>15% reduced Mana Cost while not on Low Mana<div>";
            break;
        case "Arcane Intensity":
            return "<div>3% increased Spell Damage per 100 maximum Mana<div>";
            break;
        case "Raw Mana":
            return "<div>12% increased maximum Mana<div><div>10% increased Mana Cost of Skills<div>";
            break;
        case "Adverse Growth":
            return "<div>20% reduced Life Regeneration rate<div><div>20% of Damage taken Recouped as Mana<div>";
            break;
        case "Soul Bloom":
            return "<div>15% increased Energy Shield Recovery rate<div>";
            break;
        case "Investing Energies":
            return "<div>40% increased Mana Regeneration Rate while stationary<div><div>20% reduced Mana Regeneration Rate while moving<div>";
            break;
        case "Conservative Casting":
            return "<div>20% increased Mana Regeneration Rate<div><div>8% reduced Mana Cost of Skills<div>";
            break;
        case "Full Recovery":
            return "<div>15% increased Life Regeneration rate<div><div>15% increased Mana Regeneration Rate<div>";
            break;
        case "Arcane Blossom":
            return "<div>15% increased Mana Recovery rate<div>";
            break;
        case "Aspiring Genius":
            return "<div>20% increased Mana Regeneration Rate<div><div>10% chance to Gain Arcane Surge when you deal a Critical Hit<div>";
            break;
        case "Open Mind":
            return "<div>25% increased Mana Regeneration Rate<div>";
            break;
        case "Touch the Arcane":
            return "<div>40% increased effect of Arcane Surge on you<div>";
            break;
        case "Ether Flow":
            return "<div>25% reduced Mana Regeneration Rate while stationary<div><div>50% increased Mana Regeneration Rate while moving<div>";
            break;
        case "Price of Freedom":
            return "<div>10% reduced Mana Cost of Attacks<div><div>18% of Skill Mana Costs Converted to Life Costs<div>";
            break;
        case "Suffusion":
            return "<div>30% increased amount of Mana Leeched<div><div>Unaffected by Chill while Leeching Mana<div>";
            break;
        case "Siphon":
            return "<div>Recover 2% of Mana on Kill<div><div>25% increased amount of Mana Leeched<div>";
            break;
        case "Manifold Method":
            return "<div>50% increased amount of Mana Leeched<div><div>25% increased chance to inflict Ailments against Rare or Unique Enemies<div>";
            break;
        case "Immortal Thirst":
            return "<div>15% increased maximum Energy Shield<div><div>25% increased amount of Mana Leeched<div>";
            break;
        case "Altered Brain Chemistry":
            return "<div>25% increased Mana Recovery from Flasks<div><div>10% increased Mana Recovery Rate during Effect of any Mana Flask<div>";
            break;
        case "Wellspring":
            return "<div>30% increased Mana Recovery from Flasks<div><div>8% increased Attack and Cast Speed during Effect of any Mana Flask<div>";
            break;
        case "Arcane Alchemy":
            return "<div>Mana Flasks gain 0.1 charges per Second<div><div>+10 to Intelligence<div>";
            break;
        case "Warding Potions":
            return "<div>10% reduced Flask Charges used from Mana Flasks<div><div>Remove a Curse when you use a Mana Flask<div>";
            break;
        case "Waters of Life":
            return "<div>Recover 2% of Life when you use a Mana Flask<div><div>Mana Flasks gain 0.1 charges per Second<div>";
            break;
        case "Finesse":
            return "<div>10% increased Accuracy Rating<div><div>Gain Accuracy Rating equal to your Intelligence<div>";
            break;
        case "Determined Precision":
            return "<div>30% increased Accuracy Rating at Close Range<div><div>+10 to Dexterity<div>";
            break;
        case "Eagle Eye":
            return "<div>+30 to Accuracy Rating<div><div>10% increased Accuracy Rating<div>";
            break;
        case "Locked On":
            return "<div>15% increased Critical Hit Chance for Attacks<div><div>15% increased Accuracy Rating<div>";
            break;
        case "Falcon Dive":
            return "<div>1% increased Attack Speed per 250 Accuracy Rating<div>";
            break;
        case "Near Sighted":
            return "<div>60% increased Accuracy Rating at Close Range<div>";
            break;
        case "Far Sighted":
            return "<div>30% reduced penalty to Accuracy Rating at range<div>";
            break;
        case "Sharp Sight":
            return "<div>5% increased Attack Speed<div><div>30% increased Accuracy Rating against Rare or Unique Enemies<div>";
            break;
        case "Pinpoint Shot":
            return "<div>Attacks gain increased Accuracy Rating equal to their Critical Hit Chance<div>";
            break;
        case "Coming Calamity":
            return "<div>50% increased Cold Damage while affected by Herald of Ice<div><div>50% increased Fire Damage while affected by Herald of Ash<div><div>50% increased Lightning Damage while affected by Herald of Thunder<div>";
            break;
        case "Fate Finding":
            return "<div>15% reduced Reservation of Herald Skills<div>";
            break;
        case "Apocalypse":
            return "<div>40% reduced Damage<div><div>+6% to Critical Hit Chance of Herald Skills<div>";
            break;
        case "Doomsayer":
            return "<div>Herald Skills have 30% increased Area of Effect<div><div>Herald Skills deal 30% increased Damage<div>";
            break;
        case "Bolstering Presence":
            return "<div>20% increased Effect of Auras from your Aura Skills<div>";
            break;
        case "Energise":
            return "<div>25% chance for Trigger skills to refund half of Energy Spent<div>";
            break;
        case "Invocated Efficiency":
            return "<div>Recover 3% of Mana when you Invoke a Spell<div><div>Triggered Spells deal 45% increased Spell Damage<div>";
            break;
        case "Dynamism":
            return "<div>40% increased Damage if you've Triggered a Skill Recently<div><div>Meta Skills gain 15% increased Energy<div>";
            break;
        case "Protraction":
            return "<div>20% increased Skill Effect Duration<div><div>15% increased Duration of Damaging Ailments on Enemies<div>";
            break;
        case "Preservation":
            return "<div>25% increased Skill Effect Duration<div>";
            break;
        case "Tides of Change":
            return "<div>25% increased Skill Effect Duration<div>";
            break;
        case "Forthcoming":
            return "<div>16% reduced Skill Effect Duration<div><div>10% increased Cooldown Recovery Rate<div>";
            break;
        case "Twinned Tethers":
            return "<div>Link Skills Link to 1 additional random target<div>";
            break;
        case "Strong Links":
            return "<div>Link Skills have 20% increased Buff Effect<div><div>Link Skills have 20% increased Skill Effect Duration<div>";
            break;
        case "Spirit Bonds":
            return "<div>Link Skills can target Damageable Minions<div>";
            break;
        case "Swift Claw":
            return "<div>25% increased Attack Damage<div>";
            break;
        case "Tough Claw":
            return "<div>25% increased Attack Damage<div>";
            break;
        case "Sharpened Claw":
            return "<div>25% increased Attack Damage<div>";
            break;
        case "Bestial Rage":
            return "<div>25% increased Attack Damage<div>";
            break;
        case "Feral Force":
            return "<div>25% increased Attack Damage<div>";
            break;
        case "First Approach":
            return "<div>50% increased Critical Hit Chance against Enemies on Full Life<div><div>Cannot be Blinded while on Full Life<div><div>80% increased Damage with Hits against Enemies that are on Full Life<div>";
            break;
        case "Finishing Blows":
            return "<div>60% increased Damage with Hits against Enemies that are on Low Life<div><div>30% increased Stun Buildup against Enemies that are on Low Life<div>";
            break;
        case "Stars Aligned":
            return "<div>Damage with Hits is Lucky against Enemies that are on Low Life<div>";
            break;
        case "Mental Perseverance":
            return "<div>10% of Damage is taken from Mana before Life<div>";
            break;
        case "Two-Pronged Attack":
            return "<div>Minions deal 25% increased Damage<div>";
            break;
        case "Resourceful Ally":
            return "<div>Minions deal 25% increased Damage<div>";
            break;
        case "Sturdy Ally":
            return "<div>Minions have 25% increased maximum Life<div>";
            break;
        case "Unimpeded":
            return "<div>24% reduced Slowing Potency of Debuffs on You<div>";
            break;
        case "Near at Hand":
            return "<div>16% reduced Skill Effect Duration<div><div>10% reduced Slowing Potency of Debuffs on You<div>";
            break;
        case "Time Manipulation":
            return "<div>Debuffs you inflict have 10% increased Slow Magnitude<div><div>Debuffs on you expire 20% faster<div>";
            break;
        case "Chronomancy":
            return "<div>20% increased Skill Effect Duration<div><div>Debuffs you inflict have 10% increased Slow Magnitude<div>";
            break;
        case "Hindered Capabilities":
            return "<div>30% increased Damage with Hits against Hindered Enemies<div><div>Debuffs you inflict have 10% increased Slow Magnitude<div>";
            break;
        case "Quick-change Act":
            return "<div>50% increased Weapon Swap Speed<div>";
            break;
        case "Catalysis":
            return "<div>20% increased Elemental Damage with Attacks<div><div>5% of Physical Damage from Hits taken as Damage of a Random Element<div>";
            break;
        case "Crystal Elixir":
            return "<div>40% increased Elemental Damage with Attack Skills during any Flask Effect<div>";
            break;
        case "Forces of Nature":
            return "<div>Attack Damage Penetrates 15% of Enemy Elemental Resistances<div>";
            break;
        case "Emboldened Avatar":
            return "<div>25% increased chance to Ignite<div><div>25% increased Freeze Buildup<div><div>25% increased chance to Shock<div>";
            break;
        case "Pocket Sand":
            return "<div>50% increased Blind Effect<div>";
            break;
        case "Acceleration":
            return "<div>3% increased Movement Speed<div><div>10% increased Skill Speed<div>";
            break;
        case "Adrenaline Rush":
            return "<div>4% increased Movement Speed if you've Killed Recently<div><div>8% increased Attack Speed if you've Killed Recently<div>";
            break;
        case "Primal Growth":
            return "<div>20% increased Area of Effect if you've Killed Recently<div><div>10% increased Area of Effect for Attacks<div>";
            break;
        case "Impact Area":
            return "<div>15% increased Area of Effect if you have Stunned an Enemy Recently<div><div>15% increased Area of Effect for Attacks<div>";
            break;
        case "Devastation":
            return "<div>15% increased Area of Effect for Attacks<div><div>15% increased Attack Area Damage<div>";
            break;
        case "Impact Force":
            return "<div>20% increased Stun Buildup<div><div>25% increased Attack Area Damage<div>";
            break;
        case "Authority":
            return "<div>20% increased Area of Effect for Attacks<div><div>10% increased Cooldown Recovery Rate<div>";
            break;
        case "Crushing Judgement":
            return "<div>25% increased Armour Break Duration<div><div>25% increased Attack Area Damage<div>";
            break;
        case "Reverberating Impact":
            return "<div>Break 25% increased Armour<div><div>16% increased Area of Effect for Attacks<div>";
            break;
        case "Roil":
            return "<div>10% reduced Spell Area Damage<div><div>Spell Skills have 30% increased Area of Effect<div>";
            break;
        case "Repulsion":
            return "<div>Area Skills have 20% chance to Knock Enemies Back on Hit<div><div>20% increased Spell Area Damage<div>";
            break;
        case "Echoing Pulse":
            return "<div>Final Repeat of Spells has 40% increased Area of Effect<div>";
            break;
        case "Reverberation":
            return "<div>Spell Skills have 20% increased Area of Effect<div>";
            break;
        case "Ruin":
            return "<div>35% increased Spell Area Damage<div><div>Spell Skills have 10% reduced Area of Effect<div>";
            break;
        case "Turn the Clock Back":
            return "<div>20% reduced Projectile Speed for Spell Skills<div>";
            break;
        case "Turn the Clock Forward":
            return "<div>20% increased Projectile Speed for Spell Skills<div>";
            break;
        case "Psychic Fragmentation":
            return "<div>12% chance for Spell Skills to fire 2 additional Projectiles<div>";
            break;
        case "Radial Force":
            return "<div>10% increased Area of Effect<div><div>10% increased Area Damage<div>";
            break;
        case "Cull the Hordes":
            return "<div>25% increased Culling Strike Threshold<div>";
            break;
        case "Giantslayer":
            return "<div>25% increased Damage with Hits against Rare and Unique Enemies<div><div>20% increased Accuracy Rating against Rare or Unique Enemies<div><div>20% increased chance to inflict Ailments against Rare or Unique Enemies<div>";
            break;
        case "Crushing Verdict":
            return "<div>5% reduced Attack Speed<div><div>30% increased Stun Buildup<div><div>50% increased Attack Damage<div>";
            break;
        case "Lasting Trauma":
            return "<div>5% reduced Attack Speed<div><div>30% increased Magnitude of Ailments you inflict<div><div>20% increased Duration of Damaging Ailments on Enemies<div>";
            break;
        case "Seeing Stars":
            return "<div>25% increased Daze Buildup<div><div>25% increased Daze Duration<div>";
            break;
        case "Stupefy":
            return "<div>25% increased Critical Hit Chance against Dazed Enemies<div><div>25% increased Damage against Dazed Enemies<div><div>25% increased Daze Buildup<div>";
            break;
        case "Revenge":
            return "<div>12% increased Attack Speed if you've been Hit Recently<div>";
            break;
        case "Retaliation":
            return "<div>75% increased Thorns damage if you've Blocked Recently<div>";
            break;
        case "Spiked Armour":
            return "<div>Gain Physical Thorns damage equal to 2% of Armour from equipped Body Armour<div>";
            break;
        case "Vengeance":
            return "<div>40% increased Thorns damage<div>";
            break;
        case "Thornhide":
            return "<div>+5% to Thorns Critical Hit Chance<div>";
            break;
        case "In the Thick of It":
            return "<div>Regenerate 2.5% of Life per second while Surrounded<div>";
            break;
        case "Thrill of Battle":
            return "<div>20% increased Attack Speed while Surrounded<div>";
            break;
        case "Silent Guardian":
            return "<div>Minions have +20% to all Elemental Resistances<div>";
            break;
        case "Bringer of Order":
            return "<div>Minions deal 25% increased Damage<div>";
            break;
        case "Holy Protector":
            return "<div>Minions have 25% increased maximum Life<div>";
            break;
        case "Aftershocks":
            return "<div>40% increased Aftershock Area of Effect<div>";
            break;
        case "Hold Focus":
            return "<div>15% increased Effect of your Mark Skills<div>";
            break;
        case "Marked for Death":
            return "<div>Culling Strike against Enemies you Mark<div>";
            break;
        case "No Escape":
            return "<div>Mark Skills have 60% increased Skill Effect Duration<div>";
            break;
        case "Break Focus":
            return "<div>Enemies you Mark have 15% reduced Accuracy Rating<div>";
            break;
        case "Marked for Sickness":
            return "<div>Enemies you Mark take 10% increased Damage<div>";
            break;
        case "Marked Agility":
            return "<div>30% reduced Mana Cost of Mark Skills<div><div>4% increased Movement Speed if you've cast a Mark Spell Recently<div>";
            break;
        case "Unsight":
            return "<div>Enemies near Enemies you Mark are Blinded<div><div>Enemies you Mark cannot deal Critical Hits<div>";
            break;
        case "Stigmata":
            return "<div>Offerings have 30% increased Maximum Life<div><div>Recover 3% of Life when you create an Offering<div>";
            break;
        case "Meat Recycling":
            return "<div>15% chance to not destroy Corpses when Consuming Corpses<div>";
            break;
        case "Lust for Sacrifice":
            return "<div>40% increased Minion Damage while you have at least two different active Offerings<div>";
            break;
        case "Vile Wounds":
            return "<div>33% increased Damage with Hits against Enemies affected by Elemental Ailments<div>";
            break;
        case "Exploit":
            return "<div>25% increased Damage with Hits against Enemies affected by Elemental Ailments<div><div>15% increased Duration of Ignite, Shock and Chill on Enemies<div>";
            break;
        case "Exploit the Elements":
            return "<div>24% increased Damage with Hits against Enemies affected by Elemental Ailments<div><div>30% increased chance to inflict Ailments against Rare or Unique Enemies<div>";
            break;
        case "Clean Shot":
            return "<div>15% chance to Pierce an Enemy<div><div>15% increased Projectile Damage<div>";
            break;
        case "Ricochet":
            return "<div>15% increased Projectile Damage<div><div>Projectiles have 10% chance to Chain an additional time from terrain<div>";
            break;
        case "Stand and Deliver":
            return "<div>Projectiles have 40% increased Critical Damage Bonus against Enemies within 2m<div><div>Projectiles deal 25% increased Damage with Hits against Enemies within 2m<div>";
            break;
        case "Death from Afar":
            return "<div>Projectiles have 25% increased Critical Hit Chance against Enemies further than 6m<div><div>Projectiles deal 25% increased Damage with Hits against Enemies further than 6m<div>";
            break;
        case "Brutal":
            return "<div>10% increased Stun Buildup<div><div>16% increased Melee Damage<div><div>+10 to Strength<div>";
            break;
        case "Relentless":
            return "<div>15% increased Armour<div><div>Regenerate 0.5% of Life per second<div><div>+10 to Strength<div>";
            break;
        case "Blur":
            return "<div>4% increased Movement Speed<div><div>20% increased Evasion Rating<div><div>+10 to Dexterity<div>";
            break;
        case "Honed Instincts":
            return "<div>8% increased Projectile Speed<div><div>8% increased Attack Speed<div><div>+10 to Dexterity<div>";
            break;
        case "Raw Power":
            return "<div>20% increased Spell Damage<div><div>+10 to Intelligence<div><div>Witch: 16% increased Spell Damage<div>";
            break;
        case "Pure Energy":
            return "<div>30% increased maximum Energy Shield<div><div>+10 to Intelligence<div>";
            break;
        case "Battle-hardened":
            return "<div>Hits against you have 20% reduced Critical Damage Bonus<div><div>20% increased Armour and Evasion Rating<div><div>+5 to Strength and Dexterity<div>";
            break;
        case "Remorseless":
            return "<div>15% increased Projectile Damage<div><div>30% increased Stun Buildup against enemies within 2 metres<div><div>+5 to Strength and Dexterity<div>";
            break;
        case "Relentless Vindicator":
            return "<div>10% increased Damage<div><div>10% increased Critical Hit Chance<div><div>+5 to Strength and Intelligence<div>";
            break;
        case "Devoted Protector":
            return "<div>10% increased Mana Regeneration Rate<div><div>Regenerate 0.5% of Life per second<div><div>+5 to Strength and Intelligence<div>";
            break;
        case "Flow Like Water":
            return "<div>8% increased Attack and Cast Speed<div><div>+5 to Dexterity and Intelligence<div>";
            break;
        case "Step Like Mist":
            return "<div>4% increased Movement Speed<div><div>15% increased Mana Regeneration Rate<div><div>+5 to Dexterity and Intelligence<div>";
            break;
        case "Sudden Escalation":
            return "<div>16% increased Critical Hit Chance for Spells<div><div>8% increased Cast Speed if you've dealt a Critical Hit Recently<div>";
            break;
        case "Critical Overload":
            return "<div>15% increased Critical Hit Chance for Spells<div><div>15% increased Spell Damage if you've dealt a Critical Hit Recently<div>";
            break;
        case "Controlling Magic":
            return "<div>25% increased Critical Hit Chance for Spells<div><div>Hits have 25% reduced Critical Hit Chance against you<div>";
            break;
        case "Equilibrium":
            return "<div>30% increased Attack Damage if you've Cast a Spell Recently<div><div>10% increased Cast Speed if you've Attacked Recently<div>";
            break;
        case "Forcewave":
            return "<div>20% increased Stun Buildup<div><div>20% increased Knockback Distance<div><div>+10 to Strength<div>";
            break;
        case "Clear Space":
            return "<div>20% increased Knockback Distance<div><div>20% chance to Knock Enemies Back with Hits at Close Range<div>";
            break;
        case "Exposed to the Inferno":
            return "<div>Damage Penetrates 15% Fire Resistance<div><div>Fire Exposure you inflict lowers Total Fire Resistance by an extra 5%<div>";
            break;
        case "Breath of Fire":
            return "<div>Damage Penetrates 15% Fire Resistance<div><div>+10 to Strength<div>";
            break;
        case "Cremation":
            return "<div>Damage Penetrates 18% Fire Resistance<div><div>25% increased Fire Exposure Effect<div>";
            break;
        case "Smoke Inhalation":
            return "<div>Damage Penetrates 15% Fire Resistance<div><div>15% increased Duration of Damaging Ailments on Enemies<div>";
            break;
        case "Overheating Blow":
            return "<div>Hits that Heavy Stun inflict Fire Exposure<div>";
            break;
        case "Shattered Crystal":
            return "<div>60% reduced Ice Crystal Life<div>";
            break;
        case "Ice Walls":
            return "<div>200% increased Ice Crystal Life<div>";
            break;
        case "Storm Swell":
            return "<div>Damage Penetrates 15% Cold Resistance<div><div>Damage Penetrates 8% Lightning Resistance<div>";
            break;
        case "Exposed to the Cosmos":
            return "<div>Damage Penetrates 15% Cold Resistance<div><div>Cold Exposure you inflict lowers Total Cold Resistance by an extra 5%<div>";
            break;
        case "Snowpiercer":
            return "<div>Damage Penetrates 15% Cold Resistance<div><div>+10 to Intelligence<div>";
            break;
        case "Breath of Ice":
            return "<div>Damage Penetrates 15% Cold Resistance<div><div>+10 to Intelligence<div>";
            break;
        case "Glaciation":
            return "<div>Damage Penetrates 18% Cold Resistance<div><div>25% increased Cold Exposure Effect<div>";
            break;
        case "Overload":
            return "<div>Damage Penetrates 10% Lightning Resistance if on Low Mana<div><div>Damage Penetrates 15% Lightning Resistance<div>";
            break;
        case "Exposed to the Storm":
            return "<div>Damage Penetrates 18% Lightning Resistance<div><div>30% increased Critical Hit Chance against enemies with Lightning Exposure<div>";
            break;
        case "Storm Surge":
            return "<div>Damage Penetrates 8% Cold Resistance<div><div>Damage Penetrates 15% Lightning Resistance<div>";
            break;
        case "Breath of Lightning":
            return "<div>Damage Penetrates 15% Lightning Resistance<div><div>+10 to Dexterity<div>";
            break;
        case "Surging Currents":
            return "<div>Damage Penetrates 15% Lightning Resistance<div><div>+10 to Dexterity<div>";
            break;
        case "Electric Amplification":
            return "<div>Damage Penetrates 18% Lightning Resistance<div><div>25% increased Lightning Exposure Effect<div>";
            break;
        case "Lightning Rod":
            return "<div>Lightning Damage with Non-Critical Hits is Lucky<div>";
            break;
        case "Electrotherapy":
            return "<div>5% increased Skill Speed<div><div>30% increased Electrocute Buildup<div>";
            break;
        case "Way of the Wind":
            return "<div>25% increased Evasion if you have Hit an Enemy Recently<div><div>50% increased maximum Dash Distance with Unarmed Attack Skills<div>";
            break;
        case "Flurry":
            return "<div>20% increased Area of Effect while Unarmed<div><div>25% reduced Damage with Unarmed Attacks<div><div>20% increased Unarmed Attack Speed<div>";
            break;
        case "Pressure Points":
            return "<div>35% increased Stun Buildup<div><div>35% increased Freeze Buildup<div>";
            break;
        case "Breakage":
            return "<div>Break 60% increased Armour<div><div>10% chance to Defend with 200% of Armour<div>";
            break;
        case "Pile On":
            return "<div>60% increased Damage against Enemies with Fully Broken Armour<div>";
            break;
        case "Irreparable":
            return "<div>100% increased Armour Break Duration<div>";
            break;
        case "Cruel Methods":
            return "<div>Break 40% increased Armour<div><div>25% increased Physical Damage<div>";
            break;
        case "Perforation":
            return "<div>20% chance for Bleeding to be Aggravated when Inflicted against Enemies on Jagged Ground<div><div>40% increased Jagged Ground Duration<div>";
            break;
        case "Spike Pit":
            return "<div>Enemies in Jagged Ground you create take 10% increased Damage<div>";
            break;
        case "Distracting Presence":
            return "<div>10% increased Cooldown Recovery Rate<div><div>Enemies in your Presence have 10% reduced Cooldown Recovery Rate<div>";
            break;
        case "Multitasking":
            return "<div>15% increased Skill Effect Duration<div><div>12% increased Cooldown Recovery Rate<div>";
            break;
        case "Volatile Catalyst":
            return "<div>10% increased Area of Effect<div><div>10% increased Cooldown Recovery Rate<div>";
            break;
        case "Deterioration":
            return "<div>Damaging Ailments Cannot Be inflicted on you while you already have one<div><div>20% increased Magnitude of Damaging Ailments you inflict<div>";
            break;
        case "Exposed Wounds":
            return "<div>15% increased chance to inflict Ailments<div><div>Break 30% increased Armour on enemies affected by Ailments<div>";
            break;
        case "Fast Acting Toxins":
            return "<div>Damaging Ailments deal damage 12% faster<div>";
            break;
        case "Wasting":
            return "<div>15% increased Duration of Damaging Ailments on Enemies<div><div>30% increased Damage with Hits against Enemies affected by Ailments<div>";
            break;
        case "Master Fletching":
            return "<div>30% increased bonuses gained from Equipped Quiver<div>";
            break;
        case "Grenadier":
            return "<div>Grenade Skills have +1 Cooldown Use<div>";
            break;
        case "Cluster Bombs":
            return "<div>50% increased Grenade fuse duration<div><div>Grenade Skills Fire an additional Projectile<div>";
            break;
        case "Volatile Grenades":
            return "<div>25% reduced Grenade fuse duration<div>";
            break;
        case "Pinned Down":
            return "<div>Enemies are Maimed for 4 seconds after becoming Unpinned<div><div>40% increased Pin Buildup<div>";
            break;
        case "Pin and Run":
            return "<div>30% increased Pin Buildup<div><div>5% increased Movement Speed if you've Pinned an Enemy Recently<div>";
            break;
        case "Primal Protection":
            return "<div>25% increased Charm Effect Duration<div><div>25% increased Charm Charges gained<div>";
            break;
        case "Vale Shelter":
            return "<div>Charms gain 0.15 charges per Second<div>";
            break;
        case "Thicket Warding":
            return "<div>20% chance for Charms you use to not consume Charges<div><div>Recover 5% of Mana when a Charm is used<div>";
            break;
        case "Lucky Rabbit Foot":
            return "<div>30% increased Damage while you have an active Charm<div><div>6% increased Movement Speed while you have an active Charm<div>";
            break;
        case "Woodland Aspect":
            return "<div>Charms applied to you have 25% increased Effect<div>";
            break;
        case "Hunter's Talisman":
            return "<div>+1 Charm Slot<div>";
            break;
}
}
