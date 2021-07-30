import React from 'react';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
import GuestbookList_item from './GuestbookList_item';
import DeleteFrom from './DeleteFrorm'

export default function Guestbook(){
    return(
        <div class="Guestbook">
        <h1>방명록</h1>

  <GuestbookForm/>
  <GuestbookList/>
  <GuestbookList_item/>
  <DeleteFrom/>
  
        </div>
      
        
    );
}