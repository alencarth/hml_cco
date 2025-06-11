#!/bin/bash
sleep 10 # Aguarda o RabbitMQ inicializar

# Cria a fila "metrobh.event.queue"
rabbitmqadmin declare queue name=metrobh.event.queue durable=true