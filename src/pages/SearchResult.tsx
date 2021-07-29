import { IonCard, IonItem, IonLabel } from "@ionic/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { SearchCard } from "../components/SearchResult/SearchCard";

interface HeaderNanme {
  pageName: string;
}

const SearchResult: React.FC<HeaderNanme> = ({ pageName }) => {
  const iState: any = useSelector((state) => state);
  const [searchResult, setSearchResult] = useState<any>([]);
  const [aa, setaa] = useState(false);

  useEffect(() => {
    fetchDate();
  }, []);

  const DefaultFeatch = () => {
    axios
      .get("http://harman.webcodice.com/nonRoot/ionic/jsonData/MOCK_DATA.json")
      .then((res) => {
        let date = iState.searchForm.ServiceDate;
        let pNumber = iState.searchForm.policyNumber;
        let mcNumber = iState.searchForm.masterCardNumber;
        res.data.map((x: any) => {
          if (
            date == x.dataOfBirth ||
            pNumber == x.policyNumber ||
            mcNumber == x.memberCardNumber
          ) {
            let arr = searchResult;
            arr.push(x);
            setSearchResult(arr);
            setaa(true);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const APIFeatch = () => {
    axios
      .get(
        `https://rcvp3-api.azurewebsites.net/members?policyNumber=${iState.searchForm.policyNumber}`
      )
      .then((res) => {
        res.data.map((x: any) => {
          let arr = searchResult;
          arr.push(x);
          setSearchResult(arr);
          setaa(true);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDate = () => {
    if (iState.searchResultType == "Default") {
      DefaultFeatch();
    }
    if (iState.searchForm.policyNumber != "") {
      APIFeatch();
    }
  };
  return (
    <div>
      <Header pageName={pageName} />
      {searchResult.length != 0 ? (
        searchResult.map((x: any) => {
          return (
            <SearchCard
              key={x.id}
              fName={x.firstName}
              lName={x.lastName}
              dataOfBirth={x.dataOfBirth}
            />
          );
        })
      ) : (
        <IonCard>
          <IonItem className="ion-activated">
            <IonLabel>No Data Found</IonLabel>
          </IonItem>
        </IonCard>
      )}
    </div>
  );
};

export default SearchResult;
