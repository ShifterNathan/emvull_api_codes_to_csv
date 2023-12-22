import axios from "axios";
const fs = require('fs')
// import { instance } from '../api/base.api';

export class DataService {

    async fetchData(getConstDataSet: () => any)/*: Promise<AxiosResponse | void>*/ {

        const constDataSet = getConstDataSet();

        const body = {
            jsonrpc: "2.0",
            method: "call",
            params: {
                db_name: constDataSet.db_name,
                user: constDataSet.user,
                password: constDataSet.password,
                LanguageCode: constDataSet.LanguageCode
            }
        }

        const apiUrl = 'https://api.stanleystella.com/webrequest/products/get_json'
        
        const apiResponse = await axios.post(apiUrl, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.data).then(data => (data))
        .catch(error => console.log({ error }, 'error in the catch'));

        const jsonResponse = JSON.stringify(apiResponse, null, 2);

        fs.writeFile('response.json', jsonResponse, (error) => {
            if (error) throw new Error(error)
        });

        return apiResponse;

    } 

    
}

export default new DataService();
