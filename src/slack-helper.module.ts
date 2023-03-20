import { Module } from '@nestjs/common';
import { SlackService } from 'nestjs-slack';
import { ConfigurableModuleClass } from './slack-helper.module-definition';

@Module({
  imports: [],
  controllers: [],
  providers: [SlackService],
  exports: [],
})
export class SlackHelperModule extends ConfigurableModuleClass {}
