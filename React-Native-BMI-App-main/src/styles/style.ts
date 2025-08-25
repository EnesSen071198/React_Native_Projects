import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // Uygulamanın ana konteyneri, içeriği merkezler
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#212121',
    fontFamily: 'Times New Roman',
  },

  // Giriş kutusunun konumlandırılması ve genişliği
  inputbox: {
    position: 'relative',
    width: 300,
    padding: 5,
    marginBottom: 10,
    color: 'white',
  },

  // Giriş alanlarının (kilo ve boy) stili
  input: {
    width: '100%',
    paddingVertical: 20,
    paddingLeft: 10,
    paddingTop: 10,
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.05,
    zIndex: 10,
  },

  // Giriş alanlarının etiketleri için stil (örn. "Kilo", "Boy")
  label: {
    position: 'absolute',
    left: 10,
    paddingTop: 20,
    fontSize: 16,
    color: 'white',
    letterSpacing: 0.05,
    zIndex: 1,
  },

  // Giriş odaklandığında alt çizgi stili
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 2,
    backgroundColor: '#45f3ff',
    borderRadius: 4,
    zIndex: 9,
  },

  // Giriş odaklandığında alt çizgi stili (artırılmış yükseklik)
  underlineFocus: {
    height: 44,
  },

  // Butonun stili (BMI hesaplamak için kullanılır)
  button: {
    width: 250,
    height: 'auto',
    backgroundColor: '#00B0FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    position: 'relative',
    padding: 20,
  },

  calculateButton: {
    width: 120,
    height: 50,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    position: 'relative',
    padding: 12,
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
  },

  // Buton metni için stil
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  calculateButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },

  // Eğer gerektiğinde, degrade buton stili
  buttonGradient: {
    borderRadius: 8,
    marginVertical: 10,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // BMI sonucunun metin stili
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#4282b4',
  },

  // Sayfa başlığının metin stili
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
    fontFamily: 'Times New Roman',
    textAlign: 'center', // Ensures the text is horizontally centered
    lineHeight: 70, // Adjust line height to create space for wrapping text
    justifyContent: 'center', // Vertically centers the text in the parent container
    alignItems: 'center', // Ensures text is aligned in the center horizontally
  },
  // BMI değerini gösteren sonucun stili
  result: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#4282b4',
  },

  // Hata mesajı metin stili
  error: {
    color: '#ff4500', // Hata için turuncu-kırmızı renk
    fontSize: 16,
    marginTop: 10,
  },

  // BMI kategorilerini gösteren tablonun stili
  table: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3, // Android gölge efekti için yükselti ekler
  },

  // Tablo başlığının stili (BMI kategorileri)
  tableTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },

  // Her bir BMI kategorisi için tablo satırının stili
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  // Tablo başlığı satırı stili
  tableHeader: {
    backgroundColor: '#f0f8ff',
  },

  // Tablodaki başlık metni stili
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  // Tablodaki BMI kategori metni stili
  tableText: {
    fontSize: 16,
    color: '#333',
  },

  // Her bir BMI kategorisi için özel stiller
  underweight: {
    color: 'red',
  },
  normal: {
    color: 'green',
  },
  overweight: {
    color: 'orange',
  },
  obesity: {
    color: 'red',
  },

  // Tüm kategoriler için varsayılan metin stili
  defaultText: {
    color: 'black',
  },
});

export default styles;
