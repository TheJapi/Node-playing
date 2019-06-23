const axios = require('axios')

class req{
    indicators(){
        axios.get('https://mindicador.cl/api')
        .then((res) => {
            if (res.status == 200){
                console.log(res.data.uf.valor);
            }
            
        })
        .catch(err => console.log(err));
    }
}

module.exports = new req();

