import { useState, useEffect } from "react";
import _ from "lodash";
import DrinkList from "../components/DrinkList";
import {
  DDrink,
  Paging,
  DrinkData,
  DrinkRequest
} from "../interfaces/DrinkInterface";
import styles from "./Drink.module.css";

function Drink() {
  const [loading, setLoading] = useState<boolean>(true);
  const [request, setRequest] = useState<DrinkRequest>({
    start: 1,
    size: 8
  });
  const [drinkList, setDrinkList] = useState<DDrink[]>([]);

  const parseDrinkJson = (json: DrinkData): DDrink[] => {
    return json.drink.map((drink: DDrink) => ({
      sn: Number(drink.sn),
      title: drink.title,
      imgSrc: drink.imgSrc
    }));
  };
  const makeRequestParams = (request: DrinkRequest) => {
    return new URLSearchParams({
      start: request.start.toString(),
      size: request.size.toString()
    }).toString();
  };

  const getDrinkList = async () => {
    const requestParams = makeRequestParams(request);
    const json = await (
      await fetch(
        `https://homely-susi-hyeonqyu.koyeb.app/api/drink/list?${requestParams}`
      )
    ).json();
    const parsedJson = parseDrinkJson(json);
    setDrinkList([...drinkList, ...parsedJson]);
    setLoading(false);
  };

  useEffect(() => {
    getDrinkList();
    console.log(request.start);
  }, [request.start]);

  const requestUpdate = () => {
    setRequest((prevRequest) => ({
      start: prevRequest.start + request.size,
      size: request.size
    }));
  };

  const thottledrequestUpdate = _.throttle(requestUpdate, 2000);

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      thottledrequestUpdate();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div>loading..</div>
      ) : (
        <div className={styles.drink_list}>
          {drinkList &&
            drinkList.map((drink) => (
              <DrinkList
                key={drink.sn}
                sn={drink.sn}
                title={drink.title}
                imgSrc={drink.imgSrc}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Drink;
