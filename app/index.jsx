import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('./foco.png')} />
      <View style={styles.actions}>

        <View style ={styles.context}>

          <Pressable style={styles.contextButtonActive}>
            <Text styles={styles.contextButtonText}>Foco</Text>
          </Pressable>
          <Pressable>
            <Text styles={styles.contextButtonText}>Pausa Curta</Text>
          </Pressable>
          <Pressable>
            <Text styles={styles.contextButtonText}>Pausa Longa</Text>
          </Pressable>

          </View>

        <Text style={styles.timer}>25:00</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
          </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Aluno.
          </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
    
  },

  actions: {
    padding: 24,
    backgroundColor: '#14448080', 
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480', 
    alignItems: 'center',
    width: '80%',
    gap: 32, 

  },


  timer: {
    color: '#ffffff',
    fontSize: 54, 
    fontWeight: "bold",
    textAlign: "center",

  },

  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32, 
    padding: 8, 

  }, 

   buttonText: {
    color: '#021123',
    fontSize: 18, 
    textAlign: 'center', 
  }, 

  footer: {
    width: '80%', 

  },

  footerText: {
    color: '#98A0A8',
    fontSize: 12.5,
    textAlign: 'center', 

  }




})


   