import { useState } from "react";
import { JsonEditor } from "./components/JsonEditor";
import { LicenseKey } from "./components/LicenseKey";

function App() {
  const [isValidLicense, setValidLicense] = useState<boolean>(false);
  const [configData, setConfigData] = useState<{}>({});
  return (
    <>
      <div className={`${isValidLicense ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-400`}>
        <LicenseKey
          onSetConfig={(cfg: {}) => setConfigData(cfg)}
          onValidateLicense={() => setValidLicense(true)}
        />
      </div>
      <div className={`${isValidLicense ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute top-0 transition-all ease-in-out duration-400 left-0 right-0`}>
        <JsonEditor />
      </div>
    </>
  );
}

export default App;
