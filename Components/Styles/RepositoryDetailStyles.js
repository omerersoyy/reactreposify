
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        margin: 7,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    header: {
        flex: 6,
        flexDirection: 'column',
        backgroundColor: '#a3b0c4',
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        padding: 10,
    },
    description: {
        flex: 1,
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'flex-end',
        paddingTop: 20
    },  
    column: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#a3b0c4',
    },

    buttonText: {
        padding: 10,
        flex: 0
    }
})
