// Définition de l'interface Véhicule
interface Véhicule {
    // Propriétés obligatoires pour tout véhicule
    marque: string;
    modèle: string;
    année: number;

    // Méthode obligatoire pour démarrer le véhicule
    start(): void;
}

// Implémentation de la classe Voiture qui respecte l'interface Véhicule
class Voiture implements Véhicule {
    // Déclaration des propriétés
    marque: string;
    modèle: string;
    année: number;

    // Constructeur pour initialiser les propriétés
    constructor(marque: string, modèle: string, année: number) {
        this.marque = marque;
        this.modèle = modèle;
        this.année = année;
    }

    // Méthode pour démarrer la voiture
    start(): void {
        console.log("Car engine started");
    }
}

// Création d'une instance de Voiture avec des valeurs spécifiques
const maVoiture = new Voiture("Toyota", "Corolla", 2020);

// Appel de la méthode start pour démarrer la voiture
maVoiture.start();


