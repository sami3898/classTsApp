import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imageStyle: {
        height: 300,
        width: 300,
        resizeMode: "contain",
        alignSelf: "center",
    },
    nameStyle: {
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
        marginLeft: 24
    },
    rowContainer: {
        marginHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16
    },
    labelStyle: {
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
    },
    valueStyle: {
        fontSize: 18,
        color: '#000',
        
    }
});
