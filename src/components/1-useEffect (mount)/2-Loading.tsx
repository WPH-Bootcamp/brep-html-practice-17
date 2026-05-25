import { useState, useEffect } from "react";

const Loading = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <div>{loading ? <p>Loadingg....</p> : <h2>Welcome Home</h2>}</div>;
};

export default Loading;
