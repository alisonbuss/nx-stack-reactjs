import { LoggerEnum, LoggerManager } from '@lib/shared';

describe('LoggerManager', () => {
  const prefix: string = '# logger: ';
  const activeConsole: boolean = false;

  it('should return the Loggers', async () => {
    const expected = 6;

    // Create an instance of LoggerManager:
    const logger = new LoggerManager(prefix, activeConsole);

    // Trigger logs and create records:
    logger.log('Console log 001', {}, [], '...');
    logger.trace('Console trace 002', {}, [], '...');
    logger.debug('Console debug 003', {}, [], '...');
    logger.info('Console info 004', {}, [], '...');
    logger.warn('Console warn 005', {}, [], '...');
    logger.error('Console error 006', {}, [], '...');

    // Get length the Loggers
    const result = logger.getLoggers().length;

    expect(result).toBe(expected);
  });

  it('should return the Loggers By INFO', async () => {
    const expected = 3;

    // Create an instance of LoggerManager:
    const logger = new LoggerManager(prefix, activeConsole);

    // Trigger logs and create records:
    logger.info('Console info 001', {}, [], '...');
    logger.info('Console info 002', {}, [], '...');
    logger.info('Console info 003', {}, [], '...');

    // Get length the Loggers By INFO
    const result = logger.getLoggersByType(LoggerEnum.INFO).length;

    expect(result).toBe(expected);
  });
});
