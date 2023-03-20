import { SlackChannelConfig } from './slack-channel-config';

export interface SlackHelperModuleOptions {
  appEnv: string;
  channels: SlackChannelConfig;
}
