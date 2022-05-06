import { Divider, Input, Text, useTheme } from '@rneui/themed'
import React, { useState } from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { BoxSpace } from '../BoxSpace/BoxSpace';
import { styles } from './styles';
import { globalstyles } from '../../styled-components';

// options = [{
//     "label": "HOMBRE",
//     "value": "FAMALE",
// }],


export const SelectOption = ({
    options = [],
    label = '',
    funcOnSelect = null,
}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [opstionSelected, setOpstionSelected] = useState('');

    const executeFuncOnSelect = (option) => {
        try {
            funcOnSelect(option.value);
            setOpstionSelected(option.label);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Input
                label={label}
                value={opstionSelected}
                onPressIn={() => setModalVisible(true)}
                rightIcon={<AntDesign name="caretdown" size={18} color="black" />}
            />

            <ModalOptions
                modalVisible={modalVisible}
                closeModal={() => setModalVisible(false)}
                options={options}
                executeFuncOnSelect={executeFuncOnSelect}
            />

        </>
    )
}


export const ModalOptions = ({
    modalVisible,
    closeModal,
    options = [],
    executeFuncOnSelect,
}) => {

    const { theme } = useTheme();

    const selectOption = (option) => {
        executeFuncOnSelect(option);
        closeModal();
    }

    const renderOption = (item, index) => (
        <View key={index}>
            <TouchableOpacity
                style={styles.button_option}
                onPress={() => selectOption(item)}>
                <Text style={{ alignSelf: 'center' }}>{item.label}</Text>
            </TouchableOpacity>
            <Divider width={1} color={theme?.colors?.grey4} />
        </View>
    );

    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType={'slide'}
        >
            <TouchableOpacity
                style={styles.zone_close_modal}
                onPress={() => closeModal()}
            />

            <View style={[styles.zone_options_modal]}>

                <Text h4>Selecciona una opcion</Text>

                <BoxSpace side={15} />
                {
                    options.length === 0
                        ? (<Text>No hay opciones</Text>)
                        : options.map((item, index) => renderOption(item, index))
                }

            </View>

        </Modal>
    );

}
