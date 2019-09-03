import { StyleSheet, Dimensions } from 'react-native'
import COLOR from './Colors'

const WINDOW_WIDTH = Dimensions.get('window').width

const MAX_CARD_WIDTH = WINDOW_WIDTH - 20



const css = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLOR.WHITE, alignItems: 'center', justifyContent: 'center' },
    
    //CARD
    card_container: { borderWidth: 3, backgroundColor: COLOR.WHITE, borderColor: COLOR.MGREY, width: MAX_CARD_WIDTH, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, },

    //CARD HEADER
    ch_headerContainer: { flexDirection: 'row', borderBottomWidth: 3, borderBottomColor: COLOR.MGREY, backgroundColor: COLOR.PRIMARY, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
    ch_titleText: { flexGrow: 1, fontSize: 26, color: COLOR.WHITE, paddingLeft: 10, paddingVertical: 6 },

    //CARD BODY
    cb_bodyContainer: { backgroundColor: COLOR.WHITE, height: 300, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, },

  })
  
  module.exports = css