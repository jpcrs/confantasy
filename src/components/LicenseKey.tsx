import { useState } from "react";
import { TrySetConfig } from "../helpers/Helpers";
import { Config } from "../helpers/Types";

interface LicenseKeyProps {
  onValidateLicense: () => void;
  setConfig: (cfg: Config) => void;
}

export function LicenseKey({ onValidateLicense, setConfig }: LicenseKeyProps) {
  const [licenseKey, setLicenseKey] = useState<string>("");

  const handleValueChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLicenseKey(e.target.value);
    const regex = /^([A-Z0-9]{4})-([A-Z0-9]{4})-([A-Z0-9]{4})-([A-Z0-9]{4})$/;
    if (regex.test(e.target.value)) {
      if (!await TrySetConfig(setConfig, e.target.value))
      {
        setLicenseKey("");
        return;
      }

      onValidateLicense();
      localStorage.setItem('key', e.target.value);
    }
  };

  return (
    <div className="flex items-center gap-4 justify-center h-screen transition-all">
      <input className="text-sm bg-transparent rounded-md border border-brand-100 focus:border-brand-100 focus:ring-brand-100 focus:ring-1 focus:outline-none pl-1" autoFocus value={licenseKey} onChange={handleValueChange}></input>
    </div>
  )
}