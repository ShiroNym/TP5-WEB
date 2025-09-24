# **TP5-WEB**

## <ins>Partie 1</ins>

### 1.1/ Donner la liste des en-têtes de la réponse HTTP du serveur.

En-tête de réponse : 
- connection : keep-alive
- Date : Fri, 19 Sep 2025 22:49:06 GMT
- keep-alive : timeout=5
- transfer-encoding : chunked

---

### 1.2/ Donner la liste des en-têtes qui ont changé depuis la version précédente.
<code style="color : cyan">En bleu les nouveau element</code><br>


En-tête de réponse : 
- connection : keep-alive
- <code style="color : cyan">content-length : 20</code>
- <code style="color : cyan">content-type : application/json</code>
- date : Fri, 19 Sep 2025 22:50:27 GMT
- keep-alive : timeout=5

<code style="color : red">En rouge les element supprimer</code>
- <code style="color : red">transfer-encoding : chunked</code>



---

### 1.3/ Que contient la réponse reçue par le client ?

Le fichier index.html que le serveur essaye de charge n'existe pas donc le client ne reçoit aucune réponse.

---

### 1.4/ Quelle est l’erreur affichée dans la console ? Retrouver sur https://nodejs.org/api le code d’erreur affiché.
La console affiche :
```txt
Error: ENOENT: no such file or directory, open 'C:\Users\lucas\Documents\Cours\2025\Semestre_4\Web_2\TP\TP5-WEB\xindex.html'
    at async open (node:internal/fs/promises:641:25)
    at async Object.readFile (node:internal/fs/promises:1245:14) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\lucas\\Documents\\Cours\\2025\\Semestre_4\\Web_2\\TP\\TP5-WEB\\xindex.html'

```
### 1.5/ Donner le code de requestListener() modifié avec gestion d’erreur en async/await.


---

### 1.6/  Indiquer ce que cette commande a modifié dans votre projet.
Cela a ajouter des dépendance ,un package-lock.json et dossier node_modules rempli.

---

### 1.7/ Quelles sont les différences entre les scripts http-dev et http-prod ?
http-dev met l'environnement en mode développent et http-prod met l'environnement en mode production.

En mode développent le serveur s'actualise à chaque sauvegarde d'un ficher contrairement au mode production qui ne s'actualise pas.


### 1.8/ Donner les codes HTTP reçus par votre navigateur pour chacune des quatre pages précédentes.

| lien                             |code|
|----------------------------------|----|
|http://localhost:8000/index.html  |200|
|http://localhost:8000/random.html |200|
|http://localhost:8000/            |404|
|http://localhost:8000/dont-exist  |404|


---
---

## <ins>Partie 2</ins>

### 2.1/ Donner les URL des documentations de chacun des modules installés par la commande précédente.

|Module     |lien|
|-----------|----|
|express    |https://expressjs.com/|
|http-errors|https://www.npmjs.com/package/http-errors|
|loglevel   |https://www.npmjs.com/package/loglevel|
|morgan     |https://www.npmjs.com/package/morgan|

---

### 2.2/ Vérifier que les trois routes fonctionnent.

| lien                             |code|
|----------------------------------|----|
|http://localhost:8000/index.html  |200|
|http://localhost:8000/random/:nb  |200|
|http://localhost:8000/            |200|


### 2.3/ Lister les en-têtes des réponses fournies par Express. Lesquelles sont nouvelles par rapport au serveur HTTP ?
<code style="color : cyan">En bleu les nouveau element</code><br>

- <code style="color : cyan">accept-ranges : bytes</code><br>
- <code style="color : cyan">cache-control : public, max-age=0</code><br>
- connection : keep-alive
- content-length : 196
- content-type : text/html; charset=utf-8
- date : Tue, 23 Sep 2025 23:01:45 GMT
- <code style="color : cyan">etag : W/"c4-1996e493bf9"</code><br>
- keep-alive : timeout=5
- <code style="color : cyan">last-modified : Sun, 21 Sep 2025 21:58:37 GMT</code><br>
- <code style="color : cyan">powered-by : Express</code><br>

### 2.4/ Quand l’événement listening est-il déclenché ?
La fonction Express app.listen() permet démarrer un serveur et de le faire écouter les requêtes entrantes.

Une fois le port et l'hôte connecte et ouvert la fonction envois l'évènement listening qui est capter par server.on qui va afficher les info dans la console du terminal.
