const prompt = require("prompt-sync")()
let choiceOne = 1
let choiceTwo = 2
let response = null
let finito = "Vous avez lamentablement echouer."
let fin = "Bravo !"
let finitru = "Вы потерпели неудачу."
let finru = "Очень хорошо!"
console.log("choissisez une langue entre Francais (1) et Russe (2): ")
response = prompt("1 ou 2: ")
while (response != choiceOne && response != choiceTwo) {
    console.log("choix non valide")
    response = prompt("1 ou 2 : ")
}
if(response == choiceOne){

//situation de base français
console.log("Vous vous reveillez dans votre lit a l'aube. Voulez vous sortir de votre lit (1), Voulez vous vous diriger vers RI7 (2)")
response = prompt("1 ou 2: ")
while (response != choiceOne && response != choiceTwo) {
    console.log("tu t'es trompé");
    response = prompt("1 ou 2: ")
}
if (response == choiceOne) { //choix un =FIN
    console.log("Vous prenez la decision de vous rendormir. Peut etre que vous irez un autre jour.")
    console.log(finito)
}
else if (response == choiceTwo) { //choix deux
    console.log("Vous etes motivé et vous vous sentez investi d'une mission capitale, durant le trajet vous pensez a toutes ces fonctions et algorithme qui ne demandent qu'a etre occi sous votre couroux.")
    console.log("Vous arrivez devant RI7, le croissement des corbeaux, les eclairs loingtain, ainsi que le ciel noir vous fait face.Vous etes paniqué (1) Vous etes determiné (2)")
    response = prompt("1 ou 2: ")
    while (response != choiceOne && response != choiceTwo) {
        console.log("tu t'es trompé");
        response = prompt("1 ou 2: ")
    }
    if (response == choiceOne) { //chemin un
        console.log("prit d'un elan de panique a cette vue, vous vous rappelez vos traumatisme passé, toutes ces series de chiffres et de lettres qui vous assaillent simultanément")
        console.log("Vous prenez vos jambes a votre cou (1), vous surmontez vos peurs (2)")
        response = prompt("1 ou 2: ")
        while (response != choiceOne && response != choiceTwo) {
            console.log("tu t'es trompé");
            response = prompt("1 ou 2: ")
        }
        if (response == choiceOne) { //chemin un un =FIN
            console.log("Par lacheté vous fuyez")
            console.log(finito)
        }
        else if (response == choiceTwo) { // chemin un deux
            console.log("apres une longue periode a affronter vos démons vous vous diriger dans le batiment ")
            console.log("vous avancer dans le couloir, l'eclairage fais defaut. Vous cherchez un interupteur (1), Vous avancez dans le noir (2)")
            response = prompt("1 ou 2: ")
            while (response != choiceOne && response != choiceTwo) {
                console.log("tu t'es trompé");
                response = prompt("1 ou 2: ")
            }
            if (response == choiceOne) { // chemin un deux un =fin
                console.log("La petite lueur de l'interrupteur, tel un phare dans la nuit, attire votre attention. Ce faisant vous ne remarquer pas l'ombre qui se faufile dans votre dos. La derniere chose que vous entendrez est le bruit de votre nuque se brisant. ")
                console.log(finito);
            }
            else if (response == choiceTwo) { //chemin un deux deux 
                console.log("vous progressez dans la penombre, la peur au ventre,quand soudain vous remarquer sur le sol une flaque etrange");
                console.log("Vous decidez de vous baisser pour examiner la flaque (1), voyant cette flaque etrange vous rebroussez chemin (2)");
                response = prompt("1 ou 2: ")
                while (response != choiceOne && response != choiceTwo) {
                    console.log("tu t'es trompé");
                    response = prompt("1 ou 2: ")
                }
                if (response == choiceOne) { //=fin
                    console.log("En vous baissant pour examiner le liquide qui compose la flaque, vous ne remarqué pas la forme sombre qui se deplace au plafond, la derniere chose que vous verrez est le sol a une distance de 2m,puis le neant.")
                    console.log(finito)
                }
                else if (response == choiceTwo) { //=fin
                    console.log(" La vue de cette flaque et l'odeur de la piece ne vous dit rien qui vaile, vous decidez de rentrer chez vous et de tout oublier.")
                    console.log(finito)
                }
            }
        }
    }
    else if (response == choiceTwo) { // chemin deux
        console.log("Vous n'y voyez la qu'un signe de plus que votre mission est capitale pour le bien de l'humanité, car si vous ne pouvez le faire qui le pourrait?")
        console.log("Vous avancez sans peur ni crainte et entrez dans le batiment.")
        console.log("Le lieux vous est familier mais quelque chose en vous vous cri DANGER, Vous faites abstraction de cette sensation car vous vous savez puissant (1), Vous restez prudent car la lumiere des cieux n'a pas eclairé ces terres depuis des millenaires. Qui sait quelles creatures peuvent y roder? (2)")
        response = prompt("1 ou 2: ")
        while (response != choiceOne && response != choiceTwo) {
            console.log("tu t'es trompé");
            response = prompt("1 ou 2: ")
        }
        if (response == choiceOne) { //chemin deux un =fin
            console.log("Votre objectif est clair, rien ne pourrait se mettre en travers de votre chemin et de votre determination?")
            console.log("C'est ce que vous pensiez quand vous avanciez la tete haute en ces lieux que peux arpente.C'est cette confiance en vous qui vous fait ignorer votre instinct qui vous criais gare.Ainsi vous etes prit au depourvu quand, Thomas et Brendan surgissent de la penombre pour vous battre a coup de raquette de ping pong, suite a cette altercation le surnom balle de ping-pong vous hanteras,ainsi vous rentrerez chez vous la tete basse et deciderez que vous ne remettrais plus les pieds dans ces lieux maudits.")
            console.log(finito);
        }
        else if (response == choiceTwo) { // chemin deux deux
            console.log("vous faites confiances en vos sens et etes parer a tout danger, vous decidez d'avancer a pas de loup.")
            console.log("vous decider d'avancer en rasant les murs (1), vous avancez dignement au milieu du couloir (2)")
            response = prompt("1 ou 2: ")
            while (response != choiceOne && response != choiceTwo) {
                console.log("tu t'es trompé");
                response = prompt("1 ou 2: ")
            }
            if (response == choiceOne) { // chemin deux deux un
                console.log("Vous etes tel une ombre dans la nuit, vous ne faites qu'un avec la penombre, c'est pourquoi lorsque vous passez devant vos formateur ceux-ci qui vous tendais un piege ne vous remarque pas.")
                console.log("Vous decidez de les attaquer frontalement (1), vous decidez de les mettre hors d'etat de nuire discretement(2)")
                response = prompt("1 ou 2: ")
                while (response != choiceOne && response != choiceTwo) {
                    console.log("tu t'es trompé");
                    response = prompt("1 ou 2: ")
                }
                if (response == choiceOne) { //chemin deux deux deux un
                    console.log("Vous chargez en hurlant POUR PING ET PONG, pensant a toutes les balles de ping png qui furent maltraités dans ce batiment.Malheuresement pour vous votre desir de les venger et moins fort que la volonté de vos formateurs a les smasher.Ainsi vous finissez K.O instantanement.")
                    console.log(finito);
                }
                else if (response == choiceTwo) { //chemin deux deux deux deux
                    console.log("Tel un ninja, vous leur faites une prise du sommeil chacun. Vous pensez alors que plus aucun obstacle ne vous separe de votre objectif. Cependant une autre menace etait presente.Car Serge directeur agueri de ce batiment a l'aide de systeme complexe vous bloque l'acces de la porte. ")
                    console.log("Vous defoncez la porte (1), vous crochetez la serrure (2)")
                    response = prompt("1 ou 2: ")
                    while (response != choiceOne && response != choiceTwo) {
                        console.log("tu t'es trompé");
                        response = prompt("1 ou 2: ")
                    }
                    if (response == choiceOne) { //chemin deux deux deux deux un =fin
                        console.log("En esseyant de defoncer la porte vous activez un piege qui vous tranche les jambes, vous vous viderez de votre sang avec impuissance.Votre ame errera dans le batiment avec tant d'autres pour l'eternité.");
                        console.log(finito)
                    }
                    else if (response == choiceTwo) { // chemin deux deux deux deux deux
                        console.log("En crochetant la serrure vous vous rendez compte que celle-ci etait piegé,au moindre choc elle etait conçu pour activer deux lame scie qui trancherais les jambes du margoulin qui tenterais de la forcer.");
                        console.log("Vous crochetez la serrure avec brio, vous decidez alors de foncer tete baisser vers le big boss Serge(1), vous continuer d'avancer en etant attentif apres que vous ayez etait temoins de tant d'horreur (2)");
                        response = prompt("1 ou 2: ")
                        while (response != choiceOne && response != choiceTwo) {
                            console.log("tu t'es trompé");
                            response = prompt("1 ou 2: ")
                        }
                        if (response == choiceOne) { //chemin deux deux deux deux deux un
                            console.log("Votre course s'arrete brusquement, apres avoir declenché un piege qui consiste en une corde de piano au niveau de vos mollets qui vous fera tombé tete premiere dans des tuyaux taillé en biseau.")
                            console.log(finito)
                        }
                        else if (response == choiceTwo) {// chemin deux deux deux deux deux deux
                            console.log("Avancant avec prudence vous esquivez les pieges un a un. Plus determiné que jamais a vaincre la source de ce mal qui habite le batiment.");
                            console.log("Vous atteignez le bureau de Serge, vous appercevez alors L'ORDINATEUR,cette relique qui contient tout le savoir des fonctions et algorithme, vous savez qu'en sa possession vous n'aures plus a reflechir pour construire car la connaissance sera votre.")
                            console.log("Vous foncez tete baissé jusqu'a la relique (1) vous verifiez si vous etes seul (2)")
                            response = prompt("1 ou 2: ")
                            while (response != choiceOne && response != choiceTwo) {
                                console.log("tu t'es trompé");
                                response = prompt("1 ou 2: ")
                            }
                            if (response == choiceOne) { // chemin deux deux deux deux deux deux un
                                console.log("N'ecoutant que votre courage vous foncez, vous saisissez de l'artefact et sauter par la fenetre la plus proche.Maintenant L'ORDINATEUR en votre possession personne ne peut vous arretez.")
                                console.log(fin);
                            }
                            else if (response == choiceTwo) { // chemin deux deux deux deux deux deux deux
                                console.log("Vous vous deplacer sans aucun bruit, ni aucune generation de vent tant votre agilité est developper. Vous arrivez devant l'artefact et coup de bol le big boss n'est pas present. Vous vous emparez de L'ORDINATEUR et comme si vous n'aviez jamais etait la vous disparraissez au loin");
                                console.log(fin);
                            }
                        }
                    }
                }
            }
            else if (response == choiceTwo) { // chemin deux deux deux
                console.log("Vous appercevez au loin deux ombres,une sur votre droite et une sur votre gauche. Avec des reflexes surhumain vous vous accroupissez et eviter les deux coups de vos formateurs. Prit de cours par votre esquive eclair ceux-ci on un moment de surprise, vous en profiter pour vous mettres en position defensives.")
                console.log("s'ensuit alors un combat eprouvant duquel personne ne sort vraiment vainqueur. Vous gagnez leur respect et ils gagnent votre admiration.");
                console.log("Vous avancez alors ensemble vers un avenir meilleur.");
                console.log(fin)
            }
        }
    }
}
}
else if(response==choiceTwo){
     // base russe
     console.log("Вы просыпаетесь в своей постели на рассвете. Хотите ли вы выйти из постели (1), Хотите ли вы направиться к RI7 (2)");
     response = prompt("1 или 2: ");
     while (response != choiceOne && response != choiceTwo) {
         console.log("ты ошибся");
         response = prompt("1 или 2: ");
     }
     if (response == choiceOne) { // выбор один 
         console.log("Вы решаете снова заснуть. Может быть, вы отправитесь в другой день.");
         console.log(finitru);
     } else if (response == choiceTwo) { // выбор два
         console.log("Вы полны мотивации и чувствуете себя в важной миссии, по дороге вы думаете обо всех этих функциях и алгоритмах, которые ждут, чтобы их уничтожить.");
         console.log("Вы прибываете к RI7, пересечение ворон, далекие молнии и черное небо перед вами. Вы паникуете (1) или решительно настроены (2)");
         response = prompt("1 или 2: ");
         while (response != choiceOne && response != choiceTwo) {
             console.log("ты ошибся");
             response = prompt("1 или 2: ");
         }
         if (response == choiceOne) { // путь один
             console.log("в приступе паники вы вспоминаете свои прошлые травмы, все эти серии цифр и букв, которые одновременно нападают на вас");
             console.log("Вы убегаете (1), вы преодолеваете свои страхи (2)");
             response = prompt("1 или 2: ");
             while (response != choiceOne && response != choiceTwo) {
                 console.log("ты ошибся");
                 response = prompt("1 или 2: ");
             }
             if (response == choiceOne) { // путь один один 
                 console.log("Из трусости вы убегаете");
                 console.log(finitru);
             } else if (response == choiceTwo) { // путь один два
                 console.log("после долгого периода борьбы с вашими демонами вы направляетесь в здание");
                 console.log("вы идете по коридору, освещение подводит. Вы ищете выключатель (1), идете в темноте (2)");
                 response = prompt("1 или 2: ");
                 while (response != choiceOne && response != choiceTwo) {
                     console.log("ты ошибся");
                     response = prompt("1 или 2: ");
                 }
                 if (response == choiceOne) { // путь один два один 
                     console.log("Свет выключателя, как маяк в ночи, привлекает ваше внимание. В этот момент вы не замечаете тени, подкрадывающейся сзади. Последнее, что вы услышите, это звук ломающейся шеи.");
                     console.log(finitru);
                 } else if (response == choiceTwo) { // путь один два два
                     console.log("вы продвигаетесь в темноте, с тревогой в животе, когда вдруг замечаете странную лужу на полу");
                     console.log("Вы решаете наклониться, чтобы изучить лужу (1), видя эту странную лужу, вы разворачиваетесь (2)");
                     response = prompt("1 или 2: ");
                     while (response != choiceOne && response != choiceTwo) {
                         console.log("ты ошибся");
                         response = prompt("1 или 2: ");
                     }
                     if (response == choiceOne) { // 
                         console.log("Наклоняясь, чтобы изучить жидкость в луже, вы не замечаете темную фигуру, двигающуюся по потолку. Последнее, что вы увидите, это пол на расстоянии 2 метров, а затем пустота.");
                         console.log(finitru);
                     } else if (response == choiceTwo) { // 
                         console.log("Вид и запах этой лужи не говорят вам ничего хорошего, вы решаете вернуться домой и забыть обо всем этом.");
                         console.log(finitru);
                     }
                 }
             }
         } else if (response == choiceTwo) { // путь два
             console.log("Вы видите в этом еще один знак того, что ваша миссия жизненно важна для человечества, потому что если вы не можете этого сделать, то кто сможет?");
             console.log("Вы двигаетесь без страха и входите в здание.");
             console.log("Место вам знакомо, но что-то внутри вас кричит ОБЕРЕЖЕННОСТЬ. Вы игнорируете это ощущение, потому что знаете, что вы сильны (1), остаетесь осторожны, потому что свет небес не освещал эти земли тысячелетиями. Кто знает, какие существа могут здесь бродить? (2)");
             response = prompt("1 или 2: ");
             while (response != choiceOne && response != choiceTwo) {
                 console.log("ты ошибся");
                 response = prompt("1 или 2: ");
             }
             if (response == choiceOne) { // путь два один 
                 console.log("Ваша цель ясна, ничто не может встать на вашем пути и помешать вашей решимости.");
                 console.log("Это то, что вы думали, когда шли с высоко поднятой головой в эти редкие места. Эта уверенность в себе заставляет вас игнорировать ваш инстинкт, который предупреждает вас. Таким образом, вы оказались в ловушке, когда Томас и Брендан выпрыгивают из темноты, чтобы избить вас ракетками для настольного тенниса. После этой драки прозвище 'шарик для настольного тенниса' будет преследовать вас, и вы решите больше не приходить в эти проклятые места.");
                 console.log(finitru);
             } else if (response == choiceTwo) { // путь два два
                 console.log("Вы доверяете своим чувствам и готовы к любой опасности, решаете двигаться на цыпочках.");
                 console.log("решаете двигаться вдоль стен (1), идете прямо по коридору (2)");
                 response = prompt("1 или 2: ");
                 while (response != choiceOne && response != choiceTwo) {
                     console.log("ты ошибся");
                     response = prompt("1 или 2: ");
                 }
                 if (response == choiceOne) { // путь два два один
                     console.log("Вы как тень в ночи, вы становитесь единым целым с темнотой, поэтому, когда вы проходите мимо своих наставников, которые устроили вам ловушку, они вас не замечают.");
                     console.log("Вы решаете атаковать их в лоб (1), вы решаете нейтрализовать их тайно (2)");
                     response = prompt("1 или 2: ");
                     while (response != choiceOne && response != choiceTwo) {
                         console.log("ты ошибся");
                         response = prompt("1 или 2: ");
                     }
                     if (response == choiceOne) { // путь два два два один
                         console.log("Вы кричите 'ЗА ПИНГ И ПОНГ', думая о всех мячах для настольного тенниса, которые были здесь плохо обращены. К сожалению, ваше желание их отомстить слабее, чем воля ваших наставников. Таким образом, вы немедленно оказываетесь в нокауте.");
                         console.log(finitru);
                     } else if (response == choiceTwo) { // путь два два два два
                         console.log("Как ниндзя, вы применяете каждому из них удушающий захват. Вы думаете, что больше нет препятствий на вашем пути. Однако была еще одна угроза. Сергею, опытному директору этого здания, удается заблокировать вам доступ к двери с помощью сложной системы.");
                         console.log("Вы ломаете дверь (1), взламываете замок (2)");
                         response = prompt("1 или 2: ");
                         while (response != choiceOne && response != choiceTwo) {
                             console.log("ты ошибся");
                             response = prompt("1 или 2: ");
                         }
                         if (response == choiceOne) { // путь два два два два один 
                             console.log("Попытавшись взломать дверь, вы активируете ловушку, которая отрубает вам ноги, и вы истекаете кровью, будучи бессильными. Ваша душа будет бродить по зданию вечно.");
                             console.log(finitru);
                         } else if (response == choiceTwo) { // путь два два два два два
                             console.log("При взломе замка вы понимаете, что он был заминирован; при малейшем ударе он был бы настроен активировать две пилы, которые отрезали бы ноги глупцу, который попытался бы его взломать.");
                             console.log("Вы блестяще взламываете замок и решаете броситься на главного босса Сергея (1), продолжаете двигаться осторожно после того, как стали свидетелем стольких ужасов (2)");
                             response = prompt("1 или 2: ");
                             while (response != choiceOne && response != choiceTwo) {
                                 console.log("ты ошибся");
                                 response = prompt("1 или 2: ");
                             }
                             if (response == choiceOne) { // путь два два два два два один
                                 console.log("Ваш забег резко останавливается, после активации ловушки, состоящей из рояльной струны на уровне ваших лодыжек, которая заставляет вас падать головой вперед на заостренные трубы.");
                                 console.log(finitru);
                             } else if (response == choiceTwo) { // путь два два два два два два
                                 console.log("Двигаясь осторожно, вы избегаете одной ловушки за другой. Более решительно, чем когда-либо, победить источник зла, обитающего в здании.");
                                 console.log("Вы достигаете офиса Сергея и видите КОМПЬЮТЕР, этот артефакт, содержащий все знания о функциях и алгоритмах. Вы знаете, что с ним у вас не будет необходимости думать, чтобы строить, потому что знание будет вашим.");
                                 console.log("Вы бросаетесь к артефакту (1) проверяете, один ли вы (2)");
                                 response = prompt("1 или 2: ");
                                 while (response != choiceOne && response != choiceTwo) {
                                     console.log("ты ошибся");
                                     response = prompt("1 или 2: ");
                                 }
                                 if (response == choiceOne) { // путь два два два два два два один
                                     console.log("Не слушая ничего, кроме своего мужества, вы бросаетесь, хватаете артефакт и выпрыгиваете в ближайшее окно. Теперь, когда КОМПЬЮТЕР в вашем распоряжении, никто не может вас остановить.");
                                     console.log(finru);
                                 } else if (response == choiceTwo) { // путь два два два два два два два
                                     console.log("Вы двигаетесь бесшумно, не создавая ни малейшего ветра. Вы достигаете артефакта и, по счастливой случайности, главного босса нет на месте. Вы захватываете КОМПЬЮТЕР и, как будто вас никогда не было, исчезаете вдали.");
                                     console.log(finru);
                                 }
                             }
                         }
                     }
                 } else if (response == choiceTwo) { // путь два два два
                     console.log("Вы видите вдали две тени, одну справа и одну слева от вас. С сверхчеловеческими рефлексами вы пригибаетесь и избегаете двух ударов своих наставников. Застигнутые врасплох вашей молниеносной уклончивостью, они на мгновение удивлены, и вы используете это время, чтобы встать в защитную позицию.");
                     console.log("Следует изнурительная битва, из которой никто не выходит победителем. Вы зарабатываете их уважение, и они завоевывают ваше восхищение.");
                     console.log("Вы двигаетесь дальше вместе к лучшему будущему.");
                     console.log(finru);
                 }
             }
         }
     }
}


