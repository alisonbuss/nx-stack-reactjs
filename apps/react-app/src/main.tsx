import React from 'react';
import ReactDOM from 'react-dom';

import App from '@app/App';
import { LoggerManager } from '@lib/shared';
import { environment } from '@app/envs/environment';

const logger = new LoggerManager('# logger: ', !environment.production);

try {
  logger.info('Initialize the React application...');
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
} catch (error: unknown) {
  logger.error('React application initialization error:', error);
} finally {
  logger.info('React application initialization completed!');
}
