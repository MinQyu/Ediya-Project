import { useState, useEffect } from "react";
import _ from "lodash";
import DrinkItem from "../components/DrinkItem";
import {
  DrinkType,
  DrinkResponse,
  DrinkRequest
} from "../interfaces/DrinkInterface";
import styles from "./Drink.module.css";

function Drink() {
  const [loading, setLoading] = useState<boolean>(false);
  const [request, setRequest] = useState<DrinkRequest>({
    start: 1
  });
  const REQUEST_SIZE = 8;
  const [drinkList, setDrinkList] = useState<DrinkType[]>([]);

  const parseDrinkJson = (json: DrinkResponse): DrinkType[] => {
    return json.drink.map((drink: DrinkType) => ({
      sn: Number(drink.sn),
      title: drink.title,
      imgSrc: drink.imgSrc
    }));
  };

  const makeRequestParams = (request: DrinkRequest) => {
    return new URLSearchParams({
      start: request.start.toString(),
      size: REQUEST_SIZE.toString()
    }).toString();
  };

  const getDrinkList = async () => {
    setLoading(true);
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
  }, [request.start]);

  const requestUpdate = () => {
    setRequest((prevRequest) => ({
      start: prevRequest.start + REQUEST_SIZE
    }));
  };

  const debouncedRequestUpdate = _.debounce(requestUpdate, 1000);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      debouncedRequestUpdate();
    }
  };

  useEffect(() => {
    if (!loading) window.addEventListener("scroll", handleScroll);
    else
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, [loading]);

  return (
    <div className={styles.container}>
      <div className={styles.drink_list}>
        {drinkList &&
          drinkList.map((drink) => (
            <DrinkItem
              key={drink.sn}
              sn={drink.sn}
              title={drink.title}
              imgSrc={drink.imgSrc}
            />
          ))}
      </div>
    </div>
  );
}

export default Drink;
