import { Card, Text } from '@rneui/themed';
import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { BoxSpace } from '../../../../../../components';
import Appointment from '../../../../../../models/entities/Appointment.entitie';
import { colors, globalstyles } from '../../../../../../styled-components';
import { dateToString } from '../../../../../../utilities/date/dateToString';
import { hhmmssToString } from '../../../../../../utilities/date/hhmmssToString';
import { timeToString } from '../../../../../../utilities/date/timeToString';
import { AntDesign } from '@expo/vector-icons';

const defaultAppointment = new Appointment({});

export const CardAppointment = ({
    appointment = defaultAppointment,
    funcOnPress = () => console.log("[CardAppointment] not function")
}) => {

    const date = dateToString(new Date(appointment.date));
    const time = timeToString(hhmmssToString(appointment.time));
    const typeExam = appointment.exam.examCatalogItem.typeExam;

    const renderStatus = (status) => {
        switch (status) {

            case "EN ESPERA":
                return (<Text h4 h4Style={{ fontSize: 12, color: colors.PRIMARY }}>{status}</Text>)

            case "EN CURSO":
                return (<Text h4 h4Style={{ fontSize: 12, color: colors.BACKGROUND }}>{status}</Text>)

            case "FINALIZADA":
                return (<Text h4 h4Style={{ fontSize: 12, color: colors.RED_FF0000 }}>{status}</Text>)

            default: null;
                break;
        }
    }

    return (
        <TouchableOpacity onPress={() => funcOnPress()}>
            <Card>

                <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
                    <AntDesign name="calendar" size={12} color="black" />
                    <BoxSpace side={5} />
                    <Text h4 h4Style={{ fontSize: 12 }}>{`${date}, ${time}`}</Text>
                </View>

                <Card.Divider />

                <BoxSpace side={15} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 12 }}>{typeExam}</Text>
                    {renderStatus(appointment.status)}
                </View>

            </Card>
        </TouchableOpacity>
    )
}
