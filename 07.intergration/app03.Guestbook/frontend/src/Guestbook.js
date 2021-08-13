import React, {useEffect, useState} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
    const [messages, setMessages] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch('/api', {
                method: 'get',
                headers: {'Content-Type': 'application/json'}
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setMessages(json.data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <div className={ styles.Guestbook }>
            <h1>방명록</h1>
            <WriteForm />
            <MessageList messages={ messages }/>
        </div>
    );
}