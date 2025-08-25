import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "../components/Information";

export default function CourseInfo({ navigation }) {
  return (
    <ScrollView>
      <Information
        title='C Kursu'
        img={require("../../assets/1.jpg")}
        description='C programlama dili, sistem programlama ve gömülü sistemlerde yaygın olarak kullanılan güçlü ve esnek bir dil. Bu kurs, temel dil yapılarını, bellek yönetimini ve veri yapılarının nasıl kullanılacağını öğretir.'
      />
      <Information
        title='Bootstrap Kursu'
        img={require("../../assets/2.jpg")}
        description="Bootstrap, modern web geliştirme için kullanılan popüler bir CSS framework'üdür. Bu kurs, responsif tasarımlar oluşturmak için Bootstrap’in temel bileşenlerini ve düzen yapısını kullanmayı öğretir."
      />
      <Information
        title='Angular Kursu'
        img={require("../../assets/3.jpg")}
        description="Angular, Google tarafından geliştirilen güçlü bir front-end framework'tür. Bu kursta, komponent tabanlı yapı, veri bağlama ve yönlendirme gibi temel Angular kavramları üzerinde durulmaktadır."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
