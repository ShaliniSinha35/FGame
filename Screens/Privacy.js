
import { View, Text, ImageBackground, Dimensions, Image,ScrollView } from 'react-native'
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import RenderHtml from "react-native-render-html";
import { decode } from "html-entities";

const Privacy = () => {
  const [cont,setContent]= useState("")
  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width

 const getContent = async()=>{
   try{
    const res = await axios.get("https://fiedex.com/fiedex/privacy")
    const data = res.data
    const decoded_data= decode(data)
    console.log("16",decoded_data)
    setContent(decode(data));

   }
   catch(err){
    console.log(err)
   }
 }

 useEffect(() => {
  getContent();
}, []);

const tagsStyles = {

  p: {
    fontSize: 14,
    textAlign: "justify",
    margin: 5,
    color: "white"
  },
  
  h3: {
    fontSize: 14,
    textAlign: "justify",
    margin: 5,
    color: "white"
  }
};



  return (
    <ScrollView>
    <ImageBackground source={require("../assets/B7.jpg")} style={{  width: width }}>

 

<View style={{padding:10}}>
<Text style={{color:"#fff", marginTop: 40,marginLeft:20,fontSize:20}}>Privacy Policy</Text>
      <Text allowFontScaling={false}
                    style={{
                        height: 1,
                        borderColor: "#f01c8b",
                        borderWidth: 0.5,
                        marginTop: 5,
                        width: 180,
                        marginBottom: 5,
                    
                    }}
                />  
</View>
       
      <View style={{ width: width, alignItems: "center",padding:10 }}>
    
      
        {cont.length !== 0 ? (
            cont.map((item) => (
              //    <Text  allowFontScaling={false} key={item.id} style={{ textAlign: "justify", fontFamily: "EB" }}>{decode(item.content)}</Text>

              <RenderHtml
                key={item.id}
                source={{ html: decode(item.content) }}
                contentWidth={width}
                tagsStyles={tagsStyles}
              ></RenderHtml>
            ))
          ) : (
            <></>
          )}
      </View>

    </ImageBackground>
    </ScrollView>
  )
}
  

export default Privacy