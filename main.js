import './style.css'

const app=document.getElementById(`app`);

import {header} from './layouts/header'
import {main} from './layouts/main'
import {footer} from './layouts/footer'
import {modal} from './layouts/modal'
import {SideFilter} from './layouts/SideFilter'

app.append(SideFilter());
app.append(header());
app.append(main());
app.append(footer());
app.append(modal());