// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect , useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";

function Google() {
  const [state , setState] = useState({})
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const _googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, "userInfo+++++++++++++");
      setState({ userInfo });
    } catch (error) {
      console.log(error);
    }
  };

  // const _googleSignOut = async () => {
  //   try {
  //     await GoogleSignin.signOut();

  //     setState({ user: null }); 
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <View>
      <TouchableOpacity style={{ width: "100%" }} onPress={()=>_googleSignIn}>
        <Text>Google Sign In</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={{ width: "100%" }} onPress={()=>_googleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity> */}
    </View>
  );
}

export default Google;