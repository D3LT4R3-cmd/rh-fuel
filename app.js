
// ---------- Données : ingrédients (macros pour 100 g/ml, ou par pièce ; prix au kg/L ou à la pièce) ----------
// Prix estimés pour La Réunion (supermarché ; fruits et légumes péi au marché forain)
const ING={
  oeuf:{n:"Œufs",u:"pc",k:85,p:7.5,f:6,c:.5,pr:.35,r:"Frais"},
  lait:{n:"Lait demi-écrémé",u:"ml",k:46,p:3.3,f:1.6,c:4.8,pr:1.5,r:"Frais"},
  fblanc:{n:"Fromage blanc 3 %",u:"g",k:75,p:7.5,f:3,c:4,pr:4,r:"Frais"},
  skyr:{n:"Skyr nature",u:"g",k:60,p:10,f:.2,c:4,pr:6,r:"Frais"},
  emmental:{n:"Emmental râpé",u:"g",k:380,p:28,f:29,c:0,pr:14,r:"Frais"},
  poulet:{n:"Filets de poulet",u:"g",k:110,p:23,f:1.5,c:0,pr:11,r:"Viande & poisson"},
  boeuf:{n:"Bœuf haché 5 %",u:"g",k:125,p:21,f:5,c:0,pr:15,r:"Viande & poisson"},
  saucisse:{n:"Saucisses fumées de volaille",u:"g",k:190,p:15,f:14,c:2,pr:10,r:"Viande & poisson"},
  thonfrais:{n:"Thon frais péi (longe)",u:"g",k:110,p:24,f:1,c:0,pr:14,r:"Viande & poisson"},
  colin:{n:"Colin surgelé",u:"g",k:80,p:17,f:1,c:0,pr:12,r:"Surgelés"},
  legumes:{n:"Poêlée de légumes surgelée",u:"g",k:40,p:2,f:.5,c:6,pr:3.5,r:"Surgelés"},
  epinards:{n:"Épinards surgelés",u:"g",k:25,p:3,f:.4,c:1.5,pr:3.5,r:"Surgelés"},
  banane:{n:"Bananes péi",u:"pc",k:105,p:1.3,f:.4,c:27,pr:.35,r:"Fruits & légumes"},
  papaye:{n:"Papaye",u:"g",k:43,p:.5,f:.3,c:11,pr:3,r:"Fruits & légumes"},
  patated:{n:"Patates douces",u:"g",k:86,p:1.6,f:.1,c:20,pr:3,r:"Fruits & légumes"},
  pdt:{n:"Pommes de terre",u:"g",k:77,p:2,f:.1,c:17,pr:2,r:"Fruits & légumes"},
  chouchou:{n:"Chouchou",u:"g",k:19,p:.8,f:.1,c:4.5,pr:2,r:"Fruits & légumes"},
  oignon:{n:"Oignons",u:"g",k:40,p:1.1,f:.1,c:9,pr:3,r:"Fruits & légumes"},
  carotte:{n:"Carottes",u:"g",k:41,p:.9,f:.2,c:10,pr:2.5,r:"Fruits & légumes"},
  avoine:{n:"Flocons d'avoine",u:"g",k:370,p:13,f:7,c:59,pr:3,r:"Épicerie"},
  riz:{n:"Riz (cru)",u:"g",k:350,p:7,f:.6,c:78,pr:2,r:"Épicerie"},
  pates:{n:"Pâtes complètes (crues)",u:"g",k:350,p:13,f:2.5,c:65,pr:2.5,r:"Épicerie"},
  lentilles:{n:"Lentilles (grains)",u:"g",k:340,p:24,f:1.5,c:50,pr:4,r:"Épicerie"},
  haricots:{n:"Haricots rouges (boîte, égouttés)",u:"g",k:110,p:7.5,f:.5,c:15,pr:4.5,r:"Épicerie"},
  thon:{n:"Thon au naturel (égoutté)",u:"g",k:110,p:25,f:1,c:0,pr:16,r:"Épicerie"},
  tomates:{n:"Tomates concassées (boîte)",u:"g",k:25,p:1.2,f:.2,c:4,pr:3,r:"Épicerie"},
  tortilla:{n:"Tortillas de blé",u:"pc",k:180,p:5,f:4,c:30,pr:.4,r:"Épicerie"},
  jambon:{n:"Jambon blanc (dés ou tranches)",u:"g",k:115,p:20,f:3.5,c:1,pr:14,r:"Frais"},
  semoule:{n:"Semoule",u:"g",k:360,p:12,f:1.5,c:72,pr:2.5,r:"Épicerie"},
  mais:{n:"Maïs (boîte, égoutté)",u:"g",k:90,p:3,f:1.5,c:16,pr:4,r:"Épicerie"},
  poischiches:{n:"Pois chiches (boîte, égouttés)",u:"g",k:140,p:7,f:2.5,c:18,pr:4,r:"Épicerie"},
  painburger:{n:"Pains à burger",u:"pc",k:150,p:5,f:3,c:26,pr:.5,r:"Épicerie"},
  pain:{n:"Pain complet",u:"g",k:250,p:9,f:3,c:45,pr:4,r:"Épicerie"},
  huile:{n:"Huile",u:"g",k:900,p:0,f:100,c:0,pr:6,r:"Épicerie"},
  cacahuete:{n:"Beurre de cacahuète",u:"g",k:600,p:25,f:50,c:15,pr:12,r:"Épicerie"},
  miel:{n:"Miel",u:"g",k:320,p:.3,f:0,c:80,pr:15,r:"Épicerie"},
  whey:{n:"Whey (sac de 2 kg)",u:"g",k:380,p:75,f:6,c:8,pr:28,r:"Épicerie"},
};
const RAYONS=["Fruits & légumes","Frais","Viande & poisson","Surgelés","Épicerie"];

