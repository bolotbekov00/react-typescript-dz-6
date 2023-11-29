import React, {useEffect, useState} from 'react';
import axios from 'axios'


interface MyData {
    name: string;
    gender: string | null
    probability: number | null
    count: number | null
}

const SRC: string = 'https://api.genderize.io?name=peter'

function ApiSrc() {

    const [apiData, setApiData] = useState<MyData | null>(null)
    const [inputName, setInputName] = useState<string | null>('')
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await
                    axios.get(SRC, {params: {name: inputName}})
                setApiData(response.data as MyData)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [inputName]);


    return (
        <div>
            <input
                type="text"
                onChange={(event) => setInputName(event.target.value)}
                placeholder="Укажите имя"
            />
            {loading ? (
                <p>Загрузка...</p>
            ) : apiData ? (
                <div>
                    <h2>Гендерные данные для {apiData.name}</h2>
                    <p>Пол: {apiData.gender}</p>
                    <p>Вероятность: {apiData.probability}</p>
                    <p>Считать: {apiData.count}</p>
                </div>
            ) : null}
        </div>
    );
}

export default ApiSrc;