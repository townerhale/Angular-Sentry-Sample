import { Injectable, ErrorHandler} from '@angular/core'
import * as Sentry from '@sentry/browser'

@Injectable()
export class SentryErrorHandler implements ErrorHandler {

  constructor() {
    Sentry.init({
      dsn: "https://35690d1a5e804b6c9c83100666e4a068@o451112.ingest.sentry.io/5665690"
    })
  }
    handleError(error: any): void {
        Sentry.captureException(error.originalError || error)
    }

}