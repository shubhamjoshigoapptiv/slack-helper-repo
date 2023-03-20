import { ConfigurableModuleBuilder } from '@nestjs/common';
import { SlackHelperModuleOptions } from './interfaces/slack-helper-module-interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<SlackHelperModuleOptions>()
    .setExtras(
      {
        isGlobal: true,
      },
      (definition, extras) => ({
        ...definition,
        global: extras.isGlobal,
      }),
    )
    .build();
