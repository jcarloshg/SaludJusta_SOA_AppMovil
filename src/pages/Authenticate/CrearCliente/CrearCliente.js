
import { Button, Input, Text, useTheme } from '@rneui/themed'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { BoxSpace, SelectOption } from '../../../components'
import { globalstyles } from '../../../styled-components'
import { optionsGender } from './models/optionsGender '
import { useCrearCliente } from './useCrearCliente'

export const CrearCliente = ({ route, navigation }) => {

    const {
        userClient, theme,
        auxUserClient, updateName, updateLastName, updateAge, updateGender,
        siguiente
    } = useCrearCliente({ route, navigation });

    return (
        <SafeAreaView style={[globalstyles.container]}>

            <BoxSpace side={15} />
            <Text h3>Ingresa tus datos</Text>
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
                    onPress={() => siguiente()}
                    buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                />
            </View>

        </SafeAreaView >
    )
}
