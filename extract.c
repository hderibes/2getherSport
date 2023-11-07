#include <stdio.h>
#include <string.h>

int main() {
    FILE *inputFile, *outputFile;
    char line[256]; // Taille arbitraire pour une ligne de texte
    char outputLine[256 * 3]; // Taille arbitraire pour une ligne de sortie
    char villes[32000][256]; // Tableau pour stocker les villes rencontrées
    int i = 0;

    // Ouvrir le fichier d'entrée en lecture
    inputFile = fopen("villes.txt", "r");
    if (inputFile == NULL) {
        perror("Impossible d'ouvrir le fichier d'entrée");
        return 1;
    }

    // Ouvrir le fichier de sortie en écriture
    outputFile = fopen("output.txt", "w");
    if (outputFile == NULL) {
        perror("Impossible d'ouvrir le fichier de sortie");
        fclose(inputFile);
        return 1;
    }

   while (fgets(line, sizeof(line), inputFile)) {
        // Supprimer le caractère de nouvelle ligne à la fin de la ligne lue
        size_t lineLength = strlen(line);
        for (size_t i = 0; i < lineLength; i++) {
            if (line[i] == '\'' || line[i] == 8217) {
                line[i] = ' '; // Utilisez des guillemets simples pour les caractères individuels, pas des doubles guillemets
            }
        }
            line[lineLength - 1] = '\0';
            line[lineLength - 2] = '\0';

        // Construire la ligne de sortie avec les mots entourés de guillemets simples
        snprintf(outputLine, sizeof(outputLine), "'%s',\n", line);

        // Vérifier si la ville n'a pas été déjà rencontrée
        int ville_deja_presente = 0;
        for (int j = 0; j < i; j++) {
            if (strcmp(line, villes[j]) == 0) {
                ville_deja_presente = 1;
                break;
            }
        }

        // Si la ville n'a pas été déjà rencontrée, l'ajouter au tableau et écrire dans le fichier de sortie
        if (!ville_deja_presente) {
            snprintf(villes[i], sizeof(villes[i]), "%s", line);
            fprintf(outputFile, "'%s',\n", line);
            i++;
        }
    }

    // Fermer les fichiers
    fclose(inputFile);
    fclose(outputFile);

    printf("Noms de villes formatés et enregistrés dans output.txt\n");

    return 0;
}


/*
 
        
        */