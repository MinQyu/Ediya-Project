import { useState, useEffect } from "react";

function Intro() {
  const [introId, setIntroId] = useState<string>("");
  const getIntroId = async () => {
    const url = await (
      await fetch(`https://homely-susi-hyeonqyu.koyeb.app/api/intro`)
    ).text();
    setIntroId(url.slice(url.lastIndexOf("/") + 1));
  };
  useEffect(() => {
    getIntroId();
  }, []);
  return (
    <iframe
      title="Intro"
      width="365px"
      height="205px"
      frameBorder="0"
      src={`https://www.youtube.com/embed/${introId}`}
    ></iframe>
  );
}

export default Intro;
