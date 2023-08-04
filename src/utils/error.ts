/**
 * 自定义请求错误类
 */
export class ICUWebResError extends Error {
  constructor(...params: any) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ICUWebResError);
    }

    this.name = 'ICUWebResError';
  }
}

/**
 * 自定义页面框架内报错
 */
export class ICUWebDomError extends Error {
  constructor(...params: any) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ICUWebDomError);
    }

    this.name = 'ICUWebDomError';
  }
}
