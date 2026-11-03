// ---------- Étapes détaillées des recettes ----------
// Les quantités d'ingrédients s'affichent au-dessus des étapes (elles s'ajustent à tes calories).
// Les épices sont données pour 1 portion : multiplie-les par le nombre de portions en batch.
// m = matériel, s = étapes, tip = astuce
const STEPS={
  // Matin
  m1:{m:"1 casserole, 1 poêle antiadhésive, 1 spatule",s:[
    "Verse l'avoine et <b>100 ml de lait</b> dans la casserole. Feu moyen, <b>3 min</b> en remuant jusqu'à ce que ce soit crémeux. Hors du feu.",
    "Casse les œufs dans un bol, ajoute <b>1 pincée de sel</b> et de poivre, bats 20 s à la fourchette.",
    "Poêle à feu <b>doux</b>, verse les œufs, remue sans arrêt avec la spatule <b>2 à 3 min</b>. Retire du feu quand ils sont encore un peu baveux : ils finissent de cuire seuls.",
    "Banane à côté, et bois le reste du lait."]},
  m2:{m:"1 casserole (ou 1 bol pour micro-ondes)",s:[
    "Mets l'avoine et le lait dans la casserole, <b>1 pincée de sel</b>. Feu moyen <b>4 min</b> en remuant (ou micro-ondes <b>2 min</b> à 800 W, mélange, puis <b>30 s</b>).",
    "Hors du feu, laisse tiédir <b>1 min</b>, puis ajoute la whey et mélange vivement : sur le feu elle fait des grumeaux.",
    "Coupe la banane en rondelles par-dessus. Cannelle si tu veux."]},
  m3:{m:"1 poêle antiadhésive de 24 cm, 1 grille-pain",s:[
    "Bats les œufs avec <b>1 pincée de sel</b> et de poivre.",
    "Poêle à feu <b>moyen</b> 1 min, verse les œufs. Ramène les bords vers le centre avec la spatule pendant <b>1 min</b>, puis laisse prendre <b>1 min</b> sans toucher.",
    "Parsème l'emmental sur une moitié, replie l'omelette, <b>30 s</b> de plus.",
    "Toaste le pain <b>2 min</b>. Banane à côté."]},
  m4:{m:"1 bol, 1 couteau",s:[
    "Épluche la papaye, retire les graines noires à la cuillère, coupe la chair en dés de <b>2 cm</b>.",
    "Mets le skyr dans le bol, ajoute l'avoine (crue, elle reste croquante).",
    "Ajoute la papaye, le miel en filet et le beurre de cacahuète."],tip:"Prépare la papaye pour 3 jours d'un coup : elle se garde en boîte au frigo."},
  m5:{m:"1 saladier (ou blender), 1 poêle antiadhésive, 1 louche",s:[
    "Mixe ou écrase à la fourchette : avoine, œufs, banane, lait, whey et <b>1 c. à c. de levure chimique</b> (facultatif, pour des pancakes plus épais). Laisse reposer <b>5 min</b>.",
    "Poêle à feu <b>moyen</b>, essuie-la avec un papier imbibé d'une goutte d'huile.",
    "Verse <b>1 petite louche</b> par pancake. Retourne quand des bulles apparaissent en surface (<b>2 min</b>), puis <b>1 min</b> de l'autre côté.",
    "Arrose de miel."],tip:"La pâte se garde 24 h au frigo : prépare-la la veille."},
  m6:{m:"1 poêle (ou four), 1 spatule",s:[
    "Mets le jambon et l'emmental sur la moitié des tranches de pain, referme avec les autres.",
    "Poêle à feu <b>moyen</b> sans matière grasse : <b>2 min par face</b> en appuyant avec la spatule, jusqu'à ce que le fromage fonde.",
    "Dans la même poêle, casse les œufs, couvre, <b>3 min</b> à feu doux (jaune encore coulant) ou <b>4 min</b> (cuit). Sel, poivre.",
    "Un verre de lait à côté."]},
  m7:{m:"1 boîte avec couvercle ou 1 bocal de 500 ml",s:[
    "<b>La veille au soir</b> : dans la boîte, mets l'avoine, la whey et le lait. Ferme et secoue <b>15 s</b> pour qu'il n'y ait pas de grumeaux.",
    "Laisse au frigo toute la nuit (minimum <b>4 h</b>) : l'avoine absorbe le lait.",
    "Le matin : remue, ajoute la banane en rondelles et le beurre de cacahuète. Ça se mange froid."],tip:"Prépare 3 boîtes d'un coup le dimanche : elles se gardent 3 jours."},
  m8:{m:"1 poêle, 1 spatule",s:[
    "Bats les œufs avec <b>1 pincée de sel</b>, poivre et l'emmental.",
    "Poêle à feu <b>doux</b>, remue sans arrêt <b>2 à 3 min</b> pour des œufs brouillés crémeux.",
    "Réchauffe les tortillas <b>20 s</b> dans la poêle chaude ou <b>15 s</b> au micro-ondes.",
    "Répartis les œufs, ajoute <b>1 c. à c. de sauce piquante</b> ou de ketchup si tu veux, roule bien serré."]},
  // Collation
  c1:{m:"1 shaker",s:[
    "Verse le lait <b>en premier</b> dans le shaker, puis la whey (comme ça rien ne colle au fond).",
    "Ferme, secoue <b>20 s</b>.",
    "Banane et <b>1 c. à s. bombée</b> de beurre de cacahuète à côté (ou tartinée sur la banane).",
    "Prends-le <b>30 à 60 min avant</b> la séance, ou juste après."]},
  c2:{m:"1 bol",s:[
    "Mélange le fromage blanc et le miel.",
    "Ajoute l'avoine (crue) et la banane en rondelles.",
    "Cannelle ou vanille en poudre si tu veux."]},
  c3:{m:"1 grille-pain (facultatif)",s:[
    "Toaste le pain <b>2 min</b> (facultatif).",
    "Tartine le beurre de cacahuète, ajoute la banane en rondelles par-dessus.",
    "Un grand verre de lait à côté."]},
  c4:{m:"1 blender (ou 1 shaker)",s:[
    "Dans le blender : lait, banane coupée en 3, avoine, whey et <b>3 ou 4 glaçons</b>.",
    "Mixe <b>40 s</b> à pleine vitesse.",
    "Sans blender : secoue la whey dans le lait au shaker, et mange la banane et l'avoine à côté."]},
  c5:{m:"1 bol, 1 couteau",s:[
    "Coupe la papaye en dés (sans les graines).",
    "Skyr dans le bol, papaye, avoine et miel par-dessus."]},
  c6:{m:"1 bol, 1 fourchette",s:[
    "Égoutte bien le thon (presse le couvercle sur la boîte).",
    "Mélange-le avec le fromage blanc, <b>1 pincée de sel</b>, du poivre, et <b>1 c. à c. de moutarde</b> si tu veux.",
    "Tartine sur le pain. Banane à côté."]},
  c7:{m:"1 shaker",s:[
    "Lait d'abord, puis la whey et l'avoine.",
    "Secoue <b>20 s</b>, laisse reposer <b>2 min</b> que l'avoine gonfle un peu, secoue encore.",
    "À boire en 5 minutes. Le plus simple et le moins cher pour tes protéines."],tip:"L'avoine mixée en poudre (blender, 10 s) se mélange encore mieux."},
  c8:{m:"1 bol, 1 cuillère",s:[
    "Mélange le fromage blanc et la whey <b>30 s</b> à la cuillère : la texture devient épaisse, façon mousse.",
    "Ajoute <b>1 c. à c. de cacao non sucré</b> (ou prends une whey chocolat) et le miel.",
    "Avoine par-dessus pour le croquant."]},
  // Repas classiques
  r1:{m:"1 casserole, 1 grande poêle ou sauteuse, boîtes de conservation",s:[
    "<b>Riz</b> : rince-le, mets-le dans <b>2 fois son volume d'eau</b> salée bouillante. Couvre, feu doux <b>12 min</b>, puis laisse reposer <b>5 min</b> couvert hors du feu.",
    "<b>Poulet</b> : coupe-le en dés de <b>2 cm</b>. Assaisonne par portion : <b>1/2 c. à c. de paprika</b>, <b>1/4 c. à c. d'ail en poudre</b>, <b>1 pincée de sel</b>, poivre.",
    "Huile dans la poêle à feu <b>vif</b>. Mets le poulet en une seule couche, <b>3 min sans toucher</b> pour qu'il dore, puis remue et cuis encore <b>4 min</b>. Plus de rose à cœur.",
    "Ajoute la poêlée surgelée directement (sans décongeler), <b>6 à 8 min</b> à feu moyen en remuant. Rectifie le sel.",
    "Répartis riz et poulet-légumes dans les boîtes. Laisse refroidir <b>30 min</b> maximum avant le frigo. <b>4 jours</b> au frigo."],tip:"Au réchauffage, ajoute 1 c. à s. d'eau sur le riz avant le micro-ondes (2 min) pour qu'il ne sèche pas."},
  r2:{m:"1 grande casserole ou cocotte, 1 casserole pour le riz",s:[
    "Émince l'oignon. Huile dans la cocotte à feu moyen, oignon <b>4 min</b> jusqu'à ce qu'il soit translucide.",
    "Monte à feu <b>vif</b>, ajoute le bœuf, écrase-le à la spatule, <b>5 min</b> jusqu'à ce qu'il ne soit plus rouge.",
    "Épices par portion : <b>1 c. à c. de cumin</b>, <b>1 c. à c. de paprika</b>, <b>1/4 c. à c. de piment</b> (ou un bout de piment péi), <b>1 pincée de sel</b>. Mélange <b>1 min</b>.",
    "Ajoute tomates et haricots rincés. Couvre, feu doux <b>20 min</b>, en remuant de temps en temps. La sauce doit épaissir.",
    "Riz pendant ce temps (12 min). Se garde <b>4 jours</b>, se congèle <b>3 mois</b>."]},
  r3:{m:"1 cocotte, 1 casserole pour le riz",s:[
    "Émince l'oignon, coupe le poulet en dés. Huile à feu moyen, oignon <b>3 min</b>, puis poulet <b>4 min</b>.",
    "Épices par portion : <b>1 c. à c. de curry</b>, <b>1/2 c. à c. de curcuma</b>, <b>1/2 c. à c. d'ail en poudre</b> (ou 1 gousse écrasée). Mélange <b>1 min</b>.",
    "Rince les lentilles corail. Ajoute-les avec les tomates et <b>2 fois leur volume d'eau</b>. Feu doux <b>15 min</b> en remuant (elles fondent, c'est normal).",
    "Ajoute les épinards surgelés, <b>5 min</b>. Sel. Sers avec le riz. <b>4 jours</b> au frigo."]},
  r4:{m:"1 sauteuse, 1 grande casserole pour les pâtes",s:[
    "Émince l'oignon, râpe la carotte. Huile ou 1 c. à s. d'eau dans la sauteuse, feu moyen <b>5 min</b>.",
    "Ajoute le bœuf à feu vif, écrase-le, <b>5 min</b>.",
    "Ajoute les tomates, <b>1 c. à c. d'herbes de Provence</b> par portion, <b>1 pincée de sel</b> et <b>1 pincée de sucre</b> (enlève l'acidité). Feu doux <b>15 min</b>.",
    "Pâtes dans une grande casserole d'eau salée bouillante (<b>1 L pour 100 g</b>), cuisson indiquée moins 1 min. Égoutte.",
    "En boîtes : pâtes d'un côté, sauce de l'autre (les pâtes restent meilleures). Emmental au moment de manger."]},
  r5:{m:"1 casserole, 1 plat allant au four (ou 1 poêle), 1 presse-purée ou fourchette",s:[
    "Épluche les patates douces, coupe-les en cubes de <b>3 cm</b>. Eau froide salée, porte à ébullition, <b>15 min</b> (une pointe de couteau doit entrer sans résistance).",
    "Four à <b>200 °C</b>. Mets le colin (même surgelé) dans le plat, sel, poivre, <b>1/2 c. à c. de curcuma</b> ou de paprika, un filet d'huile. <b>18 min</b> si surgelé, <b>12 min</b> si décongelé.",
    "Égoutte les patates douces, écrase-les avec le reste de l'huile, sel et poivre.",
    "Poêlée de légumes <b>8 min</b> à feu moyen. <b>3 jours</b> au frigo."]},
  r6:{m:"1 bol, 1 râpe",s:[
    "Égoutte le thon, mélange-le avec le fromage blanc, <b>1 c. à c. de moutarde</b>, <b>1 pincée de sel</b>, poivre, et du jus de citron si tu en as.",
    "Râpe les carottes (gros trous).",
    "Réchauffe les tortillas <b>20 s</b> à la poêle sèche.",
    "Étale le thon au centre, ajoute carottes et emmental, replie le bas puis les côtés et roule serré."]},
  r7:{m:"1 grande poêle avec couvercle",s:[
    "Coupe les pommes de terre (avec la peau si elles sont propres) en dés de <b>1,5 cm</b>.",
    "Huile dans la poêle à feu <b>moyen-vif</b>, pommes de terre en une couche, sel. <b>15 min</b> en remuant toutes les 3-4 min : elles doivent être dorées et tendres.",
    "Ajoute les épinards surgelés, <b>4 min</b>, jusqu'à ce que l'eau s'évapore.",
    "Fais 3 creux, casse un œuf dans chacun, emmental dessus. Couvre, feu doux <b>4 min</b> (jaune coulant) à <b>6 min</b> (cuit)."]},
  r8:{m:"1 casserole, 1 grande poêle ou wok",s:[
    "Cuis le riz (12 min), étale-le sur une assiette pour qu'il refroidisse. Le riz de la veille marche encore mieux : il ne colle pas.",
    "Poêle à feu <b>vif</b> avec la moitié de l'huile, poulet en dés <b>6 min</b>. Ajoute les légumes surgelés <b>5 min</b>.",
    "Pousse tout sur un côté, verse le reste d'huile et les œufs battus de l'autre côté, brouille-les <b>1 min</b>.",
    "Ajoute le riz, <b>1 c. à s. de sauce soja</b> par portion, mélange <b>3 min</b> à feu vif. <b>4 jours</b> au frigo."]},
  r9:{m:"1 cocotte, 2 casseroles (riz et grains)",s:[
    "Coupe le poulet en morceaux de <b>3 cm</b>, émince l'oignon.",
    "Huile à feu moyen, oignon <b>3 min</b>. Ajoute par portion : <b>1 gousse d'ail</b> écrasée, <b>1 c. à c. de gingembre</b> râpé (ou en poudre), <b>1 c. à c. de curcuma</b>. <b>1 min</b>.",
    "Ajoute le poulet, <b>5 min</b> pour qu'il prenne la couleur jaune. Puis les tomates, <b>1 pincée de sel</b>, <b>1 branche de thym</b>. Couvre, feu doux <b>25 min</b>.",
    "<b>Grains</b> : rince les lentilles, eau froide (3 fois leur volume), <b>20 min</b> à petit bouillon, sel à la fin. Riz en parallèle (12 min).",
    "Se garde <b>4 jours</b>. Le cari est encore meilleur le lendemain."]},
  r10:{m:"1 sauteuse ou cocotte, 1 casserole pour le riz",s:[
    "Coupe les saucisses en rondelles de <b>1 cm</b>. Fais-les dorer à sec <b>5 min</b> à feu moyen, puis <b>jette le gras rendu</b> (ça allège beaucoup).",
    "Ajoute l'huile, l'oignon émincé, <b>1 gousse d'ail</b>, <b>1 c. à c. de gingembre</b>, <b>1 pincée de piment</b> par portion. <b>3 min</b>.",
    "Ajoute les tomates et <b>1 branche de thym</b>. Couvre, feu doux <b>20 min</b>.",
    "Réchauffe les haricots rincés <b>5 min</b> dans une petite casserole. Riz (12 min). <b>4 jours</b> au frigo."]},
  r11:{m:"1 sauteuse avec couvercle, 1 casserole pour le riz",s:[
    "Coupe le thon en cubes de <b>3 cm</b>, épluche le chouchou et coupe-le en dés de <b>2 cm</b>.",
    "Huile à feu moyen, oignon <b>3 min</b>, puis <b>1 gousse d'ail</b>, <b>1 c. à c. de gingembre</b>, <b>1 c. à c. de curcuma</b> par portion. <b>1 min</b>.",
    "Ajoute tomates et chouchou, <b>1 pincée de sel</b>. Couvre, <b>12 min</b>.",
    "Pose les cubes de thon dessus, couvre, <b>6 à 8 min</b> à feu doux. Ne remue pas trop pour qu'ils restent entiers. Riz (12 min). <b>3 jours</b> au frigo."]},
  q2:{m:"1 grande casserole, 1 petite casserole ou poêle",s:[
    "Fais bouillir <b>1 L d'eau salée par 100 g</b> de pâtes, cuisson indiquée sur le paquet.",
    "Pendant ce temps : huile à feu moyen, <b>1 gousse d'ail</b> écrasée <b>1 min</b>, puis tomates, <b>1 c. à c. d'origan</b>, sel, poivre. <b>6 min</b>.",
    "Ajoute le thon égoutté en miettes, <b>1 min</b> juste pour le chauffer.",
    "Égoutte les pâtes en gardant <b>2 c. à s. d'eau de cuisson</b>, mélange tout. Emmental dessus. <b>3 jours</b> au frigo."]},
  // Street food
  s1:{m:"1 plaque de four + papier cuisson, 1 poêle",s:[
    "Four à <b>220 °C</b>. Coupe les pommes de terre en frites de <b>1 cm</b>, sèche-les dans un torchon. Mélange avec l'huile, <b>1/2 c. à c. de paprika</b> et sel. Étale en une couche, <b>25 min</b>, retourne à mi-cuisson.",
    "Divise le bœuf en 2 boules, sel et poivre. Poêle à feu <b>très vif</b> sans huile, pose les boules et écrase-les fort avec une spatule (smash). <b>2 min</b>, retourne, emmental dessus, <b>1 min 30</b>.",
    "Toaste les pains face coupée <b>1 min</b> dans la poêle.",
    "Monte : pain, steak, oignon en fines rondelles, 1 c. à c. de ketchup et de moutarde."]},
  s2:{m:"1 poêle, 1 bol",s:[
    "Coupe le poulet en fines lamelles. Mélange par portion : <b>1 c. à c. de cumin</b>, <b>1 c. à c. de paprika</b>, <b>1/2 c. à c. d'ail en poudre</b>, <b>1 pincée de sel</b>. Laisse <b>10 min</b> (ou toute la nuit au frigo).",
    "Poêle à feu <b>vif</b> légèrement huilée, poulet <b>6 à 8 min</b> jusqu'à ce que les bords grillent.",
    "<b>Sauce blanche</b> : fromage blanc, <b>1/2 gousse d'ail</b> râpée, <b>1 c. à c. de ciboulette</b> (ou persil), sel, poivre, un trait de citron.",
    "Garnis la tortilla : sauce, poulet, carottes râpées, emmental. Roule et dore <b>1 min</b> à la poêle, côté soudure en dessous."],tip:"Cuis tout le poulet de la semaine d'un coup : il se garde 4 jours."},
  s3:{m:"1 casserole, 1 grande poêle ou wok",s:[
    "Cuis le riz (12 min).",
    "<b>Sauce teriyaki</b> par portion : <b>2 c. à s. de sauce soja</b>, le miel, <b>1/2 c. à c. de gingembre</b>, <b>1 c. à s. d'eau</b>. Mélange.",
    "Huile dans la poêle à feu <b>vif</b>, poulet en dés <b>6 min</b>. Ajoute les légumes <b>5 min</b>.",
    "Verse la sauce, <b>1 à 2 min</b> en remuant : elle doit napper et caraméliser. Sers sur le riz. <b>4 jours</b> au frigo."]},
  s4:{m:"1 poêle de 26 cm, 1 fourchette",s:[
    "Rince les haricots, écrase-les grossièrement avec la tomate, <b>1/2 c. à c. de cumin</b>, sel et <b>1 pincée de piment</b>.",
    "Étale sur une tortilla, ajoute le thon émietté et l'emmental, couvre avec la 2e tortilla.",
    "Poêle à feu <b>moyen</b> sans huile, <b>2 à 3 min par face</b>. Retourne en t'aidant d'une assiette.",
    "Coupe en 4 parts."]},
  s5:{m:"1 plaque de four + papier cuisson",s:[
    "Four à <b>220 °C</b>.",
    "Étale la tomate sur les tortillas, <b>1 c. à c. d'origan</b>, sel, poivre.",
    "Ajoute le poulet en petits dés (cru en fines lamelles, ou un reste du batch), l'emmental, et casse l'œuf au centre.",
    "<b>8 à 10 min</b> au four, jusqu'à ce que le bord soit doré et le blanc de l'œuf pris."]},
  s7:{m:"1 grande casserole, 1 grande poêle ou wok",s:[
    "Cuis les pâtes <b>1 min de moins</b> qu'indiqué, égoutte, passe-les sous l'eau froide pour qu'elles ne collent pas.",
    "Poêle à feu <b>vif</b> avec l'huile, poulet en lamelles <b>5 min</b>, puis légumes <b>4 min</b>.",
    "Ajoute les pâtes, <b>2 c. à s. de sauce soja</b>, <b>1/2 c. à c. de gingembre</b> et l'ail par portion. Mélange <b>2 min</b>.",
    "Pousse tout sur le côté, brouille l'œuf <b>1 min</b>, mélange l'ensemble. <b>4 jours</b> au frigo."]},
  s8:{m:"1 plaque de four, 1 poêle, 1 petite casserole",s:[
    "Four à <b>220 °C</b>. Frites : bâtonnets de <b>1 cm</b>, la moitié de l'huile, sel. <b>20 à 25 min</b>.",
    "Poulet en dés, <b>1 c. à c. de paprika</b>, <b>1/2 c. à c. de cumin</b>, sel, avec le reste de l'huile à feu vif <b>7 min</b>.",
    "<b>Sauce fromagère</b> : fromage blanc et emmental dans la petite casserole à feu doux, <b>1 à 2 min</b> en remuant jusqu'à ce que le fromage fonde. Poivre.",
    "Au centre d'une grande tortilla : poulet, frites, sauce. Replie les 4 bords en carré. Poêle à feu moyen, <b>2 min par face</b>, côté pliage en premier."]},
  s9:{m:"1 grande poêle",s:[
    "Coupe le poulet en lamelles. Épices par portion : <b>1 c. à c. de paprika</b>, <b>1/2 c. à c. de cumin</b>, <b>1/4 c. à c. de piment</b>, <b>1/4 c. à c. d'ail en poudre</b>, sel.",
    "Poêle à feu <b>vif</b> avec l'huile, poulet <b>5 min</b>.",
    "Ajoute les légumes (idéalement un mélange poivrons-oignons) <b>6 min</b>, puis les haricots rincés <b>2 min</b>.",
    "Réchauffe les tortillas, garnis, ajoute le fromage blanc (façon crème) et un trait de citron."]},
  s10:{m:"1 casserole, 1 poêle",s:[
    "Riz (12 min). Mélange-y un trait de citron vert et du persil ou de la coriandre si tu en as.",
    "Bœuf à feu <b>vif</b>, écrasé à la spatule, <b>5 min</b>. Ajoute <b>1 c. à c. de cumin</b>, <b>1 c. à c. de paprika</b>, sel, puis la tomate, <b>5 min</b>.",
    "Réchauffe haricots et maïs égouttés <b>2 min</b> à la poêle ou au micro-ondes.",
    "Dans la boîte : riz, bœuf, haricots, maïs, emmental. Sauce piquante si tu veux. <b>4 jours</b> au frigo."]},
  s12:{m:"1 plaque de four + papier cuisson",s:[
    "Four à <b>200 °C</b>.",
    "Mélange le fromage blanc avec poivre et <b>1 pincée de muscade</b> : c'est ta béchamel express.",
    "Tartine-en la moitié du pain, ajoute jambon et la moitié de l'emmental, referme. Le reste de fromage blanc et d'emmental sur le dessus.",
    "<b>12 à 15 min</b> au four, jusqu'à ce que le dessus gratine."]},
  s13:{m:"1 casserole, 1 bol, 1 couteau bien aiguisé",s:[
    "Cuis le riz (12 min), étale-le pour qu'il tiédisse. Assaisonne-le avec <b>1 c. à c. de vinaigre</b> et <b>1 pincée de sucre</b>.",
    "Coupe le thon <b>très frais</b> (demande « qualité sashimi » au poissonnier) en cubes de <b>2 cm</b>.",
    "Marinade : <b>1 c. à s. de sauce soja</b>, l'huile, le miel, gingembre. Thon dedans, <b>5 min</b> au frigo.",
    "Assemble : riz, thon, carottes râpées, maïs. À manger le jour même."],tip:"Pas sûr de la fraîcheur ? Saisis les cubes 30 s par face à la poêle très chaude."},
  s14:{m:"1 bol ou blender, 1 poêle",s:[
    "<b>Houmous</b> : mixe ou écrase les pois chiches rincés avec l'huile, <b>1/2 gousse d'ail</b>, <b>1 c. à s. de jus de citron</b>, <b>1/2 c. à c. de cumin</b>, sel et <b>2 c. à s. d'eau</b> jusqu'à ce que ce soit lisse.",
    "Poulet en lamelles, <b>1 c. à c. de paprika</b>, sel, à la poêle à feu vif <b>6 min</b>.",
    "Tartine le houmous sur la tortilla, ajoute poulet et carottes râpées, roule."],tip:"Le houmous se garde 4 jours au frigo dans une boîte fermée."},
  s15:{m:"1 plaque de four + papier cuisson, 2 assiettes creuses",s:[
    "Four à <b>220 °C</b>. Pommes de terre en quartiers, la moitié de l'huile, <b>1/2 c. à c. de paprika</b>, sel. Au four <b>10 min</b>.",
    "Mixe l'avoine <b>10 s</b> avec <b>1/2 c. à c. de paprika</b>, <b>1/4 c. à c. d'ail en poudre</b>, sel. Bats l'œuf dans l'autre assiette.",
    "Poulet en morceaux de <b>3 cm</b> : passe chaque morceau dans l'œuf puis dans l'avoine.",
    "Pose-les sur la plaque à côté des potatoes, filet du reste d'huile, <b>15 min</b>, retourne à mi-cuisson."]},
  // Plats batch
  r12:{m:"1 grande casserole, 1 poêle, 1 plat à gratin",s:[
    "Épluche les pommes de terre, coupe en gros cubes. Eau froide salée, <b>20 min</b> après ébullition.",
    "Pendant ce temps : huile, oignon émincé <b>4 min</b>, puis bœuf à feu vif <b>5 min</b>. Sel, poivre, <b>1/2 c. à c. de thym</b>.",
    "Égoutte les pommes de terre, écrase-les avec le lait chaud, sel, <b>1 pincée de muscade</b>.",
    "Four à <b>200 °C</b>. Bœuf au fond du plat, purée par-dessus, emmental. <b>15 min</b> jusqu'à ce que le dessus dore.",
    "Découpe en parts. <b>4 jours</b> au frigo, se congèle bien."]},
  r13:{m:"1 sauteuse avec couvercle, 1 saladier, 1 bouilloire",s:[
    "Poulet en morceaux, <b>1 c. à c. de ras-el-hanout</b> (ou 1/2 c. à c. de cumin + 1/2 c. à c. de curcuma) par portion, sel.",
    "Huile à feu moyen, poulet <b>5 min</b>.",
    "Ajoute légumes, pois chiches rincés et <b>1 verre d'eau</b>. Couvre, <b>10 min</b>.",
    "<b>Semoule</b> : verse-la dans le saladier, couvre avec le même volume d'eau bouillante salée, un filet d'huile. Couvre <b>5 min</b>, puis égrène à la fourchette."]},
  r14:{m:"1 poêle de 24 cm avec couvercle",s:[
    "Pommes de terre en dés de <b>1 cm</b>. Huile à feu moyen, <b>10 min</b> en remuant jusqu'à ce qu'elles soient tendres.",
    "Ajoute le jambon en dés <b>1 min</b>.",
    "Bats les œufs avec l'emmental, sel, poivre, et verse-les sur les pommes de terre sans remuer.",
    "Couvre, feu <b>doux</b>, <b>8 à 10 min</b> jusqu'à ce que le dessus soit pris. Glisse sur une assiette, coupe en parts.",
    "Chaude ou froide. <b>3 jours</b> au frigo."]},
  r15:{m:"1 grande casserole, 1 plat à gratin",s:[
    "Four à <b>200 °C</b>. Cuis les pâtes <b>2 min de moins</b> qu'indiqué, égoutte.",
    "Dans le plat : pâtes, jambon en dés, lait, sel, poivre et <b>1 pincée de muscade</b>. Mélange.",
    "Emmental sur le dessus. <b>15 min</b> au four : le lait est absorbé et le dessus gratine.",
    "<b>4 jours</b> au frigo."]},
  r16:{m:"1 casserole, 1 grande poêle ou wok",s:[
    "Riz (12 min).",
    "Sauce par portion : <b>1 c. à s. de sauce soja</b>, le miel, <b>1/2 c. à c. de gingembre</b>, <b>1 gousse d'ail</b> écrasée.",
    "Poêle à feu <b>très vif</b> avec l'huile. Bœuf <b>3 min</b> en l'écrasant pour qu'il grille un peu.",
    "Légumes <b>5 min</b>, puis la sauce, <b>1 min</b>. Sers sur le riz. <b>4 jours</b> au frigo."]},
  r17:{m:"1 casserole, 1 petite casserole, 1 saladier",s:[
    "Riz (12 min), puis rince-le à l'eau froide et égoutte-le bien.",
    "Œuf dans l'eau bouillante <b>10 min</b>, puis dans l'eau froide. Écale-le, coupe-le en morceaux.",
    "Vinaigrette par portion : l'huile, <b>1 c. à s. de vinaigre</b>, <b>1 c. à c. de moutarde</b>, sel, poivre.",
    "Mélange riz, thon égoutté, maïs, carottes râpées, œuf et vinaigrette. <b>3 jours</b> au frigo, se mange froid."]},
  r18:{m:"1 cocotte",s:[
    "Émince l'oignon, coupe les carottes en rondelles. Dans la cocotte à feu moyen avec 1 c. à s. d'eau, <b>5 min</b>.",
    "Rince les lentilles, ajoute-les avec <b>3 fois leur volume d'eau</b>, <b>1 feuille de laurier</b> et <b>1 branche de thym</b>. <b>20 min</b> à petit bouillon. Ne sale pas avant la fin, sinon elles restent dures.",
    "Coupe les saucisses en rondelles, ajoute-les les <b>10 dernières minutes</b>.",
    "Sel, poivre, <b>1 c. à c. de moutarde</b> à la fin. Pain à côté. <b>4 jours</b> au frigo."]},
  r19:{m:"1 plaque de four (ou 1 poêle), 1 sauteuse",s:[
    "Four à <b>220 °C</b>. Pommes de terre en dés de <b>2 cm</b>, la moitié de l'huile, sel, <b>1/2 c. à c. d'herbes de Provence</b>. <b>25 min</b>.",
    "Poulet en morceaux, sel, poivre. Le reste de l'huile à feu vif, <b>7 min</b>.",
    "Feu éteint, ajoute le fromage blanc et <b>1 c. à s. de moutarde</b> par portion, mélange : la sauce doit napper. Ne la fais pas bouillir, elle tranche.",
    "<b>4 jours</b> au frigo."]},
};
for(const k in STEPS)if(REC[k]){REC[k].s=STEPS[k].s;REC[k].m=STEPS[k].m;REC[k].tip=STEPS[k].tip}
