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
    <div>
      <iframe
        title="Intro"
        width="365px"
        height="205px"
        src={`https://www.youtube.com/embed/${introId}`}
      ></iframe>
    </div>
  );
}

export default Intro;