// cat : M = matin, C = collation, R = repas midi/soir. batch = se prépare à l'avance.
const REC={
  m1:{n:"Œufs brouillés, porridge et banane",cat:"M",t:10,i:{oeuf:3,avoine:80,banane:1,lait:200},s:["Cuis l'avoine 3 min dans la moitié du lait.","Brouille les œufs à la poêle.","Banane et le reste du lait à côté."]},
  m2:{n:"Porridge whey banane",cat:"M",t:5,i:{avoine:90,lait:300,whey:30,banane:1},s:["Cuis l'avoine dans le lait 3 min (ou 2 min au micro-ondes).","Hors du feu, mélange la whey.","Ajoute la banane en rondelles."]},
  m3:{n:"Omelette fromage et tartines",cat:"M",t:10,i:{oeuf:4,pain:100,emmental:20,banane:1},s:["Bats les œufs, cuis l'omelette, ajoute l'emmental.","Toaste le pain.","Banane pour finir."]},
  m4:{n:"Bol skyr, avoine et papaye",cat:"M",t:3,i:{skyr:250,avoine:70,papaye:150,miel:15,cacahuete:15},s:["Mets le skyr dans un bol.","Ajoute l'avoine, la papaye en dés, le miel et le beurre de cacahuète."]},
  c1:{n:"Shaker whey, banane, beurre de cacahuète",cat:"C",t:2,i:{whey:30,lait:250,banane:1,cacahuete:15},s:["Secoue la whey dans le lait.","Banane et une cuillère de beurre de cacahuète à côté.","À prendre 30 à 60 min avant ou juste après la séance."]},
  c2:{n:"Fromage blanc, avoine et miel",cat:"C",t:2,i:{fblanc:250,avoine:40,miel:20,banane:1},s:["Mélange fromage blanc, avoine et miel.","Banane en rondelles par-dessus."]},
  c3:{n:"Tartines beurre de cacahuète et lait",cat:"C",t:3,i:{pain:60,cacahuete:25,banane:1,lait:250},s:["Tartine le beurre de cacahuète.","Banane et un grand verre de lait."]},
  r1:{n:"Poulet, riz et légumes",cat:"R",batch:1,t:25,i:{poulet:150,riz:110,legumes:200,huile:10},s:["Cuis le riz (10-12 min).","Coupe le poulet en dés, saisis-le 8 min dans l'huile.","Ajoute la poêlée surgelée 8 min.","Répartis en boîtes : 4 jours au frigo."]},
  r2:{n:"Chili con carne",cat:"R",batch:1,t:35,i:{boeuf:140,haricots:150,tomates:100,oignon:50,riz:90,huile:10},s:["Fais revenir l'oignon dans l'huile, puis le bœuf.","Ajoute tomates, haricots, cumin et paprika, mijote 20 min.","Sers avec le riz. Se garde 4 jours, se congèle bien."]},
  r3:{n:"Dahl de lentilles au poulet",cat:"R",batch:1,t:30,i:{lentilles:80,poulet:100,tomates:100,oignon:50,epinards:100,riz:80,huile:10},s:["Fais revenir oignon et poulet en dés avec du curry.","Ajoute lentilles, tomates et 2 fois leur volume d'eau, 15 min.","Ajoute les épinards 5 min. Sers avec le riz."]},
  r4:{n:"Pâtes bolognaise",cat:"R",batch:1,t:30,i:{boeuf:140,pates:120,tomates:150,oignon:50,carotte:50,emmental:15},s:["Fais revenir oignon et carotte râpée, puis le bœuf.","Ajoute les tomates, mijote 15 min.","Cuis les pâtes, garde la sauce à part dans les boîtes.","Emmental au moment de manger."]},
  r5:{n:"Colin et purée de patate douce",cat:"R",batch:1,t:30,i:{colin:180,patated:350,legumes:150,huile:15},s:["Cuis la patate douce en dés 15 min à l'eau, écrase-la avec l'huile.","Cuis le colin au four 15 min à 200 °C ou à la poêle.","Poêlée de légumes à côté. 3 jours au frigo."]},
  r6:{n:"Wraps thon et carottes",cat:"R",t:10,i:{tortilla:2,thon:140,fblanc:100,carotte:100,emmental:20},s:["Mélange thon, fromage blanc, sel, poivre.","Râpe les carottes.","Garnis les tortillas, ajoute l'emmental, roule."]},
  r7:{n:"Poêlée pommes de terre, œufs, épinards",cat:"R",t:25,i:{pdt:400,oeuf:3,epinards:150,huile:15,emmental:20},s:["Coupe les pommes de terre en dés, poêle-les 15 min dans l'huile.","Ajoute les épinards 5 min.","Casse les œufs dessus, couvre 4 min, ajoute l'emmental."]},
  r8:{n:"Riz sauté au poulet et œuf",cat:"R",batch:1,t:25,i:{poulet:120,riz:100,oeuf:3,legumes:150,huile:10},s:["Cuis le riz (idéalement la veille).","Saisis le poulet en dés, ajoute les légumes.","Ajoute le riz, puis les œufs battus en remuant. Sauce soja."]},
  r9:{n:"Cari poulet, riz et grains",cat:"R",batch:1,t:40,i:{poulet:140,riz:90,lentilles:60,tomates:100,oignon:50,huile:10},s:["Fais revenir oignon, ail, gingembre et curcuma (safran péi) dans l'huile.","Ajoute le poulet en morceaux et les tomates, mijote 25 min.","Cuis les grains (lentilles) 20 min à part, et le riz.","Se garde 4 jours au frigo."]},
  r10:{n:"Rougail saucisses de volaille",cat:"R",batch:1,t:35,i:{saucisse:150,tomates:150,oignon:60,haricots:100,riz:80,huile:5},s:["Coupe les saucisses en rondelles, fais-les dorer et jette le gras rendu.","Ajoute oignon, ail, gingembre et piment, puis les tomates, 20 min à feu doux.","Sers avec le riz et les grains. Se garde 4 jours."]},
  r11:{n:"Cari thon et chouchou",cat:"R",batch:1,t:30,i:{thonfrais:150,riz:90,tomates:100,oignon:50,chouchou:150,huile:10},s:["Fais revenir oignon, ail, gingembre et curcuma dans l'huile.","Ajoute les tomates et le chouchou en dés, 10 min.","Ajoute le thon en cubes, 8 min à couvert, sans trop cuire.","Sers avec le riz. Se garde 3 jours."]},
  // Street food maison et recettes express
  s1:{n:"Burger maison et frites au four",cat:"R",tag:"street",t:25,i:{painburger:2,boeuf:150,emmental:20,oignon:50,pdt:200,huile:10},s:["Coupe les pommes de terre en frites, mélange avec l'huile et du paprika, 20 min au four à 220 °C.","Forme 2 steaks avec le bœuf, sel, poivre. 2 à 3 min par face à la poêle bien chaude, emmental dessus à la fin.","Toaste les pains, ajoute l'oignon en rondelles, ketchup ou moutarde."]},
  s2:{n:"Kebab maison sauce blanche",cat:"R",tag:"street",batch:1,t:15,i:{tortilla:2,poulet:150,fblanc:80,carotte:50,emmental:20},s:["Coupe le poulet en lamelles, mélange avec cumin, paprika, ail en poudre, sel. Saisis 6-8 min.","Sauce blanche : fromage blanc, ail, ciboulette, sel, poivre.","Garnis les tortillas : poulet, carottes râpées, sauce, emmental. Roule et toaste 1 min à la poêle.","Astuce batch : cuis tout le poulet d'un coup, il se garde 4 jours."]},
  s3:{n:"Bowl poulet teriyaki",cat:"R",tag:"street",batch:1,t:20,i:{poulet:150,riz:100,legumes:150,miel:15,huile:10},s:["Cuis le riz.","Saisis le poulet en dés dans l'huile, ajoute les légumes 6 min.","Sauce : 2 c. à s. de sauce soja + le miel, verse dans la poêle et laisse caraméliser 1 min.","Sers sur le riz. Se garde 4 jours."]},
  s4:{n:"Quesadillas thon et haricots",cat:"R",tag:"street",t:10,i:{tortilla:2,thon:100,haricots:100,emmental:40,tomates:50},s:["Écrase un peu les haricots avec la tomate, sel et piment.","Étale sur une tortilla, ajoute le thon et l'emmental, recouvre de la 2e tortilla.","2-3 min par face à la poêle sèche, coupe en 4."]},
  s5:{n:"Pizza tortilla express",cat:"R",tag:"street",t:12,i:{tortilla:2,tomates:80,poulet:100,emmental:40,oeuf:1},s:["Four à 220 °C. Étale la tomate sur les tortillas, avec origan.","Ajoute le poulet en petits dés (ou les restes du batch), l'emmental, et casse l'œuf au milieu.","8-10 min au four, jusqu'à ce que le bord soit croustillant."]},
  s7:{n:"Nouilles sautées au poulet",cat:"R",tag:"street",batch:1,t:20,i:{poulet:140,pates:110,legumes:150,oeuf:1,huile:10},s:["Cuis les pâtes, égoutte.","Saisis le poulet en lamelles, ajoute les légumes 5 min.","Ajoute les pâtes, l'œuf battu et 2 c. à s. de sauce soja, mélange 2 min à feu vif."]},
  q2:{n:"Pâtes thon tomate",cat:"R",batch:1,t:12,i:{pates:120,thon:120,tomates:150,huile:10,emmental:15},s:["Cuis les pâtes.","Pendant ce temps, chauffe tomates, huile, ail et herbes 5 min, ajoute le thon.","Mélange avec les pâtes, emmental par-dessus."]},
  // Matin
  m5:{n:"Pancakes avoine banane",cat:"M",t:15,i:{avoine:80,oeuf:2,banane:1,lait:150,whey:25,miel:10},s:["Mixe avoine, œufs, banane et lait (ou écrase à la fourchette).","Cuis des petits pancakes 2 min par face à la poêle légèrement huilée.","Sers avec le fromage blanc et le miel."]},
  m6:{n:"Croque-matin jambon œuf",cat:"M",t:10,i:{pain:100,jambon:60,emmental:20,oeuf:2,lait:200},s:["Fais 2 tartines avec jambon et emmental, passe-les 3 min à la poêle ou au four.","Cuis 2 œufs au plat.","Un verre de lait à côté."]},
  m7:{n:"Overnight oats whey",cat:"M",t:3,i:{avoine:80,whey:30,lait:250,banane:1,cacahuete:10},s:["La veille : mélange avoine, fromage blanc et lait dans une boîte, frigo.","Le matin : ajoute la banane et le beurre de cacahuète. Zéro cuisson."]},
  m8:{n:"Wrap œufs brouillés fromage",cat:"M",tag:"street",t:8,i:{tortilla:2,oeuf:3,emmental:20},s:["Brouille les œufs avec l'emmental.","Garnis les tortillas, roule, ajoute du ketchup ou de la sauce piquante si tu veux."]},
  // Collation
  c4:{n:"Smoothie banane avoine whey",cat:"C",t:3,i:{whey:30,banane:1,avoine:30,lait:250},s:["Mixe tout avec quelques glaçons.","Sans blender : shaker la whey dans le lait, mange la banane et l'avoine à côté."]},
  c5:{n:"Skyr papaye miel",cat:"C",t:3,i:{skyr:250,papaye:150,avoine:30,miel:15},s:["Skyr dans un bol, papaye en dés, avoine et miel par-dessus."]},
  c7:{n:"Shaker whey lait et avoine",cat:"C",t:2,i:{whey:40,lait:300,avoine:40},s:[]},
  c8:{n:"Fromage blanc whey cacao",cat:"C",t:3,i:{fblanc:200,whey:20,avoine:30,miel:10},s:[]},
  c6:{n:"Sandwich thon et banane",cat:"C",t:4,i:{pain:80,thon:80,fblanc:40,banane:1},s:["Mélange thon, fromage blanc, sel et poivre.","Tartine sur le pain. Banane à côté."]},
  // Street food
  s8:{n:"Tacos français maison",cat:"R",tag:"street",t:25,i:{tortilla:2,poulet:140,pdt:150,emmental:30,fblanc:50,huile:10},s:["Frites au four : pommes de terre en bâtonnets, huile, 20 min à 220 °C.","Saisis le poulet en dés avec des épices.","Sauce fromagère : chauffe le fromage blanc avec l'emmental 1 min.","Garnis les tortillas (poulet, frites, sauce), plie en carré, dore 2 min par face à la poêle."]},
  s9:{n:"Fajitas poulet",cat:"R",tag:"street",batch:1,t:20,i:{tortilla:2,poulet:150,legumes:150,haricots:60,fblanc:50,huile:10},s:["Coupe le poulet en lamelles, saisis-le avec paprika, cumin et un peu de piment.","Ajoute les légumes (idéalement poivrons et oignons) 6 min, puis les haricots.","Garnis les tortillas, ajoute le fromage blanc (façon crème)."]},
  s10:{n:"Burrito bowl bœuf",cat:"R",tag:"street",batch:1,t:25,i:{boeuf:130,riz:90,haricots:80,mais:60,tomates:50,emmental:20},s:["Cuis le riz.","Fais revenir le bœuf avec cumin, paprika, sel, puis la tomate 5 min.","Assemble : riz, bœuf, haricots, maïs, emmental. Sauce piquante si tu veux."]},
  s12:{n:"Croque-monsieur au four",cat:"R",tag:"street",t:15,i:{pain:140,jambon:100,emmental:40,fblanc:50},s:["Four à 200 °C.","Tartine le fromage blanc (poivre, muscade) sur le pain, ajoute jambon et emmental, referme.","12 min au four, jusqu'à ce que ça gratine."]},
  s13:{n:"Poke bowl thon",cat:"R",tag:"street",t:15,i:{riz:100,thonfrais:130,carotte:60,mais:60,huile:5,miel:5},s:["Cuis le riz, laisse tiédir.","Coupe le thon en cubes, marine 5 min avec 1 c. à s. de sauce soja, le miel et l'huile.","Assemble : riz, thon, carottes râpées, maïs."]},
  s14:{n:"Wrap houmous poulet",cat:"R",tag:"street",batch:1,t:15,i:{tortilla:2,poulet:120,poischiches:100,carotte:50,huile:10},s:["Houmous express : écrase les pois chiches avec l'huile, ail, citron, sel (ou mixe).","Saisis le poulet en lamelles avec des épices.","Tartine le houmous, ajoute poulet et carottes râpées, roule."]},
  s15:{n:"Nuggets maison et potatoes",cat:"R",tag:"street",t:30,i:{poulet:180,avoine:30,oeuf:1,pdt:250,huile:10},s:["Four à 220 °C. Coupe les pommes de terre en quartiers, mélange avec l'huile et le paprika, 25 min.","Coupe le poulet en morceaux, trempe dans l'œuf battu puis dans l'avoine mixée avec sel et paprika.","Ajoute les nuggets au four pour les 15 dernières minutes."]},
  // Plats batch faciles
  r12:{n:"Hachis parmentier",cat:"R",batch:1,t:40,i:{boeuf:150,pdt:350,lait:80,emmental:20,oignon:50,huile:10},s:["Cuis les pommes de terre 20 min à l'eau, écrase-les avec le lait.","Fais revenir l'oignon et le bœuf dans l'huile.","Bœuf au fond du plat, purée dessus, emmental, 15 min au four à 200 °C.","Se garde 4 jours, se congèle bien."]},
  r13:{n:"Couscous poulet express",cat:"R",batch:1,t:20,i:{poulet:140,semoule:90,poischiches:80,legumes:150,huile:10},s:["Saisis le poulet en morceaux avec ras-el-hanout ou cumin.","Ajoute les légumes et les pois chiches, un verre d'eau, 10 min.","Semoule : même volume d'eau bouillante salée, couvre 5 min, égrène à la fourchette."]},
  r14:{n:"Frittata pommes de terre jambon",cat:"R",batch:1,t:25,i:{oeuf:4,pdt:200,jambon:60,emmental:20,huile:5},s:["Cuis les pommes de terre en dés 10 min à la poêle dans l'huile.","Ajoute le jambon, puis les œufs battus avec l'emmental.","Couvre 8 min à feu doux. Se mange chaude ou froide, 3 jours au frigo."]},
  r15:{n:"Gratin de pâtes au jambon",cat:"R",batch:1,t:25,i:{pates:110,jambon:100,lait:150,emmental:30},s:["Cuis les pâtes un peu fermes.","Mélange avec le jambon, le lait, sel, poivre, muscade.","Emmental dessus, 15 min au four à 200 °C."]},
  r16:{n:"Bœuf sauté au wok",cat:"R",tag:"street",batch:1,t:20,i:{boeuf:140,riz:100,legumes:200,huile:10,miel:5},s:["Cuis le riz.","Saisis le bœuf à feu vif dans l'huile, ajoute les légumes 5 min.","Sauce soja et miel, 1 min. Sers sur le riz."]},
  r17:{n:"Salade de riz thon maïs",cat:"R",batch:1,t:15,i:{riz:100,thon:120,mais:80,carotte:80,oeuf:1,huile:10},s:["Cuis le riz et l'œuf (10 min, dur). Refroidis.","Mélange riz, thon, maïs, carottes râpées, œuf en morceaux.","Assaisonne huile, vinaigre, moutarde. Parfait froid, 3 jours au frigo."]},
  r18:{n:"Lentilles saucisses",cat:"R",batch:1,t:30,i:{lentilles:90,saucisse:100,carotte:80,oignon:50,pain:50},s:["Fais revenir oignon et carottes en rondelles.","Ajoute les lentilles et 3 fois leur volume d'eau, 20 min.","Ajoute les saucisses en rondelles les 10 dernières minutes. Pain à côté."]},
  r19:{n:"Poulet moutarde et pommes de terre",cat:"R",batch:1,t:30,i:{poulet:170,pdt:350,fblanc:60,huile:10},s:["Cuis les pommes de terre en dés à la poêle ou au four, 20 min.","Saisis le poulet en morceaux dans l'huile.","Hors du feu, ajoute fromage blanc et 1 c. à s. de moutarde. 4 jours au frigo."]},
};
const SLOTS=[["matin","Matin"],["midi","Midi"],["collation","Collation"],["soir","Soir"]];
const SLOTCAT={matin:"M",collation:"C",midi:"R",soir:"R"};
const SEANCES={A:"Poussée et jambes",B:"Tirage et gainage",C:"Épaules et polyvalent"};
// [exercice, séries, répétitions, technique (1), superset]
const PROG={
  A:[["Pompes en poirier au mur",4,"5-8",1],["Poirier libre",5,"20-30 s",1],["Développé incliné haltères",4,"8-10",0,1],["Tractions larges",4,"6-10",0,1],["Dips lestés",3,"8-10",0,2],["Élévations latérales",3,"12-15",0,2],["Presse à cuisses ou squat goblet",3,"10-12"],["Levées de jambes suspendu",3,"10"]],
  B:[["Front lever (tuck avancé, puis une jambe)",6,"5-8 s",1],["Tractions lestées",4,"5-8"],["Rowing haltère ou poulie",4,"8-10",0,1],["Pompes déclinées",3,"max",0,1],["Fentes bulgares",3,"8-10 / jambe"],["Curl haltères",3,"10-12",0,2],["Triceps poulie",3,"10-12",0,2],["Planche gainée (ou roue)",3,"40 s"]],
  C:[["Muscle-up lesté ou lent",6,"3",1],["Planche tuck",5,"5-8 s",1],["Développé militaire haltères",4,"8-10",0,1],["Tirage vertical prise neutre",4,"8-10",0,1],["Pompes archer ou lestées",3,"8-10"],["Soulevé de terre roumain haltères",3,"10"],["Oiseau (arrière d'épaule)",3,"15",0,2],["Roue abdominale ou gainage",3,"12",0,2]],
};
const BYDAY=["MO","TU","WE","TH","FR","SA","SU"];
const JOURS=["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"];

