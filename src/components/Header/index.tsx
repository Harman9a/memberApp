import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

interface HeaderNanme {
  pageName: string;
}

const Header: React.FC<HeaderNanme> = ({ pageName }) => {
  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{pageName}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};

export default Header;
