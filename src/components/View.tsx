import React from 'react';
import '../index.css';
import '../App.css';
import { Grid } from '@material-ui/core';
import Header from '../components/Header';
import Content from '../components/Content';


function View() {
    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>
            <Grid item container>
                <Grid sm={2} />
                <Grid xs={12} sm={8}>
                    <Content />
                </Grid>
                <Grid sm={2} />
            </Grid>
        </Grid>
    );
}


const List = () => {
    //投稿名・日付時刻一覧表示

    // クリックしたらviewを呼出
}

// const View = () => {
//     // クリックされたところのjsonファイルを取得⇒投稿を出力
//
// }

export default View;