import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image, ScrollView, Modal, StyleSheet } from 'react-native'
import React, {useState,useEffect} from 'react'
import { AntDesign, FontAwesome, FontAwesome5,Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useAuth } from '../AuthContext';


const width= Dimensions.get('screen').width

const Wallet = ({navigation}) => {


  const days=[
    {
    id:1,
    amt:500
  },
  {
    id:2,
    amt:"1K"
  },
  {
    id:3,
    amt:"2.5K"
  },
  {
    id:4,
    amt:"5k"
  },
  {
    id:5,
    amt:"15K"
  },
  {
    id:6,
    amt:"25K"
  },
  {
    id:7,
    amt:"100K"
  },
  {
    id:8,
    amt:"500K"
  },
  {
    id:9,
    amt:"1M"
  },
  {
    id:10,
    amt:"5M"
  },

]


  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width

  const userInfo = useSelector(state => state.user.userInfo? state.user.userInfo:null);

  const [wallet,setWallet] = useState(0)
  const {isWalletUpdated,setIsWalletUpdated}= useAuth()

  
     const getWalletValue = async()=>{
      if(userInfo){
        try{
          const res= await axios.get("https://fiedex.com/fiedex/wallet",{
           params:{
             userId: userInfo.id
           }
          })
   

          const data= res.data
          console.log("30",data[0].amount)
          setWallet(data[0].amount)
        }
        catch(err){
         console.log("32",err)
        }
      }
      
     }
     useEffect(()=>{
      getWalletValue()
     },[isWalletUpdated])
  return (
    <ScrollView>
    <ImageBackground source={require("../assets/B7.jpg")} style={{  width: width }}>

      <View style={{ width: width, alignItems: "center", marginTop: 40 }}>
        <View style={{ opacity: 1, borderRadius: 20, alignItems: "center", justifyContent: "center", paddingTop: 10, paddingBottom: 10 }}>

          <View style={{ flexDirection: "row",alignItems:"center" }}>
          {/* <Image source={require("../assets/wallet.png")} style={{height:30,width:30,resizeMode:"contain"}}></Image> */}
            <Image source={require("../assets/coin.png")} style={{ height: 40, width: 45, marginTop: 5 }}></Image>

            <Text allowFontScaling={false}style={{ color: "#fff", fontSize: 25, marginTop: 5 }}>{wallet}.00</Text>
            <View style={{ height: 40, width: 40, borderRadius: 30, backgroundColor: "#f01c8b", borderColor: "black", borderWidth: 2, alignItems: "center", justifyContent: "center", marginLeft: 5 }}>
      <Entypo name="wallet" size={24} color="#fff" />
    </View>
            {/* <TouchableOpacity style={{ backgroundColor: "#f01c8b", width: 120, alignItems: "center", borderRadius: 20, justifyContent: "center", marginLeft: 10, borderWidth: 1, borderColor: "#fff",padding:10 }}><Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>Exchange <AntDesign name="doubleright" size={12} color="#fff" /></Text></TouchableOpacity> */}



          </View>

          {/* <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
            <Text allowFontScaling={false}style={{ color: "#fff", fontSize: 15 }}>Account:  </Text>
            <View style={{ borderColor: "#fff", borderWidth: 1, width: 180, height: 40, flexDirection: "row", alignItems: "center", padding: 5 }}>

              <Text allowFontScaling={false} style={{ color: "#fff" }}>0xc94****74d89</Text>
              <View style={{ height: '100%', width: 1, backgroundColor: '#909090', marginLeft: 15 }}>
              </View>
              <AntDesign name="copy1" size={24} color="#f01c8b" style={{ marginLeft: 20 }} />
            </View>
          </View> */}


        </View>

        <View >

        </View>


      </View>


  


      <View style={{ width: width, alignItems: "center", marginTop: 50, borderTopWidth: 2, borderColor: "#fff", borderTopLeftRadius: 12, paddingTop: 20 , borderTopRighttRadius: 12,paddingBottom:10}}>


        <View style={{ flexDirection: "row", width: width, justifyContent: "space-evenly" }}>
          <Text allowFontScaling={false} style={{ color: "#fff" }}>Token Assets</Text>

          {/* <View style={{ height: '100%', width: 1, backgroundColor: '#909090' }}>
          </View>


          <Text allowFontScaling={false} style={{ color: "#fff" }}> NFT </Text> */}

        </View>


        <ScrollView>
          <View style={{ width: 350, backgroundColor: "#3c1642", opacity: 1, borderRadius: 10, borderWidth: 1, borderColor: "#fff", paddingTop: 10, marginTop: 50 }}>
            <View style={{ alignItems: "flex-start",width:350,alignItems:"center" }}>
              <Text allowFontScaling={false} style={{ color: "#fff",textAlign:"center" }}>Token</Text>

              <Text allowFontScaling={false} 
              style={{
                height: 1,
                borderColor: "#f01c8b",
                borderWidth: 0.5,
                marginTop: 15,
                width: 320,
                marginBottom: 15,

              }}
            />
            </View>

            <View style={{ width: 320, backgroundColor: "#3c1642", padding: 20 }}>

              <View style={{ flexDirection: "row" }}>
                <Image source={require("../assets/icon.png")} style={{height:30,width:30}}></Image>
                <View style={{ flexDirection: "column", marginLeft: 20 }}>
                  <Text allowFontScaling={false} style={{ color: "#fff", fontWeight: 800 }}>0 Fiedex </Text>
                  <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 10 }}>Fiedex Protocol</Text>

                </View>
              </View>

             

              <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Image source={require("../assets/usdt.jpg")} style={{height:30,width:30}}></Image>               
               <View style={{ flexDirection: "column", marginLeft: 20 }}>
                  <Text allowFontScaling={false} style={{ color: "#fff", fontWeight: 800 }}>0 USDT</Text>
                  {/* <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 10 }}>Fiedex USD</Text> */}

                </View>
              </View>


              <View style={{ flexDirection: "row", width: 320, justifyContent: "space-around", marginTop: 25 }}>
                <TouchableOpacity style={{ backgroundColor: "#f01c8b", width: 120, alignItems: "center", borderRadius: 20, justifyContent: "center", padding: 10, borderWidth: 1, borderColor: "#fff" }}><Text allowFontScaling={false} style={{ color: "#fff", fontSize: 15 }}>Deposit  <AntDesign name="doubleright" size={12} color="#fff" /></Text></TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "#f01c8b", width: 120, alignItems: "center", borderRadius: 20, justifyContent: "center", padding: 10, borderWidth: 1, borderColor: "#fff" }}><Text allowFontScaling={false} style={{ color: "#fff", fontSize: 15 }}>Withdraw  <AntDesign name="doubleright" size={12} color="#fff" /></Text></TouchableOpacity>
              </View>


            </View>


            <View style={{ width: 350, alignItems: "center" }}>
              <Text allowFontScaling={false} 
                style={{
                  height: 1,
                  borderColor: "#fff",
                  borderWidth: 0.5,
                  marginTop: 15,
                  width: 340,
                  marginBottom: 15,

                }}
              />
            </View>
            <View style={{ width: 320, backgroundColor: "#3c1642", padding: 20 }}>

              <View style={{ flexDirection: "row",alignItems:"center" }}>
              <Image source={require("../assets/coin.png")} style={{height:40,width:40}}></Image>
              <View style={{ flexDirection: "column", marginLeft: 20 }}>
                  <Text allowFontScaling={false} style={{ color: "#fff", fontWeight: 800 }}>0.0 Points</Text>
            

                </View>
              </View>




              <View style={{ flexDirection: "row", width: 320, justifyContent: "space-around", marginTop: 20 }}>
                <TouchableOpacity style={{ backgroundColor: "#f01c8b", alignItems: "center", borderRadius: 20, justifyContent: "center", paddingHorizontal: 25,paddingVertical:10, borderWidth: 1, borderColor: "#fff" }} onPress={()=>navigation.navigate("convert")}><Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>Convert to Fiedex  <AntDesign name="doubleright" size={12} color="#fff" /></Text></TouchableOpacity>
              </View>


            </View>












            <View >

            </View>


          </View>




          <View style={{ width: 350, backgroundColor: "#3c1642", opacity: 1, borderRadius: 10, padding: 20, borderWidth: 1, borderColor: "#fff", marginTop: 50 }}>

            <Text allowFontScaling={false}  style={{ color: "#fff" }}>Staking Vault : </Text>

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


            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <Text allowFontScaling={false}  style={{ color: "#fff", fontSize: 15, marginTop: 10 }}>Total Staking yields</Text>

                <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
                  <Image source={require("../assets/coin.png")} style={{height:30,width:30,resizeMode:"contain"}}></Image>
                <Text allowFontScaling={false}style={{ color: "#fff", fontSize: 12 }}>0</Text>

                </View>

              </View>
          
              <TouchableOpacity onPress={()=>navigation.navigate("staking")} style={{ backgroundColor: "#f01c8b",  alignItems: "center", borderRadius: 20, justifyContent: "center" , borderWidth: 1, borderColor: "#fff",padding:15}}><Text allowFontScaling={false}  style={{ color: "#fff", fontSize: 15 }}>Go  <AntDesign name="doubleright" size={12} color="#fff" /></Text></TouchableOpacity>
            </View>





            <View >

            </View>


          </View>




          <TouchableOpacity onPress={openModal}  style={{ width: 350, backgroundColor: "#3c1642", opacity: 1, borderRadius: 10, padding: 20, borderWidth: 1, borderColor: "#fff", marginTop: 50,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
            <Image source={require("../assets/salary.png")} style={{width:25,height:25}}></Image>


<View>
<Text allowFontScaling={false} style={{color:"#fff",fontSize:18,letterSpacing:3,fontWeight:800}}> Daily Reward </Text>
<View style={{flexDirection:"row",justifyContent:"center",marginTop:5}}>
<Image source={require("../assets/coin.png")} style={{width:18,height:18}}></Image>
<Text allowFontScaling={false} style={{color:"#fff",fontSize:13,letterSpacing:2,fontWeight:800}}>+6,649,000 </Text>

</View>

</View>


<TouchableOpacity onPress={openModal} >
<AntDesign name="right" size={24} color="white" />
</TouchableOpacity>


         </TouchableOpacity>



         <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
        
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
   

            <View style={{width:width * 0.9,alignItems:"flex-end"}}>
              <TouchableOpacity onPress={closeModal}>
              <Entypo name="cross" size={34} color="#fff" />
              </TouchableOpacity>
       
            </View>


            <Image source={require("../assets/salary.png")} style={{height:60,width:60,marginTop:10}}></Image>

            <Text style={[styles.modalTitle,{color:"#fff"}]}>Daily reward </Text>
            <ScrollView>
            <View style={styles.boxContainer}>
              {days.map((day,index) => (
                <TouchableOpacity key={index} style={[styles.box,{backgroundColor:index==0?"#f01c8b":"#00a6fb"}]}>
                  <Text allowFontScaling={false} style={[styles.boxText,{fontSize:18}]}>Day {day.id}</Text>
                  <Image source={require("../assets/coin.png")} style={{width:20,height:20,marginBottom:5}}></Image>

                  <Text allowFontScaling={false} style={styles.boxText}>{day.amt}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity onPress={closeModal} style={styles.claimButton}>
              <Text allowFontScaling={false} style={styles.claimButtonText}>Claim</Text>
            </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

      </Modal>

       

        </ScrollView>


      </View>






    </ImageBackground>
    </ScrollView>


  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: Dimensions.get('screen').width,
    // marginTop:80,
    // height:550,
    backgroundColor: '#121212',
    borderRadius: 10,
    alignItems: 'center',
    opacity:0.8,
    borderTopWidth:2,
    borderColor:"#fff",
    paddingHorizontal:10,
    paddingVertical:10,
  

  },
  modalTitle: {
    fontSize: 25,
    marginBottom: 20,
    color:"fff",
    marginTop:10,
    letterSpacing:3
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop:20,
  },
  box: {
    backgroundColor: '#41b7d1',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical:5,
    width:"30%",
    margin:5,
    borderRadius:20,
    borderWidth:2,
    borderColor:"#fff"
  },
  boxText: {
    color: 'white',
    fontSize:12,
    marginBottom:5,
    fontWeight:"bold"

  },
  claimButton: {
    backgroundColor: 'yellow',
    borderRadius: 25,
    paddingHorizontal:90,
    paddingVertical:12,
    alignItems:"center",
    marginBottom:10

  },
  claimButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight:"bold",
    letterSpacing:3

  },
});


export default Wallet