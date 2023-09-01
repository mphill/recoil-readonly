import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { RecoilRoot, useRecoilState } from "recoil";

import { useEffect } from "react";
import { state } from "../state/state";

export default function Main() {
	const [cars, setCars] = useRecoilState(state);

	useEffect(() => {
		setCars([
			{
				name: "Mazda",
				paint: "red",
				options: [
					{
						name: "AC",
						price: 1000,
						selected: false,
					},
				],
			},
		]);
	}, []);

	function clone<T>(value: T): T {
		return JSON.parse(JSON.stringify(value)) as T;
	}

	if (cars.length === 0)
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
			</View>
		);

	console.log(cars[0].options[0].selected);

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text>AC Selected: {cars[0].options[0].selected ? "true" : "false"}</Text>
			<Button
				title="Enable AC (spread operator)"
				onPress={() => {
					const newCars = [...cars];
					newCars[0].options[0].selected = true;
					setCars(newCars);
				}}
			/>

			<Button
				title="Enable AC (dirty clone)"
				onPress={() => {
					const newCars = clone(cars);
					newCars[0].options[0].selected = true;
					setCars(newCars);
				}}
			/>
			<StatusBar style="auto" />
		</View>
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
