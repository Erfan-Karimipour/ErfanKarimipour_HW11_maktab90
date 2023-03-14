import './style.css'

const app=document.getElementById(`app`);
const saveBtn=document.querySelector(`.Save`);

import {header} from './layouts/header'
import {main} from './layouts/main'
import {footer} from './layouts/footer'
import {modal} from './layouts/modal'
import {SideFilter} from './layouts/SideFilter'
import {openModal} from './Components/openModal'
import {closeModal} from './Components/closeModal'
import {addNewTr} from './Components/addNewTr'

app.append(SideFilter());
app.append(header());
app.append(main());
app.append(footer());
app.append(modal());

const addBtn=document.querySelector(`.Add`);
const cancelBtn=document.querySelector(`.Cancel`);
const modalBG=document.querySelector(`.ModalBg`);

addBtn.addEventListener(`click`,openModal);
cancelBtn.addEventListener(`click`,closeModal);
modalBG.addEventListener(`click`,closeModal);