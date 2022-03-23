class Api::AppointmentsController < ApplicationController
  def all_data
    render json: {physicians: Physician.all,
                  patients: Patient.all,
                  appointments: Appointment.all}
  end

    def index
      render json: Appointment.all
    end 
end
