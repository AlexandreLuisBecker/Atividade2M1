import React from "react";
import { View, Text, TouchableOpacity, TextInput} from "react-native";

export default function CustomInput({
    label,
    icon,
    inputType,
    keyboardType,
    fieldButtonLabel,
    fieldButtonFunction
}) {
    return(
        <View
        style={{
            flexDirection: 'row',
            borderColor: '#23221b',
            borderWidth: 0.5,
            borderRadius:5,
            paddingBottom: 8,
            marginBottom: 25,
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        
        }}
        >
        {icon}
    
        {inputType == 'password' ? (
            <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            secureTextEntry={true}
            style={{flex:1, paddingVertical: 0}}
            
            />
        ) : (
            <TextInput
                placeholder={label}
                keyboardType={keyboardType}
                style={{flex:1,paddingVertical: 0}}

            />
        )}
        <TouchableOpacity
            onPress={fieldButtonFunction}
        >
            <Text   style={{
                color:'#91918d',
                fontWeight: '700',
                }}
            >
                {fieldButtonLabel}
            </Text>
        </TouchableOpacity>

        </View>
    )
}