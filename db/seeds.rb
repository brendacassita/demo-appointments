# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

d1 = Physician.create(name:"Dr Gill")
d2 = Physician.create(name:"Dr Lisa")

p1 = Patient.create(name:"Sniffly Sally")
p2 = Patient.create(name:"Ill Bill")
p3 = Patient.create(name:"Sicky Stevey")

Appointment.create(date:'June 1', physician_id:d1.id, patient_id:p1.id)
Appointment.create(date:'May 2', physician_id:d1.id, patient_id:p1.id)

Appointment.create(date:'July 2', physician_id:d2.id, patient_id:p2.id)
Appointment.create(date:'June 3', physician_id:d2.id, patient_id:p1.id)