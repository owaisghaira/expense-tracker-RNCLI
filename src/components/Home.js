import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Animated from 'react-native-reanimated'
import { Container, CheckBox, ListItem, Body, Right, Left } from 'native-base'
import Card from './Card'
import Empty from './Empty'
import { delete_data } from '../store/actions/action'


const Home = ({ navigation }) => {
    let { transaction } = useSelector((state) => state.transaction)
    const dispatch = useDispatch()
    return (
        <Container>
            {/* { users ? users.map((data,i) => <Text key={i}>{data.email}</Text>) : <Text>no</Text>} */}
            <Animated.View style={style.viewContainer}>
                <Card navigation={navigation} />
            </Animated.View>
            <View style={{ flex: 1, marginTop: -200 }}>
                {transaction.length == 0 && <Empty />}
                <View>
                    <FlatList
                        data={transaction}
                        renderItem={(({ item }) => (
                            <View key={item.id} style={{ marginVertical: 3, paddingHorizontal: 30, paddingVertical: 12 }}>
                                <ListItem>
                                    <CheckBox onPress={() => dispatch(delete_data(item.id))} />
                                    <Body>
                                        <Text style={{ fontSize: 17, fontWeight: '700', marginLeft: 10 }}>{item.title}</Text>
                                    </Body>
                                    <Right>
                                        <Text style={{ fontWeight: '700', fontSize: 18, color: item.price > 0 ? '#009BFC' : '#FF4500' }}>{item.price}</Text>
                                    </Right>
                                </ListItem>
                            </View>
                        ))}
                        keyExtractor={i => i.id}
                    />
                </View>
            </View>
        </Container>
    );
};

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

});

export default Home;