import { IonLabel } from "@ionic/react";
import SearchInput from "./SearchInput";

interface getDataInter {
  getData: Function;
  reset: boolean;
}

export const SearchUsingSingle: React.FC<getDataInter> = ({
  getData,
  reset,
}) => {
  return (
    <div>
      <>
        <div style={{ margin: "4rem 0rem 2rem 0rem" }}>
          <IonLabel style={{ fontSize: "2rem", color: "white" }}>
            Search Using API
          </IonLabel>
        </div>
        <SearchInput
          reset={reset}
          id="pn"
          getPnumber={getData}
          title="Policy Number"
        />
      </>
    </div>
  );
};

const SearchUsing: React.FC<getDataInter> = ({ getData, reset }) => {
  return (
    <>
      <div style={{ margin: "4rem 0rem 2rem 0rem" }}>
        <IonLabel style={{ fontSize: "2rem", color: "white" }}>
          Search Using
        </IonLabel>
      </div>
      <SearchInput
        reset={reset}
        id="pn"
        getPnumber={getData}
        title="Policy Number"
      />
      <SearchInput
        reset={reset}
        id="mcn"
        getPnumber={getData}
        title="Member Card Number"
      />
    </>
  );
};

export default SearchUsing;
