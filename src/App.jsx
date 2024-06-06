import React from "react";
import EffectExample from "./EffectExample";
import SubscriptionEffect from "./ManagingSubscriptions";
import PollingEffect from "./PollingEffect";
import DebouncingWithUseEffect from "./DebouncingWithUseEffect";
const App = () => {
  return (
    <div>
      <div>+++++PollingEffect+++++</div>
      <PollingEffect />

      <div>+++++++Managing Subscriptions++++++++</div>
      <SubscriptionEffect />

      <div>+++++++++++DebouncingWithUseEffect++++++++++</div>
      <DebouncingWithUseEffect />

      <div>+++++++exam+++++++++</div>
      <EffectExample />;

    </div>
  );
};

export default App;
