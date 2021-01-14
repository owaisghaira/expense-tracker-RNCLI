import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux'

const Card = ({ navigation }) => {
    let { transaction } = useSelector((state) => state.transaction)
    let prices = transaction.map((item) => item.price)
    let totalPrice = prices.reduce((pre, cur) => (pre += cur),0)

    const expense = prices.filter((num) => num < 0)
        .reduce((pre, cur) => (pre += cur),0) * -1
    return (
        <LinearGradient colors={['#FAAD3D', '#EFC90A', '#F1CB0C']} style={style.linearGradient}>
            <View style={{ width: '70%', alignItems: 'flex-start' }}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Current Balance</Text>
                <Text style={{ fontSize: 32, color: '#fff', fontWeight: '700' }}>${totalPrice}</Text>
                <Text style={{ fontSize: 20, color: '#fff', fontWeight: '700', marginTop: 65 }}>234 **** **** 346</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 15, color: '#fff', marginRight: 10 }}>Expense</Text>
                <Text style={{ fontSize: 32, color: '#fff', fontWeight: '700' }}>${expense}</Text>
                <TouchableOpacity
                    style={style.btn}
                    onPress={() => {
                        navigation.navigate('Add');
                    }}
                >
                    <Text style={style.txt}>Add</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}


const style = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    txt: {
        fontSize: 18,
        color: '#fff'
    },
    btn: {
        width: 85,
        height: 45,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        // marginLeft:20,
        backgroundColor: '#E10C62',
        borderRadius: 30,
        marginTop: 47,
    },
    linearGradient: {
        width: "100%",
        height: 189,
        flexDirection: 'row',
        padding: 22,
        borderRadius: 15
    },


});


export default Card;