import React from "react";
import { GetConfig, SubmitConfig } from "../helpers/Helpers";
import { useEffect, useState } from 'react';
import { Config } from "../helpers/Types";

type EditorFooterProps = {
  config: { [key: string]: string };
  setConfig: (items: { [key: string]: string }) => void;
  currentSelection: string;
  showSubmitButton: boolean
};

export function EditorFooter({ config, setConfig, currentSelection, showSubmitButton }: EditorFooterProps) {
  const [newSettingName, setNewSettingsName] = React.useState("")
  const [selectedSetting, setSelectedSetting] = React.useState(".")
  const [allSavedSettings, setAllSavedSettings] = React.useState<{[key: string]: string}>({})

  useEffect(() => {
    const currentSavedSettings = JSON.parse(localStorage.getItem(currentSelection) ?? "{}") as {[key: string]: string};
    setAllSavedSettings(currentSavedSettings);
  }, [])

  const refreshSettingsWithServer = async function() {
    const key = localStorage.getItem('key');
    if (key) {
      const cfg = await GetConfig(key);
      setConfig(cfg);
    }
    setSelectedSetting(".");
  }

  const createNewSetting = function() {
    const currentSavedSettings = JSON.parse(localStorage.getItem(currentSelection) ?? "{}") as {[key: string]: string};
    currentSavedSettings[newSettingName] = config[currentSelection];

    localStorage.setItem(currentSelection, JSON.stringify(currentSavedSettings));
    setAllSavedSettings(currentSavedSettings);
    setSelectedSetting(newSettingName);
    setNewSettingsName("");
  }

  const handleComboUpdate = (event: React.SyntheticEvent<HTMLSelectElement>) => {
    if (event.currentTarget.value !== ".")
    {
      console.log(event.currentTarget.value!);
      setSelectedSetting(event.currentTarget.value!);
      const settings = JSON.parse(localStorage.getItem(currentSelection) ?? "{}");
      config[currentSelection] = settings[event.currentTarget.value!];
      setConfig(JSON.parse(JSON.stringify(config).replace(/\\n\\t/g, '').replace(/\\n/g, '')) as Config)
    }
  };

  const removeSelectedSetting = () => {
    let newSettings = allSavedSettings;
    delete newSettings[selectedSetting]
    const settings = JSON.stringify(newSettings)
    localStorage.setItem(currentSelection, settings);
    setSelectedSetting(".");
    setAllSavedSettings(newSettings);
  };

  return (
    <>
      <div className="flex justify-around pt-2 gap-12 px-4 h-1/4">
        <input className="pl-1 h-6 text-sm bg-transparent rounded-md border border-brand-100 focus:border-brand-100 focus:ring-brand-100 focus:ring-1 focus:outline-none placeholder:text-zinc-600 w-3/4" placeholder="New config name..." value={newSettingName} onChange={(event) => setNewSettingsName(event.target.value)}></input>
        <button className="h-6 bg-brand-100 text-white text-sm font-bold rounded-md focus:outline-none w-1/4 -ml-10 disabled:opacity-30" onClick={createNewSetting} disabled={!newSettingName}>
          Save
        </button>
      </div>
      <div className="flex justify-around pt-4 gap-12 px-4 h-1/4">
        <select name='configs' className='h-6 pl-1 text-sm bg-back-100 rounded-md border border-brand-100 focus:border-brand-100 focus:ring-brand-100  focus:outline-none w-3/4' onChange={handleComboUpdate} value={selectedSetting}>
          <option value="." disabled selected>Saved configs...</option>
          {
          Object.entries(allSavedSettings).map(([key, value]) => {
            return (
              <option key={key} value={key}>{key}</option>
            );
          })}
        </select>
      <button className="h-6 bg-red-600 text-white text-sm font-bold rounded-md focus:outline-none w-1/4 -ml-10 disabled:opacity-30" onClick={removeSelectedSetting} disabled={selectedSetting==='.'}>
        Delete
      </button>
      </div>
      <div className="fixed align-center w-full bottom-0 h-10 flex gap-0">
        <button
          className="bg-brand-100 text-white text-sm font-bold h-10 focus:outline-none w-full border-r-2 border-back-100"
          onClick={refreshSettingsWithServer}
        >
          Refresh Config
        </button>
        <button
          className="bg-brand-100 text-white text-sm font-bold h-10 focus:outline-none w-full disabled:opacity-30"
          onClick={() => {
            let itemsToUpdate = JSON.parse(config[currentSelection]);
            SubmitConfig(JSON.stringify(itemsToUpdate), currentSelection, localStorage.getItem('key') ?? "")
          }}
          disabled={!showSubmitButton}
        >
          Apply Config
        </button>
      </div>
    </>
  );
}
