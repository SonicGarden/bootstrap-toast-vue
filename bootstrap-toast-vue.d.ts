import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const BootstrapToastVue: { install: InstallFunction };
export default BootstrapToastVue;

export const BootstrapToastVueSample: VueConstructor<Vue>;
