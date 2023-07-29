/*
 * @Autor: QMZhao
 * @Date: 2023-07-18 17:55:07
 * @LastEditTime: 2023-07-29 14:20:54
 * @Description: 错误信息上报
 */
import { Configuration } from '@exceptionless/core';
import { Exceptionless } from '@exceptionless/vue';

import { useExceptionless } from '/@/config/exceptionless';

/**
 * 错误上报基础信息
 */
export function setExceptionless() {
  const { userWorkNo, userName, apiKey, serverUrl } = useExceptionless();
  Exceptionless.startup((c: Configuration) => {
    // c.useDebugLogger();
    c.apiKey = apiKey;
    c.serverUrl = serverUrl;
    c.updateSettingsWhenIdleInterval = 15000;
    c.usePersistedQueueStorage = true;
    // Set the user id that is in our system and provide a friendly name.
    c.setUserIdentity(userWorkNo, userName);

    c.defaultTags.push('Example', 'JavaScript', 'Vue');
  });
}
