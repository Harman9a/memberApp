import { IonAlert } from "@ionic/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { saveSearchInputData, saveSearchData } from "../Redux/Actions";
import Header from "../components/Header";
import { SearchUsingSingle } from "../components/MemberSearch/SearchUsing";
import ServiceDate from "../components/MemberSearch/ServiceDate";
import Submit from "../components/MemberSearch/Submit";

interface HeaderNanme {
  pageName: string;
}

interface InputData {
  id: String;
  value: String;
}

const MemberSearchApi: React.FC<HeaderNanme> = ({ pageName }) => {
  const [pNumber, setpNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [reset, setReset] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputData = (data: any) => {
    setReset(false);
    let { id, value } = data;
    if (id == "pn") {
      setpNumber(value);
    }
  };

  const handleSubmit = () => {
    if (pNumber != "") {
      setIsError(false);
      dispatch(
        saveSearchInputData({
          date: "",
          pNumber,
          mcNumber: "",
          searchType: "API",
        })
      );
      dispatch(
        saveSearchData({
          date: "",
          pNumber,
          mcNumber: "",
          searchType: "API",
        })
      );
      history.push("/page/SearchResult");
    } else {
      setIsError(true);
    }
  };

  const handleResetForm = () => {
    setpNumber("");
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
        <SearchUsingSingle reset={reset} getData={handleInputData} />
        <Submit clickSubmit={handleSubmit} clickReset={handleResetForm} />
      </div>
    </>
  );
};

export default MemberSearchApi;
