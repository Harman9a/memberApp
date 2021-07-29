import React from "react";
import { IonCard, IonItem, IonLabel } from "@ionic/react";

interface cardInfoInter {
  fName: string;
  lName: string;
  dataOfBirth: string;
}

export const SearchCard: React.FC<cardInfoInter> = ({
  fName,
  lName,
  dataOfBirth,
}) => {
  return (
    <IonCard>
      <IonItem className="ion-activated">
        <IonLabel>First Name</IonLabel>
        <IonLabel>{fName}</IonLabel>
      </IonItem>
      <IonItem className="ion-activated">
        <IonLabel>Last Name</IonLabel>
        <IonLabel>{lName}</IonLabel>
      </IonItem>
      <IonItem className="ion-activated">
        <IonLabel>Date of Birth</IonLabel>
        <IonLabel>{dataOfBirth}</IonLabel>
      </IonItem>
    </IonCard>
  );
};
