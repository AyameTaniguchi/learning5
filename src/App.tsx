import React, {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";

// 認証情報・固定値
export const infoUser = {
    UserName: "taniguchi",
    password: "ma123456"
}

const App = () => {
    const [text, setText] = useState('');
    const [pw, setPW] = useState('');
    const history = useHistory();

    const ChangeText = (e: any) => {
        setText(() => e.target.value)
    }

    const ChangePW = (e: any) => {
        setPW(() => e.target.value)
    }

    // ログイン情報確認
    const Check = (e:any,text:any,pw:any) => {
        let isLogin: boolean;
        console.log(text);
        console.log(pw);

        if (text === infoUser.UserName) {
            isLogin = true;
        } else {
            isLogin = false;
        }

        if (pw === infoUser.password && isLogin) {
            console.log("ログイン成功")
            e.preventDefault();
            history.push({pathname: '/View', state: {name: infoUser.UserName}});
        } else {
            alert("パスワードが異なります。ログインできませんでした。")
        }

    }

  return (
      <form className="login" onSubmit={(e) => Check(e,text,pw)}>
        <p>ログイン画面</p>
        <AccountCircle />
        <TextField
            id="input-with-icon-grid"
            label="UserName"
            value={text}
            onChange={ChangeText}
        /><br/>
        <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={pw}
            onChange={ChangePW}
        /><br/>
        <Button
            variant="contained"
            color="primary"
            type="submit"
        >
          ログイン
        </Button>
      </form>
  )
}


// アカウント作成
const register = () => {
    // ログインボタンを登録ボタンに変更してレンダリング

    // 登録ボタン押下後、登録できるユーザー名とパスワードであるかチェック

    // jsonファイルに登録　⇒　ログイン画面へ

}


export default App;
