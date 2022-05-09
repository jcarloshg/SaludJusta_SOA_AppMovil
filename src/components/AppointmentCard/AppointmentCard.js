
import React from 'react'
import { Card, Text } from '@rneui/themed'
import { TouchableOpacity, View } from 'react-native'
import Appointment from '../../models/entities/Appointment.entitie';
import { dateToString } from '../../utilities/date/dateToString';
import { timeToString } from '../../utilities/date/timeToString';
import { hhmmssToString } from '../../utilities/date/hhmmssToString';

const defaultAppointment = new Appointment({});

export const AppointmentCard = ({ appointment = defaultAppointment }) => {

    const date = dateToString(new Date(appointment.date));
    const time = timeToString(hhmmssToString(appointment.time));


    return (
        <TouchableOpacity>
            <Card>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text h4 h4Style={{ fontSize: 12 }}>{date}</Text>
                    <Text>{time}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    )
}
