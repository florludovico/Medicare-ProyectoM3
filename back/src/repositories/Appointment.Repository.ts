
import { Appointment } from "../entities/Appointment.entity";
import { AppDataSource } from "../config/data.source";
import moment from "moment";

export const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({
    
  validateAllowAppointment(date: Date, time: string): void {
      if (!date || !time) {
        throw new Error("Fecha y hora son requeridas");
      }

      const dateString = moment(date).format("YYYY-MM-DD");
      const fullDateTime = moment(`${dateString} ${time}`, "YYYY-MM-DD HH:mm");

      if (!fullDateTime.isValid()) {
        throw new Error("Fecha y hora inválidas");
      }

      const ahora = moment();
      if (!fullDateTime.isAfter(ahora.add(24, "hours"))) {
        throw new Error( "El turno debe solicitarse con al menos 24hs de anticipacion");
      }

      const dayOfWeek = fullDateTime.isoWeekday();
      if (dayOfWeek > 5) {
        throw new Error("Solo se pueden solicitar turnos de lunes a viernes");
      }

      const hour = fullDateTime.hour();
      if (hour < 8 || hour >= 18) {
        throw new Error("El horario debe estar entre las 08:00 y las 18:00");
      }
    },

    async validateExistingAppointment( userId: number, date: Date, time: string): Promise<void> {
      const existingAppointment = await this.findOne({
        where: {
          user: { id: userId },
          date: date,
          time: time,
        },
      });

      if (existingAppointment) {
        throw new Error("Ya tiene un turno reservado en esa fecha y hora");
      }
    },
  });
