class Api::AppointmentsController < ApplicationController
  def all_data
    render json: {physicians: Physician.all, patients: Patient.all, appointments: Appointment.all}
  end

  def index
    render json: Appointment.all
  end 

  def create
    appointment = Appointment.new(appointment_params)
    if(appointment.save)
      render json: appointment
    else
      render json: {errors: appointment.error.full_messages}, status: 422
    end
  end 


  private

  def appointment_params
    params.require(:appointment).permit(:date, :physician_id, :patient_id)
  end
end
