# Nuit de l'Info 2024 - équipe NiortVPN
## CHAPART Damien - MARCHESIN Lilou - SAINT-MARS Benjamin

### Race for Water (défi principal)

### Bad UI Challenge (défi Zenika)

Le but de ce défi est de réaliser une interface utilisateur la plus laide possible. Pour cela, nous avons choisi de réaliser un formulaire à l'expérience utilisateur la moins agréable possible.

#### Accessibilité

On peut accéder au formulaire en ajoutant `/chaos` à l'URL du site.

#### Champs du formulaire

- Un champ de texte pour le nom
- Un champ de texte pour écrire l'âge : l'âge doit être écrit en toutes lettres, en français et sans faute d'orthographe
- Un champ de texte pour le commentaire : Le commentaire doit faire 200 caractères minimum (/!\ Attention, le compteur de caractères n'est pas présent, et la case est plutôt petite, empêchant de voir le texte en entier)
- Un choix de boutons radios pour l'**in**satisfaction : En plus d'avoir une question mal formulée, les couleurs des boutons radios sont illogiques, avec du rouge pour le choix "oui" et du vert pour le choix "non"
- Un slider pour la note : Le slider est très précis avec des décimales. Aussi, le texte change de couleur quand on déplace le curseur, rendant la lecture difficile
- Un champ de texte pour le prénom : Le prénom est demandé après le nom, ce qui est illogique.
- Un captcha : Le captcha est une longue phrase, écrite à la main, impossible à copier-colle. La case est trop petite pour afficher la phrase en entier, ce qui rend la relecture difficile.

#### Quelques petits détails 

- Des gifs de très bon goût sont présent sur la page, sublimés par un fond vert bien saturé
- Les champs ne sont disponibles qu'un par un
- Le passage d'un champ à l'autre dure 2 secondes
- Afin d'être bien sur de vouloir soumettre le formulaire, un pop-up de confirmation est affiché, qui doit lui aussi être confirmé, pour éviter les soumissions accidentelles
- Quand le formulaire est soumis, un message de succès est affiché, mais affiché en rouge, ce qui fait penser à une erreur plutôt qu'à une réussite

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
import WAILORD from "../assets/data.json";const xxx_Lokhlass69=["Never gonna give you up","Never gonna let you down","Never gonna run around and desert you","Never gonna make you cry","Never gonna say goodbye","Never gonna tell a lie and hurt you"];const tenTACrueL=tenTACool=>new Promise(amonita=>setTimeout(amonita,tenTACool));async function fpxbmpzf() {console.log("MOVAI CODE ! START !!");const caraPUCE = Date.now();await tenTACrueL(200*Math.floor(Math.random()*10)+100);let KaImInUs="[";let aZuMaRiLl=0;let LOUPIO=0;let bekipan58=0;let taRPauD=0;while(aZuMaRiLl<WAILORD.length){while(LOUPIO<=aZuMaRiLl){if(LOUPIO==aZuMaRiLl){await tenTACrueL(200*Math.floor(Math.random()*10)+100);const OYACATA=WAILORD[LOUPIO];KaImInUs+='{"id":'+OYACATA.id;taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;KaImInUs+=',"titre":"'+OYACATA.titre;taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;KaImInUs+='","description":"'+OYACATA.description;taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;KaImInUs+='","zone": {"x":"'+OYACATA.zone.x;taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;KaImInUs+='","y":"'+OYACATA.zone.y;taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;KaImInUs+='"},"image":"'+OYACATA.image+'"},';taRPauD=bekipan58%xxx_Lokhlass69.length;console.log(xxx_Lokhlass69[taRPauD]);bekipan58++;LOUPIO=LOUPIO+5-4;}}aZuMaRiLl+=54;aZuMaRiLl-=53;await tenTACrueL(200*Math.floor(Math.random()*10)+100);}KaImInUs=KaImInUs+']';await tenTACrueL(200*Math.floor(Math.random()*10)+100);let MOYADE = new Blob([""+KaImInUs], {type: "text/plain"});let xx_LanTurn_xx = window.URL.createObjectURL(MOYADE);let moustillon = document.createElement("a");moustillon.href=xx_LanTurn_xx;moustillon.download="res.json";await tenTACrueL(200*Math.floor(Math.random()*10)+100);moustillon.click();console.log(Date.now()-caraPUCE);alert("BRAVO !! La préparation du téléchargement n'a duré QUE "+Math.floor((Date.now()-caraPUCE)/1000)+" secondes !!")};export default fpxbmpzf;
```

Le code est disponible dans le dossier `src/scripts/movai.ts`.

**Amusez-vous bien !**