
import Appointment from "../models/entities/Appointment.entitie"

const defaultAppointment = new Appointment({});

export const AppointmentAdapter = (endpoint = defaultAppointment) => {

    return new Appointment({
        idAppointment: endpoint.idAppointment,
        date: endpoint.date,
        time: endpoint.time,
        status: endpoint.status,
        FK_Exam: endpoint.FK_Exam,
        FK_ExamCatalog: endpoint.FK_ExamCatalog,
        FK_UserClient: endpoint.FK_UserClient,
        exam: endpoint.exam,
    });
}
