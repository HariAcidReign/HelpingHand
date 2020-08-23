import React, { Component } from "react";
import { Platform, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Fire from "../Fire";

// Instead of creating ChatScreen by mysqlf, I used the GiftedChat library. Less code, more seamless UI

export default class ChatScreen extends Component {
	state = {
		messages: [],
	};

	get user() {
		return {
			_id: Fire.uid,
			name: this.props.navigation.state.params.name,
		};
	}

	componentDidMount() {
		Fire.get((message) =>
			this.setState((previous) => ({
				messages: GiftedChat.append(previous.messages, message), // add each child message into list async fashion
			}))
		);
	}

	componentWillUnmount() {
		// Housekeeping measure
		Fire.off();
	}

	render() {
		const chat = (
			<GiftedChat
				messages={this.state.messages}
				onSend={Fire.send}
				user={this.user}
			/>
		);

		if (Platform.OS === "android") {
			return (
				<KeyboardAvoidingView
					style={{ flex: 1 }}
					behavior="padding"
					keyboardVerticalOffset={30}
					enabled
				>
					{chat}
				</KeyboardAvoidingView>
			);
		}

		return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
	}
}
