import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';
import BackButton from '../../components/BackButton';

export default function TelaPerfil() {
  return (
    <View style={styles.container}>
      <BackButton />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.middleWrapper}>
          <View style={styles.profileSection}>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../assets/smiling.png')}
                style={styles.profileImage}
              />
              <TouchableOpacity style={styles.editIconWrapper}>
                <Image
                  source={require('../../assets/iconeeditor.png')}
                  style={styles.editIcon}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.name}>Adelaide Monteiro</Text>
            <Text style={styles.subtitle}>Edite suas informações</Text>
            <Text style={styles.email}>adelaide.monteiro@meupiaui.com</Text>

            <View style={styles.inputs}>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#132e209e"
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#132e209e"
              />
              <TextInput
                style={styles.input}
                placeholder="Nova senha"
                placeholderTextColor="#132e209e"
                secureTextEntry
              />
            </View>
          </View>
        </View>

        <View style={styles.footerButtons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Salvar alterações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sair da conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
