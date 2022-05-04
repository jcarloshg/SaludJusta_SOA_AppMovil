
import { Button, Input, Text, useTheme } from '@rneui/themed'
import React from 'react'
import { SafeAreaView, TouchableOpacity, View } from 'react-native'
import { BoxSpace, SelectOption } from '../../../components'
import { globalstyles } from '../../../styled-components'
import { AntDesign } from '@expo/vector-icons';
import { optionsGender } from './models/optionsGender '

export const CrearCliente = () => {

    const { theme } = useTheme();

    const onTouchGeneroIcon = () => {
        return (
            <TouchableOpacity onPress={() => console.log("asdf")}>
                <AntDesign name="caretdown" size={18} color="black" />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={[globalstyles.container]}>

            <BoxSpace side={15} />
            <Text h3 >Crear nueva cliente</Text>
            {/* <BoxSpace side={5} /> */}
            <Text>Completa los campos siguientes</Text>

            <BoxSpace side={30} />
            <Input
                label={"Nombres(s)"}
            />

            <Input
                label={"Apellidos(s)"} />

            <Input
                label={"Edad"}
                keyboardType='numeric'
                maxLength={2}
                onPressIn={() => console.log("laskdf")}
            />

            <SelectOption
                options={optionsGender}
                label="Genero"
            />

            <View style={[globalstyles.bottom_element]}>
                <Button
                    title={'Siguiente'}
                    onPress={() => console.log("Siguiente")}
                    buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                />
            </View>

        </SafeAreaView >
    )
}