// ---------- Dates ----------
const pad=n=>String(n).padStart(2,"0");
const iso=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const parse=s=>{const[y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d)};
const addDays=(s,n)=>{const d=parse(s);d.setDate(d.getDate()+n);return iso(d)};
const monday=s=>{const d=parse(s);return addDays(s,-((d.getDay()+6)%7))};
const diffDays=(a,b)=>Math.round((parse(b)-parse(a))/864e5);
const today=()=>iso(new Date());
const fmtDay=s=>parse(s).toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"});
const fmtShort=s=>parse(s).toLocaleDateString("fr-FR",{day:"numeric",month:"short"});
const nf=n=>Math.round(n).toLocaleString("fr-FR");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

// ---------- État ----------
const DEFAULT=()=>({v:1,settings:{kcal:2750,protMin:140,protMax:170,start:monday(today()),weight0:71,goal:75,training:{0:"A",2:"B",4:"C"},times:{matin:"07:30",midi:"12:30",collation:"16:30",soir:"19:30"},seanceTime:"18:00"},plans:{},pantry:{},shop:{},log:{},weigh:[],sessions:{}});
let S=DEFAULT();
let ui={tab:"today",week:0,frigoCat:"all",seanceKey:null};
const nowHM=()=>{const d=new Date();return pad(d.getHours())+":"+pad(d.getMinutes())};

// ---------- Calculs ----------
// Portion d'un repas : un nombre, ou {p,c} = facteur viande/poisson et facteur pour le reste (féculents, légumes…)
const MEAT=new Set(["poulet","boeuf","saucisse","thonfrais","colin","thon","jambon"]);
const qf=(id,f)=>typeof f==="number"?f:MEAT.has(id)?f.p:f.c;
const fenc=f=>typeof f==="number"?String(f):f.p+"|"+f.c;
const fdec=s=>{if(!String(s).includes("|"))return+s;const[p,c]=s.split("|").map(Number);return{p,c}};
function macros(rid,f=1){const r=REC[rid];const o={k:0,p:0,f:0,c:0,cost:0};
  for(const[id,q]of Object.entries(r.i)){const g=ING[id],x=qf(id,f),m=(g.u==="pc"?q:q/100)*x,qq=q*x;
    o.k+=g.k*m;o.p+=g.p*m;o.f+=g.f*m;o.c+=g.c*m;o.cost+=g.u==="pc"?g.pr*qq:g.pr*qq/1000;}
  return o;}
function progWeek(d){return Math.floor(diffDays(S.settings.start,d)/7)+1}
function phase(w){if(w<1)return"Avant le programme";if(w<=2)return"Reprise sans blessure";if(w<=6)return"Retrouver ton niveau";if(w===7)return"Semaine allégée";if(w<=12)return"Dépasser ton ancien niveau";return"Programme terminé"}
function seanceOf(ws,i){return S.settings.training[i]||null}

// Ajuste viande (p) et reste (c) des repas midi/soir pour viser les calories et le bas de la fourchette protéines + 10 g :
// la viande coûte cher, les féculents et l'huile non.
function fitDay(day){
  const st=S.settings,clamp=(v,a,b)=>Math.min(b,Math.max(a,v)),r20=v=>Math.round(v*20)/20;
  const B=[macros(day.matin.r),macros(day.collation.r)],Bk=B[0].k+B[1].k,Bp=B[0].p+B[1].p;
  const M=[day.midi.r,day.soir.r].map(r=>[macros(r,{p:1,c:0}),macros(r,{p:0,c:1})]);
  const Mk=M[0][0].k+M[1][0].k,Mp=M[0][0].p+M[1][0].p,Rk=M[0][1].k+M[1][1].k,Rp=M[0][1].p+M[1][1].p;
  const K=st.kcal-Bk,P=Math.min(st.protMax,st.protMin+10)-Bp,det=Mp*Rk-Mk*Rp;
  let fp=Mp>0&&Math.abs(det)>1?(P*Rk-K*Rp)/det:1;fp=r20(clamp(fp,.4,1.3));
  const fc=r20(clamp((K-fp*Mk)/Rk,.6,2));
  day.matin.f=1;day.collation.f=1;day.midi.f={p:fp,c:fc};day.soir.f={p:fp,c:fc};}
