import { useRef, useState } from "react";
import { editor } from 'monaco-editor';
import Editor from "@monaco-editor/react";
import { EditorHeader } from "./EditorHeader";
import { EditorFooter } from "./EditorFooter";

const object = {
  code: "d9d4f495e875a2e075a1a4a6e1b9770f",
  constellation:
    '{"console_mode":0.0,"constant_aim_bone":"6","constant_aim_ff":0.0,"constant_aim_fov":"5","constant_aim_pistols":0.0,"constant_aim_snipers":0.0,"corsair":0.0,"crosshair_enabled":1.0,"directory":"C:\\\\Users\\\\joaop\\\\Downloads\\\\fantasy\\\\","esp":1.0,"esp_medic":1.0,"esp_sonar":0.0,"esp_sound":1.0,"esp_sound_fov":"5.0","esp_sound_surround":0.0,"esp_spy":1.0,"esp_spy_distance":"10000.0","forum_uid":"5516.000000","forum_unread_alerts":"1.000000","forum_unread_conversations":"0.000000","forum_username":"kyorex","humanizer":1.0,"humanizer_anxiety":0.0,"humanizer_anxiety_active":0.0,"humanizer_anxiety_strength":"3","humanizer_bone_priority":1.0,"humanizer_friendly_fire":0.0,"humanizer_jump_check":0.0,"humanizer_key":"1","humanizer_key2":"0","humanizer_mouse_threshold":"20","humanizer_tf2_autobackstab":1.0,"humanizer_tf2_autobackstab_key":"0","humanizer_tf2_headshot_mode":1.0,"humanizer_triggerbot":1.0,"humanizer_triggerbot_key":"20","humanizer_triggerbot_sensitivity":"0.02","humanizer_triggerbot_sleep":"0","humanizer_weapon_0_bone":"-1","humanizer_weapon_10_bone":"-1","humanizer_weapon_11_bone":"-1","humanizer_weapon_12_bone":"-1","humanizer_weapon_13_bone":"-1","humanizer_weapon_14_bone":"-1","humanizer_weapon_15_bone":"-1","humanizer_weapon_16_bone":"-1","humanizer_weapon_17_bone":"-1","humanizer_weapon_18_bone":"-1","humanizer_weapon_19_bone":"-1","humanizer_weapon_1_bone":"-1","humanizer_weapon_20_bone":"-1","humanizer_weapon_21_bone":"-1","humanizer_weapon_22_bone":"-1","humanizer_weapon_23_bone":"-1","humanizer_weapon_24_bone":"-1","humanizer_weapon_25_bone":"-1","humanizer_weapon_26_bone":"-1","humanizer_weapon_27_bone":"-1","humanizer_weapon_28_bone":"-1","humanizer_weapon_29_bone":"-1","humanizer_weapon_2_bone":"-1","humanizer_weapon_30_bone":"-1","humanizer_weapon_31_bone":"-1","humanizer_weapon_32_bone":"-1","humanizer_weapon_33_bone":"-1","humanizer_weapon_34_bone":"-1","humanizer_weapon_35_bone":"-1","humanizer_weapon_36_bone":"-1","humanizer_weapon_37_bone":"-1","humanizer_weapon_38_bone":"-1","humanizer_weapon_39_bone":"-1","humanizer_weapon_3_bone":"-1","humanizer_weapon_40_bone":"-1","humanizer_weapon_41_bone":"-1","humanizer_weapon_42_bone":"-1","humanizer_weapon_43_bone":"-1","humanizer_weapon_44_bone":"-1","humanizer_weapon_45_bone":"-1","humanizer_weapon_46_bone":"-1","humanizer_weapon_47_bone":"-1","humanizer_weapon_48_bone":"-1","humanizer_weapon_49_bone":"-1","humanizer_weapon_4_bone":"-1","humanizer_weapon_50_bone":"-1","humanizer_weapon_51_bone":"-1","humanizer_weapon_52_bone":"-1","humanizer_weapon_53_bone":"-1","humanizer_weapon_54_bone":"-1","humanizer_weapon_55_bone":"-1","humanizer_weapon_56_bone":"-1","humanizer_weapon_57_bone":"-1","humanizer_weapon_58_bone":"-1","humanizer_weapon_59_bone":"-1","humanizer_weapon_5_bone":"-1","humanizer_weapon_60_bone":"-1","humanizer_weapon_61_bone":"-1","humanizer_weapon_62_bone":"-1","humanizer_weapon_63_bone":"-1","humanizer_weapon_6_bone":"-1","humanizer_weapon_7_bone":"-1","humanizer_weapon_8_bone":"-1","humanizer_weapon_9_bone":"-1","humanizer_x":4.0,"humanizer_y":0.0,"logitech":0.0,"nadehelper_assist":0.0,"nadehelper_distance":"350.000000","nadehelper_enabled":1.0,"nadehelper_nadeInHand":0.0,"pure_mode_allow_modifications":0.0,"pure_mode_always_update":1.0,"pure_mode_debug":1.0,"pure_mode_hwid_spoofer":"on","pure_mode_silence":0.0,"settings_menu_loading_screen":"1.000000","settings_menu_search":"","settings_menu_silence":"0.000000","settings_menu_theme":"0.000000","settings_menu_toggle":"45.000000","steam_api_key":"","triggerbot":1.0}',
  astrogalaxy: "",
  parallatic: "",
};

