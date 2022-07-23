import Api_Base from "./base";
/**
 * 
 * 
 * 
 * @class DoatKolom_Api
 * this class is responsible for managing all the API endpoints with backend
 * 
 */ 
class DoatKolom_Api extends Api_Base {

    constructor() {
        super();
    }

    get_method( endpoint ) {
        const promise = new Promise( resolve => {
            this.call_api({
                endpoint,
                method: 'GET', 
            }, response => {
                resolve( JSON.parse(response) )
            })
        })

        return promise
    }

    setting_fields() {
        return this.get_method('setting_fields')
    }

}

const API = new DoatKolom_Api();
export default API;