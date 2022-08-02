import axios from "axios";

const location = () => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
    .then((response) => { console.log(response) })
    .catch((error) => { console.log(error) });
}

export { location };