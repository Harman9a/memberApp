import { useEffect, useState } from "react";
import { IonInput, IonItem, IonLabel } from "@ionic/react";

interface Input {
  id: String;
  title: string;
  getPnumber: Function;
  reset: boolean;
}

const SearchInput: React.FC<Input> = ({ id, title, getPnumber, reset }) => {
  useEffect(() => {
    if (reset == true) {
      setTest("");
    }
  }, [reset]);

  const [test, setTest] = useState("");

  return (
    <div style={{ margin: "3rem 0" }}>
      <div style={{ margin: "1rem 0" }}>
        <IonLabel>{title}</IonLabel>
      </div>
      <IonItem>
        <IonInput
          value={test}
          onIonChange={(e: any) => {
            getPnumber({ id, value: e.detail.value });
            setTest(e.detail.value);
          }}
          placeholder={title}
        ></IonInput>
      </IonItem>
    </div>
  );
};

export default SearchInput;
