import { useEffect, useRef, useState } from "react";
import { editor } from 'monaco-editor';
import Editor from "@monaco-editor/react";
import { EditorHeader } from "./EditorHeader";
import { EditorFooter } from "./EditorFooter";
import { GetConfig, IsJsonString } from "../helpers/Helpers";
import { Config } from "../helpers/Types";

export function JsonEditor() {
  const [config, setConfig] = useState<Config>({["constellation"]: "{}"});
  const [currentSelection, setCurrentSelection] = useState<string>("constellation");
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const [showSubmitButton, setShowSubmitButton] = useState(true);

  const updateConfig = async function() {
    const cfg = await GetConfig(localStorage.getItem("key") ?? "");
    setConfig(cfg);
  }

  useEffect(() => {
    updateConfig();
  }, []);

  function handleEditorDidMount(editor: editor.IStandaloneCodeEditor, monaco: any) {
    updateConfig()
    editorRef.current = editor; 
  }

  const monacoOptions: editor.IStandaloneEditorConstructionOptions & editor.IEditorScrollbarOptions = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    minimap: { enabled: false },
  }

  return (
    <div className="w-full h-full flex flex-col gap-0 justify-evenly">
      <EditorHeader currentSelection={currentSelection} setCurrentSelection={setCurrentSelection} config={config} />
      <div className="w-full h-1/2">
        <Editor
          height="60vh"
          defaultLanguage="json"
          value={IsJsonString(config[currentSelection]) ? JSON.stringify(JSON.parse(config[currentSelection]), null, '\t') : config[currentSelection]}
          options={monacoOptions}
          theme="vs-dark"
          onChange={(newValue) => {
            updateJsonEditor(newValue);
          }}
          onMount={handleEditorDidMount}
        />
      </div>
      <EditorFooter config={config} setConfig={setConfig} currentSelection={currentSelection} showSubmitButton={showSubmitButton}/>
    </div>
  );

  function updateJsonEditor(newValue: string | undefined) {
    if (!IsJsonString(newValue ?? "")) {
      config[currentSelection] = newValue!;
      setConfig(config);
      setShowSubmitButton(false);
      return;
    }

    config[currentSelection] = newValue!;
    setConfig(JSON.parse(JSON.stringify(config).replace(/\\n\\t/g, '').replace(/\\n/g, '').replace(/\\r/g, '')) as Config);
    setShowSubmitButton(true);
  }
}