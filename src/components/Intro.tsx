import { useState, useEffect } from "react";

function Intro() {
  const [introId, setIntroId] = useState<string>();
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
    <div style={{ width: "365px", height: "205px" }}>
      {introId ? (
        <iframe
          title="Intro"
          width="100%"
          height="100%"
          frameBorder="0"
          src={`https://www.youtube.com/embed/${introId}`}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Intro;
