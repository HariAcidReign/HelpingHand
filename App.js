import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import Loading from "./screens/Loading";
import SignUp from "./screens/SignUp";
import MainWelcome from "./screens/MainWelcome";
import Call from "./screens/CallScreen";
import Join from "./screens/JoinScreen";
import Room from "./screens/RoomScreen";

const AppNavigator = createStackNavigator(
	{
		Login: LoginScreen,
		Chat: ChatScreen,
		Load: Loading,
		Sign: SignUp,
		Main: MainWelcome,
		Call:  CallScreen,
		Join:  JoinScreen,
		Room:  RoomScreen,
		
	},

	{
		headerMode: "none",
		initialRouteName: "Login",
	}
);

export default createAppContainer(AppNavigator);
