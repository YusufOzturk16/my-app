import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
    return(
        < View style={styles.container}>
            <View style={styles.blackBox}></View>
            <View style={styles.redbox}></View>
            <View style={styles.blueBox}></View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 74,
        padding: 12,
    },
    blackBox: {
        borderRadius: 12,
        width: 100,
        height: 100,
        backgroundColor: "#ffdbb6"
    },
    blueBox : {
        borderRadius: 12,
        width: 100,
        height: 100,
        backgroundColor: "#1a2a4f"
     },
     redbox: {
        borderRadius: 12,
        width: 100,
        height: 100,
        backgroundColor: "#F7A5A5"
    }
});