import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import Loading from "./screens/Loading";
import SignUp from "./screens/SignUp";
import MainWelcome from "./screens/MainWelcome";

const AppNavigator = createStackNavigator(
	{
		Login: LoginScreen,
		Chat: ChatScreen,
		Load: Loading,
		Sign: SignUp,
		Main: MainWelcome,
	},

	{
		headerMode: "none",
		initialRouteName: "Login",
	}
);

export default createAppContainer(AppNavigator);
