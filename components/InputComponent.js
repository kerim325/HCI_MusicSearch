import {Text, TextInput, View} from "react-native";
import ProjectStyle from "./styles/ProjectStyle";

const InputComponent = (props) => {
	return (
		<View style={ProjectStyle.inputComponentView}>
			<Text style={ProjectStyle.textInputLabel}>{props.title}</Text>
			<TextInput
				style={ProjectStyle.textInput}
				placeholder={props.placeholder}
				onChangeText={(i) => props.updateState(i)}
			/>
		</View>
	);
}
export default InputComponent

