# **TP5-WEB**

## <ins>Partie 1</ins>

### 1/ Donner la liste des en-têtes de la réponse HTTP du serveur.

En-tête de réponse : 
- connection : keep-alive
- Date : Fri, 19 Sep 2025 22:49:06 GMT
- keep-alive : timeout=5
- transfer-encoding : chunked

---

### 2/ Donner la liste des en-têtes qui ont changé depuis la version précédente.
En-tête de réponse : 
- connection : keep-alive
- content-length : 20
- content-type : application/json
- date : Fri, 19 Sep 2025 22:50:27 GMT
- keep-alive : timeout=5

---

### 3/ Que contient la réponse reçue par le client ?

Le fichier index.html que le serveur essaye de charge n'existe pas donc le client de reçoit aucune réponse.

---

### 4/ Quelle est l’erreur affichée dans la console ? Retrouver sur https://nodejs.org/api le code d’erreur affiché.
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
### 5/