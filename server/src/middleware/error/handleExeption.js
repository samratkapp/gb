import { logger } from '../../lib/logger'

/* eslint-disable no-undef */
const sendNotificationMail = (message,err) => {
  logger.info('Some Notification Logic',message,err)
}
export const handleExeption = () => {
  process.on('exit', (error) => {
    console.error('exit at:', new Date(), '\nMessage:', error.stack)
    sendNotificationMail('', error.stack)
    process.exit(1)
  })
  
  process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection at:', new Date(), '\nMessage:', error.stack)
    sendNotificationMail('',error.stack)
    process.exit(1)
  })
  
  process.on('uncaughtException', (error) => {
    console.error('UncaughtException at:', new Date(), '\nMessage:', error.stack)
    sendNotificationMail('',error.stack)
    process.exit(1)
  })
  process.on('SIGINT', () => {
    logger.info('Received SIGINT. Press Control-D to exit.')
  })

  process.on('SIGTERM', () => {
    logger.info('Received SIGTERM. Press Control-D to exit.')
  })

     
}
