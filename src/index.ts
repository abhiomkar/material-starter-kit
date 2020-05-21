import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import './index.scss';

MDCRipple.attachTo(document.querySelector<HTMLElement>('.custom-button'));
MDCTextField.attachTo(document.querySelector<HTMLElement>('.custom-text-field-1'));
MDCTextField.attachTo(document.querySelector<HTMLElement>('.custom-text-field-2'));
