import { useContext, useState } from "react";
import { DataContext } from "../../../../contexts/DataProvider/DataProvider";
import Appointment from "../../../../models/entities/Appointment.entitie";
import ExamCatalogItem from "../../../../models/entities/ExamCatalogItem.entitie";
import User from "../../../../models/entities/User.entitie";
import { updateAppointment } from "./service/updateAppointment";
import Toast from 'react-native-toast-message';

export const useConfirmAppointment = ({ route, navigation }) => {

    const { dataProvider, setDataProvider } = useContext(DataContext);
    const userClient = new User(dataProvider.userClient);
    const {
        examCatalogItem, appointment
    } = getParams(route.params);

    const [isLoading, setIsLoading] = useState(false);

    const confirmar = async () => {
        setIsLoading(true);
        const res = await updateAppointment(
            userClient.idUser,
            examCatalogItem.idExamCatalog,
            appointment.idAppointment
        );

        if (res.isOk === false) {
            Toast.show({
                type: 'error',
                text1: `Error [${res.code}]`,
                text2: res.message,
            });
            setIsLoading(false);
            return;
        }

        Toast.show({
            type: 'success',
            text1: `Cita registrata correctamente`,
            text2: "Puedes ver tu cita en el apartada de 'Ver mis citas'",
            visibilityTime: 6000,
        });

        setIsLoading(false);

        navigation.navigate('ManageAppointmentsHome', { screen: 'Wecome' });
    }

    return {
        examCatalogItem,
        appointment,
        userClient,
        confirmar,
        isLoading,
    };
}



const getParams = (params) => {

    const examCatalogItem = new ExamCatalogItem(params.examCatalogItem);
    const appointment = new Appointment(params.appointment)

    return {
        examCatalogItem,
        appointment
    };
}