function genPlan(ws){
  const w=Math.abs(Math.floor(diffDays(S.settings.start,ws)/7));
  const B=["s3","r1","q2","s7","r12","s9","r13","r2","s2","r16","r15","r9","s10","r19","r8","r17","s14","r4","r14","r18","r3"],n=B.length;
  const M=["m1","m2","m3","m4","m5","m6","m7","m8"],ST=["s1","s4","s5","s8","s12","s13","s15","r6","r7"];
  const CT=["c1","c4"],CR=["c7","c8","c7","c2","c7","c5"];
  const X=B[(4*w)%n],Y=B[(4*w+1)%n],Z=B[(4*w+2)%n],W=B[(4*w+3)%n];
  const days=[];
  for(let i=0;i<7;i++){
    const training=!!seanceOf(ws,i);
    const day={matin:{r:M[(i+3*w)%M.length]},collation:{r:training?CT[(i+w)%2]:CR[(i+w)%CR.length]},
      midi:{r:i<3?X:Z},soir:{r:i<3?Y:i<5?W:ST[(2*w+i-5)%ST.length]}};
    fitDay(day);days.push(day);}
  return{ws,days};}
function planFor(ws){if(!S.plans[ws]){S.plans[ws]=genPlan(ws);prunePlans();save()}return S.plans[ws]}
function prunePlans(){const keep=Object.keys(S.plans).sort().slice(-4);for(const k in S.plans)if(!keep.includes(k))delete S.plans[k]}
function dayTotals(day){let k=0,p=0,cost=0;for(const[s]of SLOTS){const m=macros(day[s].r,day[s].f);k+=m.k;p+=m.p;cost+=m.cost}return{k,p,cost}}
function eatenTotals(d){const L=S.log[d];let k=0,p=0;if(!L)return{k,p};
  for(const v of Object.values(L.eaten||{})){k+=v.k;p+=v.p}for(const x of L.extras||[]){k+=x.k;p+=x.p}return{k,p}}
function batchSessions(plan){
  const groups=[{label:"Dimanche (pour lun → mer)",days:[0,1,2]},{label:"Mercredi soir (pour jeu → dim)",days:[3,4,5,6]}];
  return groups.map(g=>{const acc={};for(const i of g.days)for(const s of["midi","soir"]){const m=plan.days[i][s];if(!REC[m.r].batch)continue;
      const f=typeof m.f==="number"?{p:m.f,c:m.f}:m.f,a=acc[m.r]||(acc[m.r]={p:0,c:0,n:0});a.p+=f.p;a.c+=f.c;a.n++}
    return{label:g.label,items:Object.entries(acc)}}).filter(g=>g.items.length);}
function shoppingList(plan){const acc={};
  for(const day of plan.days)for(const[s]of SLOTS){const m=day[s];for(const[id,q]of Object.entries(REC[m.r].i))acc[id]=(acc[id]||0)+q*qf(id,m.f)}
  return acc;}
function fmtQty(id,q,shop){const g=ING[id];
  if(g.u==="pc")return(shop?Math.ceil(q):Math.round(q*2)/2).toLocaleString("fr-FR")+(id==="oeuf"?" œuf"+(q>1?"s":""):id==="banane"?" banane"+(q>1?"s":""):" pièce"+(q>1?"s":""));
  if(shop&&q>=1000)return(Math.ceil(q/100)/10).toLocaleString("fr-FR")+(g.u==="ml"?" L":" kg");
  const r=shop?Math.ceil(q/10)*10:Math.round(q/5)*5;return r+(g.u==="ml"?" ml":" g");}
function coverage(rid){const ids=Object.keys(REC[rid].i);const have=ids.filter(i=>S.pantry[i]);return{pct:have.length/ids.length,missing:ids.filter(i=>!S.pantry[i])}}

// ---------- Stockage (db du compte, sinon navigateur) ----------
let REF=null,saveT=null,writing=false,again=false;
function lsGet(){try{return JSON.parse(localStorage.getItem("rhf")||"null")}catch(e){return null}}
function lsSet(){try{localStorage.setItem("rhf",JSON.stringify(S))}catch(e){}}
function save(){lsSet();if(!REF)return;clearTimeout(saveT);saveT=setTimeout(flush,600)}
async function flush(){if(writing){again=true;return}writing=true;
  try{await REF.set(JSON.parse(JSON.stringify(S)))}catch(e){if(e&&e.code==="quota_exceeded")toast("Stockage plein : supprime d'anciennes pesées.")}
  writing=false;if(again){again=false;flush()}}
function merge(d){const s=DEFAULT(),st=d.settings||{};return{...s,...d,settings:{...s.settings,...st,times:{...s.settings.times,...(st.times||{})}}}}
async function connect(){
  if(!window.claude||!window.claude.use)return;
  try{const[db,user]=await Promise.all([claude.use("db"),claude.use("user")]);
    const uid=user?await user.id():null;if(!db||!uid)return;
    REF=db.doc("data/users/"+uid+"/state");
    const snap=await REF.get();
    if(snap.exists){S=merge(snap.data());lsSet();render()}else{await REF.set(JSON.parse(JSON.stringify(S)))}
    document.addEventListener("visibilitychange",async()=>{if(document.visibilityState==="visible"&&!writing){try{const s=await REF.get();if(s.exists){S=merge(s.data());render()}}catch(e){}}});
  }catch(e){REF=null}}

