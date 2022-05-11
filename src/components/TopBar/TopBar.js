import { Button, Divider, Text } from '@rneui/themed';
import React from 'react'
import { Image, View } from 'react-native';
import { useTopBar } from './useTopBar';

export const TopBar = ({ navigation }) => {

    const {
        logo,
        theme,
        userClient,
        navigateToLoggin
    } = useTopBar({ navigation });

    return (
        <View style={{ paddingHorizontal: 10 }}>
            <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                <Image style={{ height: 100, width: 100 }} source={logo} />
                {
                    userClient.idUser
                        ?
                        (
                            <View>
                                <Text h4 h4Style={{ fontSize: 18, textAlign: 'right' }}>Nombre del cliente</Text>
                                <Text style={{ fontSize: 16, textAlign: 'right' }}>{`${userClient.lastName} ${userClient.name}`}</Text>
                            </View>
                        )
                        :
                        (

                            <Button
                                title={'Iniciar sesion'}
                                onPress={() => navigateToLoggin()}
                                buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                            />
                        )
                }
            </View>
            <Divider width={1.5} color={theme?.colors?.greyOutline} />
        </View>
    )
}
