import React from "react";
import { StyleSheet, Platform, Image, Text, View, Button } from "react-native";
import firebase from "firebase";
export default class MainWelcome extends React.Component {
	state = { currentUser: null };

	componentDidMount() {
		const { currentUser } = firebase.auth();
		this.setState({ currentUser });
	}

	continue = () => {
		this.props.navigation.navigate("Chat", {
			name: this.state.currentUser.name, // I changed this from this.state.name
		});
	};

	render() {
		const { currentUser } = this.state;
		return (
			<View style={styles.container}>
				<Text>Hi {currentUser && currentUser.email}!</Text>
				<Text> You can start chatting now :) </Text>
				<Button
					style={{ marginBottom: 10, marginTop: 10 }}
					title="Chat"
					onPress={this.continue}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
