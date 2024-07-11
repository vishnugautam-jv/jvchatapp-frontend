import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";

// Your component code

const ChatMessage = () => {
    const [isSelected, setIsSelected] = useState(false);

    const handlePress = () => {
        setIsSelected(!isSelected);
    };

    return (
        <View style={styles.container}>
            <View style={styles.chatContainer}>
                <View style={styles.board}>
                    <View style={styles.tickAndName}>
                        <Text style={styles.nameText}>Andrew Parker</Text>
                        <View style={styles.tickAndMessage}>
                            <Image
                                source={{ uri: '/Users/vishnugautam/Desktop/jvchatapp-frontend/assets/images/double tick.jpg' }} // SVG image data here
                                style={styles.doubleTick}
                            />
                            <Text style={styles.messageText}>Yes, 2pm is awesome</Text>
                        </View>
                    </View>
                    <View style={styles.circles}>
                        <View style={styles.circle}></View>
                        <TouchableOpacity onPress={handlePress}>
                            <View style={[styles.ellipse, isSelected && styles.selectedEllipse]}>
                                {isSelected && (
                                    <Ionicons name="checkmark" size={14} color="white" style={styles.checkmark} />
                                )}
                                <Image
                                    source={{ uri: '/Users/vishnugautam/Desktop/jvchatapp-frontend/assets/images/Oval.jpg' }}
                                    style={styles.ellipseSvg}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text style={styles.dateText}>11/19/19</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 0,
    },
    chatContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    board: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginRight: 100,
    },
    tickAndName: {
        marginLeft: 10,
    },
    nameText: {
        color: 'rgba(0, 0, 0, 1)',
        fontSize: 14,
        fontFamily: 'sourcesanspro',
    },
    tickAndMessage: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        columnGap: 6,
    },
    doubleTick: {
        width: 14,
        height: 10,
    },
    messageText: {
        color: 'rgba(163, 161, 161, 1)',
        fontSize: 10,
        fontFamily: 'sourcesanspro',
    },
    circles: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    circle: {
        width: 52,
        height: 52,
        backgroundColor: '#B1B2B5',
        borderRadius: 26,
    },
    ellipse: {
        position: 'relative',
        width: 20,
        height: 20,
        marginRight: 10,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10, // to make it a circle
    },
    selectedEllipse: {
        backgroundColor: 'lightblue', // Color when filled
    },
    ellipseSvg: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.5,
        borderRadius: 10, // to match the parent shape
    },
    checkmark: {
        position: 'absolute',
        zIndex: 1,
    },
    dateText: {
        color: 'rgba(183, 181, 181, 1)',
        fontSize: 10,
        fontFamily: 'sourcesanspro',
        marginLeft: 'auto', // This ensures the date text is pushed to the far right
        paddingBottom: 15,
    },
});


export default ChatMessage;