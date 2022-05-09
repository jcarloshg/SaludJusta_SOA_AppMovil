import { Card, Text } from '@rneui/themed'
import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import ExamCatalogItem from '../../../../../../models/entities/ExamCatalogItem.entitie';

const defaultExamCatalogItem = new ExamCatalogItem({});

export const CardExamCatalogItem = ({
    examCatalogItem = defaultExamCatalogItem,
    funcGoToSelectDate = () => console.log("[CardExamCatalogItem] not functions")
}) => {
    return (
        <Card>
            <TouchableOpacity
                onPress={() => funcGoToSelectDate()}
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text>{examCatalogItem.typeExam}</Text>
                <Text>{`$ ${examCatalogItem.cost}`}</Text>
            </TouchableOpacity>
        </Card>
    )
}
