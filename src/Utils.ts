import axios from "axios";
import { useEffect, useState } from "react";

const location = () => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
    .then((response) => { console.log(response) })
    .catch((error) => { console.log(error) });
}

const useLocalStorage = (name: string, defaultValue: any) => {

    const [currentValue, setCurrentValue] = useState(JSON.parse(localStorage.getItem(name)!) ?? defaultValue);

    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(currentValue));
    }, [currentValue]);

    return [currentValue, setCurrentValue];
}

export { location, useLocalStorage };