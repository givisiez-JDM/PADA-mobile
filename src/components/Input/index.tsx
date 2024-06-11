import React from "react";
import { Input, Stack } from "native-base";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";



const PassInput = () => {
    const [show, setShow] = React.useState(false);

    return (
        <Stack space={4} w="100%" alignItems="center">
            <Input w={{
                base: "75%",
                md: "25%"
            }}
                placeholder="Email" />
            <Input
                w={{
                    base: "75%",
                    md: "25%"
                }}
                type={show ? "text" : "password"}
                InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                        <Icon name={show ? "eye-off-outline" : "eye-outline"} size={20} color="black" />
                    </Pressable>}
                placeholder="Password"
            />
        </Stack>
    )
}

export default PassInput;