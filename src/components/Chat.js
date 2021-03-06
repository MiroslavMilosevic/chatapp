import React, { useEffect, useState, } from 'react';
import { BrowserRouter as Redirect, useParams } from 'react-router-dom'
import { getUserMessages, postMessage, postRedZaUpis, getRedZaUpis } from '../services/axios'
import { v1 as uuid } from 'uuid'
import { usersArrayImported, } from '../u&p/users'
import { isMessageCorrect } from '../functions/textValidation'
import LogOut from './LogOut';

export default function Chat({ setUserApp, }) {

    const [id] = useState(useParams().id);
    const [user] = useState({ id: localStorage.getItem('id'), username: localStorage.getItem('username'), password: localStorage.getItem('password'), isLoged: localStorage.getItem('isLoged') });
    const [nizPoruka, setNizPoruka] = useState([]);
    const [porukePrijatelja, setPorukePrijatelja] = useState([]);
    const [zajednickePoruke, setZajednickePoruke] = useState([]);
    const [inputPoruka, setInputPoruka] = useState('');
    const [imePrijatelja, setImePrijatelja] = useState('');

    window.onbeforeunload = () => {
        postRedZaUpis(user.id, Number(localStorage.getItem('redZaUpis')));
    }
    useEffect(() => {
          setTimeout(() => {
            let elem = document.getElementById('scrollDiv');
            elem.scrollTop = elem.scrollHeight;
            console.log('scrool');
          }, 2000);

        setImePrijatelja(usersArrayImported.find(el => el.id === Number(id)).username)

        getRedZaUpis(user.id).then(res => {
            console.log(res.data);
            localStorage.setItem('redZaUpis', res.data);
        })
        getUserMessages(Number(id)).then(res => {
            let tmp = res.data.map(el => {
                return {
                    id: el.split(';')[0], idPoslao: el.split(';')[1],
                    poruka: el.split(';')[2], date: Date.parse(el.split(';')[3]), stringDate: el.split(';')[3]
                }
            })
            setPorukePrijatelja(tmp);
        })
        getUserMessages(Number(user.id)).then(res => {
            let tmp = res.data.map(el => {
                return {
                    id: el.split(';')[0], idPoslao: el.split(';')[1],
                    poruka: el.split(';')[2], date: Date.parse(el.split(';')[3]), stringDate: el.split(';')[3]
                }
            })
            console.log(tmp);
            setNizPoruka(tmp);
        })
        let interval1 = setInterval(() => {
            getUserMessages(Number(id)).then(res => {
                let tmp = res.data.map(el => {
                    return {
                        id: el.split(';')[0], idPoslao: el.split(';')[1],
                        poruka: el.split(';')[2], date: Date.parse(el.split(';')[3]), stringDate: el.split(';')[3]
                    }
                })
                setPorukePrijatelja(tmp);
            })
        }, 2000);

        return function () {
           // clearInterval(windowInterval)
            clearInterval(interval1);
            console.log('odjavaaaaaaaaaa' + localStorage.getItem('redZaUpis'));
            postRedZaUpis(user.id, Number(localStorage.getItem('redZaUpis')))
        }
    }, [])

    useEffect(() => {
        let tmp = [];
        if (user.id !== id) {
            tmp = [...porukePrijatelja.filter(el => el.idPoslao === user.id), ...nizPoruka.filter(el => el.idPoslao === id)];
        } else {
            tmp = [...nizPoruka.filter(el => el.idPoslao === user.id)];
        }
        setZajednickePoruke(tmp);
        console.log(zajednickePoruke);
  
        // if(nizPoruka.length>=11){
        //    let tmp=[...nizPoruka];
        //    tmp.shift()
        //    setNizPoruka(tmp)
        //    }
    }, [porukePrijatelja, nizPoruka])

    useEffect(() => {
        
        let elem = document.getElementById('scrollDiv');
        elem.scrollTop = elem.scrollHeight;
        console.log('scrool');
   
    }, [nizPoruka])

    const sendMessage = () => {

        if (isMessageCorrect(inputPoruka)[0]&&Number(localStorage.getItem('redZaUpis'))<150) {
            //  localStorage.setItem('redZaUpis' , Number(localStorage.getItem('redZaUpis'))+1)
            postMessage(inputPoruka, user.id, id, localStorage.getItem('redZaUpis'));
            localStorage.setItem('redZaUpis', Number(localStorage.getItem('redZaUpis')) + 1)
            let tmp = [...nizPoruka];
            tmp.push({ id: user.id, idPoslao: id, poruka: inputPoruka, date: Date.parse(new Date().toString()), stringDate: (new Date).toString() });
            // if(Number(localStorage.getItem('redZaUpis'))>=10){ 
            //     localStorage.setItem('redZaUpis','0')


            //    }
            //    if(nizPoruka.length>=10){
            //     tmp.shift();
            //    }

            //    console.log(nizPoruka.length + 'ovo je duzina niza poruka');
            console.log(localStorage.getItem('redZaUpis') + 'ovo red za upis');

            setNizPoruka(tmp);
            setInputPoruka('');

            // let elem = document.getElementById('scrollDiv');
            // elem.scrollTop = elem.scrollHeight;
            // console.log('scrool');

        } else {
            alert(isMessageCorrect(inputPoruka)[1])
        }

    }

    return (
        <div className='bigChatWraper'>

            <button className='noneDisplay' onClick={() => {

                console.log(localStorage.getItem('redZaUpis'));
            }}>DUGME</button>
            <LogOut setUser={setUserApp} />
            <h1>{'Chat sa korisnikom: '}</h1>
            <h2>{imePrijatelja}</h2>
            <input className='porukaInput' type='text' value={inputPoruka} placeholder='poruka...' onChange={(e) => { setInputPoruka(e.target.value) }} onKeyPress={(event) => {
                if (event.key === 'Enter') {
                    sendMessage()
                    //     if(isMessageCorrect(inputPoruka)[0]){
                    //  //  localStorage.setItem('redZaUpis' , Number(localStorage.getItem('redZaUpis'))+1)
                    //    postMessage(inputPoruka, user.id, id, localStorage.getItem('redZaUpis'));
                    //    localStorage.setItem('redZaUpis' , Number(localStorage.getItem('redZaUpis'))+1)
                    //    let tmp=[...nizPoruka];
                    //    tmp.push( { id: user.id,idPoslao:id, poruka:inputPoruka,   date:Date.parse(new Date().toString()), stringDate:(new Date).toString() } );
                    //    setNizPoruka(tmp);

                    //     setInputPoruka('');


                    //     }else{
                    //        alert(isMessageCorrect(inputPoruka)[1])
                    //     }
                }

            }} />
            <div className='chatWraper' id='scrollDiv'>
                {zajednickePoruke.sort((a, b) => a.date - b.date)

                    .map(el => {
                        return el.id === user.id ? (<div className='mojaPorukaDiv' key={uuid()}><div className='mojSpan' key={uuid()}>{el.poruka}</div><div className='divBtn noneDisplay'><button className='obrisiBtn'>Obrisi</button></div></div>) :
                            (<div className='njegovaPorukaDiv' key={uuid()}><div className='njegovSpan' key={uuid()}>{el.poruka}</div></div>)
                    })
                }
            </div>
        </div>
    )
}
