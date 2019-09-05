import { StyleSheet, Dimensions } from 'react-native'
import COLOR from './Colors'

const WINDOW_WIDTH = Dimensions.get('window').width
const MAX_CARD_WIDTH = WINDOW_WIDTH - 20

const css = StyleSheet.create({
    //NavigationBar
    nb_homeTextStyle: { alignSelf: 'center', textAlign: "center", fontSize: 30, justifyContent: 'center', flex: 1, textAlignVertical: 'center', color: COLOR.PRIMARY },
    nb_viewsTextStyle: {color: COLOR.PRIMARY },
    
    //HOME
    homeTextStyle: { padding: 20, fontSize: 16,  textAlign: "center", justifyContent: 'center' },
    
    //Button
    buttonStyle: { width: 200,  marginTop: 10, marginBottom: 10, paddingTop: 10, paddingBottom: 10, marginLeft: 30, marginRight: 30, backgroundColor: COLOR.PRIMARY, borderRadius: 20 },
    buttonTextStyle: { fontSize: 20, color: COLOR.WHITE, textAlign: "center", justifyContent: 'center' },

    //CONTAINER
    container: { flex: 1, backgroundColor: COLOR.WHITE, alignItems: 'center', justifyContent: 'center' },
    
    //CARD
    card_container: { borderWidth: 3, backgroundColor: COLOR.WHITE, borderColor: COLOR.MGREY, width: MAX_CARD_WIDTH, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, },

    //CARD HEADER
    ch_headerContainer: { flexDirection: 'row', borderBottomWidth: 3, borderBottomColor: COLOR.MGREY, backgroundColor: COLOR.PRIMARY, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
    ch_titleText: { flexGrow: 1, fontSize: 26, color: COLOR.WHITE, paddingLeft: 10, paddingVertical: 6 },

    //CARD BODY
    cb_bodyContainer: { backgroundColor: COLOR.WHITE, height: 300, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, alignItems: 'center' },
    cb_textStyle: { fontSize: 16, paddingLeft: 10, paddingVertical: 10, textAlign: "center", justifyContent: 'center' },

  })
  
  module.exports = css