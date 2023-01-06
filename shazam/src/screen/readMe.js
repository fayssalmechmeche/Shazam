import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

const readMe = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.Title}># Shazam</Text>

        <Text style={styles.Title}>## Présentation</Text>
        <Text>
          {' '}
          Shazam est une application qui permet de rechercher des titres de
          musiques grâce à un extrait de son. Elle permet aussi d'afficher une
          liste des sons du moment avec une page détaillée
          (titre,cover,artiste).
        </Text>
        <Text>
          {' '}
          ⚠️ Le microphone ne marche pas sur émulateur il faut utiliser un vrai
          téléphone ⚠️
        </Text>
        <Text style={styles.Title}> ## Fonctionnalités </Text>

        <Text> - Connexion</Text>
        <Text> - Inscription</Text>
        <Text> - Recherche filtrée </Text>
        <Text> - Trouver une musique </Text>
        <Text> - Liste des musiques du moment</Text>
        <Text> - Description détaillée d'une musique </Text>
        <Text> - Reconnaissance audio </Text>

        <Text style={styles.Title}> ## Equipe </Text>

        <Text> Développeur Front : Flora, Thibault, Paul</Text>
        <Text> Développeur Back : Yannis, Fayssal</Text>

        <Text style={styles.Title}> ##Installation</Text>

        <Text> Pod init </Text>
        <Text> Pod Install</Text>

        <Text> Yarn run </Text>

        <Text style={styles.Title}> ## Modules requises </Text>

        <Text> - AsyncStorage -> Permets de stocker en cache des données</Text>
        <Text>
          {' '}
          - React-Native-Audio-Record -> Permet d'enregistrer en base64 l'audio
        </Text>
        <Text>
          {' '}
          - React-Native-permissions -> Permet de demander les permissions{' '}
        </Text>
        <Text> - Buffer</Text>
        <Text> - concat </Text>
        <Text> - RNFS -> Permet de modifier un fichier audio </Text>
        <Text> - Axios -> Permet de faire des requetes axios</Text>

        <Text style={styles.Title}> ## API Shazam </Text>

        <Text> doc : https://rapidapi.com/apidojo/api/shazam </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default readMe;
const styles = StyleSheet.create({
  Title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
