// Instructions for use:
/*
import { LoggerEnum, LoggerManager } from '@lib/shared';

// Create an instance, values:
//  prefix: string;
//  activeConsole: boolean;
const logger = new LoggerManager('# logger: ', true);

// Trigger logs and create records.
logger.info('Console info 001', {}, [], '...');
logger.info('Console info 002', {}, [], '...');
logger.trace('Console trace 001', {}, [], '...');
logger.debug('Console debug 001', {}, [], '...');
logger.error('Console error 001', {}, [], '...');

console.log('Length Loggers', logger.getLoggers().length);
console.log('Length Loggers By INFO ', logger.getLoggersByType(LoggerEnum.INFO).length);
console.log('Length Loggers By ERROR ', logger.getLoggersByType(LoggerEnum.ERROR).length);

logger.getLoggers().map(function (item) {
  console.log('Map all Loggers', item);
  return item;
});

logger.getLoggersByType(LoggerEnum.ERROR).map(function (item) {
  console.log('Map all Loggers By ERROR', item);
  return item;
});
*/

export enum LoggerEnum {
  LOG,
  TRACE,
  DEBUG,
  INFO,
  WARN,
  ERROR,
}

export type LoggerType = {
  prefix: string;
  message: string;
  parameters: any;
  typeLogger: LoggerEnum;
};

export interface ILogger {
  log(message: string, ...parameters: any): void;
  trace(message: string, ...parameters: any): void;
  debug(message: string, ...parameters: any): void;
  info(message: string, ...parameters: any): void;
  warn(message: string, ...parameters: any): void;
  error(message: string, ...parameters: any): void;
}

export interface ILoggerManager extends ILogger {
  register(logger: LoggerType): void;
  getLoggers(): LoggerType[];
  getLoggersByType(typeLogger: LoggerEnum): LoggerType[];
}

export class LoggerManager implements ILoggerManager {
  private prefix: string;
  private activeConsole: boolean;
  private loggers: LoggerType[];

  constructor(prefix: string = '', activeConsole: boolean = true) {
    this.prefix = prefix;
    this.activeConsole = activeConsole;
    this.loggers = [];
  }

  public register(logger: LoggerType): void {
    this.loggers.push(logger);
    const finalMessage: string = `${logger.prefix}: ${logger.message}`;
    switch (logger.typeLogger) {
      case LoggerEnum.LOG:
        if (this.activeConsole) console.log(finalMessage, ...logger.parameters);
        break;
      case LoggerEnum.TRACE:
        if (this.activeConsole)
          console.trace(finalMessage, ...logger.parameters);
        break;
      case LoggerEnum.DEBUG:
        if (this.activeConsole)
          console.debug(finalMessage, ...logger.parameters);
        break;
      case LoggerEnum.INFO:
        if (this.activeConsole)
          console.info(finalMessage, ...logger.parameters);
        break;
      case LoggerEnum.WARN:
        if (this.activeConsole)
          console.warn(finalMessage, ...logger.parameters);
        break;
      case LoggerEnum.ERROR:
        if (this.activeConsole)
          console.error(finalMessage, ...logger.parameters);
        break;
      default:
        if (this.activeConsole) console.log(finalMessage, ...logger.parameters);
    }
  }

  public getLoggers(): LoggerType[] {
    return this.loggers;
  }

  public getLoggersByType(typeLogger: LoggerEnum): LoggerType[] {
    return this.loggers.filter(item => item.typeLogger == typeLogger);
  }

  public log(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.LOG,
    };
    this.register(logger);
  }

  public trace(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.TRACE,
    };
    this.register(logger);
  }

  public debug(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.DEBUG,
    };
    this.register(logger);
  }

  public info(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.INFO,
    };
    this.register(logger);
  }

  public warn(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.WARN,
    };
    this.register(logger);
  }

  public error(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.ERROR,
    };
    this.register(logger);
  }
}
