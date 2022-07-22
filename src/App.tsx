import { useEffect, useState } from "react";
import { JsonEditor } from "./components/JsonEditor";
import { LicenseKey } from "./components/LicenseKey";
import { VerifyKey } from "./helpers/Helpers";
import { Config } from "./helpers/Types";

function App() {
  const [isValidLicense, setValidLicense] = useState<boolean>(false);

  const fetchData = async function () {
    const key = localStorage.getItem('key');
    if (key) {
        if(await VerifyKey(key))
          setValidLicense(true);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <div className={`${isValidLicense ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-400`}>
        <LicenseKey onValidateLicense={() => setValidLicense(true)}
        />
      </div>
      <div className={`${isValidLicense ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute top-0 transition-all ease-in-out duration-400 left-0 right-0`}>
        <JsonEditor />
      </div>
    </>
  );
}

export default App;
