import { useContext } from "react";
import { DataContext } from "../../../../contexts/DataProvider/DataProvider";
import Appointment from "../../../../models/entities/Appointment.entitie";
import ExamCatalogItem from "../../../../models/entities/ExamCatalogItem.entitie";
import User from "../../../../models/entities/User.entitie";
import { updateAppointment } from "./service/updateAppointment";

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

        setIsLoading(false);
        console.log(res);
    }

    return {
        examCatalogItem,
        appointment,
        userClient,
        confirmar
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