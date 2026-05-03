import { Kafka } from 'kafkajs';

export const kafkaClient = new Kafka({
  clientId: 'divyansh',
  brokers: ['localhost:9092'],
});