var cfg: { [key: string]: string; } = {
  ["constellation"]:
    '{"console_mode":0.0,"constant_aim_bone":"6","constant_aim_ff":0.0,"constant_aim_fov":"5","constant_aim_pistols":0.0,"constant_aim_snipers":0.0,"corsair":0.0,"crosshair_enabled":1.0,"directory":"C:\\\\Users\\\\joaop\\\\Downloads\\\\fantasy\","esp":1.0,"esp_medic":1.0,"esp_sonar":0.0,"esp_sound":1.0,"esp_sound_fov":"5.0","esp_sound_surround":0.0,"esp_spy":1.0,"esp_spy_distance":"10000.0","forum_uid":"5516.000000","forum_unread_alerts":"1.000000","forum_unread_conversations":"0.000000","forum_username":"kyorex","humanizer":1.0,"humanizer_anxiety":0.0,"humanizer_anxiety_active":0.0,"humanizer_anxiety_strength":"3","humanizer_bone_priority":1.0,"humanizer_friendly_fire":0.0,"humanizer_jump_check":0.0,"humanizer_key":"1","humanizer_key2":"0","humanizer_mouse_threshold":"20","humanizer_tf2_autobackstab":1.0,"humanizer_tf2_autobackstab_key":"0","humanizer_tf2_headshot_mode":1.0,"humanizer_triggerbot":1.0,"humanizer_triggerbot_key":"20","humanizer_triggerbot_sensitivity":"0.02","humanizer_triggerbot_sleep":"0","humanizer_weapon_0_bone":"-1","humanizer_weapon_10_bone":"-1","humanizer_weapon_11_bone":"-1","humanizer_weapon_12_bone":"-1","humanizer_weapon_13_bone":"-1","humanizer_weapon_14_bone":"-1","humanizer_weapon_15_bone":"-1","humanizer_weapon_16_bone":"-1","humanizer_weapon_17_bone":"-1","humanizer_weapon_18_bone":"-1","humanizer_weapon_19_bone":"-1","humanizer_weapon_1_bone":"-1","humanizer_weapon_20_bone":"-1","humanizer_weapon_21_bone":"-1","humanizer_weapon_22_bone":"-1","humanizer_weapon_23_bone":"-1","humanizer_weapon_24_bone":"-1","humanizer_weapon_25_bone":"-1","humanizer_weapon_26_bone":"-1","humanizer_weapon_27_bone":"-1","humanizer_weapon_28_bone":"-1","humanizer_weapon_29_bone":"-1","humanizer_weapon_2_bone":"-1","humanizer_weapon_30_bone":"-1","humanizer_weapon_31_bone":"-1","humanizer_weapon_32_bone":"-1","humanizer_weapon_33_bone":"-1","humanizer_weapon_34_bone":"-1","humanizer_weapon_35_bone":"-1","humanizer_weapon_36_bone":"-1","humanizer_weapon_37_bone":"-1","humanizer_weapon_38_bone":"-1","humanizer_weapon_39_bone":"-1","humanizer_weapon_3_bone":"-1","humanizer_weapon_40_bone":"-1","humanizer_weapon_41_bone":"-1","humanizer_weapon_42_bone":"-1","humanizer_weapon_43_bone":"-1","humanizer_weapon_44_bone":"-1","humanizer_weapon_45_bone":"-1","humanizer_weapon_46_bone":"-1","humanizer_weapon_47_bone":"-1","humanizer_weapon_48_bone":"-1","humanizer_weapon_49_bone":"-1","humanizer_weapon_4_bone":"-1","humanizer_weapon_50_bone":"-1","humanizer_weapon_51_bone":"-1","humanizer_weapon_52_bone":"-1","humanizer_weapon_53_bone":"-1","humanizer_weapon_54_bone":"-1","humanizer_weapon_55_bone":"-1","humanizer_weapon_56_bone":"-1","humanizer_weapon_57_bone":"-1","humanizer_weapon_58_bone":"-1","humanizer_weapon_59_bone":"-1","humanizer_weapon_5_bone":"-1","humanizer_weapon_60_bone":"-1","humanizer_weapon_61_bone":"-1","humanizer_weapon_62_bone":"-1","humanizer_weapon_63_bone":"-1","humanizer_weapon_6_bone":"-1","humanizer_weapon_7_bone":"-1","humanizer_weapon_8_bone":"-1","humanizer_weapon_9_bone":"-1","humanizer_x":4.0,"humanizer_y":0.0,"logitech":0.0,"nadehelper_assist":0.0,"nadehelper_distance":"350.000000","nadehelper_enabled":1.0,"nadehelper_nadeInHand":0.0,"pure_mode_allow_modifications":0.0,"pure_mode_always_update":1.0,"pure_mode_debug":1.0,"pure_mode_hwid_spoofer":"on","pure_mode_silence":0.0,"settings_menu_loading_screen":"1.000000","settings_menu_search":"","settings_menu_silence":"0.000000","settings_menu_theme":"0.000000","settings_menu_toggle":"45.000000","steam_api_key":"","triggerbot":1.0}',
  ["astrogalaxy"]: "",
  ["parallatic"]: "",
  ["astrogalaxy2"]: "",
};


export function JsonEditor() {
  const monacoOptions: editor.IStandaloneEditorConstructionOptions & editor.IEditorScrollbarOptions = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    minimap: { enabled: false },
  }

  const [items, setItems] = useState<{ [key: string]: string; }>(cfg);
  const [currentSelection, setCurrentSelection] = useState<string>("constellation");

  return (
    <div className="w-full h-full flex flex-col gap-0 justify-evenly">
      <EditorHeader currentSelection={currentSelection} setCurrentSelection={setCurrentSelection} />
      <div className="w-full h-1/2">
        <Editor
          height="60vh"
          defaultLanguage="json"
          value={JSON.stringify(JSON.parse(items[currentSelection] == "" ? "{}" : items[currentSelection]), null, '\t')}
          options={monacoOptions}
          theme="vs-dark"
        />
      </div>
      <EditorFooter items={items} setItems={setItems}/>
    </div>
  );
}