import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'


class Fresh extends React.Component {

    render() {
        return (
            <>
                <View style={styles.header}><Image style={styles.imageHeader} source={require('../assets/food.png')} /></View>
                <View style={styles.body} >
                    <Text style={styles.bodyTitle}>Fresh Food</Text>
                    <Text style={styles.bodySubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
                </View>
            </>
        )
    }
}



const styles = StyleSheet.create({
    imageHeader: {
        height: 210,
        width: 260
    },

    bodySubTitle: {
        color: 'grey',
        textAlign: "center",
        lineHeight: 22
    },
    bodyTitle: {
        fontWeight: "bold",
        fontSize: 28,
        marginBottom: 10
    },

    header: {
        marginTop: 46,
    },

    body: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        position: "absolute",
        bottom: 240
    },
})

export default Fresh
