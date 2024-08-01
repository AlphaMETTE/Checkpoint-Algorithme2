// Fonction de tri par insertion
function insertionSort(arr) {
  // Compteurs pour les boucles
  let i, j;

  // Parcourir le tableau à partir du deuxième élément
  for (i = 1; i < arr.length; i++) {
    // Stocker l'élément courant à insérer
    let current = arr[i];
    // Initialiser le compteur j pour la séquence triée
    j = i - 1;

    // Déplacer les éléments de la séquence triée qui sont plus grands que current
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Insérer l'élément courant à la position correcte
    arr[j + 1] = current;
  }

  // Retourner le tableau trié
  return arr;
}

// Exemple d'utilisation
let array = [12, 11, 13, 5, 6];
console.log("Tableau initial:", array);
array = insertionSort(array);
console.log("Tableau trié:", array);
