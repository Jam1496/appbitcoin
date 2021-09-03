import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity,} from 'react-native';

import api from '../services/api';


class Bitcoin extends Component{
    constructor(){
        super();

        //criar um state
        this.state = {
            vbitcoin: 0
        }

        //precisamos fazer um bind para que os métodos possam acessar os states e as props
        this.consultaPrecoBitcoin = this.consultaPrecoBitcoin.bind(this);

    }

    async componentDidMount(){
        const response = await api.get('ticker');

        let valor = response.data.BRL['buy'];

        this.setState({
            vbitcoin : valor

        });

    }

    //função que atualiza o valor
    async consultaPrecoBitcoin() {
        const response = await api.get('ticker');

        let valor = response.data.BRL['buy'];

        this.setState({
            vbitcoin : valor

        });

        alert("Valor Atualizado!");

    }

    render(){
        return(
            <View style={style.container}>


                <Image
                    source={require('../../assets/bitcoin.png')}
                    style={{width:450, height:169}}
                    resizeMode='center'
                />

                <Text style={style.textoBitcoin}>R$ {this.state.vbitcoin}</Text>

                <TouchableOpacity style={style.botao} onPress={this.consultaPrecoBitcoin}>
                    <Text style={style.textoBotao}>Atualizar</Text>
                </TouchableOpacity>

            </View>
        );
    }

} // FECHA A CLASSE BITCOIN

export default Bitcoin;

const style = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#FFF',
        alignItems:'center',
        justifyContent:'center'
    },
    textoBitcoin:{
        fontSize:32,
        color:'#363636'
    },

    botao:{
        backgroundColor: '#FFA500',
        marginTop:50,
        width:300,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:30
        
    },

    textoBotao:{
        fontSize:32,
        color:'#FFF'
    }

});



