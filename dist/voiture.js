"use strict";
// Implémentation de la classe Voiture qui respecte l'interface Véhicule
class Voiture {
    // Déclaration des propriétés
    marque;
    modèle;
    année;
    // Constructeur pour initialiser les propriétés
    constructor(marque, modèle, année) {
        this.marque = marque;
        this.modèle = modèle;
        this.année = année;
    }
    // Méthode pour démarrer la voiture
    start() {
        console.log("Car engine started");
    }
}
// Création d'une instance de Voiture avec des valeurs spécifiques
const maVoiture = new Voiture("Toyota", "Corolla", 2020);
// Appel de la méthode start pour démarrer la voiture
maVoiture.start();
