Compte Rendu
Travail effectué 
Route principale : http://localhost:8080/#/app/mandat
- Saisir un nouveau mandat.
- Afficher la liste des mandats qu'il a déposés
- Modifier les informations d'un mandat
- Détruire un mandat

J’ai consacré 1h30 pour tout faire avec 30 min de mise en place de l’environnement de développement.
J’ai choisi l’environnement javascript parce que je viens de mettre en place Window 10 dans mon PC et je ne voulais pas perdre beaucoup de temps à faire les installations. ( avec nodeJs c’étais plus simple).

Environnement :
	Server : node
	Base de données : Mongo DB (nom de la base   url : 'mongodb://localhost/ewaDB', nom de la table : mandat),
	Designe Bootstrap.
	Buider : bower dans le fichier Client(bower install)
		Nmp dans le fichier Server (npm install)	
	


Travail non effectué
- Détruire un mandat : Un autre bouton « Supprimer », initialement inactif, fera apparaître une boite à cocher en face de chaque mandat permettant de les sélectionner , en cliquant à nouveau sur ce bouton, on détruira les mandats sélectionnés et on mettra à jour la liste.
J’ai mis un bouton en face de mandat afin et en appuyant  sur ce bouton une seule fois, on supprime le mandat correspondant.
J’ai commencé à créer des alertes de confirmation pour la création et la suppression des mandants mais je n’ai pas eu le temps de le finir.
- Détruire un mandat  Format date et montant : Les prix de vente des mandats devraient être formatés correctement pour distinguer clairement les milliers. On pourra utiliser, pour ce faire, la librairie : format-as-currency (https://www.npmjs.com/package/format-as-currency). La monnaie est l'euro (€), le résultat devrait être du type : 100 000 € ou 100.000 €

Par maque de temps le format des prix n’est pas fait.



