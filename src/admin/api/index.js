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

    post_method( endpoint, data, custom = false  ) {
        const form = new FormData();
        
        Object.entries(data).map( ([name, value]) =>{
            form.append(name, value || '')
        })

        const promise = new Promise( resolve => {
            this.call_api({
                endpoint,
                method: 'POST',
                body: form,
                custom
            }, response => {
                resolve( JSON.parse(response) )
            })
        })

        return promise
    }

    setting_fields() {
        return this.get_method('setting_fields')
    }
    
    galleries() {
        return this.get_method('galleries')
    }

    add_gallery( data ) {
        return this.post_method( 'add_gallery', data )
    }

    delete_gallery( data ) {
        return this.post_method( 'delete_gallery', data )
    }

    update_gallery( data ) {
        return this.post_method( 'update_gallery', data )
    }

    save_settings( data ) {
        return this.post_method( 'save_settings', data )
    }

}

const API = new DoatKolom_Api();
export default API;