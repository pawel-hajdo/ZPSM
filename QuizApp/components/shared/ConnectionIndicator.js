import { View, Text, StyleSheet} from  'react-native'
import { useState } from 'react';

import { addEventListener } from "@react-native-community/netinfo";

const ConnectionIndicator = () => {
    const [connectionState, setConnectionState] = useState(true);
    const unsubscribe = addEventListener(state => {
        if(connectionState !== state.isConnected) {
            setConnectionState(state.isConnected);
            toggleIndicator(connectionState)
        }
    });
    //   unsubscribe();

    return(
        <View
            style={
                [styles.container,
                    (connectionState) ? styles.connectionRestored : styles.noConnection,
                ]}>
            <Text style={[styles.text]}>
                {(connectionState) ? "ONLINE" : "OFFLINE"}
            </Text>
            <Text>

            </Text>
        </View>
    )

}

export default ConnectionIndicator;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        width: '100%',
        borderBottomEndRadius: 6,
        borderBottomStartRadius: 6,
    },

    text: {
        color: "white"
    },

    connectionRestored: {
        backgroundColor: "green"

    },

    noConnection: {
        backgroundColor: "red"

    }
})