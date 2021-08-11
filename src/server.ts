import {appCore} from './app'
import envVars from './config/env-vars';
const {  port } = envVars;
const app = appCore()
app.listen(port, ()=> {
    console.log(`listening ${port}`);
    
})