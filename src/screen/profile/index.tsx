import React, { useEffect, useState } from "react";
import TabBar from "../../components/TabBar/buttonTabBar";
import DataPatient from "../../components/Patients/dataPatient";
import { TData, getDataUserStorage } from "../../service/requests";
import storePatient from "../../store/storePatient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/Header"
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { padaTheme } from "@/src/theme/pada-theme";

const Profile = () => {
  // const patient: any = storePatient.getState();

  const patient = {
    patientInfo: {
      name: 'Juliana Nogueira',
      photo: 'imgurl',
      telephone: '(81)9 9999-9999',
      email: 'email',
      birthDate: '19/04/1991'
    },
    treatmentInfo: {
      dosage: '2',
      allergies: ['abelhas'],
      frequency: '2',
      method: 'vacina',
      startTreatment: '20/08/2024',
      endTreatment: '20/09/2024'
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.subcontainer}>
        <Header
          title={`${patient.patientInfo.name}`}
          backButton
          // photo={patient.patientInfo.photo}
          type='patient-profile'
        />
        <DataPatient
          name={patient.patientInfo.name}
          phone={patient.patientInfo.telephone}
          email={patient.patientInfo.email}
          birthDate={patient.patientInfo.birthDate}
          dosage={patient.treatmentInfo.dosage}
          allergies={patient.treatmentInfo.allergies}
          frequency={patient.treatmentInfo.frequency}
          method={patient.treatmentInfo.method}
          startTreatment={patient.treatmentInfo.startTreatment}
          endTreatment={patient.treatmentInfo.endTreatment}
        />
      </ScrollView>
      <TabBar />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: padaTheme.colors.main
  },
  subcontainer: {
    height: '100%'
  }
})