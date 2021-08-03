import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './assets/Form.css';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Validemail, setVaildEmail] = useState('');
    const [gender, setgender] = useState('');
    const [birthYear, setbirthYear] = useState(1984);
    const [birthYear, setbirthYear] = useState(1984);

    const onChangeInputName = function(e) {
        // setName(e.target.value);
        // 10자 제한(validation)
        setName(e.target.value.substr(0, 10));
    }
    const onChangeInputEmail =function(e){
        setEmail(e.target.value);
    const re= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    }

    const onChangeInputprov =function(e){
        //API 호출
      const url = `/prov/agree?status=${status}`;
      console.log(url);
      if(true){
          setAgreeProv(status);
      }

 
    }

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input
                id="name"
                name="name"
                type="text"
                value={ name }
                onChange={ onChangeInputName }/>

            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" value={ email } onChange={onChangeInputEmail}/>
            
            <FontAwesomeIcon icon ={faCheckCircle} style ={'red'}/>
            <FontAwesomeIcon icon ={faCheckCircle} style ={'red'}/>
            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={ "" } />

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={ "female" } hecked={gender =='female'} onChangeInputGender  />
                <label>남</label> <input type="radio" name="gender" value={ "male" } defaultChecked={ false } />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" value ={1986}>
                <option value={1984}>1984년</option>
                <option value={1985}>1985년</option>
                <option value={1986}>1986년</option>
                <option value={1987}>1987년</option>
                <option value={1988}>1988년</option>
                <option value={1989}>1989년</option>
                <option value={1990}>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea id='' name='selfscription' value={""} />

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov" type="checkbox" name="agreeProv" value= {agreeProv } checked={ agreeProv ==yes} onChange = />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}