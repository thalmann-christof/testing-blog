import { ExpoConfig } from "@expo/config";

const config: ExpoConfig = {
  name: "Tet Blog",
  slug: "test-blog",
  scheme: "test-blog",
  owner: "christofth",
  version: "0.1",
  extra: {
    eas: {
      projectId: "42778430-dcc8-4c5f-b31c-75a53b3a1bf9",
    },
  },
  android: {
    package: "com.testBlog.app",
  },
  ios: {
    bundleIdentifier: "com.testBlog.app",
  },
};

export default (): ExpoConfig => config;
