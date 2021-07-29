import { useState, useEffect } from "react";
import { IonDatetime, IonItem, IonLabel } from "@ionic/react";

interface getDateInter {
  getDate: Function;
  reset: boolean;
}

const ServiceDate: React.FC<getDateInter> = ({ getDate, reset }) => {
  useEffect(() => {
    if (reset == true) {
      setTest("");
    }
  }, [reset]);

  const [test, setTest] = useState("");
  return (
    <div style={{ margin: "2rem 0" }}>
      <div style={{ margin: "1rem 0" }}>
        <IonLabel style={{ fontSize: "2rem", color: "white" }}>
          Service Date
        </IonLabel>
      </div>
      <IonItem>
        <IonLabel>Select Date</IonLabel>
        <IonDatetime
          value={test}
          placeholder="Select Date"
          onIonChange={(e: any) => {
            getDate(new Date(e.detail.value).toLocaleDateString());
            setTest(e.detail.value);
          }}
        ></IonDatetime>
      </IonItem>
    </div>
  );
};
export default ServiceDate;
