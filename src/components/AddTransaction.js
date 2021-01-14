import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Touchable } from 'react-native';
import { Form, Container, Item, Input } from 'native-base'
import {useDispatch} from 'react-redux'
import {set_data} from '../store/actions/action'
const AddTransaction = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const dispatch = useDispatch()
    const handleChange = () => {
        if (!title || !price) {
            return alert('plz set all fields')
        }
        const id = Math.floor(Math.random() * 50000)
        const newTransaction = {
            id,
            title,
            price:+price
        }
        dispatch(set_data(newTransaction))
        
    }
    return (
        <Container>
            <Form>
                <Item style={{ marginVertical: 15 }}>
                    <Input onChangeText={e => setTitle(e)} placeholder='Expense Title' />
                </Item>
                <Item style={{ marginVertical: 15 }}>
                    <Input onChangeText={e => setPrice(e)} placeholder='Expense Price' keyboardType="number-pad" />
                </Item>
                <Item>
                    <TouchableOpacity onPress={handleChange} style={styles.btn}>
                        <Text style={{ color: '#fff', fontSize: 19 }}>Add Expense</Text>
                    </TouchableOpacity>
                </Item>
            </Form>
        </Container>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: '80%',
        height: 50,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        marginLeft: 23,
        backgroundColor: '#E10C62',
        borderRadius: 30,

    },
});

export default AddTransaction;