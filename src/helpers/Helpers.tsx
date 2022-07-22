import { Config } from "./Types";

export async function TrySetConfig(setConfig: (cfg: Config) => void, key?: string, cfg?: Config): Promise<boolean>
{
  if (cfg === undefined)
  {
    const rep = await fetch(`https://fantasy.cat/api.php?key=${key}&software=constellation&cmd=getConfiguration`);
    const repContent = await rep.text();
    if (repContent === "fantasy.cat license key invalid.")
    {
      return false;
    }

    cfg = JSON.parse(repContent) as Config;
  }

  Object.entries(cfg).forEach(([key, value]) => {
    if (value === "")
      cfg![key] = "{}";
  });

  localStorage.setItem('currentSettings', JSON.stringify(cfg));
  setConfig(cfg);

  return true;
}

export async function SubmitConfig(content: string, software: string, key: string): Promise<boolean>
{
  const formData = new FormData();
  formData.append("value", content);
  const requestOptions = {
    method: 'POST',
    body: formData
  };

  console.log(content);

  const response = await fetch(`https://fantasy.cat/api.php?key=${key}&software=${software}&cmd=setConfiguration`, requestOptions)
  const responseText = await response.text();
  if (responseText == "fantasy.cat license key invalid." || responseText == "API Error.") {
    console.log(`Error: ${responseText}`)
    return false;
  }

  return true;
}

export function IsJsonString(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}