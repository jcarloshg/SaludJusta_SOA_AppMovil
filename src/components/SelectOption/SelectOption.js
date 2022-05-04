import { Input, Text } from '@rneui/themed'
import React, { useState } from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import { colors, globalstyles } from '../../styled-components';
import { AntDesign } from '@expo/vector-icons';
import { BoxSpace } from '../BoxSpace/BoxSpace';

// options = [{
//     "label": "HOMBRE",
//     "value": "FAMALE",
// }],


export const SelectOption = ({
    options = [],
    label = ''
}) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Input
                label={label}
                onPressIn={() => setModalVisible(true)}
                rightIcon={<AntDesign name="caretdown" size={18} color="black" />}
            />

            <ModalOptions
                modalVisible={modalVisible}
                setModalVisible={() => setModalVisible(false)}
                options={options}
            />

        </>
    )
}


export const ModalOptions = ({
    modalVisible = modalVisible,
    setModalVisible,
    options = [],
}) => {

    const renderOption = ({ value = '', label = '', index }) => (
        <>
            <BoxSpace side={15} />
            <TouchableOpacity onPress={() => console.log("asdf")} key={index}>
                {/* <Text>{value}</Text> */}
                <Text>{label}</Text>
            </TouchableOpacity>
        </>
    );

    return (
        <>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType={'slide'}
            >
                <TouchableOpacity
                    style={[globalstyles.container_flex, {
                        flex: 1,
                        backgroundColor: "rgba(0,0,0,0.6)",
                    }]}
                    onPress={() => setModalVisible()}
                />

                <View style={[{
                    backgroundColor: colors.WHITE_EEEEEE,
                    padding: 15,
                    paddingVertical: 30,
                    borderRadius: 10,
                }]}>

                    <Text h4>Selecciona una opcion</Text>
                    {
                        options.length === 0
                            ? (<Text>No hay opciones</Text>)
                            : options.map(item => renderOption(item))
                    }

                </View>

            </Modal>
        </>

    )
}
