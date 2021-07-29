import { IonAlert } from "@ionic/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { saveSearchInputData, saveSearchData } from "../Redux/Actions";
import Header from "../components/Header";
import SearchUsing from "../components/MemberSearch/SearchUsing";
import ServiceDate from "../components/MemberSearch/ServiceDate";
import Submit from "../components/MemberSearch/Submit";

interface HeaderNanme {
  pageName: string;
}

interface InputData {
  id: String;
  value: String;
}

const MemberSearch: React.FC<HeaderNanme> = ({ pageName }) => {
  const [date, setdate] = useState("");
  const [pNumber, setpNumber] = useState("");
  const [mcNumber, setmcNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [reset, setReset] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChangeDate = (date: string) => {
    setReset(false);
    setdate(date);
  };

  const handleInputData = (data: any) => {
    setReset(false);
    let { id, value } = data;
    if (id == "pn") {
      setpNumber(value);
    } else if (id == "mcn") {
      setmcNumber(value);
    } else {
    }
  };

  const handleSubmit = () => {
    if (date != "" || (pNumber != "" && mcNumber != "")) {
      setIsError(false);
      dispatch(saveSearchInputData({ date, pNumber, mcNumber }));
      dispatch(saveSearchData({ date, pNumber, mcNumber }));
      history.push("/page/SearchResult");
    } else {
      setIsError(true);
    }
  };

  const handleResetForm = () => {
    setdate("");
    setpNumber("");
    setmcNumber("");
    setReset(true);
    setIsError(false);
  };

  return (
    <>
      <Header pageName={pageName} />
      <IonAlert
        isOpen={isError}
        onDidDismiss={() => ""}
        header={"Error"}
        message={"All fields are mandatory"}
        buttons={[
          {
            text: "close",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              setIsError(false);
            },
          },
        ]}
      />
      <div style={{ width: "90%", margin: "6rem 1rem" }}>
        <ServiceDate reset={reset} getDate={handleChangeDate} />
        <SearchUsing reset={reset} getData={handleInputData} />
        <Submit clickSubmit={handleSubmit} clickReset={handleResetForm} />
      </div>
    </>
  );
};

export default MemberSearch;
