
import React from 'react'
import { Card, Text, useTheme } from '@rneui/themed'
import { TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { globalstyles } from '../../../../../styled-components';

export const ButtonAction = ({
    label = '',
    nameIcon = '',
    funcNvidate = () => console.log("[ButtonAction] not function")
}) => {

    const { theme } = useTheme();

    return (
        <TouchableOpacity onPress={() => funcNvidate()}>
            <Card>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[{ flex: 1, alignItems: 'center' }]}>
                        <AntDesign name={nameIcon} size={24} color={theme.colors.grey3} />
                    </View>
                    <View style={[{ flex: 5, justifyContent: 'center' }]}>
                        <Text h4 h4Style={{ fontSize: 18, color: theme.colors.grey3 }}>{label}</Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}
