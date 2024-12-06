# Nuit de l'Info 2024 - équipe NiortVPN
## CHAPART Damien - MARCHESIN Lilou - SAINT-MARS Benjamin

### Race for Water (défi principal)

### Bad UI Challenge (défi Zenika)

### MOVAI CODE 2024 (défi Coddity)

L'objectif de ce défi est de réaliser une fonctionnalité en lien avec le défi principal dont le code soit absolument honteux, aussi bien à lire que dans son exécution.

Nous avons choisi de proposer un téléchargement des données au format JSON que nous avons utilisé pour le défi principal, car c'est une fonctionnalité sympa mais pas essentielle et donc la cible parfaite pour nos farces.

#### Implémentation:

Pour ce qui est de l'implémentation, nous avons choisi le langage JavaScript (le langage du démon si on me demande).

Cette fonction au doux nom de `fpxbmpzf` (si si c'est logique) est donc écrite en une seule ligne (ma touche 'Entrée' était cassée 😢) qui va lire notre fichier JSON et pour chaque élément contenu dans l'array, va ensuite extraire les données et écrire une nouvelle chaîne de caractères. Pour cela, une double boucle `while` est la meilleure des pires solutions de lecture.

Cependant, le résultat obtenu étant trop rapide, nous avons ajouté quelques moments de répit pour notre pauvre machine ainsi qu'une magnifique pop-up qui nous préviens du temps ~~perdu~~ passé à attendre notre téléchargement !

Concernant le nom des variables, vu que le sujet du défi principal met en comparaison le corps humain avec l'Océan nous avons trouvé adapté d'utiliser des noms de Pokémons de type eau.

#### Notre horreur:

```typescript
import WAILORD from "../assets/data.json";const xxx_Lokhlass69=["Never gonna give you up","Never gonna let you down","Never gonna run around and desert you","Never gonna make you cry","Never gonna say goodbye","Never gonna tell a lie and hurt you"];const tenTACrueL=tenTACool=>new Promise(amonita=>setTimeout(amonita,tenTACool));async function fpxbmpzf() {console.log("MOVAI CODE ! START !!");const caraPUCE = Date.now();await tenTACrueL(200*Math.floor(Math.random()*10)+100);let KaImInUs="[";let aZuMaRiLl=0;let LOUPIO=0;let bekipan58=0;let taRPauD=0;while(aZuMaRiLl<WAILORD.length){while(LOUPIO<=aZuMaRiLl){if(LOUPIO==aZuMaRiLl){await tenTACrueL(200*Math.floor(Math.random()*10)+100);const OYACATA=WAILORD[LOUPIO];KaImInUs+='{"id":'+OYACATA.id;taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;KaImInUs+=',"titre":"'+OYACATA.titre;taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;KaImInUs+='","description":"'+OYACATA.description;taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;KaImInUs+='","zone": {"x":"'+OYACATA.zone.x;taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;KaImInUs+='","y":"'+OYACATA.zone.y;taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;KaImInUs+='"},"image":"'+OYACATA.image+'"},';taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;LOUPIO=LOUPIO+5-4;}}aZuMaRiLl+=54;aZuMaRiLl-=53;await tenTACrueL(200*Math.floor(Math.random()*10)+100);}KaImInUs=KaImInUs+']';await tenTACrueL(200*Math.floor(Math.random()*10)+100);var MOYADE = new Blob([""+KaImInUs], {type: "text/plain"});var xx_LanTurn_xx = window.URL.createObjectURL(MOYADE);var moustillon = document.createElement("a");moustillon.href=xx_LanTurn_xx;moustillon.download="res.json";await tenTACrueL(200*Math.floor(Math.random()*10)+100);moustillon.click();console.log(Date.now()-caraPUCE);alert("BRAVO !! La préparation du téléchargement n'a duré QUE "+Math.floor((Date.now()-caraPUCE)/1000)+" secondes !!")};export default fpxbmpzf;
```

**Amusez-vous bien !**