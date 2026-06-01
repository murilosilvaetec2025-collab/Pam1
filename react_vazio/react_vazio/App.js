import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Teste de Tela</Text>
      <StatusBar style="auto" />
      <Text>Na obra "Iracema", o escritor romântico José de Alencar idealiza a figura do indígena como símbolo da identidade nacional. Fora da ficção, entretanto, a realidade dos povos nativos e de outras comunidades tradicionais — como quilombolas e ribeirinhos — distancia-se do lirismo literário, sendo marcada pela negligência. Nesse contexto, a valorização desses grupos encontra sérios desafios no Brasil contemporâneo. Essa problemática é alimentada tanto pela herança histórico-cultural de invisibilização dessas populações quanto pela lentidão na demarcação e proteção de seus territórios originários.Em primeiro lugar, cabe pontuar que o preconceito estrutural enraizado na sociedade brasileira atua como um forte entrave. De acordo com o conceito de "Violência Simbólica", do sociólogo Pierre Bourdieu, a opressão se manifesta quando a cultura dominante desvaloriza os saberes e modos de vida de grupos minoritários, impondo-os como inferiores. Sob essa ótica, a sabedoria ancestral das comunidades tradicionais — fundamental para a preservação ambiental e para a pluralidade do país — é frequentemente marginalizada pelo etnocentrismo moderno. Consequentemente, a falta de respeito às suas tradições gera um ciclo de apagamento identitário que impede o pleno reconhecimento da importância desses povos.Ademais, a ineficácia estatal na garantia dos direitos territoriais agrava a vulnerabilidade dessas minorias. Conforme o Artigo 231 da Constituição Federal de 1988, é dever do Estado proteger as terras ocupadas tradicionalmente por esses povos. Contudo, a pressão do avanço da fronteira agrícola, do garimpo ilegal e do desmatamento criminoso ameaça constantemente a subsistência dessas comunidades. A morosidade dos processos de demarcação e a fiscalização deficitária de órgãos ambientais não apenas perpetuam conflitos agrários violentos, mas também privam esses cidadãos do acesso aos seus recursos básicos, inviabilizando a sua permanência digna na terra.Portanto, medidas urgentes são necessárias para superar os desafios de valorização dos povos tradicionais. Para tanto, o Ministério dos Povos Indígenas, em parceria com o Ministério da Cultura, deve promover a salvaguarda dessas identidades. Isso deve ser feito por meio da ampliação de verbas destinadas à demarcação de terras e ao fortalecimento da fiscalização contra invasões ilegais, além da criação de campanhas nacionais e projetos pedagógicos nas escolas que valorizem os saberes ancestrais. Essa ação terá a finalidade de conscientizar a população e garantir a segurança jurídica desses grupos. Desse modo, o Brasil poderá aproximar sua realidade do respeito mútuo e da justiça social idealizados na literatura de Alencar.</Text>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont_texto: {
    height: 1500,
    backgroundColor: "red",
  }
});
