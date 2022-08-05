const fishingData = [
    // trout section
    {
        "name": "Brown trout",
        "imgMain": "https://imgur.com/XqJNatq.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "5 years",
        "avgLength": "12-14",
        "avgWeight": "2.5-10 lbs",
        "family": "Salmon",
        "diet": "Generally, brown trout less than 12 inches feed primarily on insects drifting freely within stream currents. Above 12 inches, brown trout diets shift to larger prey items including crayfish and other fish, including other trout. Other occasional prey items include mollusks, salamanders, frogs and small mammals.",
        "habitat": "Brown trout can be found in suitable cold water habitats, including lakes, reservoirs, streams and rivers.",
        "breedingSeason": "Brown trout spawning season begins in October and goes into December. If there are no barriers as there are in many North Shore streams, brown trout swim up into headwater areas to spawn. They usually choose gravel bottoms often where there are spring seeps and good moving water.",
        "imgGallery": ["", "", ""],
        "color": " ",
        "country": " ",
        "region": "",
        "endangeredRating": "",
        "generalInfo": ["", "", ""]
    },
    {
        "name": "Rainbow trout",
        "imgMain": "https://imgur.com/vl2e8nt.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "3-4 years",
        "avgLength": "20-30 in",
        "avgWeight": "2-16 lbs",
        "family": "Salmon",
        "diet": "Rainbow trout eat aquatic and terrestrial insects, mollusks, crustaceans, fish eggs, minnows and other small fish (including other trout)",
        "habitat": "Rainbow trout prefer clear, well-oxygenated, cold-water streams with gravel or rocky bottoms, deep pools, and natural cover. Unlike native brook trout, however, they also thrive in large lakes as long as there is cool, deep water. Their ideal temperature range is between 10° and 16° C (50° and 60° F) although they can survive warmer temperatures than some other species of trout.",
        "breedingSeason": "Rainbow trout tend to spawn in the spring. Spawning can take place as early as February in some rivers and streams. By March or April spawning is usually taking place especially when waters are around 41 degrees.",
    },
    {
        "name": "Golden trout",
        "imgMain": "https://imgur.com/sGZleFB.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "7-9 years",
        "avgLength": "10-14 in",
        "avgWeight": "1 lb",
        "family": "Salmon",
        "diet": "The diet of the golden trout consists mainly of surface water-dwelling insects, principally small ones such as caddisflies and midges. Small crustaceans such as tiny fresh water shrimp as well as some terrestrial insects contribute to the diet as well.",
        "habitat": "Golden trout live in cold, clear mountain streams in meadows at high elevations over 2,300m (about 7,500 ft.). They prefer to stay in short reaches of streams, such as in pools and beneath undercut banks, for most of their lives.",
        "breedingSeason": "Golden trout are sexually mature after about 3-4 years. They spawn in June and July, when water temperatures reach around 50° F or higher.",
    },
    {
        "name": "Lake trout",
        "imgMain": "https://imgur.com/kz9Z2ZQ.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "7-8 years",
        "avgLength": "24-36 in",
        "avgWeight": "40 lbs",
        "family": "Salmon",
        "diet": "The lake trout, as adults, feed primarily on other fish. The native prey includes ciscoes and sculpin, but when available lake trout will take advantage of alewives, smelt, gobies or other fish and sometimes take crustaceans, terrestrial insects, plankton, even small birds and mammals.",
        "habitat": "These fish live in cold, freshwater habitats. Unlike some other members of the Salmonidae family, they do not have anadromous tendencies, and live their entire lives in freshwater habitats. Their primary habitats include deep lakes and ponds. They also range into deep water rivers as well.",
        "breedingSeason": "Lake trout spawn at night on rocky shoals in the fall, usually during late October or early November. Fertilized eggs settle within rocky crevices where they remain until hatching about four to six months later in late February to April.",
    },
    {
        "name": "Tiger trout",
        "imgMain": "https://imgur.com/1XldheF.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "10 years",
        "avgLength": "10-16 in",
        "avgWeight": "5 lbs",
        "family": "Salmon",
        "diet": "The regular diet of the tiger trout consists of a lot of larvae, insects and invertebrates.",
        "habitat": "Tiger trout thrive in cold water environments, especially lakes. The hybrid fish does well in water that features sufficient aquatic vegetation, such as freshwater algae",
        "breedingSeason": "The tiger trout is a kind of fish that is born due to the breeding of male brook trout with female brown trout. This fish is a hybrid and is sterile.",
    },
    {
        "name": "Cutthroat trout",
        "imgMain": "https://imgur.com/DTZCcqI.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "6-8 years",
        "avgLength": "6-40 in",
        "avgWeight": "2-5 lbs",
        "family": "Salmon",
        "diet": "Stream-resident cutthroat trout primarily feed on larval, pupal and adult forms of aquatic insects (typically caddisflies, stoneflies, mayflies and aquatic dipterans), and adult forms of terrestrial insects (typically ants, beetles, grasshoppers and crickets) that fall into the water, fish eggs, small fish, along with crayfish, shrimp and other crustaceans.",
        "habitat": "Cutthroat trout live in clear, cold headwater lakes, streams, and rivers. Like all salmonids, cutthroat trout require diverse, yet well-connected habitats with structural components like boulders and large wood that provide good hiding cover.",
        "breedingSeason": "Cutthroat trout spawn in the spring when water tem- perature is above 50º Fahrenheit and flows are high.",
    },
    {
        "name": "Sea trout",
        "imgMain": "https://imgur.com/ZOK5jni.jpg",
        "typeOfWater": "Salt",
        "avgLifespan": "9-10 years",
        "avgLength": "15-25 in",
        "avgWeight": "2-4 lbs",
        "family": "Salmon",
        "diet": "Small trout feed primarily on small crustaceans. Medium-size trout feed on shrimp and small fish. Large fish feed almost exclusively on other fish such as mullet, pinfish, pigfish and menhaden.",
        "habitat": "The spotted seatrout is a demersal fish that is found in brackish to marine water. It has been observed in shallow coastal and estuarine waters over sandy bottoms and seagrass to depths of 33 feet (10 m).",
        "breedingSeason": "Spawning along the western Gulf takes place from late March to September with peak spawning from June through August. Spawning occurs over seagrass, and within or near channels and passes.",
    },
    {
        "name": "Bull trout",
        "imgMain": "https://imgur.com/IJniAf4.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "10-12 years",
        "avgLength": "24-34 in",
        "avgWeight": "3-9 lbs",
        "family": "Salmon",
        "diet": "Bull trout begin their lives living in gravel in rivers, eventually emerging to feed on insects and plants.",
        "habitat": "Bull trout prefer stream habitats with clean, clear, and especially cold water, stable stream channels, and abundant and diverse overhead cover such as woody debris.",
        "breedingSeason": "Bull trout spawn from August through November .",
    },
    // Bass section
    {
        "name": "Largemouth bass",
        "imgMain": "https://imgur.com/hOQpAJG.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "25 years",
        "avgLength": "18 in",
        "avgWeight": "5 lbs",
        "family": "Sunfish",
        "diet": "Largemouth bass eat frogs, leeches, insects, baitfish like shad, minnows, and shiners, suckers, yellow perch, bluegills, and crayfish as part of their regular diet. Bass will also eat smaller bass, snakes, mice, ducklings, and even small turtles on rare occasions.",
        "habitat": "Largemouth bass inhabit clear, vegetated lakes, ponds, swamps, and the backwaters of pools, creeks and rivers. Largemouth bass prefer spawning areas with a ﬁrm bottom of sand, mud or gravel.",
        "breedingSeason": "They reproduce once per year in January-March in the southern areas, and May-June in the northern parts.",
    },
    {
        "name": "Striped bass",
        "imgMain": "https://imgur.com/qFuDTGh.jpg",
        "typeOfWater": "Fresh / Salt",
        "avgLifespan": "30 years",
        "avgLength": "24-36 in",
        "avgWeight": "10-30 lbs",
        "family": "Sunfish",
        "diet": "Striped bass eat a variety of foods, including fish such as alewives, flounder, sea herring, menhaden, mummichogs, sand lance, silver hake, tomcod, smelt, silversides, and eels, as well as lobsters, crabs, soft clams, small mussels, sea worms, and squid.",
        "habitat": "Striped bass thrive in large bodies of deep, clear water.",
        "breedingSeason": "Spawning is triggered by an increase in water temperature and generally occurs in April, May and early June when water temperatures reach 60 to 68 degrees.",
    },
    {
        "name": "Black sea bass",
        "imgMain": "https://imgur.com/1PseHzU.jpg",
        "typeOfWater": "Salt",
        "avgLifespan": "8-12 years",
        "avgLength": "12-18 in",
        "avgWeight": "1-4 lbs",        
        "family": "Sunfish",
        "diet": "Black sea bass eat whatever prey is available, but they especially like crabs, shrimp, worms, small fish, and clams. Little skate, spiny dogfish, monkfish, spotted hake, and summer flounder all feed on black sea bass.",
        "habitat": "Black sea bass are found in association with structured habitats. They migrate offshore and south in the fall, returning north and inshore to coastal areas and bays in spring.",
        "breedingSeason": "Black sea bass spawn in coastal areas from January through July. Females can produce 30,000 and 500,000 eggs in a single spawning season.",
    },
    {
        "name": "Smallmouth bass",
        "imgMain": "https://imgur.com/6cIhen4.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "6-14 years",
        "avgLength": "18-20 in",
        "avgWeight": "2-6 lbs",
        "family": "Sunfish",
        "diet": "Juveniles consume zooplankton, insect larvae, small fish and crayfish. Adults feed on insects, amphibians, fish and crayfish, as well as the young of other smallmouth bass.",
        "habitat": "The smallmouth bass generally inhabits streams and rivers with relatively clear water and swift currents, along with many clear-water lakes with gravel or rocky shoreline structure.",
        "breedingSeason": "Smallmouth Bass spawn in late spring in the northern climate and early spring in warmer southern climates. ",
    },
    {
        "name": "Rock bass",
        "imgMain": "https://imgur.com/buTsawY.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "5-8 years",
        "avgLength": "6-10 in",
        "avgWeight": "<1 lb",
        "family": "Sunfish",
        "diet": "The rock bass have similar eating habits to other sunfish, and generally eat most aquatic insects, crayfish, and small minnows and other fish.",
        "habitat": "Rock bass prefer clear, vegetated and rocky lake margins and stream pools. Their favorite habitat is clear, cool to warm waters, with gravel or rocky bottoms, and some vegetation. Rock Bass species are usually found near stone-armored shorelines and breakwaters.",
        "breedingSeason": "Spawning occurs from April to early June in warm waters ranging from 55 to 60 degrees, with females laying from 2,000 to 11,000 eggs.",
    },
    {
        "name": "Spotted bass",
        "imgMain": "https://imgur.com/109Dp0P.jpg",
        "typeOfWater": "Fresh / Salt",
        "avgLifespan": "6 years",
        "avgLength": "25 in",
        "avgWeight": "11 lbs",
        "family": "Sunfish",
        "diet": "Spotted bass usually feed on small fishes, crayfishes and aquatic insects. The young begin with copepods and other small crustaceans and soon begin to eat insects.",
        "habitat": "Spotted bass usually occur around aquatic vegetation, submerged logs, and rock or riprap walls in small to large flowing streams, rivers, and reservoirs.",
        "breedingSeason": "Spawning occurs from April to May in habitat similar to that used by smallmouth.",
    },
    {
        "name": "Yellow bass",
        "imgMain": "https://imgur.com/WYj9TNt.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "6 years",
        "avgLength": "18 in",
        "avgWeight": "<1 lb",
        "family": "Sunfish",
        "diet": "Yellow bass include small invertebrates including copepods and aquatic insects. The juvenile yellow bass feeds almost exclusively on aquatic insects and crustaceans, and once they reach adulthood they feed primarily on other small fishes; the rest of their diet consists of small crustaceans.",
        "habitat": "Yellow Bass live in natural lakes, reservoirs and the backwaters of large rivers. It prefers clear to slightly turbid water and a firm bottom substrate of sand, gravel, rock rubble and mud.",
        "breedingSeason": "Spawning occurs between the months of May and June in Arkansas, Illinois, Tennessee and Montana and in the months of February to April in southern Missouri.",
    },
    // salmon section
    {
        "name": "Sockeye salmon",
        "imgMain": "https://imgur.com/wy7CF64.jpg",
        "typeOfWater": "Fresh / Salt",
        "avgLifespan": "5 years",
        "avgLength": "18-31 in",
        "avgWeight": "4-15 lbs",
        "family": "Salmon",
        "diet": "While in fresh water, juvenile sockeye salmon feed mainly on zooplankton (tiny floating animals), amphipods (small, shrimp-like crustaceans), and insects. In the ocean, sockeye salmon continue to feed on zooplankton but also eat larval and small adult fishes and occasionally squid.",
        "habitat": "Sockeye salmon are born in lakes, rivers, or streams, but spend most of their adult life in the Pacific Ocean. 2. Sockeye salmon can be found between northern Alaska and northern California.",
        "breedingSeason": "Sockeye salmon spawn in June and July in Alaska, whereas kokanee, the landlocked version of sockeye, spawn in the fall.",
    },
    {
        "name": "Atlantic salmon",
        "imgMain": "https://imgur.com/A6d5DSY.jpg",
        "typeOfWater": "Fresh / Salt",
        "avgLifespan": "5-8 years",
        "avgLength": "28-30 in",
        "avgWeight": "8-12 lbs",
        "family": "Salmon",
        "diet": "Fish such as capelin, Atlantic herring, sand lance, barracudina and lanternfish. Crustaceans such as krill. Cephalopods like squid and octopus. Polychaete worms.",
        "habitat": "Freshwater rivers, streams, lakes, open bay, coastal waters.",
        "breedingSeason": "Spawning occurs in late autumn. The eggs hatch in April and May.",
    },
    {
        "name": "Chum salmon",
        "imgMain": "https://imgur.com/ztOlBOA.jpg",
        "typeOfWater": "Fresh / Salt",
        "avgLifespan": "3-5 years",
        "avgLength": "42 in",
        "avgWeight": "30-35 lbs",
        "family": "Salmon",
        "diet": "Young chum salmon feed on insects as they migrate downriver and on insects and marine invertebrates in estuaries and near-shore marine habitats. Adults eat copepods, fishes, mollusks, squid, and tunicates. Various fish and birds prey on juvenile chum salmon. Sharks, sea lions and seals, and orcas eat adult chum salmon.",
        "habitat": "In the United States, chum salmon are found throughout Alaska and as far south as Yaquina Bay, Oregon, on the West Coast.",
        "breedingSeason": "They spawn from late summer to March, with peak spawning concentrated in early winter when the river flows are high.",
    },
    {
        "name": "Chinook salmon",
        "imgMain": "https://imgur.com/TOoTMNQ.jpg",
        "typeOfWater": "Fresh / Salt",
        "avgLifespan": "4-5 years",
        "avgLength": "36 in",
        "avgWeight": "30 lbs",
        "family": "Salmon",
        "diet": "Young Chinook salmon feed on terrestrial and aquatic insects, amphipods, and other crustaceans. Older Chinook primarily feed on other fish. Fish (such as whiting and mackerel) and birds eat juvenile Chinook salmon. Marine mammals, such as orcas and sea lions, and sharks eat adult salmon.",
        "habitat": "Chinook salmon live in the colder upper reaches of the Pacific Ocean and breed in the freshwater rivers and streams of the Pacific Northwest. Their range includes the coasts of Alaska, western Canada, Oregon, Idaho, Washington State, and northern California.",
        "breedingSeason": "Chinook spawn in larger and deeper waters than other salmon species and can be found on the spawning redds (nests) from September to December.",
    },
    {
        "name": "Coho salmon",
        "imgMain": "https://imgur.com/rw7ybxv.jpg",
        "typeOfWater": "Fresh / Salt",
        "avgLifespan": "2-7 years",
        "avgLength": "24-30 in",
        "avgWeight": "8-12 lbs",
        "family": "Salmon",
        "diet": "While in fresh water, young coho salmon feed on plankton and insects. While in the ocean, they switch to a diet of small fishes such as herring, sandlance, anchovies, and sardines. Adults are also known to eat juveniles of other salmon species, especially pink and chum salmon, as well as juvenile sablefish.",
        "habitat": "Coho salmon are found throughout the North Pacific Ocean and in most coastal streams and rivers from Alaska to central California.",
        "breedingSeason": "Coho salmon spawning activity occurs September through November.",
    },
    {
        "name": "Pink salmon",
        "imgMain": "https://imgur.com/EMV494d.jpg",
        "typeOfWater": "Fresh / Salt",
        "avgLifespan": "2 years",
        "avgLength": "20-25 in",
        "avgWeight": "3.5-5 lbs",
        "family": "Salmon",
        "diet": "In the ocean, pink salmon feed on plankton, other smaller fish, squid, and the occasional aquatic insect.",
        "habitat": "Pink salmon are found along the Pacific rim of Asia and in North America. There are naturally occurring pink salmon populations throughout the coastal waters of the North Pacific Ocean, Arctic Ocean and nearby seas. While pink salmon in North America have been found as far south as north-central California, they do not reproduce in significant numbers below the Puget Sound in Washington State. ",
        "breedingSeason": "Pink salmon spawn August to October. With the salmon lifecycle, Pacific salmon species die after spawning.",
    },

    // types of sunfish
    {
        "name": "Spotted sunfish",
        "imgMain": "https://imgur.com/3y8ZAHl.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "5 years",
        "avgLength": "4 in",
        "avgWeight": "1 lb",
        "family": "Sunfish",
        "diet": "Spotted sunfish are largely insectivores throughout their entire lives, feeding on midge larvae and other immature insects.",
        "habitat": "It is a demersal fish that inhabits slow moving streams and rivers, swamps, and less brackish portions of estuaries. Spotted sunfish prefer heavily vegetated lake bottoms. Limestone, sand and gravel are preferred substrates.",
        "breedingSeason": "Spawning occurs from May to August in shallow water near ample cover.",
    },
    {
        "name": "Dollar sunfish",
        "imgMain": "https://imgur.com/E0hyN2X.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "6 years",
        "avgLength": "4-5 in",
        "avgWeight": "1 lb",
        "family": "Sunfish",
        "diet": "The dollar sunfush mainly eats insects, crustaceans, and small fish.",
        "habitat": "Dollar sunfish can be found in pools of creeks and small to medium rivers, and can live in swamps or near vegetation and woody debris.",
        "breedingSeason": "The spawning season of the dollar sunfish occurs in the spring, from April - October at water temperatures of 16.8 - 25.6 degrees Celsius; peak spawning activity during late spring and summer.",
    },
    {
        "name": "Orange spotted sunfish",
        "imgMain": "https://imgur.com/3X2OxEI.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "4-7 years",
        "avgLength": "1-5 in",
        "avgWeight": "1 lb",
        "family": "Sunfish",
        "diet": "The dominant prey of orangespotted sunfish includes insects, such as corixids and chironomids, zooplankton, other small invertebrates that live in the water column, and fish.",
        "habitat": "Orangespotted sunfish occur in streams, beaver ponds, other ponds, oxbows, floodplain pools, and sloughs.",
        "breedingSeason": "Spawning season usually occurs from May - July.",
    },
    {
        "name": "Lonegear sunfish",
        "imgMain": "https://imgur.com/Czw2J3o.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "6 years",
        "avgLength": "7-9 in",
        "avgWeight": "1 lb",
        "family": "Sunfish",
        "diet": "Longear sunfish feed nearer to the surface than other sunfish. They mostly eat aquatic insects, microcrustaceans, fish eggs (including those of its own species), young bass, and young sunfish. They have been observed eating dragonflies and other insects, which touch the surface of the water.",
        "habitat": "They prefer waters with a hard bottom of clay or gravel with clear waters and usually in or near aquatic vegetation. Although more abundant in headwaters, they can be found in streams and rivers of all sizes and are also found in lakes.",
        "breedingSeason": "Longear sunfish tend to breed during the late spring and early summer (late May to late August).",
    },
    {
        "name": "Redbrest sunfish",
        "imgMain": "https://imgur.com/HgcMbCW.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "7 years",
        "avgLength": "4 in",
        "avgWeight": "1 lb",
        "family": "Sunfish",
        "diet": " Redbrested sunfish's diet can include insects, snails, and other small invertebrates.",
        "habitat": "The species prefers vegetated and rocky pools and lake margins for its habitat.",
        "breedingSeason": "The spawning period starts from May to August, preferably when the water temperatures range between 68-82 degrees.",
    },
    {
        "name": "Green sunfish",
        "imgMain": "https://imgur.com/r0wLfFr.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "4-6 years",
        "avgLength": "3-7 in",
        "avgWeight": "1-2 lb",
        "family": "Sunfish",
        "diet": "A green sunfish's diet can include aquatic insects and larvae, insects that fall into the water, crayfish, snails, other molluscs, turtle food, frogs, some small fish, fish eggs, bryozoans, zooplankton, other small invertebrates, and sometimes plant material.",
        "habitat": "The species prefers areas in sluggish backwaters, lakes, and ponds with gravel, sand, or bedrock bottoms. They also can be found in very muddy waters and are able to tolerate poor water conditions. Green sunfish tend to spend their time hiding around rocks, submerged logs, plants, and other things that provide cover.",
        "breedingSeason": "Green sunfish can spawn up to every 8 to 10 days during spawning season. Spawning occurs from May to August.",
    },
    {
        "name": "Redear sunfish",
        "imgMain": "https://imgur.com/pBSVt41.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "6 years",
        "avgLength": "8-9 in",
        "avgWeight": "1 lb",
        "family": "Sunfish",
        "diet": "Redear sunfish feed on aquatic insects, snails, small fish and other small aquatic animals. Snails are intermediate hosts of yellow and black grubs. The larvae of these grubs are often found in the fins and in the muscles of largemouth bass and other fish species.",
        "habitat": "In the wild, the redear sunfish inhabits warm, quiet waters of lakes, ponds, streams, and reservoirs. They prefer to be near logs and vegetation, and tend to congregate in groups around these features. This sunfish is also located in many freshwater marsh wetlands.",
        "breedingSeason": "Redear typically spawn in early spring and when water temeratures are 65 - 89 degrees.",
    },
    {
        "name": "Bluegill",
        "imgMain": "https://imgur.com/cPvCSbk.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "4-6 years",
        "avgLength": "7.5 in",
        "avgWeight": "1-4 lbs",
        "family": "Sunfish",
        "diet": "Bluegills mostly feed on insects both aquatic and terrestrial. They also eat snails, small crayfish, zooplankton (microscopic animals),other fish and fish eggs.",
        "habitat": "Bluegills are primarily freshwater fish. They are found in warm, quiet water – ponds, lakes, reservoirs and slow moving streams and rivers – with sand, mud or gravel bottoms and plenty of aquatic vegetation in which to hide.",
        "breedingSeason": "Bluegills will spawn from late May into August when water temperatures range from 65 to 80 degrees.",
    },
    {
        "name": "Pumpkinseed",
        "imgMain": "https://imgur.com/2UzvftX.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "6-8 years",
        "avgLength": "4-6 in",
        "avgWeight": "1 lb",
        "family": "Sunfish",
        "diet": "The pumpkinseed eats a variety of small organisms, including snails, worms, insects, mollusks, small fishes and bits of vegetation.",
        "habitat": "Pumpkinseeds typically live in warm, calm lakes, ponds, and pools of creeks and small rivers with plenty of vegetation for hiding. They tend to stay near the shore and can be found in numbers within shallow and protected areas.",
        "breedingSeason": "Spawning occurs from May to July, once water temperatures warm to about 68 degrees Fahrenheit.",
    },
    {
        "name": "Warmouth",
        "imgMain": "https://imgur.com/9cgSor4.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "5 years",
        "avgLength": "8-9 in",
        "avgWeight": "1 lb",
        "family": "Sunfish",
        "diet": "The primary diet of young warmouth is microcrustaceans and aquatic insect larvae, whereas larger specimens tend to mainly consume crayfish, freshwater shrimp, isopods, and other small fish.",
        "habitat": "Warmouths inhabit swamps, marshes, shallow lakes, slow-moving streams and canals with soft, muddy bottoms. They stay around aquatic vegetation, stumps and snags and under the banks of streams and ponds. They have more tolerance for muddy water than most species.",
        "breedingSeason": "Warmouth's spawn in the spring, when water temperatures reach 71° F (21.5° C), and continuing through the summer.",
    },
    // pike types
    {
        "name": "Northern pike",
        "imgMain": "https://imgur.com/nvITm61.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "7-10 years",
        "avgLength": "22-28 in",
        "avgWeight": "2-15 lbs",        
        "family": "Pike",
        "diet": "Pike consume large numbers of smaller fish - about 90 percent of their diet - but seem willing to supplement their diet with any living creature their huge jaws can surround, including frogs, crayfish, waterfowl, rodents and other small mammals.",
        "habitat": "Northern pike are found in almost every type of freshwater, from cold deep lakes, to warm shallow ponds, to muddy rivers.",
        "breedingSeason": "The majority of pike will spawn around the full moon cycle in April to roughly mid may, under ice or open water.",
    },
    {
        "name": "Chain pickerel",
        "imgMain": "https://imgur.com/EsYKNo6.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "3-5 years",
        "avgLength": "10-18 in",
        "avgWeight": "2-3 lbs",
        "family": "Pike",
        "diet": "The main diet of the pickerel consists of small fish, crayfish, frogs, mice, newts and insects.",
        "habitat": "Chain pickerel inhabit the shallow waters of lakes, ponds, and slow flowing sections of rivers and streams. Chain pickerel are usually associated with aquatic vegetation, which they use as cover for ambushing prey.",
        "breedingSeason": "Chain Pickerel spawn in the early spring when water temperatures approach 50°F.",
    },
    {
        "name": "Grass pickerel",
        "imgMain": "https://imgur.com/xheeDo5.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "3-5 years",
        "avgLength": "10-12 in",
        "avgWeight": "1 lb",
        "family": "Pike",
        "diet": "Young grass pickerels eat small crustaceans, amphipods, isopods, and young aquatic insects. Larger pickerels eat small fish, crayfish, and dragonfly nymphs. Large individuals eat mainly fish and crayfish, including darters and (for pickerels more than 7 inches long) sunfish.",
        "habitat": "Grass pickerels occur primarily in sluggish, vegetated waters of pools, lakes and wetlands.",
        "breedingSeason": "Grass pickerel spawning occurrs in the late winter to early spring (February-April) when water temperatures are drawing near 4-10 °C. Grass pickerel occasionally spawn more than once a year with the second spawning season in the late summer-early winter (August-November).",
    },
    {
        "name": "Redfin pickerel",
        "imgMain": "https://imgur.com/zvY7MCD.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "3-5 years",
        "avgLength": "10-12 in",
        "avgWeight": "1 lb",
        "family": "Pike",
        "diet": "Large insect larvae, crayfishes, and fishes are staples of the adult diet.",
        "habitat": "Redfin pickerels occur primarily in sluggish, vegetated waters of pools, lakes and wetlands.",
        "breedingSeason": "Redfin pickerel spawn in the late winter to early spring months.",
    },
    {
        "name": "Clear muskie",
        "imgMain": "https://imgur.com/zTnJtPV.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "15 years",
        "avgLength": "28-48 in",
        "avgWeight": "15-36 lbs",
        "family": "Pike",
        "diet": "Clear muskie feed primarily on fish, insects, ducklings, frogs, muskrats, and mice.",
        "habitat": "They prefer clear waters where they lurk along weed edges, rock outcrops, or other structures to rest. A fish forms two distinct home ranges in summer: a shallow range and a deeper one. The shallow range is generally much smaller than the deeper range due to shallow water heating up.",
        "breedingSeason": "  Muskies tend to spawn in early spawn as soon as the first ice starts to melt typically from mid-April to late May.",
    },
    {
        "name": "Tiger Muskie",
        "imgMain": "https://imgur.com/uoyxe8z.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "15 years",
        "avgLength": "22-30 in",
        "avgWeight": "18 lbs",
        "family": "Pike",
        "diet": "Tiger mukie have a varied diet that includes yellow perch, suckers, golden shiners, walleye, smallmouth bass, and various other types of fish. When fish are not readily available tiger muskies will feed on crayfish, frogs, ducklings, muskrats, mice, other small mammals, and small birds.",
        "habitat": "The tiger muskie lives in the lakes and quiet rivers in Canada, the Great Lakes, the Upper Mississippi Valley, and the Ohio and St. Lawrence Rivers.",
        "breedingSeason": "Tiger muskie are sterile hybrids and do not reproduce. Spawning takes place near aquatic vegetation, debris, and leaf litter over a period of a few days.",
    },
    {
        "name": "Muskellunge",
        "imgMain": "https://imgur.com/zqTZj9S.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "18 years",
        "avgLength": "28-48 in",
        "avgWeight": "15-36 lbs",
        "family": "Pike",
        "diet": "Muskellunge feed primarily on fish, insects, ducklings, frogs, muskrats, and mice. There have even been reports of large muskellunge attacking small dogs and even humans, although most of these reports are greatly exaggerated.",
        "habitat": "Muskellunge inhabit freshwater rivers and lakes and can survive in a wide range of water temperatures. Muskellunge prefer water in the 67-to 72-degree range and are hardly ever found in waters with a maximun temperature below 68 F.",
        "breedingSeason": "They scatter their eggs in shallow water, most often over live or decaying aquatic plants or their roots. They spawn in the early spring, normally in water temperatures from 49 to 59 f.",
    },
    // types of catfish
    {
        "name": "Blue catfish",
        "imgMain": "https://imgur.com/k8dGyVd.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "9-10 years",
        "avgLength": "25-46 in",
        "avgWeight": "81 lbs",
        "family": "Catfish",
        "diet": "Their varied diet includes worms, clams, small crustaceans, mussels, crabs, insects, frogs and variety of smaller fish, including other blue catfish.",
        "habitat": "Blue catfish are bottom-dwellers that prefer large rivers with deep channels, swift currents, and sandy bottoms. Blue catfish prefer fresher water but can thrive in higher salinities as well.",
        "breedingSeason": "Spawning for blue catfish takes place during spring or summer when the water temperatures are optimal. The blue and channel cat spawn in temperatures between 70 and 84 degrees Fahrenheit; 80 to 81 degrees is considered the best. Generally, the peak spawn is between April and June.",
    },
    {
        "name": "Flathead catfish",
        "imgMain": "https://imgur.com/JjvJ5yK.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "12-14 years",
        "avgLength": "61 in",
        "avgWeight": "123 lbs",
        "family": "Catfish",
        "diet": " Flatheads are predatory fish and will consume bass, bream, shad, crayfish and often feed on other catfish. The young rely more extensively on aquatic insects and crayfish than do the adults. Large flatheads sometime congregate where food is plentiful such as near tailraces of dams.",
        "habitat": "Adult flathead catfish are solitary creatures and can usually be found near or under fallen trees, logs and brush piles, while young flathead catfish usually prefer shallower water. Adults stay in deeper waters during the day and move into shallower water at night.",
        "breedingSeason": "Spawning occurs in late spring when water temperatures reach 70 to 80 degrees. One or both parents excavate the nest that is usually made in a natural cavity or near a large submerged object. Females lay a golden-yellow mass of up to 100,000 eggs.",
    },
    {
        "name": "Channel catfish",
        "imgMain": "https://imgur.com/TYEyB03.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "15 years",
        "avgLength": "12 in",
        "avgWeight": "2-4 lbs",
        "family": "Catfish",
        "diet": "Bottom-dwelling, opportunistic omnivores, channel catfish live in freshwater rivers, lakes, streams and ponds throughout North America.",
        "habitat": "Channel catfish are bottom-feeders and eat a wide variety of foods, including insects, mollusks, crustaceans, snails, snakes, fish and small birds. Younger channel catfish are more omnivorous, eating a balanced variety of plants and small animals.",
        "breedingSeason": "Channel catfish spawn in the early part of the summer. Usually when the water temperature reaches 68 to 70 degrees the catfish migrate to their nesting areas and start getting ready for the annual ritual. The actual spawning takes place when the water temperature is a stable 70 to 74 degrees.",
    },
    {
        "name": "White catfish",
        "imgMain": "https://imgur.com/XdwpgWX.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "8 years",
        "avgLength": "20 in",
        "avgWeight": ".5-2 lbs",
        "family": "Catfish",
        "diet": "Although fish are their major food, whites also eat larval aquatic insects, small crustaceans, fish eggs and aquatic plants. They may feed at night, but are not as nocturnal as other catfish.",
        "habitat": "White catfish are primarily a tidal water species that inhabit waters having a salinity of 5 parts per thousand​, but also is found in freshwater lakes, ponds, rivers and streams. Habitats include: sluggish, mud-bottomed pools, open channels, and backwaters of small to large rivers.",
        "breedingSeason": "White catfish spawn in early summer when water temperatures reach 68-72oF in still or flowing waters near sand or gravel banks. Large, saucer-shaped nests are shaped by both parent fish by fanning the bottom with their tail.",
    },
    {
        "name": "Yellow bullhead",
        "imgMain": "https://imgur.com/pQjkTUv.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "7 years",
        "avgLength": "7-13.5 in",
        "avgWeight": "1-2 lbs",
        "family": "Catfish",
        "diet": "Though scavengers, yellow bullheads prefer to feed on minnows, snails, shrimp and crayfish. They also will feed on insect larvae, vegetation and decaying organic matter.",
        "habitat": "Yellow Bullheads are found in slow current over soft substrates in pools and backwaters of creeks and small to large rivers, and in oxbows, ponds, and lakes.",
        "breedingSeason": "Yellow bullheadslay their eggs at water temperatures from 70°F to 80°F (usually June to August). The eggs usually hatch in five to ten days.",
    },
    {
        "name": "Brown bullhead",
        "imgMain": "https://imgur.com/7vyxwYS.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "7 years",
        "avgLength": "7.9-19.7 in",
        "avgWeight": "1-8 lbs",
        "family": "Catfish",
        "diet": "Brown bullheads are omnivorous benthic bottom feeders. Their diet consists of algae, leeches, worms, mollusks, crustaceans, insects, crayfish, other smaller fish species and fish eggs. Brown bullheads are typically nocturnal feeders, but have been reported to feed diurnally.",
        "habitat": "The brown bullhead thrives in a variety of habitats, including lakes, ponds, and slow-moving streams with low oxygen or muddy conditions.",
        "breedingSeason": "Brown bullhead lay their eggs at water temperatures from 70°F to 80°F (usually June to August). The eggs usually hatch in five to ten days.",
    },
    {
        "name": "Black bullhead",
        "imgMain": "https://imgur.com/uZylbpQ.jpg",
        "typeOfWater": "Fresh",
        "avgLifespan": "5 years",
        "avgLength": "8-14 in",
        "avgWeight": "1-2 lbs",
        "family": "Catfish",
        "diet": "Black bullheads are omnivorous, feeding primarily from the bottom on a wide range of plant and animal material, both live and dead. Fingerlings feed almost exclusively on crustaceans. Immature aquatic insects and crustaceans often comprise a considerable proportion of the adult diet.",
        "habitat": "The Black Bullhead lives in slow current over soft substrates in pools and backwaters of creeks and small to large rivers, and in oxbows, ponds, and lakes.",
        "breedingSeason": "Black bullhead lay their eggs at water temperatures from 70°F to 80°F (usually June to August). The eggs usually hatch in five to ten days.",
    },
]

module.exports = fishingData