import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

import PrimeVue from 'primevue/config';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import Button from 'primevue/button';
import ButtonGroup from 'primevue/buttongroup';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import ConfirmationService from 'primevue/confirmationservice';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DialogService from 'primevue/dialogservice';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import FileUpload from 'primevue/fileupload';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import ProgressBar from 'primevue/progressbar';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import SelectButton from 'primevue/selectbutton';
import ScrollTop from 'primevue/scrolltop';
import StyleClass from 'primevue/styleclass';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';

import BlockViewer from '@/components/BlockViewer.vue';

import 'katex/dist/katex.min.css';

import '@/assets/styles.scss';

const app = createApp(App);

app.provide('http', axios);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(DialogService);
app.use(ConfirmationService);

app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);

app.component('BlockViewer', BlockViewer);


app.component('Badge', Badge);
app.component('Button', Button);
app.component('ButtonGroup', ButtonGroup);
app.component('Card', Card);
app.component('Checkbox', Checkbox)
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('Divider', Divider);
app.component('Dropdown', Dropdown);
app.component('FileUpload', FileUpload);
app.component('InputText', InputText);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('Message', Message);
app.component('Paginator', Paginator);
app.component('Panel', Panel);
app.component('PanelMenu', PanelMenu);
app.component('Password', Password);
app.component('ProgressBar', ProgressBar)
app.component('RadioButton', RadioButton);
app.component('SelectButton', SelectButton);
app.component('ScrollTop', ScrollTop);
app.component('Textarea', Textarea);
app.component('Toast', Toast);
app.component('Toolbar', Toolbar);
app.component('ToggleButton', ToggleButton);


app.mount('#app');
