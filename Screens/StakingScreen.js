import { View, Text, ImageBackground, Dimensions, ScrollView, Image, TouchableOpacity, TextInput, Modal , StyleSheet} from 'react-native'
import React, {useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
const width = Dimensions.get('screen').width

const StakingScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const handleStakeNow = () => {
      // Add your staking logic here
      if(value!=null && value!= 0){
        setModalVisible(true);
      }
     
    };
  
    const closeModal = () => {
      setModalVisible(false);
      setValue(null)
    };

    const [value,setValue]= useState(null)
  return ( 
<ImageBackground source={require("../assets/B5.jpg")} style={{flex:1,width:width}}>

<Text allowFontScaling={false} style={{color:"#fff",marginTop:50,fontSize:20,textAlign:"center",letterSpacing:5,fontWeight:600}}>Staking Vault</Text>

<View style={{borderTopWidth:2,borderRadius:20, borderColor:"#fff",width:width,alignItems:"center",marginTop:20}}>

    <View style={{width:width, alignItems:"center",marginTop:20}}>
    <View style={{width: width * 0.9, borderWidth:3, borderColor:"#fff", borderRadius:20,backgroundColor:"#121212",opacity:0.8,paddingTop:20,paddingLeft:20,paddingVertical:20}}>

<View style={{flexDirection:"row"}}>
<Text style={{color:"#fff"}}>Available Golds:  </Text>
<View style={{flexDirection:"row"}}>
<Image source={require("../assets/coin.png")} style={{width:18,height:18}}></Image>
<Text allowFontScaling={false} style={{color:"#fff",fontSize:15,letterSpacing:2,fontWeight:800}}> 492,061.37 </Text>

</View>
</View>

<Text allowFontScaling={false} 
              style={{
                height: 1,
                borderColor: "#f01c8b",
                borderWidth: 0.5,
                marginTop: 10,
                width: 300,
                marginBottom: 15,

              }}
            />


<View style={{flexDirection:"row"}}>
<Text style={{color:"#fff"}}>Estimated APY:  </Text>
<View style={{flexDirection:"row"}}>

<Text allowFontScaling={false} style={{color:"#fff",fontSize:15,letterSpacing:2,fontWeight:800}}> 3.93% </Text>

</View>
</View>

<Text allowFontScaling={false} 
              style={{
                height: 1,
                borderColor: "#f01c8b",
                borderWidth: 0.5,
                marginTop: 10,
                width: 300,
                marginBottom: 15,

              }}
            />



<View style={{flexDirection:"row",alignItems:"center"}}>
<Text allowFontScaling={false}  style={{color:"#fff"}}>Staking Amount: </Text>




<View style={{paddingVertical:10, borderWidth:1,borderColor:"#fff",flexDirection:"row",borderRadius:20,backgroundColor:"#5c0099",justifyContent:"space-between",alignItems:"center",width:200}}>
<TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        keyboardType='numeric'
        placeholder="0.00"
        placeholderTextColor="#ccc" 
        style={{    color: "white",
            flex: 1,
            paddingLeft: 10,}}
      />
           <Text allowFontScaling={false}  style={{color:"white",marginRight:10,fontWeight:600}}>Max</Text>
            </View>

</View>


<View style={{alignItems:"center",marginTop:20}}>

<TouchableOpacity  onPress={handleStakeNow} style={{padding:10,backgroundColor:"#48cae4",borderRadius:20,alignItems:"center", width:200}}>
              <Text style={{color:"white",letterSpacing:3,fontWeight:700,fontSize:18}}>Stake Now</Text>
            </TouchableOpacity>  
</View>



<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Successful Staking </Text>
            <Text style={styles.modalText}>😊</Text>
              
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>



     </View>



     <View style={{width: width * 0.9, borderWidth:3, borderColor:"#fff", borderRadius:20,backgroundColor:"#121212",opacity:0.8,paddingTop:20,paddingVertical:20,marginTop:20}}>
    
    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
         
       <Image source={require("../assets/wallet.png")} style={{height:80,width:80,resizeMode:"contain"}}></Image>

       <View >
        <Text style={{color:"#fff"}}>Staking GOLDs:</Text>
        <View style={{flexDirection:"row"}}>
<Image source={require("../assets/coin.png")} style={{width:18,height:18}}></Image>
<Text allowFontScaling={false} style={{color:"#fff",fontSize:15,letterSpacing:2,fontWeight:800}}> 492,061.37 </Text>

</View>
<Text style={{color:"#fff"}}>APY:</Text>
<View style={{flexDirection:"row"}}>

<Text allowFontScaling={false} style={{color:"#fff",fontSize:15,letterSpacing:2,fontWeight:800}}> 3.93%  </Text>
<Octicons name="graph" size={24} color="#f01c8b" />

</View>
       </View>


    </View>

    <View style={{flexDirection:"row", justifyContent:"space-around",marginTop:15}}>
    <TouchableOpacity style={{padding:10,backgroundColor:"#48cae4",borderRadius:20,alignItems:"center",paddingHorizontal:15}}>
              <Text style={{color:"white",letterSpacing:3,fontWeight:700,fontSize:12}}>Harvest Yields</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={{padding:10,backgroundColor:"#48cae4",borderRadius:20,alignItems:"center",paddingHorizontal:15}}>
              <Text style={{color:"white",letterSpacing:3,fontWeight:700,fontSize:12}}>Unstake All</Text>
            </TouchableOpacity>   
    </View>

</View>

     

    </View>
 

</View>






</ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    inputContainer: {
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: "#fff",
      flexDirection: "row",
      borderRadius: 20,
      backgroundColor: "#5c0099",
      justifyContent: "space-between",
      alignItems: "center",
      width: 200,
      marginBottom: 20,
    },
    textInput: {
      color: "white",
      flex: 1,
      paddingLeft: 10,
    },
    text: {
      color: "white",
      marginRight: 10,
      fontWeight: '600',
    },
    button: {
      backgroundColor: '#5c0099',
      padding: 10,
      borderRadius: 20,
    },
    buttonText: {
      color: 'white',
      fontWeight: '600',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: '#41b7d1',
      borderRadius: 10,
      alignItems: 'center',
      opacity:0.8
    },
    modalText: {
      fontSize: 20,
      marginBottom: 20,
      color:"#fff",
      fontWeight:"bold",
      letterSpacing:4
    },
    closeButton: {
      backgroundColor: '#5c0099',
      padding: 10,
      borderRadius: 20,
      paddingHorizontal:25
    },
    closeButtonText: {
      color: 'white',
      fontWeight: '600',
      letterSpacing:4
    },
  });
export default StakingScreen