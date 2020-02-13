import React from 'react'
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, Text } from 'react-native'
import Fresh from './Fresh'
import Delivery from './Delivery'
import Payment from './Payment'

export default class Main extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            indicatorItem1Color: "#2BB673",
            indicatorItem2Color: "#ddd",
            indicatorItem3Color: "#ddd",
            currentPage: 1
        }
    }

    componentDidMount() { }
    componentWillUpdate() { }
    componentDidUpdate() { }


    currenPageHandle() {
        if (this.state.currentPage == 1) {

            return <Fresh />
        } else if (this.state.currentPage == 2) {
            return <Delivery />
        } else {
            return <Payment />
        }
    }


    handleRouting() {
        if (this.state.currentPage == 1) {
            this.setState({
                currentPage: 2,
                indicatorItem1Color: "#ddd",
                indicatorItem2Color: "#2BB673",
                indicatorItem3Color: "#ddd",
            })
        } else if (this.state.currentPage == 2) {
            this.setState({
                currentPage: 3,
                indicatorItem1Color: "#ddd",
                indicatorItem2Color: "#ddd",
                indicatorItem3Color: "#2BB673",
            })
        } else {
            this.setState({
                currentPage: 1,
                indicatorItem1Color: "#2BB673",
                indicatorItem2Color: "#ddd",
                indicatorItem3Color: "#ddd",
            })
        }
    }

    render() {

        const styles = StyleSheet.create({
            imageArrow: {
                height: 20,
                width: 20
            },

            indicatorItem1: {
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: this.state.indicatorItem1Color,
                marginLeft: 6,
                marginRight: 6,
            },


            indicatorItem2: {
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: this.state.indicatorItem2Color,
                marginLeft: 6,
                marginRight: 6,
            },

            indicatorItem3: {
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: this.state.indicatorItem3Color,
                marginLeft: 6,
                marginRight: 6,
            },

            indicator: {
                bottom: 0,
                right: 0,
                left: 0,
                position: "absolute",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                padding: 30,
            },

            textStarted : {
                color : "#fff",
                fontSize : 16
            },

            btnText: {
                height: 50,
                paddingLeft : 30, 
                paddingRight : 30,
                padding : 10,
                elevation: 6,
                borderRadius: 4,
                backgroundColor: "#2BB673",
                alignItems: "center",
                justifyContent: "center",
            },

            btnArrow: {
                height: 50,
                width: 50,
                elevation: 6,
                borderRadius: 50,
                backgroundColor: "#2BB673",
                alignItems: "center",
                justifyContent: "center",
            },
            BodyButton: {
                alignItems: "center",
                justifyContent: "center",
                bottom: 100,
                position: "absolute",
                padding: 20
            },
            container: {
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                paddingBottom: 0,
                padding: 20
            }
        })

        let handleBtn = () => {
            if (this.state.currentPage == 3) {
                return <TouchableOpacity style={styles.btnText} onPress={() => this.handleRouting()}>
                    <Text style={styles.textStarted}>Get Started</Text>
                </TouchableOpacity>
            } else {
                return <TouchableOpacity style={styles.btnArrow} onPress={() => this.handleRouting()}>
                    <Image style={styles.imageArrow} source={require('../assets/right2.png')}></Image>
                </TouchableOpacity>
            }
        }


        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

                {this.currenPageHandle()}

                <View style={styles.BodyButton}>
                    {handleBtn()}
                </View>

                <View style={styles.indicator}>
                    <TouchableOpacity style={styles.indicatorItem1}></TouchableOpacity>
                    <TouchableOpacity style={styles.indicatorItem2}></TouchableOpacity>
                    <TouchableOpacity style={styles.indicatorItem3}></TouchableOpacity>
                </View>
            </View>
        )
    }
}