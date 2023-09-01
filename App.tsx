import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { RecoilRoot, useRecoilState } from "recoil";

import { useEffect } from "react";
import Main from "./screens/main";

export default function App() {
	return (
		<RecoilRoot>
			<Main />
		</RecoilRoot>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
