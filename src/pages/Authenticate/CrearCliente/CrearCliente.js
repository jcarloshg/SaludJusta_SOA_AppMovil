
import { Button, Input, Text, useTheme } from '@rneui/themed'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { BoxSpace, SelectOption } from '../../../components'
import { globalstyles } from '../../../styled-components'
import { optionsGender } from './models/optionsGender '
import { useCrearCliente } from './useCrearCliente'

export const CrearCliente = () => {

    const {
        userClient, theme,
        auxUserClient, updateName, updateLastName, updateAge, updateGender
    } = useCrearCliente();

    return (
        <SafeAreaView style={[globalstyles.container]}>

            <BoxSpace side={15} />
            <Text h3 >Crear nueva cliente</Text>
            {/* <BoxSpace side={5} /> */}
            <Text>Completa los campos siguientes</Text>

            <BoxSpace side={30} />
            <Input
                label={"Nombres(s)"}
                onChangeText={name => updateName(name)}
            />

            <Input
                label={"Apellidos(s)"}
                onChangeText={lastName => updateLastName(lastName)} />

            <Input
                label={"Edad"}
                keyboardType='numeric'
                maxLength={2}
                onChangeText={age => updateAge(age)}
            />

            <SelectOption
                options={optionsGender}
                label="Genero"
                funcOnSelect={gender => updateGender(gender)}
            />

            <View style={[globalstyles.bottom_element]}>
                <Button
                    title={'Siguiente'}
                    onPress={() => console.log(auxUserClient)}
                    buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                />
            </View>

        </SafeAreaView >
    )
}
