/*
 * @Autor: QMZhao
 * @Date: 2023-07-18 17:55:07
 * @LastEditors:
 * @LastEditTime: 2023-07-19 14:37:58
 * @Description:
 * @FilePath: \servious-illness-admin\src\utils\exceptionless.ts
 */
import { Configuration } from '@exceptionless/core';
import { Exceptionless } from '@exceptionless/vue';

export function setExceptionless() {
  Exceptionless.startup((c: Configuration) => {
    c.useDebugLogger();
    c.apiKey = 'NpKeeajefMUJDZCzCmaCGd8l891iYifOyypHS1nf';
    c.serverUrl = 'http://192.168.2.68:5200';
    c.updateSettingsWhenIdleInterval = 15000;
    c.usePersistedQueueStorage = true;
    // Set the user id that is in our system and provide a friendly name.
    c.setUserIdentity('12345678', 'Blake');

    // set some default data
    c.defaultData['SampleUser'] = {
      id: 1,
      name: 'Blake',
      password: '123456',
      passwordResetToken: 'a reset token',
      myPasswordValue: '123456',
      myPassword: '123456',
      customValue: 'Password',
      value: {
        Password: '123456'
      }
    };

    c.defaultTags.push('Example', 'JavaScript', 'Vue');
  });
}
