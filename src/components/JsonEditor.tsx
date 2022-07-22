import { useRef, useState } from "react";
import { editor } from 'monaco-editor';
import Editor from "@monaco-editor/react";
import { EditorHeader } from "./EditorHeader";
import { EditorFooter } from "./EditorFooter";
import { IsJsonString } from "../helpers/Helpers";
import { Config } from "../helpers/Types";

interface JsonEditorProps {
  config: Config,
  setConfig: (cfg: Config) => void;
}

export function JsonEditor({config, setConfig}: JsonEditorProps) {
  const [currentSelection, setCurrentSelection] = useState<string>("constellation");
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const [showSubmitButton, setShowSubmitButton] = useState(true);

  function handleEditorDidMount(editor: editor.IStandaloneCodeEditor, monaco: any) {
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
    console.log("calling");
    if (!IsJsonString(newValue ?? "")) {
      config[currentSelection] = newValue!;
      setConfig(config);
      console.log("invalid json");
      setShowSubmitButton(false);
      return;
    }

    config[currentSelection] = newValue!;
    setConfig(JSON.parse(JSON.stringify(config).replace(/\\n\\t/g, '').replace(/\\n/g, '')) as Config);
    console.log("valid json");
    setShowSubmitButton(true);
  }
}