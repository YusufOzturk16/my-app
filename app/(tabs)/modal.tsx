import { Link } from 'expo-router';
import { StyleSheet, Text, Image, Button } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';


export default function ModalScreen() {
    const [say, setSay] = React.useState(0);
    function arttir() {
        setSay(say + 1);
    }
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">This is a modal</ThemedText>
            <Text
                style={styles.link}>Merhaba Dünya</Text>
            <Image
                style={{ width: 350, height: 350 }}
                source={require('@/assets/images/Wuwa.jpg')}></Image>
            <Link href="/" dismissTo style={styles.link}>
                <ThemedText type="link">Go to home screen</ThemedText>
            </Link>
            <Button title='Art' onPress={arttir} ></Button>
            <Text
                style={styles.link2}>sayi : {say}</Text>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
        color: 'red',
        fontSize: 20,
        justifyContent: 'center',
        backgroundColor: '#000050',

    }, link2: {
        marginTop: 15,
        paddingVertical: 15,
        color: 'white',
        fontSize: 20,
        justifyContent: 'center',
        backgroundColor: '#000000',

    },
});