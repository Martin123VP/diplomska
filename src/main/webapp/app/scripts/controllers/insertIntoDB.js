FirstApp.controller('insertIntoDBController',
  [
    '$scope',
    'crudService',
    '$routeParams',
    'toaster',
    '$http',
    function ($scope, crudService, $routeParams, toaster, $http) {
    	var json = [
    	            {"resource": "http://dbpedia.org/resource/Roti_canai" , "abstract": "Roti canai (pronunciation t\u0283anai) or roti cane (pronunciation t\u0283ane) is a type of Indian-influenced flatbread found in Malaysia, Indonesia and Singapore. It is often sold in Mamak stalls in Malaysia; also in Malay, Minangkabau and Aceh restaurants in Indonesia. It is known as roti prata in Southern Malaysia and Singapore, and is similar to the Indian Kerala porotta. It is also found throughout Thailand, where it is called \"Ro Tee\" and is typically sold by Muslims, most often with street carts, and is usually Halal. In English and in Chinese, roti canai is sometimes referred to as \"flying bread\" (\u98DE\u997C f\u0113ib\u01D0ng), a term that evokes the process of tossing and spinning by which it is made. In Chinese, Roti canai is originally called \u5370\u5EA6\u714E\u997C \"yin du jian bing\", which means Indian pancake.Traditionally roti canai is served with dhal (lentil curry) or any type of curry, such as mutton or chicken curry. However, the versatility of roti canai as the staple lends itself to many variations, either savoury or sweet, with a variety of toppings and fillings, which includes eggs, banana, sardines and onion. In Thailand, it is usually served sweet - typical fillings include condensed milk, peanut butter, jam and nutella, without the curry." , "ingredientName": "Flour" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Canai.jpg?width=300" , "name": "Roti canai" },
    	            {"resource": "http://dbpedia.org/resource/Christmas_wafer" , "abstract": "Christmas wafer  (Polish: op\u0142atek, plural op\u0142atki; Lithuanian: kal\u0117daitis) is a central European Christian Christmas tradition celebrated in Poland, Lithuania and Slovakia during Wigilia, or the Christmas Eve Vigil.The unleavened wafers are baked from pure wheat flour and water, are usually rectangular in shape and very thin; they are identical in composition to the altar bread that becomes the Eucharist at the consecration during Mass in the Roman Catholic Church. Being only a reminder of the Body of Christ used in private homes, Op\u0142atki lack sanctification by a priest or bishop. The Op\u0142atki wafers are embossed with Christmas related religious images, varying from the nativity scene, especially Virgin Mary with baby Jesus, to the Star of Bethlehem." , "ingredientName": "Wheat flour,water" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Oplatki.w.koszyczku.jpg?width=300" , "name": "Christmas wafer" },
    	            {"resource": "http://dbpedia.org/resource/Mekitsa" , "abstract": "Mekitsa (Bulgarian: \u043C\u0435\u043A\u0438\u0446\u0430, also transliterated as mekica; plural mekici) is a traditional Bulgarian dish made of kneaded dough made with yogurt that is deep fried. They are made with flour, eggs, yogurt, a leavening agent, water, salt, and oil, and are traditionally served with jam or white cheese (sirene). At breakfast, they are eaten with sugar or honey, and can also be eaten with yogurt. They are similar to Hungarian l\u00E1ngos. In Serbia they are called mekike (sing. mekika).Mekitsa is conventionally a breakfast dish and is inherently similar to Hungarian l\u00E1ngos and Albanian petulla.After the dough rises, it is torn into small balls, spread into circles and fried in fat. In some recipes, yeast, bread soda, milk or yogurt might be used. A recipe from Silistra involves yogurt and bread soda, one from a village near Stara Zagora uses yeast and yogurt, and a recipe from Aytos suggests yeast and milk. It is recommended that the shaping of mekitsi before their frying be done with wet hands.When served, mekitsa is often powdered with icing sugar or garnished with jam or sirene (white cheese). Unlike Hungarian l\u00E1ngos, mekitsa is not served with mayonnaise or ketchup and is not so richly garnished.The name is derived from the Bulgarian root mek (\"soft\"), referring to the dish's texture. \u2013itsa is a Slavic feminine suffix." , "ingredientName": "Yogurt,flour,eggs,leavening agent, water, salt,oil" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Mekici_and_jam.JPG?width=300" , "name": "Mekitsa" },
    	            {"resource": "http://dbpedia.org/resource/Lahoh" , "abstract": "Lahoh (Arabic: \u0644\u062D\u0648\u062D\u200E, Hebrew: \u05DC\u05D7\u05D5\u05D7\u200E, Somali: Laxoox), is a spongy, pancake-like bread originating in Djibouti, Somalia, and Yemen. It is also popular in Israel, where it was introduced by Yemenite Jews who immigrated there. In Yemen, it is often sold on the street by peddlers." , "ingredientName": "Plain flour,self-raising flour,water,yeast,salt" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/LahohS.jpg?width=300" , "name": "Lahoh" },
    	            {"resource": "http://dbpedia.org/resource/Kulcha" , "abstract": "Kulcha (Punjabi:  \u0A15\u0A41\u0A32\u0A1A\u0A3E) kulc\u0101 is a type of leavened bread eaten in India and Pakistan, made from maida (wheat flour). It is particularly popular in India and Pakistan, and is usually eaten with chole.Kulcha is a typical Punjabi recipe. Amritsar, a city in Punjab is famous for its Amritsari kulchas or Amritsari naan. Flour dough is rolled into a flat, round shape and baked in an earthen clay oven until golden brown. When baked, it is usually rubbed with butter, and then eaten with spicy chole (chickpea curry).In Pakistan, kulcha breads are largely eaten in Azad Kashmir, Gilgit-Baltistan and certain parts of the Hazara and northern Punjab regions, where they are a popular breakfast item." , "ingredientName": "Maida flour" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Kulchachole.jpg?width=300" , "name": "Kulcha" },
    	            {"resource": "http://dbpedia.org/resource/Focaccia" , "abstract": "Focaccia (Italian pronunciation: [fo\u02C8katt\u0283a]) is a flat oven-baked Italian bread product similar in style and texture to pizza doughs. It may be topped with herbs or other ingredients.Focaccia is popular in Italy and is usually seasoned with olive oil, salt, sometimes herbs, and may at times be topped with onion, cheese and meat. It might also be flavored with a number of vegetables.Focaccia can be used as a side to many meals, as a base for pizza, or as sandwich bread." , "ingredientName": "High-gluten flour,oil,water,salt,yeast" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Focaccia-erbe-olive.jpg?width=300" , "name": "Focaccia" },
    	            {"resource": "http://dbpedia.org/resource/Mlinci" , "abstract": "Mlinci is a dish in Croatian and Slovenian cuisine. It is a thin dried flatbread that is easy to prepare by simply pouring boiled salted water or soup over the mlinci.To prepare homemade mlinci, a dough is made of flour, salt, and water, sometimes also with eggs and fat. The dough is then rolled out about 1 mm thick and 20 to 30 cm wide, and baked in an oven or on a hot plate. Later it is broken into pieces about 5 cm in size before final preparation with hot water or soup.Before serving, mlinci can also be quickly fried in poultry fat. Turkey with mlinci is a Croatian folk-cuisine specialty, especially in Zagorje and Slavonia. In Slovenia, duck or goose with mlinci is traditionally eaten on St. Martin's Day.Mlinci can also be served by soaking the dried pieces in the drippings from roast meats. The roast meat is removed from the pan and the broken pieces are placed in the fat in the tray, and then baked for a short amount of time. The mlinci is then served as a side dish accompanying the main roast." , "ingredientName": "Flour, salt, and water" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Mlinci.jpg?width=300" , "name": "Mlinci" },
    	            {"resource": "http://dbpedia.org/resource/Manakish" , "abstract": "Manakish, also manaqish, manaeesh or manakeesh or in singular form man'ousheh (Arabic: \u0645\u0646\u0627\u0642\u064A\u0634\u200E man\u0101q\u012Bsh; sometimes called \u0645\u0639\u062C\u0646\u0627\u062A mu\u2018ajjan\u0101t 'pastry') is a popular Levantine Arabic food consisting of dough topped with thyme, cheese, or ground meat. Similar to a pizza, it can be sliced or folded, and it can either be served for breakfast or lunch. The word manaqish is the plural of the Arabic word manq\u016Bshah (from the root verb naqasha 'to sculpt, carve out'), meaning that after the dough has been rolled flat, it is pressed by the fingertips to create little dips for the topping to lie in.Traditionally, women would bake dough in a communal oven in the morning, to provide their family with their daily bread needs, and would prepare smaller portions of dough with different toppings for breakfast at this time.Manakish is popular in most Levantine countries, as well as in many cities throughout the world where people of Levantine origin have settled." , "ingredientName": "Dough,thyme,cheeseorground meat" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Israeli_zaatar_manakeesh.jpg?width=300" , "name": "Manakish" },
    	            {"resource": "http://dbpedia.org/resource/Corn_tortilla" , "abstract": "In Mexico and Central America, a tortilla is a type of thin, unleavened flat bread, made from finely ground maize (usually called \"corn\" in the United States). In Guatemala and Mexico, there are three colors of maize dough for making tortillas: white maize, yellow maize and blue maize (or black maize).A similar bread from South America, called arepa (though arepas are typically much thicker than tortillas), predates the arrival of Europeans to America, and was called tortilla by the Spanish from its resemblance to the traditional Spanish round, unleavened cakes and omelettes (originally made without potatoes, which are native to South America). The Aztecs and other Nahuatl-speakers call tortillas tlaxcalli [t\u0361\u026Ca\u0283\u02C8kalli]; these have become the prototypical tortillas.Maize kernels naturally occur in many colors, depending on the cultivar: from pale white, to yellow, to red and bluish purple. Likewise, corn meal and the tortillas made from it may be similarly colored. White and yellow tortillas are by far the most common, however." , "ingredientName": "Maizeflour" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Tortillas_de_maiz_blanco_(M\u00E9xico)_01.jpg?width=300" , "name": "Corn tortilla" },
    	            {"resource": "http://dbpedia.org/resource/Lefse" , "abstract": "Lefse (Norwegian pronunciation: [\u02C8l\u025Bfs\u0259]) is a traditional soft Norwegian flatbread. It is made with leftover potatoes, flour, butter, and milk or cream.  It is cooked on a griddle. Special tools are used to prepare lefse, including long wooden turning sticks and special rolling pins with deep grooves." , "ingredientName": "Traditional:potatoflour" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Lefse_on_a_griddle.jpg?width=300" , "name": "Lefse" },
    	            {"resource": "http://dbpedia.org/resource/Lefse" , "abstract": "Lefse (Norwegian pronunciation: [\u02C8l\u025Bfs\u0259]) is a traditional soft Norwegian flatbread. It is made with leftover potatoes, flour, butter, and milk or cream.  It is cooked on a griddle. Special tools are used to prepare lefse, including long wooden turning sticks and special rolling pins with deep grooves." , "ingredientName": "Variations:milkorcream,flour" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Lefse_on_a_griddle.jpg?width=300" , "name": "Lefse" },
    	            {"resource": "http://dbpedia.org/resource/Luchi" , "abstract": "Luchi (Bengali: \u09B2\u09C1\u099A\u09BF),(Assamese: \u09B2\u09C1\u099A\u09BF lusi ),(Odia: \u0B32\u0B41\u0B1A\u0B3F) is a deep-fried flatbread made of wheat flour that is typical of Bengali cuisine, Assamese, Maithili and Oriya cuisine. In order to make luchis, a dough is prepared by mixing fine maida flour with water and a spoonful of ghee, which is then divided into small balls. These balls are flattened using a rolling-pin and individually deep-fried in cooking oil or ghee. A typical luchi will measure 4-5 inches in diameter. They are usually served with curries or gravies. If maida is substituted with atta, it is called a Poori. Luchi that is stuffed is called kochuri; kochuri stuffed with mashed peas (koraishutir kochuri) is one notable variety." , "ingredientName": "Maida flour" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Luchi.jpg?width=300" , "name": "Luchi" },
    	            {"resource": "http://dbpedia.org/resource/Frybread" , "abstract": "Frybread (also spelled fry bread) is a flat dough fried or deep-fried in oil, shortening, or lard. The dough is generally leavened by soured milk, baking powder or yeast (rarely). Frybread can be eaten alone or with various toppings such as honey, jam, or hot beef. Frybread can also be made into tacos, like Indian tacos. It is a simple complement to meals." , "ingredientName": "Dough,leavening agent, fat (oil,shortening, orlard)" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Frybread.jpg?width=300" , "name": "Frybread" },
    	            {"resource": "http://dbpedia.org/resource/Bammy" , "abstract": "Bammy or bami is a traditional Jamaican cassava flatbread descended from the simple flatbread eaten by the Arawaks, Jamaica's original inhabitants. Today, it is produced in many rural communities and sold in stores and by street vendors in Jamaica and abroad.Bammies have been consumed since pre-Columbian times and is believed to have originated with the native Arawak people. For centuries, it was the bread staple for rural Jamaicans until the cheaper, imported wheat flour breads became popular in the post-World War II era.In the 1990s, the United Nations and the Jamaican government established a program to revive bammy production and to market it as a modern, convenient food product.Bammy is made from bitter cassava (also called yuca and manioc in other American cultures). Traditionally, the cassava is grated and placed in a press bag (woven with thatch leaves) and placed in an outdoor press where heavy stones are loaded on. Once completely drained, but still a bit moist, the cassave is beaten in a mortar then sieved to a fine flour texture. Salt is then added to taste.The actual baking of bammies varies across Jamaican communities. Traditionally, it is made by spreading a handful of the flour evenly in a baking ring on a flat iron or griddle on the open fire. While baking, the top of the bammy is patted with a flat board and then turned over. The baking process takes about 3 minutes and the final product is a thin, foldable bread about 10\" in diameter. This is similar to traditional tortillas of Native American cultures. It can then be eaten with whatever fillings are desired.The more modern (and popular) approach is to bake thicker bammies about 6\" in diameter. These are often mass-produced in factories. When home-baked, the flour may be store-bought or made by hand-pressing. The bammy can be baked on griddles or in baking pans on a stove top. Some choose to bake it inside an oven, and to add butter and other spices before baking. Baking takes longer due to the thickness, and the final product is then cut into halves or wedges for freezing. When ready to eat, the wedges are soaked in coconut milk and then fried to a golden brown, and served with meat, fish, avocado, or other side dishes.Bammies, like wheat bread and tortillas, are served at any meal or consumed as a snack." , "ingredientName": "Cassavaflour" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Bammies.jpg?width=300" , "name": "Bammy" },
    	            {"resource": "http://dbpedia.org/resource/Bazlama" , "abstract": "Bazlama is a single layered, flat, circular and leavened bread with a creamish yellow colour, found in Turkey. It has an average thickness of 2 cm and diameters ranging from 10 to 25 cm.This popular flatbread is made from wheat flour, water, table salt, and yeast. After mixing and two to three hours fermentation, 200- to 250-gram pieces of dough are divided, rounded, sheeted to a desired thickness and baked on a hot plate. During baking, the bread is turned over to bake the other side. After baking, it is generally consumed fresh. Shelf life of bazlama varies from several hours to a few days, depending on storage conditions. This is a Turkish bread type." , "ingredientName": "Wheat flour,water,table salt,yeast" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Bazlama.jpg?width=300" , "name": "Bazlama" },
    	            {"resource": "http://dbpedia.org/resource/Parotta" , "abstract": "A parotta, porotta or barotta is a layered flatbread made from maida flour, from the culinary tradition of Sri Lanka and parts of Southern India, especially Kerala, as well as Tamil Nadu. The origin lies in the greater Punjab region comprising parts of modern-day North India and Pakistan (see Paratha). Parottas are usually available as street food  and in restaurants across Kerala, Tamil Nadu and parts of Karnataka. At some places it is also served at weddings, religious festivals and feasts. It is prepared by kneading maida, egg (in some recipes), oil or ghee and water. The dough is beaten into thin layers and later forming a round spiralled into a ball using these thin layers. The ball is rolled flat and roasted.Usually, parottas are eaten with vegetable kuruma or chicken, mutton or beef saalna (a spicy curry). Chilli parotta and Kothu Parotta are prepared using parottas. Maida is kneaded using egg, oil or ghee, and water. The dough is beaten into thin layers and then formed into a round ball." , "ingredientName": "Maida flour,eggs,gheeor oil" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Parotta.jpg?width=300" , "name": "Parotta" },
    	            {"resource": "http://dbpedia.org/resource/Scallion_pancake" , "abstract": "A scallion pancake (Chinese: \u8471\u6CB9\u997C; pinyin: c\u014Dngy\u00F3ub\u01D0ng; Mandarin pronunciation [ts\u02B0\u00FA\u014Bj\u0259\u030C\u028Ap\u00EC\u014B]) is a Chinese savory, unleavened flatbread folded with oil and minced scallions (green onions). Unlike Western pancakes, it is made from dough instead of batter. Variations exist on the basic method of preparation that incorporate other flavors and fillings.Scallion pancakes are sometimes served as a street food item but are also available in restaurants and commercially available packaged fresh or frozen solid in plastic packages (often in Asian supermarkets)." , "ingredientName": "Dough,scallions" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Spring_onion_pancake_2013.JPG?width=300" , "name": "Scallion pancake" },
    	            {"resource": "http://dbpedia.org/resource/Lavash" , "abstract": "Lavash (Armenian: \u056C\u0561\u057E\u0561\u0577;  Azerbaijani and Turkish: lava\u015F; Kurdish: nan\u00EA lo\u015F\u200E; Persian: \u0644\u0648\u0627\u0634\u200E\u200E), sometimes referred to as Armenian lavash, is a soft, thin unleavened flatbreadmade in a tandoor (called tonir in Armenian) and eaten all over the Caucasus, Western Asia and the areas surrounding the Caspian Sea. Lavash is the most widespread type of bread in Armenia, Azerbaijan and Iran.In 2014, \"Lavash, the preparation, meaning and appearance of traditional bread as an expression of culture in Armenia\" was included in the UNESCO Representative List of the Intangible Cultural Heritage of Humanity." , "ingredientName": "Flour,water,salt" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Pan_armenio_en_el_mercado_de_Yerevan.JPG?width=300" , "name": "Lavash" },
    	            {"resource": "http://dbpedia.org/resource/L\u00E1ngos" , "abstract": "L\u00E1ngos (Hungarian pronunciation: [\u02C8la\u02D0\u014B\u0261o\u0283]; Turkish: Lalanga) is a Hungarian food speciality, a deep fried flat bread made of a dough with flour, yeast, salt and water. It is also traditionally made in Vojvodina, Serbia, where it was introduced by the local Hungarians." , "ingredientName": "Flour,yeast,salt" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Langos_in_Berlin_1.jpg?width=300" , "name": "L\u00E1ngos" },
    	            {"resource": "http://dbpedia.org/resource/Laobing" , "abstract": "Laobing (also: Luobing; Chinese: \u70D9\u9905; pinyin: l\u00E0ob\u01D0ng, l\u00F9ob\u01D0ng) is a type of unleavened flatbread popular in parts of northern China, including Beijing. It is sometimes referred to as a Chinese pancake.Laobing can be the size of a large pizza, about one centimeter thick, and is doughy and chewy in texture. The bing is made by pan frying a rolled and layered unleavened dough consisting of salt, flour, and water. Most laobing are plain, although some have scallions or brown sugar inside the pastry. Laobing is usually cut into slices and served as a staple food, or can be stir-fried with meat and vegetables to make chaobing (stir-fried Chinese pancakes). Laobing is becoming increasingly popular in other parts of the world, particularly Australasia, due to the increased immigration from China." , "ingredientName": "Salt, flour, water" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Laobing.JPG?width=300" , "name": "Laobing" },
    	            {"resource": "http://dbpedia.org/resource/Piadina" , "abstract": "Piadina [pja\u02C8di\u02D0na] or Piada [\u02C8pja\u02D0da] is a thin Italian flatbread, typically prepared in the Romagna region (Forl\u00EC-Cesena, Ravenna and Rimini). It is usually made with white flour, lard or olive oil, salt and water. The dough was traditionally cooked on a terracotta dish (called teggia in the Romagnol), although nowadays flat pans or electric griddles are commonly used.The Piadina has been added to the list of the traditional regional food products of Italy of the Emilia-Romagna Region." , "ingredientName": "Flour,lardorolive oil, salt, water" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Piadina.jpg?width=300" , "name": "Piadina" },
    	            {"resource": "http://dbpedia.org/resource/Flatbr\u00F8d" , "abstract": "Flatbr\u00F8d (literally \"flat-bread\") is a traditional Norwegian unleavened bread which is currently usually eaten with fish, salted meats and soups. Originally it was the staple food of Norwegian shepherds, peasants, and Vikings.The basic ingredients are barley flour, salt, and water, though many varieties exist which incorporate other staples.It was once generally eaten in all meals, most often with cured herring and cold boiled potato, often along with sour cream and/or butter. Another use is served with betasuppe, a traditional meat soup.The thinner the bread is, the better it is. It is rolled and then cooked on a large griddle. The tradition of making flat bread used to be passed down through generation after generation by housewives. And each person had their own recipe for preparing it. It's still an important part of Norwegian food traditions, but it is now almost only made on a commercial basis. Flat bread is dry and free from water so it is possible to store it for a long period of time" , "ingredientName": "Barleyflour,salt,water" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Br\u00F8dkorg.JPG?width=300" , "name": "Flatbr\u00F8d" },
    	            {"resource": "http://dbpedia.org/resource/Sangak" , "abstract": "Sangak (Persian: \u0633\u0646\u06AF\u06A9\u200E\u200E; or nan-e sangak \u0646\u0627\u0646 \u0633\u0646\u06AF\u06A9) is a plain, rectangular, or triangular Iranian whole wheat leavened flatbread. Its name consists of two parts: 'Sang' in Persian means stone or pebble and 'sangak' means little stone. The bread is baked on a bed of small river stones in an oven. There are, normally, two varieties of this bread offered at Iranian bakeries: the generic one which has no toppings; and the more expensive variety which is seed bread (this is, topped with poppy seeds and/or sesame seeds)." , "ingredientName": "Wheat flour,Sour dough" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Naan_Sangak.jpg?width=300" , "name": "Sangak" },
    	            {"resource": "http://dbpedia.org/resource/Kitcha" , "abstract": "Kitcha (or kita) is a relatively thin unleavened bread typically made of wheat. It is a generally made with flour, water, and salt. It is cooked in a hot pan free-form until one side is cooked. It is then picked up and cooked on the other side. Slight burning on each side is often seen.Kitcha will take the shape of the pan in which it is cooked (much like a pancake, though it bears no relation). It is most frequently eaten in a dish called fit-fit." , "ingredientName": "Flour,water,salt" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Kita_herb_bread.jpg?width=300" , "name": "Kitcha" },
    	            {"resource": "http://dbpedia.org/resource/Pizza" , "abstract": "Pizza (English /\u02C8pi\u02D0ts\u0259/; Italian: [\u02C8pittsa]) is a flatbread generally topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments. The term was first recorded in the 10th century, in a Latin manuscript from Gaeta in Central Italy. The modern pizza was invented in Naples, Italy, and the dish and its variants have since become popular in many areas of the world.In 2009, upon Italy's request, Neapolitan pizza was safeguarded in the European Union as a Traditional Speciality Guaranteed dish. The Associazione Verace Pizza Napoletana (the True Neapolitan Pizza Association) is a non-profit organization founded in 1984 with headquarters in Naples. It promotes and protects the \"true Neapolitan pizza\".Pizza is sold fresh, frozen or in portions. Various types of ovens are used to cook them and many varieties exist. Several similar dishes are prepared from ingredients commonly used in pizza preparation, such as calzone and stromboli." , "ingredientName": "Dough, oftentomato sauce,cheese" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Pizza_with_tomatoes.jpg?width=300" , "name": "Pizza" },
    	            {"resource": "http://dbpedia.org/resource/Pane_carasau" , "abstract": "Pane carasau [\u02C8pa\u02D0ne kara\u02C8zau] is a traditional flatbread from Sardinia.It is thin and crisp, usually in the form of a dish half a meter wide. It is made by taking baked flat bread (made of durum wheat flour, salt, yeast and water), then separating it into two sheets which are baked again. The recipe is very ancient and was conceived for shepherds, who used to stay far from home for months at a time. Pane carasau can last up to one year if it is kept dry. The bread can be eaten either dry or wet (with water, wine, or sauces). A similar, yeast-free bread is called carta di musica in Italian (also known as pane guttiau in Sardinian language), meaning music sheet, in reference to its large and paper-thin shape, which is so thin before cooking that a sheet of music can be read through it.Remains of the bread were found in archeological excavations of nuraghi (traditional Sardinian stone buildings) and it was therefore already eaten on the island prior to 1000 BC.The name of the bread comes from the Sardinian word \u201Ccarasare\u201D, referring to the crust of bread." , "ingredientName": "Durum wheatflour, salt,yeast, water" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Pane_carasau.jpg?width=300" , "name": "Pane carasau" },
    	            {"resource": "http://dbpedia.org/resource/Tunnbr\u00F6d" , "abstract": "Tunnbr\u00F6d (literally \"thin bread\") is the Swedish version of flatbread and properly belongs to northern Swedish cuisine where housewives share a common bakery to produce it. Tunnbr\u00F6d can be soft or crisp, and comes in many variants depending on choice of grain, leavening agent (or lack thereof) and rolling pin. The dough is made from any combination of wheat, barley and rye; the leavening agent can be both yeast and ammonium carbonate.Soft tunnbr\u00F6d is commonly used as a wrap  for other food, not unlike a cr\u00EApe or tortilla. A popular fast food dish is soft tunnbr\u00F6d rolled around mashed potatoes and a hot dog, known as tunnbr\u00F6dsrulle (tunnbr\u00F6d roll).Another traditional old Swedish method of eating soft Tunnbr\u00F6d is burrito style, combined with mashed potatoes and roasted herring.Traditionally, tunnbr\u00F6d is eaten with Surstr\u00F6mming (fermented herring) and as dopp i grytan (lit. \"dip in the pot\")- mostly a spiced soft bread is used for this -, where the bread is soaked in the stock left from cooking the Christmas ham. Crisp tunnbr\u00F6d differs from kn\u00E4ckebr\u00F6d in being thinner and more compact, containing fewer air bubbles.The consistency and taste of thin bread can vary a lot. This is usually because recipes and preparation of the bread can vary a lot depending on bakery. Traditionally housewives would keep recipes a closely guarded secret only shared with other family members." , "ingredientName": "Wheat,barleyorryeflour" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Tunnbr\u00F6d-2007-07-14.jpg?width=300" , "name": "Tunnbr\u00F6d" },
    	            {"resource": "http://dbpedia.org/resource/Krotekake" , "abstract": "Krotekaker is a traditional flatbread from the Hardanger region of Norway.  Outside of the region it is often known as hardangerkaker.  The dried krotekaker can be made in quantity and stored without refrigeration for extended periods of time.  Krotekake is a kind of lefse thin pastry. The name lefse covers many different kinds of thin or thick, soft or hard pastry.  In the Norwegian language krote means \"a scroll\" and kake is a cake or pastry. A common misunderstanding is that all kind of lefse contains potatoes.The making of krotekaker is more than a recipe.  t is an opportunity for small gatherings of neighbors in this largely rural fjord coastline. There are typically three or four participants in this activity. The preparation and assembly can take much of the day and provides plenty of time to share stories and catch up on neighborhood information while producing a bounty of staple foodstuff." , "ingredientName": "Flour,yeast,water" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Hardanger_Lefse.jpg?width=300" , "name": "Krotekake" },
    	            {"resource": "http://dbpedia.org/resource/Injera" , "abstract": "Injera (Amharic\u0259n\u01E7\u00E4ra [\u0268nd\u0292\u0259ra]; sometimes transliterated as enjera; Oromo: bidenaa; Somali: canjeero) or taita (Tigrinya \u1323\u12ED\u1273)  is a sourdough-risen flatbread with a unique, slightly spongy texture. Traditionally made out of teff flour, it is a national dish in Ethiopia and Eritrea. A similar variant is eaten in Somalia and Djibouti (where it is called canjeero or lahooh), Yemen (where it is known as lahoh), and Sudan." , "ingredientName": "Teffflour (sometimeswheat,barley,cornorriceflour)" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Alicha_1.jpg?width=300" , "name": "Injera" },
    	            {"resource": "http://dbpedia.org/resource/Chakhchoukha" , "abstract": "Chakhchoukha, chekhechoukha or chakhchoura (Arabic: \u0634\u062E\u0634\u0648\u062E\u0629\u200E) is a dish of Algerian cuisine, eaten often on festive celebrations, especially popular in the Aur\u00E8s region. The dish consists of tearing small pieces of Rougag (thin round flatbread) mixed with Marqa, a stew." , "ingredientName": "Semolinaflour" , "thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Chakhchoukha9.JPG?width=300" , "name": "Chakhchoukha" }];
    	var test = JSON.stringify(json);
    	 test = test.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
    	 
    	 console.log(test);
    	
    	$scope.save = function(){
    		service.save($scope.test, function(data){
    			
    		});
    		console.log("success");
    	}
    	          
    }]);
