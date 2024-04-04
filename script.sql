ip: 192.168.1.83
use: 'sa'
password: '12345678'

create table  Agendamentos(
    id INT PRIMARY KEY IDENTITY,
    data_agendamento  VARCHAR(10) NOT NULL,
    horario  VARCHAR(10) NOT NULL,
    reserva VARCHAR(50) NOT NULL,
)