// ---------- UI helpers ----------
const $=s=>document.querySelector(s);
const CHECK='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
function toast(t){const e=$("#toast");e.textContent=t;e.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>e.hidden=true,2200)}
function bar(v,max,cls=""){return`<div class="bar ${cls}"><i style="width:${Math.min(100,v/max*100).toFixed(1)}%"></i></div>`}
function openSheet(html){const s=$("#sheet");s.innerHTML=`<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;s.hidden=false}
function closeSheet(){$("#sheet").hidden=true;$("#sheet").innerHTML=""}
function weekStart(){return addDays(monday(today()),7*ui.week)}
function weekSeg(){return`<div class="seg"><button data-act="week" data-v="0" class="${ui.week===0?"on":""}">Cette semaine</button><button data-act="week" data-v="1" class="${ui.week===1?"on":""}">Semaine prochaine</button></div>`}

const TABS=[["today","Aujourd'hui",'<path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><circle cx="12" cy="12" r="5"/>'],
  ["seance","Séance",'<path d="M6 6v12M18 6v12M3 9v6M21 9v6M6 12h12"/>'],
  ["week","Semaine",'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'],
  ["shop","Courses",'<path d="M4 6h2l2 10h10l2-7H7"/><circle cx="10" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>'],
  ["frigo","Frigo",'<rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M6 10h12M9 6v2M9 13v3"/>'],
  ["track","Suivi",'<path d="M4 19l5-6 4 3 7-9"/><path d="M4 4v16h16"/>']];
function renderTabs(){$("#tabs").innerHTML=TABS.map(([id,l,ic])=>`<button data-act="tab" data-v="${id}" class="${ui.tab===id?"on":""}" aria-label="${l}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ic}</svg>${l}</button>`).join("")}

// ---------- Vues ----------
function vToday(){
  const d=today(),ws=monday(d),i=(parse(d).getDay()+6)%7,plan=planFor(ws),day=plan.days[i];
  const se=seanceOf(ws,i),w=progWeek(d),L=S.log[d]||{},et=eatenTotals(d),st=S.settings,now=nowHM(),T=st.times;
  const late=SLOTS.filter(([s])=>!(L.eaten&&L.eaten[s])&&T[s]<=now),next=SLOTS.find(([s])=>!(L.eaten&&L.eaten[s])&&T[s]>now);
  const lastLate=late[late.length-1],sess=S.sessions[d],sessPct=sess?sessionProgress(sess).pct:0;
  const alert=lastLate?`<div class="note warn"><b>${now} : c'est l'heure du repas « ${lastLate[1].toLowerCase()} »</b>. ${REC[day[lastLate[0]].r].n}. Coche-le une fois mangé.${late.length>1?` (${late.length} repas pas encore cochés aujourd'hui)`:""}</div>`
    :next?`<div class="note">Prochain repas : ${next[1].toLowerCase()} à ${T[next[0]]}.</div>`
    :`<div class="note ok">Tous les repas du jour sont cochés.</div>`;
  const meals=SLOTS.map(([s,l])=>{const m=day[s],mm=macros(m.r,m.f),done=L.eaten&&L.eaten[s],isLate=!done&&T[s]<=now;
    return`<div class="meal ${done?"done":""}"><div class="info" data-act="recipe" data-r="${m.r}" data-f="${fenc(m.f)}" data-ws="${ws}" data-i="${i}">
      <div class="slot">${l} · ${T[s]}${s==="collation"&&se?" · autour de la séance":""}${isLate?' <span class="badge">à prendre</span>':""}</div><div class="name">${REC[m.r].n}</div>
      <div class="muted num" style="font-size:15px">${nf(mm.k)} kcal · ${nf(mm.p)} g prot.${m.f!==1?" · quantités ajustées":""}</div></div>
      <button class="check" data-act="eat" data-s="${s}" aria-label="Marquer ${l} comme mangé">${CHECK}</button></div>`}).join("");
  const extras=(L.extras||[]).map((x,j)=>`<div class="row" style="font-size:15px"><span class="grow">${esc(x.n)}</span><span class="num muted">${nf(x.k)} kcal · ${nf(x.p)} g</span><button class="ghost" data-act="delx" data-j="${j}" aria-label="Supprimer" style="padding:4px 8px">✕</button></div>`).join("");
  return`<header class="row"><div class="grow"><div class="eyebrow">Semaine ${Math.max(w,0)}/12 · ${phase(w)}</div><h1 style="text-transform:capitalize">${fmtDay(d)}</h1></div>
    ${se?`<span class="badge">Séance ${se}</span>`:`<span class="badge rest">Repos</span>`}</header>
  ${alert}
  ${se?`<div class="note row"><span class="grow">Séance ${se} à ${st.seanceTime} : ${SEANCES[se]}.${sessPct?` Faite à ${Math.round(sessPct*100)} %.`:""} Collation 30 à 60 min avant ou juste après.</span><button data-act="tab" data-v="seance">Ouvrir</button></div>`:""}
  <section class="card"><div class="row"><div class="grow"><div class="eyebrow">Calories</div><div class="num big">${nf(et.k)}<span class="muted" style="font-size:20px"> / ${nf(st.kcal)}</span></div></div>
    <div style="text-align:right"><div class="eyebrow">Protéines</div><div class="num big" style="color:var(--prot)">${nf(et.p)}<span class="muted" style="font-size:20px"> / ${st.protMin}–${st.protMax} g</span></div></div></div>
    ${bar(et.k,st.kcal)}${bar(et.p,st.protMin,"p")}
    <div class="muted" style="font-size:14px">Reste ${nf(Math.max(0,st.kcal-et.k))} kcal et ${nf(Math.max(0,st.protMin-et.p))} g de protéines. Eau : 2,5 à 3 L.</div></section>
  <section class="card"><h2>Repas du jour</h2><div>${meals}</div></section>
  <section class="card"><h2>Hors plan</h2>${extras||'<div class="muted" style="font-size:15px">Un écart, un snack en plus ? Ajoute-le ici.</div>'}
    <form id="fx" class="row wrap"><input id="xn" placeholder="Ex. 2 carrés de chocolat" style="flex:2 1 180px" required>
      <input id="xk" type="number" inputmode="numeric" placeholder="kcal" style="flex:1 1 70px" required><input id="xp" type="number" inputmode="numeric" placeholder="prot. g" style="flex:1 1 70px">
      <button class="primary" type="submit">Ajouter</button></form></section>`;}

// ---------- Séances ----------
function setsFor(ex,w){return w===7&&!ex[3]?Math.min(ex[1],2):ex[1]}
function sessionProgress(rec){const w=progWeek(rec.date||today());let done=0,tot=0;
  PROG[rec.s].forEach((ex,j)=>{const n=setsFor(ex,w);tot+=n;done+=((rec.ex[j]||{}).d||[]).slice(0,n).filter(Boolean).length});
  return{done,tot,pct:tot?done/tot:0}}
function progressTip(w){if(w<=2)return"Charges légères, garde 3 répétitions en réserve et apprends le rythme.";if(w<=6)return"Quand tu atteins le haut de la fourchette sur toutes les séries, ajoute 1 à 2 kg (ou 1 répétition en calisthenics).";
  if(w===7)return"Semaine allégée : 2 séries au lieu de 3-4, charges réduites de 20 %.";if(w<=12)return"Même principe, avec des variantes plus dures (tractions lestées, pompes archer lestées).";return"Programme terminé : refais un bilan et un nouveau cycle."}
function lastNote(key,j,before){const ds=Object.keys(S.sessions).filter(x=>x<before&&S.sessions[x].s===key).sort().reverse();
  for(const x of ds){const n=(S.sessions[x].ex[j]||{}).n;if(n)return{d:x,n}}return null}
function vSeance(){
  const d=today(),ws=monday(d),i=(parse(d).getDay()+6)%7,planned=seanceOf(ws,i),rec=S.sessions[d];
  const key=ui.seanceKey||(rec&&rec.s)||planned,w=progWeek(d);
  const weekDone=[...Array(7)].map((_,k)=>S.sessions[addDays(ws,k)]).filter(r=>r&&(r.done||sessionProgress(r).pct>=.8)).length;
  const nTrain=Object.keys(S.settings.training).length;
  const hist=Object.keys(S.sessions).sort().reverse().slice(0,6).map(x=>{const r=S.sessions[x],p=sessionProgress(r);
    return`<div class="row" style="padding:6px 0;border-top:1px solid var(--line);font-size:15px"><span class="grow">${fmtShort(x)} · Séance ${r.s}</span><span class="num">${p.done}/${p.tot} séries${r.done?" ✓":""}</span></div>`}).join("");
  const pick=`<div class="seg">${["A","B","C"].map(k=>`<button data-act="pickseance" data-v="${k}" class="${key===k?"on":""}">Séance ${k}</button>`).join("")}</div>`;
  let body;
  if(!key)body=`<section class="card"><h2>Jour de repos</h2><div class="muted">Récupère, mange et dors 7 à 8 h. Tu veux quand même t'entraîner ? Choisis une séance.</div>${pick}</section>`;
  else{const r=rec&&rec.s===key?rec:{s:key,ex:{}},p=sessionProgress({...r,date:d});
    let lastSS=0;
    const list=PROG[key].map((ex,j)=>{const n=setsFor(ex,w),e=r.ex[j]||{},dn=e.d||[],ln=lastNote(key,j,d),all=dn.slice(0,n).filter(Boolean).length===n;
      const ssLbl=ex[4]?(ex[4]!==lastSS?`Superset ${ex[4]} · enchaîne avec le suivant`:`Superset ${ex[4]}`):"";lastSS=ex[4]||0;
      return`<div style="padding:12px 0;border-top:1px solid var(--line);display:flex;flex-direction:column;gap:8px">
        <div class="row"><div class="grow"><div class="slot">${ex[3]?"Technique":ssLbl||"Exercice"}</div><div style="font-weight:600;${all?"color:var(--muted);text-decoration:line-through":""}">${ex[0]}</div></div><span class="num" style="font-size:20px">${n} × ${ex[2]}</span></div>
        <div class="row wrap" style="gap:8px">${[...Array(n)].map((_,k)=>`<button class="check ${dn[k]?"on":""}" data-act="set" data-j="${j}" data-k="${k}" aria-label="Série ${k+1}" style="width:40px;height:40px">${dn[k]?CHECK:`<span class="num" style="font-size:16px">${k+1}</span>`}</button>`).join("")}</div>
        <input class="exnote" id="note-${key}-${j}" data-j="${j}" value="${esc(e.n||"")}" placeholder="${ln?"Dernière fois : "+esc(ln.n):"Charge et reps, ex. 12 kg × 10"}">
        ${ln?`<div class="muted" style="font-size:13px">Dernière fois (${fmtShort(ln.d)}) : ${esc(ln.n)}</div>`:""}</div>`}).join("");
    body=`<section class="card"><div class="row"><div class="grow"><div class="eyebrow">${planned&&planned===key?"Prévue aujourd'hui":"Séance choisie"}</div><h2>Séance ${key} · ${SEANCES[key]}</h2></div><div class="num big" style="font-size:30px">${p.done}/${p.tot}</div></div>
      ${bar(p.done,p.tot)}${pick}
      <div class="note">${progressTip(w)} Arrête chaque série à 1-2 répétitions de l'échec. Superset : enchaîne les deux exercices sans repos, puis 90 s de pause.</div>
      <div>${list}</div>
      <button class="primary" data-act="seancedone">${r.done?"Séance terminée ✓":"Marquer la séance terminée"}</button></section>`}
  return`<header><div class="eyebrow">Semaine ${Math.max(w,0)}/12 · ${phase(w)}</div><h1>Séance du jour</h1></header>
  <section class="card"><div class="row"><div class="grow"><div class="eyebrow">Cette semaine</div><div class="num big">${weekDone}/${nTrain} <span class="muted" style="font-size:20px">séances</span></div></div></div>${bar(weekDone,nTrain||3)}</section>
  ${body}${hist?`<section class="card"><h2>Historique</h2><div>${hist}</div></section>`:""}`}
function sessionRec(key){const d=today();let r=S.sessions[d];if(!r||r.s!==key){r=S.sessions[d]={s:key,date:d,ex:{},done:false}}
  for(const k in S.sessions)if(k<addDays(d,-180))delete S.sessions[k];return r}
function gcal(title,time,rrule,start){const ds=(start||today()).replace(/-/g,""),[h,m]=time.split(":").map(Number),e=new Date(2000,0,1,h,m+30);
  return"https://calendar.google.com/calendar/render?"+new URLSearchParams({action:"TEMPLATE",text:title,dates:`${ds}T${pad(h)}${pad(m)}00/${ds}T${pad(e.getHours())}${pad(e.getMinutes())}00`,ctz:"Indian/Reunion",recur:"RRULE:"+rrule,details:"Rappel Red Hood Fuel"}).toString()}

function vWeek(){
  const ws=weekStart(),plan=planFor(ws),bs=batchSessions(plan);
  const days=plan.days.map((day,i)=>{const d=addDays(ws,i),se=seanceOf(ws,i),t=dayTotals(day);
    return`<section class="card day"><div class="row"><h3 class="grow">${JOURS[i]} ${fmtShort(d)}</h3>${se?`<span class="badge">Séance ${se}</span>`:`<span class="badge rest">Repos</span>`}</div>
      <div>${SLOTS.map(([s,l])=>{const m=day[s];return`<div class="item" data-act="swap" data-i="${i}" data-s="${s}"><span class="slot" style="width:78px;flex:none">${l}</span><span class="grow">${REC[m.r].n}</span><span class="muted" aria-hidden="true">›</span></div>`}).join("")}</div>
      <div class="muted num" style="font-size:14px">${nf(t.k)} kcal · ${nf(t.p)} g protéines · ≈ ${t.cost.toFixed(2).replace(".",",")} €</div></section>`}).join("");
  return`<header><div class="eyebrow">Semaine du ${fmtShort(ws)}</div><h1>Plan des repas</h1></header>${weekSeg()}
  <section class="card"><h2>Batch cooking</h2>${bs.map(b=>`<div><div class="eyebrow">${b.label}</div>${b.items.map(([r,a])=>`<div class="item" data-act="recipe" data-r="${r}" data-f="${fenc({p:a.p,c:a.c})}" data-total="${a.n}"><span class="grow">${REC[r].n}</span><span class="num">${a.n} portions</span></div>`).join("")}</div>`).join("")}
  <div class="muted" style="font-size:14px">Le matin et la collation se font en 2 à 10 minutes. Touche un repas pour le changer.</div>
  <div class="row"><button data-act="regen">Régénérer la semaine</button><button data-act="tab" data-v="shop" class="primary">Liste de courses</button></div></section>${days}`;}

function vShop(){
  const ws=weekStart(),plan=planFor(ws),list=shoppingList(plan),got=S.shop[ws]||{};
  let total=0;const groups=RAYONS.map(r=>{const items=Object.entries(list).filter(([id])=>ING[id].r===r).sort((a,b)=>ING[a[0]].n.localeCompare(ING[b[0]].n));
    if(!items.length)return"";return`<section class="card"><h2>${r}</h2><div>${items.map(([id,q])=>{const g=ING[id],c=g.u==="pc"?g.pr*Math.ceil(q):g.pr*q/1000;total+=c;
      return`<div class="item ${got[id]?"got":""}" data-act="got" data-id="${id}"><span class="box">${CHECK}</span><span class="grow iname">${g.n}${S.pantry[id]&&!got[id]?' <span class="badge rest">au frigo ?</span>':""}</span><span class="num" style="text-align:right;line-height:1.2">${fmtQty(id,q,true)}<br><span class="muted" style="font-size:13px">≈ ${c.toFixed(2).replace(".",",")} €</span></span></div>`}).join("")}</div></section>`}).join("");
  const n=Object.keys(list).length,g=Object.keys(got).filter(k=>list[k]).length;
  return`<header><div class="eyebrow">Semaine du ${fmtShort(ws)}</div><h1>Liste de courses</h1></header>${weekSeg()}
  <section class="card"><div class="row"><div class="grow"><div class="eyebrow">Estimation</div><div class="num big">${total.toFixed(0)} €</div></div><div style="text-align:right"><div class="eyebrow">Dans le panier</div><div class="num big">${g}/${n}</div></div></div>
  <div class="muted" style="font-size:14px">Prix moyens à La Réunion, à titre indicatif. Bananes, papaye, chouchou, patates douces et oignons coûtent moins cher au marché forain. Thon frais : demande une longe chez le poissonnier. Ce que tu coches passe dans ton frigo. Huile, miel, beurre de cacahuète et whey durent plusieurs semaines : vérifie avant d'en racheter.</div>
  <div class="row"><button data-act="copy">Copier la liste</button></div></section>${groups}`;}

function vFrigo(){
  const cats=[["all","Tout"],["M","Matin"],["R","Repas"],["street","Street"],["fast","Rapide"],["C","Snack"]];
  const recs=Object.keys(REC).filter(r=>ui.frigoCat==="all"||REC[r].cat===ui.frigoCat||(ui.frigoCat==="street"&&REC[r].tag==="street")||(ui.frigoCat==="fast"&&REC[r].t<=15)).map(r=>({r,...coverage(r)})).sort((a,b)=>b.pct-a.pct);
  const have=Object.keys(S.pantry).filter(k=>S.pantry[k]&&ING[k]).length;
  return`<header><div class="eyebrow">${have} ingrédient${have>1?"s":""} en stock</div><h1>Qu'est-ce que je mange ?</h1></header>
  <section class="card"><h2>Dans mon frigo</h2>${RAYONS.map(r=>`<div><div class="eyebrow" style="margin-bottom:6px">${r}</div><div class="chips">${Object.entries(ING).filter(([,g])=>g.r===r).map(([id,g])=>`<button class="chip ${S.pantry[id]?"on":""}" data-act="pantry" data-id="${id}" aria-pressed="${!!S.pantry[id]}">${g.n}</button>`).join("")}</div></div>`).join("")}
  <div class="row"><button class="ghost" data-act="clearpantry">Tout décocher</button></div></section>
  <section class="card"><h2>Tu peux cuisiner</h2><div class="seg">${cats.map(([c,l])=>`<button data-act="fcat" data-v="${c}" class="${ui.frigoCat===c?"on":""}">${l}</button>`).join("")}</div>
  <div>${recs.map(x=>{const m=macros(x.r);return`<div class="item" data-act="recipe" data-r="${x.r}" data-f="1"><span class="grow"><span style="font-weight:600">${REC[x.r].n}</span><br><span class="muted" style="font-size:14px">${x.missing.length?"Manque : "+x.missing.map(i=>ING[i].n.toLowerCase()).join(", "):"Tout est là"} · ${nf(m.k)} kcal · ${nf(m.p)} g</span></span><span class="cov" style="color:${x.pct===1?"var(--ok)":"var(--muted)"}">${Math.round(x.pct*100)} %</span></div>`}).join("")}</div></section>`;}

function advice(){
  const w=S.weigh.slice().sort((a,b)=>a.d<b.d?-1:1);
  if(w.length<2)return{t:"Pèse-toi une fois par semaine, le matin à jeun, au même endroit. Il faut deux pesées à une semaine d'écart pour un conseil.",cls:""};
  const last=w[w.length-1],before=w.filter(x=>diffDays(x.d,last.d)>=6),prev=before[before.length-1];
  if(!prev)return{t:"Attends une semaine entre deux pesées pour mesurer ta progression.",cls:""};
  const rate=(last.kg-prev.kg)/diffDays(prev.d,last.d)*7,wk=progWeek(last.d),[lo,hi]=wk<=8?[.25,.4]:[.15,.25];
  const r=`${rate>=0?"+":""}${rate.toFixed(2).replace(".",",")} kg/semaine (cible ${String(lo).replace(".",",")} à ${String(hi).replace(".",",")})`;
  const w14=w.filter(x=>diffDays(x.d,last.d)>=13).pop();
  const wa=w.filter(x=>x.waist&&diffDays(x.d,last.d)<=56&&x!==last)[0];
  if(last.waist&&wa&&last.waist-wa.waist>3)return{t:`Tour de taille +${(last.waist-wa.waist).toFixed(1).replace(".",",")} cm en moins de 8 semaines : réduis les calories.`,d:-150,cls:"warn"};
  if(w14&&last.kg-w14.kg<=0)return{t:`Pas de prise depuis 2 semaines. ${r}. Ajoute 150 kcal.`,d:150,cls:"warn"};
  if(rate>hi+.05)return{t:`Tu prends trop vite : ${r}. Enlève 150 à 200 kcal.`,d:-150,cls:"warn"};
  if(rate<lo)return{t:`Un peu lent : ${r}. Si ça dure 2 semaines, ajoute 150 kcal.`,cls:""};
  return{t:`Dans la cible : ${r}. Ne change rien.`,cls:"ok"};}
function chart(){
  const w=S.weigh.slice().sort((a,b)=>a.d<b.d?-1:1);if(w.length<2)return"";
  const W=320,H=150,P={l:34,r:10,t:10,b:22},x0=w[0].d,span=Math.max(1,diffDays(x0,w[w.length-1].d));
  const ys=w.map(x=>x.kg).concat([S.settings.goal]),mn=Math.floor(Math.min(...ys)-.5),mx=Math.ceil(Math.max(...ys)+.5);
  const X=d=>P.l+diffDays(x0,d)/span*(W-P.l-P.r),Y=v=>P.t+(mx-v)/(mx-mn)*(H-P.t-P.b);
  const ticks=[mn,Math.round((mn+mx)/2),mx];
  return`<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Courbe de poids">
    ${ticks.map(t=>`<line x1="${P.l}" x2="${W-P.r}" y1="${Y(t)}" y2="${Y(t)}" stroke="var(--line)"/><text x="${P.l-6}" y="${Y(t)+4}" text-anchor="end" font-size="11" fill="var(--muted)">${t}</text>`).join("")}
    <line x1="${P.l}" x2="${W-P.r}" y1="${Y(S.settings.goal)}" y2="${Y(S.settings.goal)}" stroke="var(--prot)" stroke-dasharray="4 4"/>
    <text x="${W-P.r}" y="${Y(S.settings.goal)-5}" text-anchor="end" font-size="11" fill="var(--prot)">objectif ${S.settings.goal} kg</text>
    <polyline fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round" points="${w.map(x=>X(x.d)+","+Y(x.kg)).join(" ")}"/>
    ${w.map((x,j)=>`<circle cx="${X(x.d)}" cy="${Y(x.kg)}" r="${j===w.length-1?4.5:3}" fill="var(--accent)"/>`).join("")}
    <text x="${P.l}" y="${H-6}" font-size="11" fill="var(--muted)">${fmtShort(w[0].d)}</text><text x="${W-P.r}" y="${H-6}" text-anchor="end" font-size="11" fill="var(--muted)">${fmtShort(w[w.length-1].d)}</text></svg>`;}
function vTrack(){
  const st=S.settings,a=advice(),w=S.weigh.slice().sort((a,b)=>a.d<b.d?1:-1),last=w[0];
  const hist=[...Array(7)].map((_,j)=>addDays(today(),j-6)).map(d=>({d,...eatenTotals(d)}));
  return`<header><div class="eyebrow">${last?`Dernière pesée : ${String(last.kg).replace(".",",")} kg`:`Départ : ${st.weight0} kg`} · objectif ${st.goal} kg</div><h1>Suivi</h1></header>
  <section class="card"><h2>Pesée de la semaine</h2>
    <form id="fw" class="grid3"><label class="f">Date<input id="wd" type="date" value="${today()}" required></label><label class="f">Poids (kg)<input id="wk" type="number" step="0.1" inputmode="decimal" placeholder="71,0" required></label><label class="f">Taille (cm)<input id="ww" type="number" step="0.5" inputmode="decimal" placeholder="Nombril"></label>
    <button class="primary" type="submit" style="grid-column:1/-1">Enregistrer</button></form>
    ${chart()}<div class="note ${a.cls}">${a.t}</div>${a.d?`<button data-act="adjust" data-v="${a.d}">${a.d>0?"Ajouter":"Retirer"} ${Math.abs(a.d)} kcal à mon objectif</button>`:""}
    ${w.length?`<div>${w.slice(0,8).map(x=>`<div class="row" style="padding:6px 0;border-top:1px solid var(--line)"><span class="grow">${fmtShort(x.d)}</span><span class="num">${String(x.kg).replace(".",",")} kg${x.waist?` · ${String(x.waist).replace(".",",")} cm`:""}</span><button class="ghost" data-act="delw" data-d="${x.d}" aria-label="Supprimer" style="padding:4px 8px">✕</button></div>`).join("")}</div>`:""}</section>
  <section class="card"><h2>7 derniers jours</h2>${hist.map(h=>`<div class="row" style="font-size:14px"><span style="width:44px;flex:none" class="muted">${JOURS[(parse(h.d).getDay()+6)%7]}</span><div class="grow" style="display:flex;flex-direction:column;gap:4px">${bar(h.k,st.kcal)}${bar(h.p,st.protMin,"p")}</div><span class="num" style="width:96px;text-align:right">${nf(h.k)} · ${nf(h.p)} g</span></div>`).join("")}
    <div class="muted" style="font-size:13px">Rouge : calories. Vert : protéines. Seuls les repas cochés comptent.</div></section>
  <section class="card"><h2>Réglages</h2><form id="fs" class="grid2">
    <label class="f">Calories / jour<input id="sk" type="number" step="50" value="${st.kcal}"></label><label class="f">Début du programme<input id="sd" type="date" value="${st.start}"></label>
    <label class="f">Protéines min (g)<input id="spm" type="number" value="${st.protMin}"></label><label class="f">Protéines max (g)<input id="spx" type="number" value="${st.protMax}"></label>
    <label class="f">Poids de départ<input id="sw0" type="number" step="0.1" value="${st.weight0}"></label><label class="f">Objectif (kg)<input id="sg" type="number" step="0.1" value="${st.goal}"></label>
    <div style="grid-column:1/-1" class="f"><span class="eyebrow">Jours d'entraînement</span><div class="grid3" style="grid-template-columns:repeat(7,1fr);gap:4px">${JOURS.map((j,i)=>`<label class="f" style="align-items:center">${j}<select id="st${i}" style="padding:6px 2px;text-align:center">${["","A","B","C"].map(v=>`<option value="${v}" ${(st.training[i]||"")===v?"selected":""}>${v||"–"}</option>`).join("")}</select></label>`).join("")}</div></div>
    <div style="grid-column:1/-1" class="f"><span class="eyebrow">Heures des rappels</span><div class="grid3" style="grid-template-columns:repeat(auto-fit,minmax(90px,1fr))">${SLOTS.map(([s,l])=>`<label class="f">${l}<input id="tm-${s}" type="time" value="${st.times[s]}"></label>`).join("")}<label class="f">Séance<input id="tm-seance" type="time" value="${st.seanceTime}"></label></div></div>
    <button class="primary" type="submit" style="grid-column:1/-1">Enregistrer et recalculer les portions</button></form>
    <div class="muted" style="font-size:13px">${REF?"Données enregistrées sur ton compte, disponibles sur tous tes appareils.":"Données enregistrées dans ce navigateur."}</div></section>
  <section class="card"><h2>Alertes sur le téléphone</h2>
    <div class="muted" style="font-size:15px">Pour recevoir une notification même app fermée, crée une automatisation par repas dans l'app <b>Raccourcis</b> de l'iPhone (gratuit, 1 minute par rappel) :</div>
    <ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:4px;font-size:15px">
      <li>Raccourcis → onglet <b>Automatisation</b> → <b>+</b> → <b>Heure de la journée</b>.</li>
      <li>Choisis l'heure (${SLOTS.map(([s,l])=>`${l.toLowerCase()} ${st.times[s]}`).join(", ")}), <b>Quotidiennement</b>, puis <b>Exécuter immédiatement</b>.</li>
      <li>Action : <b>Afficher une notification</b>, texte « C'est l'heure de manger ».</li>
      <li>Ajoute l'action <b>Ouvrir l'app</b> → <b>RH Fuel</b> si tu veux que l'app s'ouvre directement.</li>
    </ol>
    <div class="muted" style="font-size:13px">Même chose pour les séances avec « Hebdomadaire » et tes jours d'entraînement. Tu utilises Google Agenda ? Ces liens créent les rappels récurrents :</div>
    <div class="chips">${SLOTS.map(([s,l])=>`<a class="chip" style="text-decoration:none;color:var(--ink)" target="_blank" rel="noopener" href="${esc(gcal("Repas : "+l.toLowerCase(),st.times[s],"FREQ=DAILY"))}">${l} · ${st.times[s]}</a>`).join("")}
    ${(()=>{const days=Object.keys(st.training).map(Number).sort();if(!days.length)return"";const start=[...Array(7)].map((_,k)=>addDays(today(),k)).find(x=>days.includes((parse(x).getDay()+6)%7));
      return`<a class="chip" style="text-decoration:none;color:var(--ink)" target="_blank" rel="noopener" href="${esc(gcal("Séance d'entraînement",st.seanceTime,"FREQ=WEEKLY;BYDAY="+days.map(i=>BYDAY[i]).join(","),start))}">Séances · ${st.seanceTime}</a>`})()}</div>
</section>
  <section class="card"><h2>Sauvegarde</h2>
    <div class="muted" style="font-size:15px">Tes données restent sur ce téléphone. Exporte une sauvegarde de temps en temps (fichier à garder dans Fichiers ou iCloud), et réimporte-la si tu changes de téléphone.</div>
    <div class="row wrap"><button data-act="export">Exporter mes données</button><label class="btn" for="imp" style="cursor:pointer">Importer une sauvegarde</label><input id="imp" type="file" accept="application/json,.json" hidden></div>
    <div class="muted" style="font-size:13px">Version ${typeof APP_VERSION!=="undefined"?APP_VERSION:"?"}</div></section>`;}

function render(){renderTabs();const v={today:vToday,seance:vSeance,week:vWeek,shop:vShop,frigo:vFrigo,track:vTrack}[ui.tab];$("#app").innerHTML=v()}

// ---------- Fiches ----------
// ctx = {ws,i} : un repas du plan (ta portion + le total du batch) ; {total:n} : le total d'un batch ; rien : recette seule
function batchOf(r,ws,i){const plan=planFor(ws),g=i<3?[0,1,2]:[3,4,5,6],occ=[];
  g.forEach(j=>["midi","soir"].forEach(s=>{if(plan.days[j][s].r===r)occ.push({j,s,f:plan.days[j][s].f})}));return occ}
function recipeSheet(r,f,ctx){const R=REC[r];
  const occ=ctx&&ctx.ws&&R.batch?batchOf(r,ctx.ws,ctx.i):[],batch=occ.length>1,total=ctx&&ctx.total;
  const m=total?(()=>{const x=macros(r,f);for(const k in x)x[k]/=total;return x})():macros(r,f);
  const sum=(id,q)=>occ.reduce((a,o)=>a+q*qf(id,o.f),0);
  const head=total?`<div class="note"><b>Total à cuisiner pour ${total} portions.</b> Partage en ${total} boîtes égales : une boîte = un repas, à manger en entier.</div>`
    :batch?`<div class="note"><b>Ce repas est en batch (${occ.length} portions).</b> Cuisine la colonne « À cuisiner », mange la colonne « Ta portion », et range le reste en ${occ.length-1} boîte${occ.length>2?"s":""} pour ${[...new Set(occ.filter(o=>!(o.j===ctx.i)).map(o=>JOURS[o.j].toLowerCase()))].join(", ")}.</div>`
    :ctx?`<div class="note"><b>Ta portion :</b> tout ce qui est listé est pour ce repas, à manger en entier.</div>`:"";
  const rows=Object.entries(R.i).map(([id,q])=>`<div class="ing"><span class="grow">${ING[id].n}${S.pantry[id]?' <span class="muted">· au frigo</span>':""}</span><span class="num" style="min-width:76px;text-align:right">${fmtQty(id,q*qf(id,f))}</span>${batch?`<span class="num muted" style="min-width:76px;text-align:right">${fmtQty(id,sum(id,q))}</span>`:""}</div>`).join("");
  openSheet(`<div class="row"><div class="grow"><div class="eyebrow">${R.tag?"Street food · ":""}${R.batch?"Batch cooking · ":""}${R.t} min</div><h2 style="text-transform:none;font-size:26px;letter-spacing:0">${R.n}</h2></div><button class="ghost" data-act="close" aria-label="Fermer">✕</button></div>
  <div class="row num" style="gap:18px"><div><div class="eyebrow">kcal${total?" / boîte":""}</div><div style="font-size:24px">${nf(m.k)}</div></div><div><div class="eyebrow">Prot.</div><div style="font-size:24px;color:var(--prot)">${nf(m.p)} g</div></div><div><div class="eyebrow">Glucides</div><div style="font-size:24px">${nf(m.c)} g</div></div><div><div class="eyebrow">Lipides</div><div style="font-size:24px">${nf(m.f)} g</div></div></div>
  ${head}
  <div>${batch?`<div class="ing eyebrow" style="border-top:0"><span class="grow">Ingrédient (cru)</span><span style="min-width:76px;text-align:right">Ta portion</span><span style="min-width:76px;text-align:right">À cuisiner</span></div>`:""}${rows}</div>
  <div class="muted" style="font-size:13px">Poids crus, à peser avant cuisson. Les épices des étapes sont pour 1 portion${batch||total?" : multiplie-les par le nombre de portions":""}.</div>
  ${R.m?`<div class="note"><b>Matériel :</b> ${R.m}</div>`:""}
  <ol>${R.s.map(x=>`<li>${x}</li>`).join("")}</ol>
  ${R.tip?`<div class="muted" style="font-size:14px"><b>Astuce :</b> ${R.tip}</div>`:""}`)}
function swapSheet(i,s){const ws=weekStart(),plan=planFor(ws),cur=plan.days[i][s].r,cat=SLOTCAT[s];
  const opts=Object.keys(REC).filter(r=>REC[r].cat===cat);
  openSheet(`<div class="row"><div class="grow"><div class="eyebrow">${JOURS[i]} · ${SLOTS.find(x=>x[0]===s)[1]}</div><h2>Changer le repas</h2></div><button class="ghost" data-act="close" aria-label="Fermer">✕</button></div>
  <label class="row" style="font-size:15px"><input type="checkbox" id="swall" checked style="width:auto"> Remplacer aussi les autres jours où « ${REC[cur].n} » est prévu à ce repas</label>
  <div>${opts.map(r=>{const m=macros(r),c=coverage(r);return`<div class="item" data-act="pick" data-i="${i}" data-s="${s}" data-r="${r}"><span class="box" style="border-radius:50%;${r===cur?"background:var(--accent);border-color:var(--accent)":""}">${r===cur?CHECK.replace('<svg','<svg style="opacity:1"'):""}</span><span class="grow"><span style="font-weight:600">${REC[r].n}</span><br><span class="muted" style="font-size:14px">${nf(m.k)} kcal · ${nf(m.p)} g · ${REC[r].t} min${REC[r].tag?" · street food":""}${c.pct===1?" · tout au frigo":""}</span></span></div>`}).join("")}</div>
  <button data-act="recipe" data-r="${cur}" data-f="${fenc(plan.days[i][s].f)}" data-ws="${ws}" data-i="${i}">Voir la recette actuelle</button>`)}

// ---------- Événements ----------
document.addEventListener("click",async e=>{
  if(e.target.id==="sheet"){closeSheet();return}
  const el=e.target.closest("[data-act]");if(!el)return;const a=el.dataset.act,d=today();
  if(a==="tab"){ui.tab=el.dataset.v;closeSheet();render();scrollTo(0,0)}
  else if(a==="week"){ui.week=+el.dataset.v;render()}
  else if(a==="close")closeSheet();
  else if(a==="recipe"){const ds=el.dataset;recipeSheet(ds.r,fdec(ds.f),ds.total?{total:+ds.total}:ds.ws?{ws:ds.ws,i:+ds.i}:null)}
  else if(a==="eat"){const s=el.dataset.s,ws=monday(d),day=planFor(ws).days[(parse(d).getDay()+6)%7],L=S.log[d]||(S.log[d]={eaten:{},extras:[]});L.eaten=L.eaten||{};
    if(L.eaten[s])delete L.eaten[s];else{const m=day[s],mm=macros(m.r,m.f);L.eaten[s]={r:m.r,f:m.f,k:Math.round(mm.k),p:Math.round(mm.p)}}
    pruneLog();save();render()}
  else if(a==="delx"){S.log[d].extras.splice(+el.dataset.j,1);save();render()}
  else if(a==="swap")swapSheet(+el.dataset.i,el.dataset.s);
  else if(a==="pick"){const i=+el.dataset.i,s=el.dataset.s,r=el.dataset.r,plan=planFor(weekStart()),old=plan.days[i][s].r,all=$("#swall")&&$("#swall").checked;
    plan.days.forEach((day,j)=>{if(j===i||(all&&day[s].r===old)){day[s].r=r;fitDay(day)}});save();closeSheet();render();toast("Repas modifié")}
  else if(a==="regen"){const ws=weekStart();S.plans[ws]=genPlan(ws);save();render();toast("Semaine régénérée")}
  else if(a==="got"){const ws=weekStart(),id=el.dataset.id,g=S.shop[ws]||(S.shop[ws]={});if(g[id])delete g[id];else{g[id]=true;S.pantry[id]=true}
    for(const k of Object.keys(S.shop))if(!S.plans[k])delete S.shop[k];save();render()}
  else if(a==="copy"){const plan=planFor(weekStart()),list=shoppingList(plan),got=S.shop[weekStart()]||{};
    const txt=RAYONS.map(r=>{const it=Object.entries(list).filter(([id])=>ING[id].r===r&&!got[id]);return it.length?r.toUpperCase()+"\n"+it.map(([id,q])=>`- ${ING[id].n} : ${fmtQty(id,q,true)} (≈ ${(ING[id].u==="pc"?ING[id].pr*Math.ceil(q):ING[id].pr*q/1000).toFixed(2).replace(".",",")} €)`).join("\n"):""}).filter(Boolean).join("\n\n");
    try{await navigator.clipboard.writeText(txt);toast("Liste copiée")}catch(err){openSheet(`<div class="row"><h2 class="grow">Copier la liste</h2><button class="ghost" data-act="close">✕</button></div><textarea id="cp" style="width:100%;height:50vh;font:15px var(--body);color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:10px">${esc(txt)}</textarea>`);const t=$("#cp");t.focus();t.select()}}
  else if(a==="pantry"){const id=el.dataset.id;if(S.pantry[id])delete S.pantry[id];else S.pantry[id]=true;save();render()}
  else if(a==="clearpantry"){S.pantry={};save();render()}
  else if(a==="fcat"){ui.frigoCat=el.dataset.v;render()}
  else if(a==="adjust"){S.settings.kcal+=+el.dataset.v;refit();save();render();toast(`Objectif : ${nf(S.settings.kcal)} kcal`)}
  else if(a==="delw"){S.weigh=S.weigh.filter(x=>x.d!==el.dataset.d);save();render()}
  else if(a==="pickseance"){ui.seanceKey=el.dataset.v;render()}
  else if(a==="set"){const d=today(),i=(parse(d).getDay()+6)%7,key=ui.seanceKey||(S.sessions[d]&&S.sessions[d].s)||seanceOf(monday(d),i);
    const r=sessionRec(key),j=el.dataset.j,k=+el.dataset.k,e=r.ex[j]||(r.ex[j]={d:[],n:""});e.d[k]=!e.d[k];save();render()}
  else if(a==="seancedone"){const d=today(),i=(parse(d).getDay()+6)%7,key=ui.seanceKey||(S.sessions[d]&&S.sessions[d].s)||seanceOf(monday(d),i);
    const r=sessionRec(key);r.done=!r.done;save();render();if(r.done)toast("Séance enregistrée")}
});
document.addEventListener("click",e=>{if(!e.target.closest('[data-act="export"]'))return;
  const blob=new Blob([JSON.stringify(S)],{type:"application/json"}),a=document.createElement("a");
  a.href=URL.createObjectURL(blob);a.download=`rh-fuel-sauvegarde-${today()}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000)});
