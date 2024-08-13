import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f5b741d239c83ae6e116cb9e033f9389@o4507767895293952.ingest.de.sentry.io/4507767898374224",

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    Sentry.replayIntegration({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
