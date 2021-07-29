import { IonButton } from "@ionic/react";
import "./btn.css";

interface dataInter {
  clickSubmit: Function;
  clickReset: Function;
}

const Submit: React.FC<dataInter> = ({ clickSubmit, clickReset }) => {
  return (
    <div className="SubmitbtnCon">
      <IonButton
        style={{ color: "white" }}
        onClick={() => clickSubmit()}
        color="success"
      >
        Submit
      </IonButton>
      <IonButton onClick={() => clickReset()} color="warning">
        Reset
      </IonButton>
    </div>
  );
};

export default Submit;
