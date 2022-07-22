import { useEffect, useState } from "react";
import { JsonEditor } from "./components/JsonEditor";
import { LicenseKey } from "./components/LicenseKey";
import { TrySetConfig } from "./helpers/Helpers";
import { Config } from "./helpers/Types";

function App() {
  const [isValidLicense, setValidLicense] = useState<boolean>(false);
  const [config, setConfig] = useState<Config>({["constellation"]: "{}"});

  useEffect(() => {
    const key = localStorage.getItem('key');
    if (key) {
      const fetchData = async () => {
        if (await TrySetConfig(setConfig, key)) {
          setValidLicense(true);
        }
      }
      fetchData();
    }
  }, []);

  return (
    <>
      <div className={`${isValidLicense ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-400`}>
        <LicenseKey
          setConfig={(cfg: Config) => setConfig(cfg)}
          onValidateLicense={() => setValidLicense(true)}
        />
      </div>
      <div className={`${isValidLicense ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute top-0 transition-all ease-in-out duration-400 left-0 right-0`}>
        <JsonEditor config={config} setConfig={(cfg: Config) => setConfig(cfg)}/>
      </div>
    </>
  );
}

export default App;
