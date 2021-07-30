import React from 'react';
export default function DeleteFrom({}){
    return(
        <div id="dialog-delete-form" className="Guestbook__DeleteForm" title="메세지 삭제" style="display:none">
        <p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
        <p class="validateTips error" style="display:none;">비밀번호가 틀립니다.</p>
        <form>
            <input type="password" id="password-delete" value="" class="text ui-widget-content ui-corner-all" />
            <input type="hidden" id="hidden-no" value="" />
        </form>
    </div>
    )
}