document.addEventListener("change",e=>{if(e.target.id!=="imp"||!e.target.files[0])return;const fr=new FileReader();
  fr.onload=()=>{try{const d=JSON.parse(fr.result);if(!d||!d.settings)throw 0;S=merge(d);save();render();toast("Sauvegarde importée")}catch(err){toast("Fichier invalide : choisis un export RH Fuel.")}};fr.readAsText(e.target.files[0])});
document.addEventListener("change",e=>{const t=e.target;if(!t.classList.contains("exnote"))return;
  const d=today(),i=(parse(d).getDay()+6)%7,key=ui.seanceKey||(S.sessions[d]&&S.sessions[d].s)||seanceOf(monday(d),i);
  const r=sessionRec(key),j=t.dataset.j,ex=r.ex[j]||(r.ex[j]={d:[],n:""});ex.n=t.value.trim().slice(0,60);save()});
setInterval(()=>{const a=document.activeElement;if(ui.tab==="today"&&$("#sheet").hidden&&!(a&&/INPUT|SELECT|TEXTAREA/.test(a.tagName)))render()},60000);
document.addEventListener("submit",e=>{e.preventDefault();const f=e.target,v=id=>$("#"+id).value;
  if(f.id==="fx"){const d=today(),L=S.log[d]||(S.log[d]={eaten:{},extras:[]});L.extras=L.extras||[];
    L.extras.push({n:v("xn").trim().slice(0,60),k:Math.max(0,+v("xk")||0),p:Math.max(0,+v("xp")||0)});save();render()}
  else if(f.id==="fw"){const kg=parseFloat(v("wk").replace(",","."));if(!kg)return;const d=v("wd")||today();
    S.weigh=S.weigh.filter(x=>x.d!==d);S.weigh.push({d,kg,waist:parseFloat(v("ww").replace(",","."))||null});save();render();toast("Pesée enregistrée")}
  else if(f.id==="fs"){const st=S.settings;st.kcal=+v("sk")||st.kcal;st.start=v("sd")||st.start;st.protMin=+v("spm")||st.protMin;st.protMax=+v("spx")||st.protMax;
    st.weight0=+v("sw0")||st.weight0;st.goal=+v("sg")||st.goal;SLOTS.forEach(([s])=>{if(v("tm-"+s))st.times[s]=v("tm-"+s)});st.seanceTime=v("tm-seance")||st.seanceTime;st.training={};JOURS.forEach((_,i)=>{const x=v("st"+i);if(x)st.training[i]=x});
    refit();save();render();toast("Réglages enregistrés")}
});
function refit(){for(const p of Object.values(S.plans))p.days.forEach(fitDay)}
function pruneLog(){const lim=addDays(today(),-120);for(const k in S.log)if(k<lim)delete S.log[k]}

// ---------- Démarrage ----------
const local=lsGet();if(local)S=merge(local);
render();
