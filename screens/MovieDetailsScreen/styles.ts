import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    image:{
        width:'100%',
        aspectRatio: 16/9,
        resizeMode:'cover'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
    },

    match:{
        color:'#00aa00',
        fontWeight: 'bold',
        marginRight: 5,
    },
    year:{
        color:'#757575',
        marginRight:5,
    },
    ageContainer:{
        backgroundColor: '#e6e229',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:2,
        paddingHorizontal: 5,
        marginRight:5,
    },

    age:{
        color:'black',
        fontWeight:'bold',
    },

    season:{
    },

    playButtonText:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    },

    downloadButtonText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    playButton:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:3,
        marginVertical:5,
    },

    downloadButton:{
        backgroundColor:'#2b2b2b',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:3,
        marginVertical:5,
    }
})

export default styles;