import {ApplicationInsights, ITelemetryItem} from '@microsoft/applicationinsights-web';
import {ReactPlugin} from '@microsoft/applicationinsights-react-js';



const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    connectionString: "InstrumentationKey=4dd5a844-84ac-4c2d-8104-ec74179b0d65;IngestionEndpoint=https://swedencentral-0.in.applicationinsights.azure.com/;ApplicationId=0c111652-c040-4815-9824-74f565de0224",
    extensions: [reactPlugin],
    enableAutoRouteTracking: true,
    disableAjaxTracking: false,
    autoTrackPageVisitTime: true,
    enableCorsCorrelation: true,
    enableRequestHeaderTracking: true,
    enableResponseHeaderTracking: true,
    correlationHeaderExcludedDomains: ["localhost", "http://localhost:5173/", "localhost:5173"],
  }
});
appInsights.loadAppInsights();

// appInsights.addTelemetryInitializer((env:ITelemetryItem) => {
//     env.tags = env.tags || [];
//     env.tags["ai.cloud.role"] = "testTag";
// });

export { reactPlugin, appInsights };